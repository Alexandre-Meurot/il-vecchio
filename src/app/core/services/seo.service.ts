import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { SITE_CONFIG } from '../config/site.config';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private document = inject(DOCUMENT);

  /**
   * Met à jour le titre et la description de la page (title + meta description
   * + Open Graph + Twitter Cards).
   */
  updatePage(pageTitle: string, description: string): void {
    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });
  }

  /**
   * Met à jour l'URL canonique de la page (balise `<link rel="canonical">`)
   * ainsi que la propriété Open Graph `og:url`.
   * @param path Chemin commençant par `/` (ex: `/la-carte`).
   */
  setCanonicalUrl(path: string): void {
    const url = `${SITE_CONFIG.url}${path}`;

    // Open Graph
    this.meta.updateTag({ property: 'og:url', content: url });

    // <link rel="canonical">
    let link: HTMLLinkElement | null = this.document.querySelector(
      'link[rel="canonical"]',
    );
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
