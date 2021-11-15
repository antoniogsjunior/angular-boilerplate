import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from '../../shared/components/button/button.module';
import { AuthRoutingModule } from './auth.routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, ButtonModule],
  declarations: [LoginComponent]
})
export class AuthModule {}
