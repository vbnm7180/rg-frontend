import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderModule } from './modules/header/header.module';
import { FooterModule } from './modules/footer/footer.module';
import { MainPageModule} from './modules/main-page/main-page.module';
import { ProductsPageModule } from './modules/products-page/products-page.module';
import { ProductsDetailPageModule }  from './modules/products-detail-page/products-detail-page.module';
import { CartProductsPageModule } from './modules/cart-products-page/cart-products-page.module';
import { CartFormPageModule } from './modules/cart-form-page/cart-form-page.module';
import { LoginPageModule } from './modules/login-page/login-page.module';
import { RegistrationPageModule } from './modules/registration-page/registration-page.module';
import { AccountPageModule } from './modules/account-page/account-page.module';
import { AboutPageModule } from './modules/about-page/about-page.module';
import { DeliveryPageModule } from './modules/delivery-page/delivery-page.module';

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
    CartProductsPageModule,
    CartFormPageModule,
    LoginPageModule,
    RegistrationPageModule,
    AccountPageModule,
    AboutPageModule,
    DeliveryPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
