import {
  Directive,
  ElementRef,
  NgZone,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Squelette commun aux directives qui réagissent au scroll vertical
 * (parallax, fade, darken…).
 *
 * Une sous-classe n'a qu'à implémenter `update(scrollY, viewportHeight)`.
 * La base s'occupe de :
 * - SSR-safe (no-op côté serveur)
 * - `IntersectionObserver` pour ne calculer que si l'élément est visible
 * - Listener scroll/resize hors zone Angular (zéro change detection)
 * - Synchronisation `requestAnimationFrame` (un seul update par frame)
 * - Cache de `window.innerHeight` (mis à jour sur resize uniquement)
 * - Cleanup propre dans `ngOnDestroy`
 */
@Directive()
export abstract class ScrollEffectBase implements OnInit, OnDestroy {
  protected el = inject<ElementRef<HTMLElement>>(ElementRef);
  protected platformId = inject(PLATFORM_ID);
  private zone = inject(NgZone);

  private rafId = 0;
  private observer: IntersectionObserver | null = null;
  private isVisible = false;
  private viewportHeight = 0;

  /** Override pour des préconditions supplémentaires (ex : `prefers-reduced-motion`). */
  protected shouldActivate(): boolean {
    return true;
  }

  /** Hook optionnel exécuté juste après les préconditions. */
  protected onActivate(): void {}

  /** Notifie quand l'élément entre/sort du viewport (hors marge de l'observer). */
  protected onVisibilityChange(_visible: boolean): void {}

  /** Calcule et applique l'effet pour le `scrollY` courant. Appelée dans la RAF. */
  protected abstract update(scrollY: number, viewportHeight: number): void;

  /** Renvoie un progress clampé [0, 1] sur une fraction de la hauteur du viewport. */
  protected progressOverViewport(scrollY: number, fraction: number): number {
    const distance = this.viewportHeight * fraction;
    return distance > 0 ? Math.min(1, scrollY / distance) : 1;
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId) || !this.shouldActivate()) return;

    this.viewportHeight = window.innerHeight;
    this.onActivate();

    this.observer = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = this.isVisible;
        this.isVisible = entry.isIntersecting;
        if (wasVisible !== this.isVisible) this.onVisibilityChange(this.isVisible);
        if (this.isVisible) this.scheduleUpdate();
      },
      { rootMargin: '50% 0px' },
    );
    this.observer.observe(this.el.nativeElement);

    this.zone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.onScroll, { passive: true });
      window.addEventListener('resize', this.onResize, { passive: true });
      this.scheduleUpdate();
    });
  }

  private onScroll = (): void => {
    if (this.isVisible) this.scheduleUpdate();
  };

  private onResize = (): void => {
    this.viewportHeight = window.innerHeight;
    if (this.isVisible) this.scheduleUpdate();
  };

  private scheduleUpdate(): void {
    if (this.rafId !== 0) return;
    this.rafId = requestAnimationFrame(() => {
      this.rafId = 0;
      this.update(window.scrollY, this.viewportHeight);
    });
  }

  ngOnDestroy(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (this.rafId !== 0) cancelAnimationFrame(this.rafId);
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
    this.observer?.disconnect();
  }
}
