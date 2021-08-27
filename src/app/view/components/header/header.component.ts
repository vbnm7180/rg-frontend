import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'rg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menuItems: MenuItem[] = [
    {label: 'Sega'},
    {label: 'Nintendo'}
  ];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {
          label: 'Приставки',
          items: [{
                  label: 'Sega',
                  routerLink: ['/consoles/sega']
              },
              {
                label: 'Nintendo',
                routerLink: ['/consoles/nintendo']
              }
          ]
      },
      {
        label: 'Игры',
        items: [{
                label: 'Sega',
                routerLink: ['/games/sega']
            },
            {
              label: 'Nintendo',
              routerLink: ['/games/nintendo']
            }
        ]
    },
    {
      label: 'Доставка и оплата',
      routerLink: ['/delivery']
    },
    {
      label : 'О нас',
      routerLink: ['/about']
    }];
  }



}
