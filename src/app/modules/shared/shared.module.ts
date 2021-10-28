import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
	RouterModule,
	BrowserModule,
	FormsModule,
	ReactiveFormsModule,
	HttpClientModule,
	BrowserAnimationsModule
  ],
  exports:[
	CommonModule,
	RouterModule,
	BrowserModule,
	FormsModule,
	ReactiveFormsModule,
	HttpClientModule,
	BrowserAnimationsModule
  ]
})
export class SharedModule { }
