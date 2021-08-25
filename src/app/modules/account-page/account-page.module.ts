import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';

import { AccountPageComponent } from 'src/app/view/components/account-page/account-page.component';



@NgModule({
  declarations: [
    AccountPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InputTextModule,
    TabViewModule
  ],
  exports:[
    AccountPageComponent
  ]
})
export class AccountPageModule { }
