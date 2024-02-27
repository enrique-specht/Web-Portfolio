import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterModule, LayoutComponent],
})
export class AppComponent {
  constructor(private translateService: TranslateService) {
    this.initialzeTranslations();
  }

  initialzeTranslations() {
    this.translateService.setDefaultLang('de');
    this.translateService.use('de');
  }
}
