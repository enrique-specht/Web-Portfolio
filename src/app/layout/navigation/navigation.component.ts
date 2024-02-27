import { Component } from '@angular/core';
import { LanguageSwitchComponent } from '../../feature/language-switch/language-switch.component';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  imports: [CommonModule, LanguageSwitchComponent, TranslateModule],
})
export class NavigationComponent {
  protected links = environment.links;
  protected copyrightYear = new Date().getFullYear();
  protected navbarOpen;

  constructor() {
    //open navbar initially if width > 576px (>xs-breakpoint in bootstrap)
    this.navbarOpen = window.innerWidth > 576;
  }
}
