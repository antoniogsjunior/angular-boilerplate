import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './layouts/app/app.component';
import { BaseComponent } from './layouts/base/base.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { Intercept } from './shared/http/intercept';
import { darkTheme } from './theme/dark-theme';
import { lightTheme } from './theme/light-theme';
import { ThemeModule } from './theme/theme.module';

@NgModule({
  declarations: [AppComponent, BaseComponent, DashboardComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot(),
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'light'
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Intercept,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
