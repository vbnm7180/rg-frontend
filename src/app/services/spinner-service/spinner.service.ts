import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private spinnerShown = false;

  constructor() { }

  public isSpinnerShown() {
    return this.spinnerShown;
  }

  public showSpinner() {
    this.spinnerShown = true;
  }

  public hideSpinner() {
    this.spinnerShown = false;
  }
}
