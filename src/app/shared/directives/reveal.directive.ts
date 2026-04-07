import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;

  /** Animation : 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom' | 'fade' */
  @Input('appReveal') animation = 'fade-up';

  /** Délai en ms avant le déclenchement */
  @Input() revealDelay = 0;

  /** Durée de l'animation en ms */
  @Input() revealDuration = 700;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const element = this.el.nativeElement as HTMLElement;
    element.classList.add('reveal', `reveal--${this.animation}`);
    element.style.transitionDelay = `${this.revealDelay}ms`;
    element.style.transitionDuration = `${this.revealDuration}ms`;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
