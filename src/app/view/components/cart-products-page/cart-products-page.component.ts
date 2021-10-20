import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/products';
import { APIService } from 'src/app/services/api-service.service';

@Component({
  selector: 'rg-cart-products-page',
  templateUrl: './cart-products-page.component.html',
  styleUrls: ['./cart-products-page.component.scss']
})
export class CartProductsPageComponent implements OnInit {

  public products: Product[] = [];

  constructor(
	  private router:Router,
	  private activatedRoute:ActivatedRoute,
	  private apiService: APIService
  ) { }

  ngOnInit(): void {
	this.activatedRoute.paramMap.subscribe((data)=>{
		this.apiService.getAllCategoryProducts(data.get('id')).subscribe((products:any)=>{
			this.products = products;
		});
	});
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
