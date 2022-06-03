import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllCategoryProducts(id: string) {
    return this.http.get(`http://localhost:8000/api/category/${id}`);
  }

  public getProduct(id: string) {
    return this.http.get(`http://localhost:8000/api/product/${id}`);
  }

  public getUser() {
    return this.http.get(`http://localhost:8000/api/user`);
  }

  public makeOrder(orderData) {
    return this.http.post(`http://localhost:8000/api/create-order`, orderData);
  }

  public getOrders() {
    return this.http.get(`http://localhost:8000/api/orders`);
  }

  public registerUser(userData) {
    return this.http.post(`//localhost:8000/register`, userData).pipe(
      catchError((error: HttpErrorResponse) => throwError(error))
    );
  }

  public loginUser(userData) {
    return this.http.post(`//localhost:8000/login`, userData).pipe(
      catchError((error: HttpErrorResponse) => throwError(error))
    );
  }

  public isAuthentificated() {
    return this.http.get(`//localhost:8000/api/is-auth`).pipe(
      catchError((error: HttpErrorResponse) => throwError(error))
    );
  }

  public logoutUser() {
    return this.http.get(`//localhost:8000/api/logout`).pipe(
      catchError((error: HttpErrorResponse) => throwError(error))
    );
  }

  public updateUser(data) {
    return this.http.put(`//localhost:8000/api/update-user`, data).pipe(
      catchError((error: HttpErrorResponse) => throwError(error))
    );
  }
}
