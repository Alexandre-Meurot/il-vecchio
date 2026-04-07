import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { TEXTS } from '../../core/content/texts';
import { SITE_CONFIG } from '../../core/config/site.config';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RevealDirective],
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
