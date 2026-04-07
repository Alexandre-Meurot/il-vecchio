import { Component, OnInit, inject } from '@angular/core';
import { TEXTS } from '../../core/content/texts';
import { SITE_CONFIG } from '../../core/config/site.config';
import { SeoService } from '../../core/services/seo.service';
import { SafeUrlPipe } from '../../shared/pipes/safe-url.pipe';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SafeUrlPipe, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  private seo = inject(SeoService);

  readonly texts = TEXTS.contact;
  readonly seoTexts = TEXTS.seo;
  readonly config = SITE_CONFIG;

  get mapsUrl(): string {
    const { lat, lng } = this.config.contact.coordinates;
    return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  }

  get mapsEmbedUrl(): string {
    const addr = encodeURIComponent(
      `${this.config.contact.address.street}, ${this.config.contact.address.postalCode} ${this.config.contact.address.city}`
    );
    return `https://www.google.com/maps?q=${addr}&output=embed`;
  }

  ngOnInit(): void {
    this.seo.updatePage(this.seoTexts.contactTitle, this.seoTexts.contactDescription);
    this.seo.setCanonicalUrl('/contact');
  }
}
