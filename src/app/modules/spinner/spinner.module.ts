import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { SpinnerComponent } from 'src/app/view/components/spinner/spinner.component';

@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SpinnerComponent
  ]
})
export class SpinnerModule { }
