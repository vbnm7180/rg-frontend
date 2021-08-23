import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { InputTextModule } from 'primeng/inputtext';

import { CartFormPageComponent } from 'src/app/view/components/cart-form-page/cart-form-page.component';



@NgModule({
  declarations: [
    CartFormPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InputTextModule
  ],
  exports:[
    CartFormPageComponent
  ]
})
export class CartFormPageModule { }
