import { Component, OnInit, inject } from '@angular/core';
import { TEXTS } from '../../core/content/texts';
import { SITE_CONFIG } from '../../core/config/site.config';
import { SeoService } from '../../core/services/seo.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-bar-terrace',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './bar-terrace.component.html',
  styleUrl: './bar-terrace.component.scss',
})
export class BarTerraceComponent implements OnInit {
  private seo = inject(SeoService);

  readonly texts = TEXTS.barTerrace;
  readonly seoTexts = TEXTS.seo;
  readonly phone = SITE_CONFIG.contact.phone;
  readonly phoneDisplay = SITE_CONFIG.contact.phoneDisplay;

  ngOnInit(): void {
    this.seo.updatePage(
      this.seoTexts.barTerraceTitle,
      this.seoTexts.barTerraceDescription,
    );
    this.seo.setCanonicalUrl('/bar-terrasse');
  }
}
