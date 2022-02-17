import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/products';
import { APIService } from 'src/app/services/api-service/api-service.service';
import { CartService } from 'src/app/services/cart-service/cart-service.service';
import { SpinnerService } from 'src/app/services/spinner-service/spinner.service';


@Component({
	selector: 'rg-products-page',
	templateUrl: './products-page.component.html',
	styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

	public sortKey: string;
	public sortField: string;
	public sortOrder: number;
	public products: Product[] = [];
	public sortOptions = [];

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
			this.apiService.getAllCategoryProducts(data.id).subscribe((response: any) => {
				this.products = response.data;
				this.spinnerService.hideSpinner();
			});
		});

		this.sortOptions = [
			{ label: 'Цена по возрастанию', value: 'lowest price' },
			{ label: 'Цена по убыванию', value: 'highest price' },
			{ label: 'По алфавиту', value: 'alphabet' }
		];
	}

	onSortChange(event) {

		switch (event.value) {
			case 'lowest price':
				this.sortOrder = 1;
				this.sortField = 'price';
				break;
			case 'highest price':
				this.sortOrder = -1;
				this.sortField = 'price';
				break;
			case 'alphabet':
				this.sortOrder = 1;
				this.sortField = 'name';
				break;
		}
	}

	addToCart(event: MouseEvent, product: Product) {
		event.stopPropagation();
		this.cartService.addProductToCart(product);
	}

	isInCart(product: Product) {
		return this.cartService.isProductInCart(product);
	}

	goToCart(event: MouseEvent) {
		event.stopPropagation();
	}
}
