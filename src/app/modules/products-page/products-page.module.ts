import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DataViewModule } from 'primeng/dataview';

import { ProductsPageComponent } from 'src/app/view/components/products-page/products-page.component';

@NgModule({
  declarations: [
    ProductsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
	  DataViewModule
  ],
  exports:[
    ProductsPageComponent
  ]
})
export class ProductsPageModule { }
