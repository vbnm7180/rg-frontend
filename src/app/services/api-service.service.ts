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

  public test(id: string) {
    return this.http.get(`http://127.0.0.1:8000/api/product/${id}`);
  }
}
