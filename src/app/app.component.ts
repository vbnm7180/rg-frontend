import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SpinnerService } from './services/spinner-service/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RetrogameAngular';

  constructor(
    private http: HttpClient,
    private spinnerService: SpinnerService
  ){

  }

  ngOnInit(){
    this.http.get('//localhost:8000/sanctum/csrf-cookie').subscribe();
  }

  public isSpinnerShown() {
    return this.spinnerService.isSpinnerShown();
  }
}
