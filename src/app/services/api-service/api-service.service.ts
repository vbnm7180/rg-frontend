import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) { }

  public getAllCategoryProducts(id: string) {
    return this.http.get(`http://localhost:8000/api/category/${id}`);
  }

  public getProduct(id: string) {
    return this.http.get(`http://localhost:8000/api/product/${id}`);
  }

  public makeOrder(orderData) {
    this.http.post(`http://localhost:8000/api/create-order`,orderData);
  }

  public registerUser(userData){
    console.log(this.cookie.getAll());
    return this.http.post(`//localhost:8000/register`, userData).pipe(
      catchError((error:HttpErrorResponse) => throwError(error))
   );
  }

}
