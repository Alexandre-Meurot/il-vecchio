import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FabCallComponent } from './shared/components/fab-call/fab-call.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FabCallComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
