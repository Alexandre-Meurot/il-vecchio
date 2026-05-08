import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { ParallaxDirective } from '../../shared/directives/parallax.directive';
import { FadeOnScrollDirective } from '../../shared/directives/fade-on-scroll.directive';
import { DarkenOnScrollDirective } from '../../shared/directives/darken-on-scroll.directive';
import { TEXTS } from '../../core/content/texts';
import { SITE_CONFIG } from '../../core/config/site.config';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    RevealDirective,
    ParallaxDirective,
    FadeOnScrollDirective,
    DarkenOnScrollDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private seo = inject(SeoService);

  readonly texts = TEXTS.home;
  readonly seoTexts = TEXTS.seo;
  readonly phone = SITE_CONFIG.contact.phone;
  readonly phoneDisplay = SITE_CONFIG.contact.phoneDisplay;

  ngOnInit(): void {
    this.seo.updatePage(this.seoTexts.homeTitle, this.seoTexts.homeDescription);
    this.seo.setCanonicalUrl('/');
  }
}
