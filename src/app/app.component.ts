import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RetrogameAngular';

  constructor(
    private http: HttpClient
  ){

  }

  ngOnInit(){
    this.http.get('//localhost:8000/sanctum/csrf-cookie').subscribe();
  }
}
