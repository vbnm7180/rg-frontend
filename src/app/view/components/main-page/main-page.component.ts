import { Component, OnInit } from '@angular/core';

import { SpinnerService } from 'src/app/services/spinner-service/spinner.service';

import { SLIDER_CONFIG } from 'src/app/models/constants';

@Component({
  selector: 'rg-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public slides = [
    { img: "../../assets/images/slide1.png" },
    { img: "../../assets/images/slide2.png" }
  ];
  public sliderConfig = SLIDER_CONFIG;

  constructor(
    private spinnerService: SpinnerService
  ) { }

  ngOnInit(): void {
    this.spinnerService.showSpinner();
  }

  public onImageLoad() {
    this.spinnerService.hideSpinner();
  }
}
