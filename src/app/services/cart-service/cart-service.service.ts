import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public products: Product[] = [];

  constructor() {
    this.products = JSON.parse(localStorage.getItem('products') ||'[]');
    console.log(this.products)
   }

  getCartProducts() {
    return this.products;
  }

  addProductToCart(product:Product) {
    console.log(product)
    if (!this.isProductInCart(product)){
    this.products.push(product);
    this.syncProducts();
    }
    console.log(this.products)
    
  }

  deleteProductFromCart(product:Product) {
    this.products = this.products.filter((item)=>{
      item!==product;
    });
    this.syncProducts();
  }

  isProductInCart(product:Product) {
    //console.log(this.products)
    //console.log(product)
    return this.products.some((item)=>{
      console.log(JSON.stringify(item)) 
      console.log(JSON.stringify(product)) 
      return JSON.stringify(item) === JSON.stringify(product)
    });
  }

  syncProducts(){
    console.log((this.products))
    localStorage.setItem('products',JSON.stringify(this.products));
  }

  
}
