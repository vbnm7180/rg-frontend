import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { InputTextModule } from 'primeng/inputtext';

import { LoginPageComponent } from 'src/app/view/components/login-page/login-page.component';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InputTextModule
  ],
  exports: [
    LoginPageComponent
  ]
})
export class LoginPageModule { }
