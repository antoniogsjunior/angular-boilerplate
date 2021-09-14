import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { I18N_ENGLISH } from './i18n/en';
import { I18N_PTBR } from './i18n/ptBr';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  themeColor: 'primary' | 'accent' | 'warn' = 'primary';
  isDark = false;
  constructor(private overlayContainer: OverlayContainer, private translateService: TranslateService) {
    translateService.setTranslation('ptBr', I18N_PTBR);
    translateService.setTranslation('en', I18N_ENGLISH);
    translateService.setDefaultLang('ptBr');
    translateService.use(translateService.getBrowserLang());
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    if (this.isDark) {
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
    } else {
      this.overlayContainer.getContainerElement().classList.remove('dark-theme');
    }
  }

  setLa(value: string) {
    this.translateService.use(value);
  }
}
