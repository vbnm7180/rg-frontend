import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public products: Product[] = [];

  constructor() { }

  getCartProducts() {
    return this.products;
  }

  addProductToCart(product:Product) {
    this.products.push(product);
  }

  deleteProductFromCart(product:Product) {
    this.products = this.products.filter((item)=>{
      item!==product;
    });
  }

  
}
