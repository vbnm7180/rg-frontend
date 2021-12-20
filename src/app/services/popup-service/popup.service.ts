import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  private popupShown = false;
  public popupHeader = '';
  public popupContent = '';
  public redirectUrl = '';

  constructor() { }

  public isPopupShown() {
    return this.popupShown;
  }

  public getPopupHeader() {
    return this.popupHeader;
  }

  public getPopupContent() {
    return this.popupContent;
  }

  public getRedirectUrl() {
    return this.redirectUrl;
  }

  public showPopup(popupHeader: string,popupContent: string, url?: string) {
    this.popupHeader = popupHeader;
    this.popupContent = popupContent;
    this.redirectUrl = url;
    this.popupShown = true;
  }

  public hidePopup() {
    this.popupHeader = '';
    this.popupContent = '';
    this.redirectUrl = '';
    this.popupShown = false;
  }
}
