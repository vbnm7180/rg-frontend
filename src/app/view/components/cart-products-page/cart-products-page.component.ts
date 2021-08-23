import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'rg-cart-products-page',
  templateUrl: './cart-products-page.component.html',
  styleUrls: ['./cart-products-page.component.scss']
})
export class CartProductsPageComponent implements OnInit {

  public products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.products = [
			{
				id: '1',
				name: 'Sega Mega Drive (PAL) Серая в коробке',
				price: 200000,
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
			}
      ];
  }

}
