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
		private apiService: APIService,
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

		this.apiService.getUser().subscribe((response) => {
			this.userForm.patchValue(response);
		});

		this.apiService.getOrders().subscribe((response: any) => {
			this.orders = response.data.map((order) => {
				order.products = JSON.parse(order.products);
			});
			this.orders = response.data;
		});
	}

	public updateUser() {
		this.spinnerService.showSpinner();
		this.apiService.updateUser(this.userForm.value).subscribe(() => {
			this.spinnerService.hideSpinner();
			this.popupService.showPopup(this.popupHeader, '');
		});
	}

	public logoutUser() {
		this.apiService.logoutUser().subscribe(
			(response) => {
				this.spinnerService.hideSpinner();
				this.router.navigateByUrl('/');
			},
			(error) => {
				this.spinnerService.hideSpinner();
				console.log(error)
			}
		);
	}
}
