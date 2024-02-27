import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switch',
  standalone: true,
  templateUrl: './language-switch.component.html',
  styleUrl: './language-switch.component.scss',
  imports: [TranslateModule],
})
export class LanguageSwitchComponent {
  constructor(protected translateService: TranslateService) {}

  setLanguage(lang: 'en' | 'de') {
    this.translateService.use(lang);
  }
}
