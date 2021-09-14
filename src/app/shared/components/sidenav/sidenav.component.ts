// src\app\shared\components\sidenav\sidenav.component.ts

import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  themeColor: 'primary' | 'accent' | 'warn' = 'primary';
  isDark = false;
  constructor(private overlayContainer: OverlayContainer) {}

  toggleTheme(): void {
    this.isDark = !this.isDark;
    if (this.isDark) {
      this.overlayContainer.getContainerElement().classList.add('theme-alternate');
    } else {
      this.overlayContainer.getContainerElement().classList.remove('theme-alternate');
    }
  }
}
