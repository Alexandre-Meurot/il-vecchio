import { Directive, Input } from '@angular/core';
import { ScrollEffectBase } from './scroll-effect.base';

/**
 * Réduit la luminosité via `filter: brightness()` quand `scrollY` atteint
 * `viewportHeight × darkenDistance`. Va de `1` à `minBrightness` (0 = noir).
 *
 * `filter: brightness()` n'est pas un mouvement vestibulaire — l'effet reste
 * actif sous `prefers-reduced-motion`.
 */
@Directive({
  selector: '[appDarkenOnScroll]',
  standalone: true,
})
export class DarkenOnScrollDirective extends ScrollEffectBase {
  @Input('appDarkenOnScroll') darkenDistance = 0.6;
  @Input() minBrightness = 0.35;

  private lastProgress = NaN;

  protected update(scrollY: number): void {
    const progress = this.progressOverViewport(scrollY, this.darkenDistance);
    if (progress === this.lastProgress) return;
    this.lastProgress = progress;
    const brightness = 1 - progress * (1 - this.minBrightness);
    this.el.nativeElement.style.filter = `brightness(${brightness})`;
  }
}
