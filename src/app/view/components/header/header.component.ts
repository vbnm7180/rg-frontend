import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { NAV_MENU } from 'src/app/models/constants';

@Component({
  selector: 'rg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public navMenu: MenuItem[] = NAV_MENU;

  constructor() { }

  ngOnInit(): void {
  }
}
