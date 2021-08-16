import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
