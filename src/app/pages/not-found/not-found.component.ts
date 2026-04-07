import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TEXTS } from '../../core/content/texts';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent implements OnInit {
  private seo = inject(SeoService);
  readonly texts = TEXTS.notFound;

  ngOnInit(): void {
    this.seo.updatePage('Page introuvable | Il Vecchio', 'La page demandée n\'existe pas.');
  }
}
