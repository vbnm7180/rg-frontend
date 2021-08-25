import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { InputTextModule } from 'primeng/inputtext';

import { AboutPageComponent } from 'src/app/view/components/about-page/about-page.component';



@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InputTextModule
  ],
  exports:[
    AboutPageComponent
  ]
})
export class AboutPageModule { }
