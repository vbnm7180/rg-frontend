import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/app/services/api-service/api-service.service';
import { CartService } from 'src/app/services/cart-service/cart-service.service';
import { SpinnerService } from 'src/app/services/spinner-service/spinner.service';

@Component({
  selector: 'rg-products-detail-page',
  templateUrl: './products-detail-page.component.html',
  styleUrls: ['./products-detail-page.component.scss']
})
export class ProductsDetailPageComponent implements OnInit {

  public product: Product = new Product({});

  constructor(
    private router: Router,
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

  addToCart(event: MouseEvent, product: Product) {
    console.log(product)
    this.cartService.addProductToCart(this.product);
  }

  isInCart(product: Product) {
    return this.cartService.isProductInCart(this.product);
  }

  goToCart(event: MouseEvent) {
  }
}
