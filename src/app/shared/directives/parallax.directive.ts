import { Directive, Input } from '@angular/core';
import { ScrollEffectBase } from './scroll-effect.base';

/**
 * Translate l'élément en `translate3d(0, scrollY × speed, 0)` au scroll.
 * `speed` typique : 0.1 à 0.3 (0 = naturel, 1 = élément fixé).
 *
 * Le suivi est synchronisé directement sur `scrollY` (pas d'interpolation
 * différée) pour éviter tout effet de rebond après un arrêt du scroll.
 *
 * Désactivé sous `prefers-reduced-motion` (effet purement vestibulaire).
 */
@Directive({
  selector: '[appParallax]',
  standalone: true,
})
export class ParallaxDirective extends ScrollEffectBase {
  @Input('appParallax') speed = 0.2;

  private lastY = NaN;

  protected override shouldActivate(): boolean {
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /** Promotion GPU uniquement quand visible — libère la mémoire ailleurs. */
  protected override onVisibilityChange(visible: boolean): void {
    this.el.nativeElement.style.willChange = visible ? 'transform' : '';
  }

  protected update(scrollY: number): void {
    const y = scrollY * this.speed;
    if (y === this.lastY) return;
    this.lastY = y;
    this.el.nativeElement.style.transform = `translate3d(0, ${y}px, 0)`;
  }
}
