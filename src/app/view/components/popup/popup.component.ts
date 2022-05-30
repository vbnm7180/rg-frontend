import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PopupService } from 'src/app/services/popup-service/popup.service';

@Component({
  selector: 'rg-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  constructor(
    private popupService: PopupService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public closePopup() {
    if (this.popupService.getRedirectUrl()) {
      this.router.navigateByUrl(this.popupService.getRedirectUrl());
      this.popupService.hidePopup();
      return;
    }
    this.popupService.hidePopup();
  }

  public getPopupHeader() {
    return this.popupService.getPopupHeader();
  }

  public getPopupContent() {
    return this.popupService.getPopupContent();
  }
}
