import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TEXTS } from '../../../core/content/texts';
import { SITE_CONFIG } from '../../../core/config/site.config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly texts = TEXTS.nav;
  readonly siteName = SITE_CONFIG.name;
  readonly phone = SITE_CONFIG.contact.phone;
  readonly phoneDisplay = SITE_CONFIG.contact.phoneDisplay;

  menuOpen = signal(false);
  scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 50);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
