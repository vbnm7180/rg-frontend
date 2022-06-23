import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { APIService } from 'src/app/services/api-service/api-service.service';
import { CartService } from 'src/app/services/cart-service/cart-service.service';
import { SpinnerService } from 'src/app/services/spinner-service/spinner.service';

import { Product } from 'src/app/models/products';
import { SORT_OPTIONS } from 'src/app/models/constants';
import { SortState } from 'src/app/models/sort-state';

@Component({
	selector: 'rg-products-page',
	templateUrl: './products-page.component.html',
	styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

	public products: Product[] = [];
	public sortKey: string;
	public sortOptions = SORT_OPTIONS;
	public sortState = new SortState();


	constructor(
		private activatedRoute: ActivatedRoute,
		private apiService: APIService,
		private cartService: CartService,
		private spinnerService: SpinnerService
	) { }

	ngOnInit(): void {
		this.spinnerService.showSpinner();
		this.activatedRoute.params.subscribe((data) => {
			this.apiService.getAllCategoryProducts(data.id).subscribe((response: any) => {
				this.products = response.data;
				this.spinnerService.hideSpinner();
			});
		});
	}

	public onSortChange(event) {
		switch (event.value) {
			case 'lowest price':
				Object.assign(this.sortState, {
					sortField: 'price',
					sortOrder: 1
				});
				break;
			case 'highest price':
				Object.assign(this.sortState, {
					sortField: 'price',
					sortOrder: -1
				});
				break;
			case 'alphabet':
				Object.assign(this.sortState, {
					sortField: 'name',
					sortOrder: 1
				});
				break;
		}
	}

	public addToCart(event: MouseEvent, product: Product) {
		event.stopPropagation();
		this.cartService.addProductToCart(product);
	}

	public isInCart(product: Product) {
		return this.cartService.isProductInCart(product);
	}

	public goToCart(event: MouseEvent) {
		event.stopPropagation();
	}
}
