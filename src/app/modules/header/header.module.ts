import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

import { HeaderComponent } from 'src/app/view/components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MenuModule,
    MenubarModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
