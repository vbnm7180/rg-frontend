import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ProductsDetailPageComponent } from 'src/app/view/components/products-detail-page/products-detail-page.component';

@NgModule({
  declarations: [
    ProductsDetailPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductsDetailPageComponent
  ]
})
export class ProductsDetailPageModule { }
