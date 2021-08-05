import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
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
              },
              {label: 'Nintendo'}
          ]
      },
      {
        label: 'Игры',
        items: [{
                label: 'Sega',
            },
            {label: 'Nintendo'}
        ]
    },
    {
      label: 'Доставка и оплата'
    },
    {
      label : 'О нас'
    }];
  }



}
