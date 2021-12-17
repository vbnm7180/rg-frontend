import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { PopupComponent } from 'src/app/view/components/popup/popup.component';

@NgModule({
  declarations: [
    PopupComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    PopupComponent
  ]
})
export class PopupModule { }
