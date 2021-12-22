import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/orders';
import { APIService } from 'src/app/services/api-service/api-service.service';
import { PopupService } from 'src/app/services/popup-service/popup.service';
import { SpinnerService } from 'src/app/services/spinner-service/spinner.service';

@Component({
  selector: 'rg-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {

	public userForm: FormGroup;  
  public orders: Order[];
  public popupHeader = 'Ваши данные успешно обновлены';

  constructor(
	  private apiService:APIService,
	  private spinnerService: SpinnerService,
	  private router: Router,
	  private formBuilder: FormBuilder,
	  private popupService: PopupService
  ) { }

  ngOnInit(): void {
	
	this.userForm = this.formBuilder.group({
		name: [''],
		phone: [''],
		city: [''],
		address: [''],
		postcode: ['']
	  });

	  this.apiService.getUser().subscribe((response)=>{
		  console.log(response)
		  this.userForm.patchValue(response);
		  console.log(this.userForm.value)

	  });

	  this.apiService.getOrders().subscribe((response:any)=>{
		console.log(response)
		this.orders = response.data.map((order)=>{
			order.products = JSON.parse(order.products);
		});
		this.orders = response.data;
		console.log(this.orders)

	});
    // this.orders = [{
    //   id: '92929',
    //   name: 'Иванов Иван',
    //   email: 'test@mail.ru',
    //   city: 'Ижевск',
    //   address: 'Барышникова',
    //   postcode: '426000',
    //   phone: '29190',
    //   user_id: '2',
    //   date: '25.01.20',
    //   price: 2000,
    //   products: [	{
	// 			id: '1',
	// 			name: 'Sega Mega Drive (PAL) Серая в коробкеddddddd dddddddddddddddd dddddddddd',
	// 			price: 200000,
	// 			imagePath: '/test1',
	// 			categoryID: '1',
	// 			description: 'test desc',
	// 			attributes: [{
	// 				name: 'Регион',
	// 				value: 'PAL'
	// 			},
	// 			{
	// 				name: 'Состояние',
	// 				value: '4'
	// 			},
	// 			{
	// 				name: 'Комплект',
	// 				value: 'Полный'
	// 			}]
	// 		},
	// 		{
	// 			id: '2',
	// 			name: 'Sega Mega Drive 2',
	// 			price: 3000,
	// 			imagePath: '/test2',
	// 			categoryID: '1',
	// 			description: 'test desc',
	// 			attributes: [{
	// 				name: 'Регион',
	// 				value: 'PAL'
	// 			},
	// 			{
	// 				name: 'Состояние',
	// 				value: '5'
	// 			},
	// 			{
	// 				name: 'Комплект',
	// 				value: 'Полный'
	// 			}]
	// 		},],
    //   status: 'В обработке'


    // }
// ];
  }

  public updateUser() {
	  this.spinnerService.showSpinner();
	  this.apiService.updateUser(this.userForm.value).subscribe(()=>{
		  this.spinnerService.hideSpinner();
		this.popupService.showPopup(this.popupHeader, '');


	  });
  }

  public logoutUser(){
	this.apiService.logoutUser().subscribe(
		(response) =>{
		  this.spinnerService.hideSpinner();
		  console.log(response)
		  this.router.navigateByUrl('/');

		},
		(error)=>{
		  this.spinnerService.hideSpinner();
		  console.log(error)
		}
	  );

  }

}
