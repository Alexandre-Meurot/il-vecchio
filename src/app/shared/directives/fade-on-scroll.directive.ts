import { Directive, Input } from '@angular/core';
import { ScrollEffectBase } from './scroll-effect.base';

/**
 * Fait passer l'opacité de `1` à `0` quand `scrollY` atteint
 * `viewportHeight × fadeDistance`. `fadeTranslateY` ajoute une translation
 * verticale en parallèle pour un effet de "lift away" plus visible.
 *
 * L'opacité reste active sous `prefers-reduced-motion` (le changement n'est
 * pas vestibulaire) ; seule la translation est désactivée.
 */
@Directive({
  selector: '[appFadeOnScroll]',
  standalone: true,
})
export class FadeOnScrollDirective extends ScrollEffectBase {
  @Input('appFadeOnScroll') fadeDistance = 0.4;
  @Input() fadeTranslateY = 0;

  private prefersReducedMotion = false;
  private lastProgress = NaN;

  protected override onActivate(): void {
    this.prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
  }

  protected update(scrollY: number): void {
    const progress = this.progressOverViewport(scrollY, this.fadeDistance);
    if (progress === this.lastProgress) return;
    this.lastProgress = progress;

    const el = this.el.nativeElement;
    el.style.opacity = String(Math.max(0, 1 - progress));

    if (this.fadeTranslateY !== 0 && !this.prefersReducedMotion) {
      el.style.transform = `translate3d(0, ${-progress * this.fadeTranslateY}px, 0)`;
    }
  }
}
