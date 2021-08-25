import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { InputTextModule } from 'primeng/inputtext';

import { DeliveryPageComponent } from 'src/app/view/components/delivery-page/delivery-page.component';



@NgModule({
  declarations: [
    DeliveryPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InputTextModule
  ],
  exports:[
    DeliveryPageComponent
  ]
})
export class DeliveryPageModule { }
