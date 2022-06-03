import { Injectable } from '@angular/core';

import { Popup } from 'src/app/models/popup';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  public popup: Popup = new Popup();

  constructor() { }

  public isPopupShown() {
    return this.popup.isPopupShown;
  }

  public getPopupHeader() {
    return this.popup.popupHeader;
  }

  public getPopupContent() {
    return this.popup.popupContent;
  }

  public getRedirectUrl() {
    return this.popup.redirectUrl;
  }

  public showPopup(popupHeader: string, popupContent: string, url?: string) {
    this.popup = {
      popupHeader: popupHeader,
      popupContent: popupContent,
      redirectUrl: url,
      isPopupShown: true
    };
  }

  public hidePopup() {
    this.popup = new Popup();
  }
}
