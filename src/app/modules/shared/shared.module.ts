import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
	RouterModule,
	BrowserModule,
	FormsModule,
	HttpClientModule,
	BrowserAnimationsModule
  ],
  exports:[
	CommonModule,
	RouterModule,
	BrowserModule,
	FormsModule,
	HttpClientModule
  ]
})
export class SharedModule { }
