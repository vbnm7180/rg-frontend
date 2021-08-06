import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { MainPageComponent } from 'src/app/view/components/main-page/main-page.component';



@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MenuModule,
    MenubarModule,
    SlickCarouselModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class MainPageModule { }
