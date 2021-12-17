import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner-service/spinner.service';

@Component({
  selector: 'rg-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  slides = [
    {img: "../../assets/images/slide1.png"},
    {img: "../../assets/images/slide2.png"}
  ];
  slideConfig = {
    "arrows":true,
    "prevArrow":".left-slide-btn",
    "nextArrow":".right-slide-btn",
    "dots":true,
    "appendDots":".slide-dots",
    "dotsClass":"dot-item"

  };

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
