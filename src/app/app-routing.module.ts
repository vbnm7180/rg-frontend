import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutPageComponent } from './view/components/about-page/about-page.component';
import { AccountPageComponent } from './view/components/account-page/account-page.component';
import { CartFormPageComponent } from './view/components/cart-form-page/cart-form-page.component';
import { CartProductsPageComponent } from './view/components/cart-products-page/cart-products-page.component';
import { DeliveryPageComponent } from './view/components/delivery-page/delivery-page.component';
import { LoginPageComponent } from './view/components/login-page/login-page.component';
import { MainPageComponent } from './view/components/main-page/main-page.component';
import { ProductsPageComponent } from './view/components/products-page/products-page.component';
import { RegistrationPageComponent } from './view/components/registration-page/registration-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'games/:category',
    component: ProductsPageComponent
  },
  {
    path: 'consoles/:category',
    component: ProductsPageComponent
  },
  {
    path: 'delivery',
    component: DeliveryPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegistrationPageComponent
  },
  {
    path: 'account',
    component: AccountPageComponent
  },
  {
    path: 'cart',
    component: CartProductsPageComponent
  },
  {
    path: 'checkout',
    component: CartFormPageComponent
  },
  {
    path: '**',
    component: MainPageComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
