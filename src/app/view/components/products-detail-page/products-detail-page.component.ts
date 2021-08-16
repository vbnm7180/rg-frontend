import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'rg-products-detail-page',
  templateUrl:'./products-detail-page.component.html',
  styleUrls: ['./products-detail-page.component.scss']
})
export class ProductsDetailPageComponent implements OnInit {

  public product: Product;

  constructor() { }

  ngOnInit(): void {
    this.product = {
      id: '1',
      name: 'Sega Mega Drive (PAL) Серая в коробке',
      price: 200000,
      imagePath: '/test1',
      categoryID: '1',
      description: 'Игровая приставка четвёртого поколения, разработанная и выпускавшаяся компанией Sega. Приставка была выпущена в 1988. Sega Mega Drive — это третья аппаратная платформа от Sega после Sega Master System.она стала первой консолью четвертого поколения, достигшей значительного успеха на рынках Северной Америки и Европы, где она конкурировала с широким спектром платформ как специализированных игровых устройств, так и домашних компьютеров. Успеху приставки способствовали обилие портированных аркадных игр, популярность эксклюзивной для Genesis игры Sonic the Hedgehog, несколько популярных спортивных серий игр, а также агрессивный молодёжный маркетинг, позиционирующий систему как «крутую консоль» для подростков.',
      attributes: [{
        name: 'Регион',
        value: 'PAL'
      },
      {
        name: 'Комплект',
        value: 'Коробка, приставка, 2 геймпада, картиридж с игрой Street Fighter 2'
      }
    ]
    };
  }

}
