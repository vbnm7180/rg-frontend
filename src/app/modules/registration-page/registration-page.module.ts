import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { InputTextModule } from 'primeng/inputtext';

import { RegistrationPageComponent } from 'src/app/view/components/registration-page/registration-page.component';
import { PopupModule } from '../popup/popup.module';



@NgModule({
  declarations: [
    RegistrationPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PopupModule,
    InputTextModule
  ],
  exports:[
    RegistrationPageComponent
  ]
})
export class RegistrationPageModule { }
