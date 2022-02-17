import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart-service/cart-service.service';

@Component({
  selector: 'rg-cart-products-page',
  templateUrl: './cart-products-page.component.html',
  styleUrls: ['./cart-products-page.component.scss']
})
export class CartProductsPageComponent implements OnInit {

  public products: Product[] = [];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts() {
    this.products = this.cartService.getCartProducts();
  }

  getCartPrice() {
    return this.cartService.getCartPrice();
  }

  deleteFromCart(product) {
    this.cartService.deleteProductFromCart(product);
    this.getCartProducts();
  }
}
