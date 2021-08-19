import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CartProductsPageComponent } from 'src/app/view/components/cart-products-page/cart-products-page.component';



@NgModule({
  declarations: [
    CartProductsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    CartProductsPageComponent
  ]
})
export class CartProductsPageModule { }
