import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllCategoryProducts(id: string) {
    return this.http.get(`http://127.0.0.1:8000/api/category/${id}`);
  }

  public getProduct(id: string) {
    return this.http.get(`http://127.0.0.1:8000/api/product/${id}`);
  }

  public makeOrder(orderData) {
    this.http.post(`http://127.0.0.1:8000/api/create-order`,orderData);
    

  }
}
