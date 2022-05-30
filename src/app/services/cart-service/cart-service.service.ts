import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public products: Product[] = [];

  constructor() {
    this.products = JSON.parse(localStorage.getItem('products') || '[]');
  }

  getCartProducts() {
    return this.products;
  }

  getCartPrice() {
    let cartPrice: number = 0;
    this.products.forEach((product) => {
      cartPrice = cartPrice + product.price;
    });
    return cartPrice;
  }

  addProductToCart(product: Product) {
    if (!this.isProductInCart(product)) {
      this.products.push(product);
      this.syncProducts();
    }
  }

  deleteProductFromCart(product: Product) {
    this.products = this.products.filter((item) => {
      return JSON.stringify(item) !== JSON.stringify(product)
    });
    this.syncProducts();
  }

  emptyCart() {
    this.products = [];
    this.syncProducts();
  }

  isProductInCart(product: Product) {
    return this.products.some((item) => {
      return JSON.stringify(item) === JSON.stringify(product)
    });
  }

  syncProducts() {
    localStorage.setItem('products', JSON.stringify(this.products));
  }
}
