import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderModule } from './modules/header/header.module';
import { FooterModule } from './modules/footer/footer.module';
import { MainPageModule} from './modules/main-page/main-page.module';
import { ProductsPageModule } from './modules/products-page/products-page.module';
import { ProductsDetailPageModule }  from './modules/products-detail-page/products-detail-page.module';
import { CartProductsPageModule } from './modules/cart-products-page/cart-products-page.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    MainPageModule,
    ProductsPageModule,
    ProductsDetailPageModule,
    CartProductsPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
