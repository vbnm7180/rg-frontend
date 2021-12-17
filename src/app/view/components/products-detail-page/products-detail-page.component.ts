import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/app/services/api-service/api-service.service';
import { CartService } from 'src/app/services/cart-service/cart-service.service';
import { SpinnerService } from 'src/app/services/spinner-service/spinner.service';

@Component({
  selector: 'rg-products-detail-page',
  templateUrl:'./products-detail-page.component.html',
  styleUrls: ['./products-detail-page.component.scss']
})
export class ProductsDetailPageComponent implements OnInit {

  public product: Product = new Product({});

  constructor(
    private router:Router,
		private activatedRoute:ActivatedRoute,
		private apiService:APIService,
    private cartService: CartService,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit(): void {
    this.spinnerService.showSpinner();

    this.activatedRoute.params.subscribe((data)=>{
      console.log(data.id)
      this.apiService.getProduct(data.id).subscribe((response:any)=>{
        console.log(response)
        this.product = new Product(response.data);
        this.spinnerService.hideSpinner();
        console.log(this.product)
      });
			//this.apiService.getProduct(data.id).subscribe((product:any)=>{
				//this.product=product.data;
			//});
		});

  //   this.product = {
  //     id: '1',
  //     name: 'Sega Mega Drive (PAL) Серая в коробке',
  //     price: 200000,
  //     imagePath: '/test1',
  //     categoryID: '1',
  //     description: 'Игровая приставка четвёртого поколения, разработанная и выпускавшаяся компанией Sega. Приставка была выпущена в 1988. Sega Mega Drive — это третья аппаратная платформа от Sega после Sega Master System.она стала первой консолью четвертого поколения, достигшей значительного успеха на рынках Северной Америки и Европы, где она конкурировала с широким спектром платформ как специализированных игровых устройств, так и домашних компьютеров. Успеху приставки способствовали обилие портированных аркадных игр, популярность эксклюзивной для Genesis игры Sonic the Hedgehog, несколько популярных спортивных серий игр, а также агрессивный молодёжный маркетинг, позиционирующий систему как «крутую консоль» для подростков.',
  //     attributes: [{
  //       name: 'Регион',
  //       value: 'PAL'
  //     },
  //     {
  //       name: 'Комплект',
  //       value: 'Коробка, приставка, 2 геймпада, картиридж с игрой Street Fighter 2'
  //     }
  //   ]
  //   };
   }

   addToCart(product:Product) {
		this.cartService.addProductToCart(product);
	}

   isInCart(product:Product) {
     console.log(this.cartService.isProductInCart(product))
		return this.cartService.isProductInCart(product);
	}

}
