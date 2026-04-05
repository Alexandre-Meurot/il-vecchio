import { Component, OnInit, inject } from '@angular/core';
import { TEXTS } from '../../core/content/texts';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  private seo = inject(SeoService);

  readonly texts = TEXTS.about;
  readonly seoTexts = TEXTS.seo;

  ngOnInit(): void {
    this.seo.updatePage(this.seoTexts.aboutTitle, this.seoTexts.aboutDescription);
    this.seo.setCanonicalUrl('/notre-histoire');
  }
}
