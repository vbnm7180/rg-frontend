import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/products';
import { APIService } from 'src/app/services/api-service/api-service.service';
import { CartService } from 'src/app/services/cart-service/cart-service.service';

@Component({
  selector: 'rg-cart-form-page',
  templateUrl: './cart-form-page.component.html',
  styleUrls: ['./cart-form-page.component.scss']
})
export class CartFormPageComponent implements OnInit {

  public products: Product[] = [];
  public cartForm: FormGroup;

  constructor(
	  private cartService: CartService,
    private apiService: APIService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.getCartProducts();
    this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      city:['',Validators.required],
      address:['',Validators.required],
      postcode:['',Validators.required],
      phone:['',Validators.required],
      date:['',Validators.required],
      products:[[],Validators.required]
    });
  }

  makeOrder(){
    this.apiService.makeOrder(this.cartForm.value);
    
  }

  getCartProducts(){
    this.products = this.cartService.getCartProducts();
    }
  
    getCartPrice(){
      return this.cartService.getCartPrice();
    }

}
