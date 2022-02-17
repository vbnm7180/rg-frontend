import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner-service/spinner.service';

@Component({
  selector: 'rg-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

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
