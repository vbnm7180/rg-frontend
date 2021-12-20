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

import { APIService } from './services/api-service/api-service.service';
import { CartService } from './services/cart-service/cart-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { XsrfInterceptor } from './interceptors/xsrf.interceptor';
import { CookieModule, CookieService } from 'ngx-cookie';
import { SpinnerModule } from './modules/spinner/spinner.module';
import { SpinnerService } from './services/spinner-service/spinner.service';
import { PopupModule } from './modules/popup/popup.module';
import { PopupService } from './services/popup-service/popup.service';
//import { PasswordConformationValidatorDirective } from './password-conformation-validator.directive';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    SpinnerModule,
    MainPageModule,
    ProductsPageModule,
    ProductsDetailPageModule,
    CartProductsPageModule,
    CartFormPageModule,
    LoginPageModule,
    RegistrationPageModule,
    AccountPageModule,
    AboutPageModule,
    DeliveryPageModule,
    FormsModule,
    ReactiveFormsModule,
    PopupModule,
    CookieModule.forRoot()
  ],
  providers: [
    APIService,
    CartService,
    CookieService,
    SpinnerService,
    PopupService,
    { provide: HTTP_INTERCEPTORS, useClass: XsrfInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
