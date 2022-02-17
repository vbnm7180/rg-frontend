import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

import { FooterComponent } from 'src/app/view/components/footer/footer.component';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MenuModule,
    MenubarModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
