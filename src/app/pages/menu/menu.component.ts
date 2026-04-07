import { Component, OnInit, inject } from '@angular/core';
import { TEXTS } from '../../core/content/texts';
import { MENU_DATA } from '../../core/config/menu.config';
import { SeoService } from '../../core/services/seo.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  private seo = inject(SeoService);

  readonly texts = TEXTS.menu;
  readonly seoTexts = TEXTS.seo;
  readonly categories = MENU_DATA;

  ngOnInit(): void {
    this.seo.updatePage(this.seoTexts.menuTitle, this.seoTexts.menuDescription);
    this.seo.setCanonicalUrl('/la-carte');
  }
}
