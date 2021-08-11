import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';


@Component({
	selector: 'app-products-page',
	templateUrl: './products-page.component.html',
	styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

	public products: Product[] = [];

	constructor() { }

	ngOnInit(): void {
		this.products = [
			{
				id: '1',
				name: 'Sega Mega Drive 1',
				price: '2000 рублей',
				imagePath: '/test1',
				categoryID: '1',
				description: 'test desc',
				attributes: [{
					name: 'Регион',
					value: 'PAL'
				},
				{
					name: 'Состояние',
					value: '4'
				},
				{
					name: 'Комплект',
					value: 'Полный'
				}]
			},
			{
				id: '2',
				name: 'Sega Mega Drive 2',
				price: '3000 рублей',
				imagePath: '/test2',
				categoryID: '1',
				description: 'test desc',
				attributes: [{
					name: 'Регион',
					value: 'PAL'
				},
				{
					name: 'Состояние',
					value: '5'
				},
				{
					name: 'Комплект',
					value: 'Полный'
				}]
			},
			{
				id: '1',
				name: 'Sega Mega Drive 3',
				price: '4000 рублей',
				imagePath: '/test3',
				categoryID: '1',
				description: 'test desc',
				attributes: [{
					name: 'Регион',
					value: 'PAL'
				},
				{
					name: 'Состояние',
					value: '3'
				},
				{
					name: 'Комплект',
					value: 'Неполный'
				}]

	        }
		];
	}


}
