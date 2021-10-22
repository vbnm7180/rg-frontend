import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/products';
import { APIService } from 'src/app/services/api-service/api-service.service';


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
		private router:Router,
		private activatedRoute:ActivatedRoute,
		private apiService:APIService
	) { }

	ngOnInit(): void {
		this.activatedRoute.params.subscribe((data)=>{
			this.apiService.getAllCategoryProducts(data.id).subscribe((products:any)=>{
				console.log(products)
				this.products=products.data;
			});
		});

		// this.products = [
		// 	{
		// 		id: '1',
		// 		name: 'Sega Mega Drive (PAL) Серая в коробке',
		// 		price: 200000,
		// 		imagePath: '/test1',
		// 		categoryID: '1',
		// 		description: 'test desc',
		// 		attributes: [{
		// 			name: 'Регион',
		// 			value: 'PAL'
		// 		},
		// 		{
		// 			name: 'Состояние',
		// 			value: '4'
		// 		},
		// 		{
		// 			name: 'Комплект',
		// 			value: 'Полный'
		// 		}]
		// 	},
		// 	{
		// 		id: '2',
		// 		name: 'Sega Mega Drive 2',
		// 		price: 3000,
		// 		imagePath: '/test2',
		// 		categoryID: '1',
		// 		description: 'test desc',
		// 		attributes: [{
		// 			name: 'Регион',
		// 			value: 'PAL'
		// 		},
		// 		{
		// 			name: 'Состояние',
		// 			value: '5'
		// 		},
		// 		{
		// 			name: 'Комплект',
		// 			value: 'Полный'
		// 		}]
		// 	},
		// 	{
		// 		id: '1',
		// 		name: 'Sega Mega Drive 3',
		// 		price: 4000,
		// 		imagePath: '/test3',
		// 		categoryID: '1',
		// 		description: 'test desc',
		// 		attributes: [{
		// 			name: 'Регион',
		// 			value: 'PAL'
		// 		},
		// 		{
		// 			name: 'Состояние',
		// 			value: '3'
		// 		},
		// 		{
		// 			name: 'Комплект',
		// 			value: 'Неполный'
		// 		}]

	    //     },
		// 	{
		// 		id: '1',
		// 		name: 'Sega Mega Drive 3',
		// 		price: 4000,
		// 		imagePath: '/test3',
		// 		categoryID: '1',
		// 		description: 'test desc',
		// 		attributes: [{
		// 			name: 'Регион',
		// 			value: 'PAL'
		// 		},
		// 		{
		// 			name: 'Состояние',
		// 			value: '3'
		// 		},
		// 		{
		// 			name: 'Комплект',
		// 			value: 'Неполный'
		// 		}]

	    //     },
		// 	{
		// 		id: '1',
		// 		name: 'Sega Mega Drive 3',
		// 		price: 4000,
		// 		imagePath: '/test3',
		// 		categoryID: '1',
		// 		description: 'test desc',
		// 		attributes: [{
		// 			name: 'Регион',
		// 			value: 'PAL'
		// 		},
		// 		{
		// 			name: 'Состояние',
		// 			value: '3'
		// 		},
		// 		{
		// 			name: 'Комплект',
		// 			value: 'Неполный'
		// 		}]

	    //     },
		// 	{
		// 		id: '1',
		// 		name: 'Sega Mega Drive 3',
		// 		price: 4000,
		// 		imagePath: '/test3',
		// 		categoryID: '1',
		// 		description: 'test desc',
		// 		attributes: [{
		// 			name: 'Регион',
		// 			value: 'PAL'
		// 		},
		// 		{
		// 			name: 'Состояние',
		// 			value: '3'
		// 		},
		// 		{
		// 			name: 'Комплект',
		// 			value: 'Неполный'
		// 		}]

	    //     },
		// 	{
		// 		id: '1',
		// 		name: 'Sega Mega Drive 3',
		// 		price: 5000,
		// 		imagePath: '/test3',
		// 		categoryID: '1',
		// 		description: 'test desc',
		// 		attributes: [{
		// 			name: 'Регион',
		// 			value: 'PAL'
		// 		},
		// 		{
		// 			name: 'Состояние',
		// 			value: '3'
		// 		},
		// 		{
		// 			name: 'Комплект',
		// 			value: 'Неполный'
		// 		}]

	    //     },
		// 	{
		// 		id: '1',
		// 		name: 'Sega Mega Drive 3',
		// 		price: 6000,
		// 		imagePath: '/test3',
		// 		categoryID: '1',
		// 		description: 'test desc',
		// 		attributes: [{
		// 			name: 'Регион',
		// 			value: 'PAL'
		// 		},
		// 		{
		// 			name: 'Состояние',
		// 			value: '3'
		// 		},
		// 		{
		// 			name: 'Комплект',
		// 			value: 'Неполный'
		// 		}]

	    //     },
		// 	{
		// 		id: '1',
		// 		name: 'Sega Mega Drive 3',
		// 		price: 20000,
		// 		imagePath: '/test3',
		// 		categoryID: '1',
		// 		description: 'test desc',
		// 		attributes: [{
		// 			name: 'Регион',
		// 			value: 'PAL'
		// 		},
		// 		{
		// 			name: 'Состояние',
		// 			value: '3'
		// 		},
		// 		{
		// 			name: 'Комплект',
		// 			value: 'Неполный'
		// 		}]

	    //     },
		// 	{
		// 		id: '1',
		// 		name: 'Sega Mega Drive 3',
		// 		price: 10000,
		// 		imagePath: '/test3',
		// 		categoryID: '1',
		// 		description: 'test desc',
		// 		attributes: [{
		// 			name: 'Регион',
		// 			value: 'PAL'
		// 		},
		// 		{
		// 			name: 'Состояние',
		// 			value: '3'
		// 		},
		// 		{
		// 			name: 'Комплект',
		// 			value: 'Неполный'
		// 		}]

	    //     },
		// 	{
		// 		id: '1',
		// 		name: 'Sega Mega Drive 3',
		// 		price: 11100,
		// 		imagePath: '/test3',
		// 		categoryID: '1',
		// 		description: 'test desc',
		// 		attributes: [{
		// 			name: 'Регион',
		// 			value: 'PAL'
		// 		},
		// 		{
		// 			name: 'Состояние',
		// 			value: '3'
		// 		},
		// 		{
		// 			name: 'Комплект',
		// 			value: 'Неполный'
		// 		}]

	    //     },
		// 	{
		// 		id: '1',
		// 		name: 'Sega Mega Drive 3',
		// 		price: 1200,
		// 		imagePath: '/test3',
		// 		categoryID: '1',
		// 		description: 'test desc',
		// 		attributes: [{
		// 			name: 'Регион',
		// 			value: 'PAL'
		// 		},
		// 		{
		// 			name: 'Состояние',
		// 			value: '3'
		// 		},
		// 		{
		// 			name: 'Комплект',
		// 			value: 'Неполный'
		// 		}]

	    //     },
		// 	{
		// 		id: '1',
		// 		name: 'Sega Mega Drive 3',
		// 		price: 400,
		// 		imagePath: '/test3',
		// 		categoryID: '1',
		// 		description: 'test desc',
		// 		attributes: [{
		// 			name: 'Регион',
		// 			value: 'PAL'
		// 		},
		// 		{
		// 			name: 'Состояние',
		// 			value: '3'
		// 		},
		// 		{
		// 			name: 'Комплект',
		// 			value: 'Неполный'
		// 		}]

	    //     },
		// 	{
		// 		id: '1',
		// 		name: 'Sega Mega Drive 3',
		// 		price: 380,
		// 		imagePath: '/test3',
		// 		categoryID: '1',
		// 		description: 'test desc',
		// 		attributes: [{
		// 			name: 'Регион',
		// 			value: 'PAL'
		// 		},
		// 		{
		// 			name: 'Состояние',
		// 			value: '3'
		// 		},
		// 		{
		// 			name: 'Комплект',
		// 			value: 'Неполный'
		// 		}]

	    //     },
		// 	{
		// 		id: '1',
		// 		name: 'Sega Mega Drive 3',
		// 		price: 1000,
		// 		imagePath: '/test3',
		// 		categoryID: '1',
		// 		description: 'test desc',
		// 		attributes: [{
		// 			name: 'Регион',
		// 			value: 'PAL'
		// 		},
		// 		{
		// 			name: 'Состояние',
		// 			value: '3'
		// 		},
		// 		{
		// 			name: 'Комплект',
		// 			value: 'Неполный'
		// 		}]

	    //     },
		// 	{
		// 		id: '1',
		// 		name: 'Sega Mega Drive 3',
		// 		price: 3000,
		// 		imagePath: '/test3',
		// 		categoryID: '1',
		// 		description: 'test desc',
		// 		attributes: [{
		// 			name: 'Регион',
		// 			value: 'PAL'
		// 		},
		// 		{
		// 			name: 'Состояние',
		// 			value: '3'
		// 		},
		// 		{
		// 			name: 'Комплект',
		// 			value: 'Неполный'
		// 		}]

	    //     },
		// 	{
		// 		id: '1',
		// 		name: 'Sega Mega Drive 3',
		// 		price: 7000,
		// 		imagePath: '/test3',
		// 		categoryID: '1',
		// 		description: 'test desc',
		// 		attributes: [{
		// 			name: 'Регион',
		// 			value: 'PAL'
		// 		},
		// 		{
		// 			name: 'Состояние',
		// 			value: '3'
		// 		},
		// 		{
		// 			name: 'Комплект',
		// 			value: 'Неполный'
		// 		}]

	    //     }
		// ];

		this.sortOptions = [
            {label: 'Цена по возрастанию', value: 'lowest price'},
            {label: 'Цена по убыванию', value: 'highest price'},
			{label: 'По алфавиту', value: 'alphabet'}
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
		console.log(this.sortOrder, this.sortField)
    }

}
