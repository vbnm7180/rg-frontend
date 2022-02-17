import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'rg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menuItems: MenuItem[] = [
    { label: 'Sega' },
    { label: 'Nintendo' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Приставки',
        items: [{
          label: 'Sega',
          routerLink: ['/category/1']
        },
        {
          label: 'Nintendo',
          routerLink: ['/category/3']
        }
        ]
      },
      {
        label: 'Игры',
        items: [{
          label: 'Sega',
          routerLink: ['/category/2']
        },
        {
          label: 'Nintendo',
          routerLink: ['/category/4']
        }
        ]
      },
      {
        label: 'Доставка и оплата',
        routerLink: ['/delivery']
      },
      {
        label: 'О нас',
        routerLink: ['/about']
      }];
  }
}
