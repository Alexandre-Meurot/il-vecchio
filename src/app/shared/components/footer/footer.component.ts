import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TEXTS } from '../../../core/content/texts';
import { SITE_CONFIG } from '../../../core/config/site.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly texts = TEXTS.footer;
  readonly nav = TEXTS.nav;
  readonly config = SITE_CONFIG;
  readonly year = new Date().getFullYear();

  get copyright(): string {
    return this.texts.copyright.replace('{year}', String(this.year));
  }
}
