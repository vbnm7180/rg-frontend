import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { APIService } from 'src/app/services/api-service/api-service.service';
import { CartService } from 'src/app/services/cart-service/cart-service.service';
import { PopupService } from 'src/app/services/popup-service/popup.service';
import { SpinnerService } from 'src/app/services/spinner-service/spinner.service';

import { Product } from 'src/app/models/products';
import { ORDER_POPUP } from 'src/app/models/constants';

@Component({
  selector: 'rg-cart-form-page',
  templateUrl: './cart-form-page.component.html',
  styleUrls: ['./cart-form-page.component.scss']
})
export class CartFormPageComponent implements OnInit {

  public products: Product[] = [];
  public cartForm: FormGroup;
  public validationVisible = false;

  get name() { return this.cartForm.get('name'); }
  get email() { return this.cartForm.get('email'); }
  get city() { return this.cartForm.get('city'); }
  get address() { return this.cartForm.get('address'); }
  get postcode() { return this.cartForm.get('postcode'); }
  get phone() { return this.cartForm.get('phone'); }

  constructor(
    private cartService: CartService,
    private apiService: APIService,
    private formBuilder: FormBuilder,
    private spinnerService: SpinnerService,
    private popupService: PopupService
  ) { }

  ngOnInit(): void {
    this.getCartProducts();

    this.cartForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      postcode: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: [''],
      products: [[]],
      price: [''],
      user_id: [0],
      status: ['В обработке']
    });

    this.apiService.getUser().subscribe((user: any) => {
      if (user) {
        this.cartForm.patchValue(user);
        this.cartForm.patchValue({ user_id: parseInt(user.id, 10) });
      }
    });
  }

  public makeOrder() {
    this.validationVisible = true;

    if (this.cartForm.valid) {
      this.spinnerService.showSpinner();
      this.cartForm.patchValue({
        date: new Date().toISOString().slice(0, 19).replace('T', ' '),
        products: JSON.stringify(this.products),
        price: this.getCartPrice()
      });

      this.apiService.makeOrder(this.cartForm.value).subscribe(() => {
        this.spinnerService.hideSpinner();
        this.popupService.showPopup(ORDER_POPUP);
        this.cartService.emptyCart();
      });
    }
  }

  public getCartProducts() {
    this.products = this.cartService.getCartProducts();
  }

  public getCartPrice() {
    return this.cartService.getCartPrice();
  }
}
