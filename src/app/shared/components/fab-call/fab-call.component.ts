import { Component, HostListener, signal } from '@angular/core';
import { SITE_CONFIG } from '../../../core/config/site.config';

@Component({
  selector: 'app-fab-call',
  standalone: true,
  templateUrl: './fab-call.component.html',
  styleUrl: './fab-call.component.scss',
})
export class FabCallComponent {
  readonly phone = SITE_CONFIG.contact.phone;
  readonly phoneDisplay = SITE_CONFIG.contact.phoneDisplay;

  visible = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.visible.set(window.scrollY > 300);
  }
}
