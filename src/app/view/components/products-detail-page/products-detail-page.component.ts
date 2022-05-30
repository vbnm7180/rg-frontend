import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { APIService } from 'src/app/services/api-service/api-service.service';
import { CartService } from 'src/app/services/cart-service/cart-service.service';
import { SpinnerService } from 'src/app/services/spinner-service/spinner.service';

import { Product } from 'src/app/models/products';

@Component({
  selector: 'rg-products-detail-page',
  templateUrl: './products-detail-page.component.html',
  styleUrls: ['./products-detail-page.component.scss']
})
export class ProductsDetailPageComponent implements OnInit {

  public product: Product = new Product({});

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: APIService,
    private cartService: CartService,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit(): void {
    this.spinnerService.showSpinner();

    this.activatedRoute.params.subscribe((data) => {
      this.apiService.getProduct(data.id).subscribe((response: any) => {
        this.product = new Product(response.data);
        this.spinnerService.hideSpinner();
      });
    });
  }

  public addToCart() {
    this.cartService.addProductToCart(this.product);
  }

  public isInCart() {
    return this.cartService.isProductInCart(this.product);
  }
}
