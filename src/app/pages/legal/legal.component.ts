import { Component, OnInit, inject } from '@angular/core';
import { TEXTS } from '../../core/content/texts';
import { SITE_CONFIG } from '../../core/config/site.config';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-legal',
  standalone: true,
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.scss',
})
export class LegalComponent implements OnInit {
  private seo = inject(SeoService);

  readonly texts = TEXTS.legal;
  readonly seoTexts = TEXTS.seo;
  readonly config = SITE_CONFIG;

  ngOnInit(): void {
    this.seo.updatePage(this.seoTexts.legalTitle, this.seoTexts.legalDescription);
    this.seo.setCanonicalUrl('/mentions-legales');
  }
}
