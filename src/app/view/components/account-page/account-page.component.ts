import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/orders';

@Component({
  selector: 'rg-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {

  public orders: Order[];

  constructor() { }

  ngOnInit(): void {
    this.orders = [{
      id: '92929',
      name: 'Иванов Иван',
      email: 'test@mail.ru',
      city: 'Ижевск',
      address: 'Барышникова',
      postcode: '426000',
      phone: '29190',
      user_id: '2',
      date: '25.01.20',
      price: 2000,
      products: [	{
				id: '1',
				name: 'Sega Mega Drive (PAL) Серая в коробкеddddddd dddddddddddddddd dddddddddd',
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
			},
			{
				id: '2',
				name: 'Sega Mega Drive 2',
				price: 3000,
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
			},],
      status: 'В обработке'


    }
];
  }

}
