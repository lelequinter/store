import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  //Angular nos provee de unos modulos HTTP para poder hacer los llamados APIs
  private apiURL = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}
  // El metodo Get nos lo brinda angular
  getProducts(): Observable<any> {
    return this.http.get<Product[]>(this.apiURL);
  }

  updateStock(productId: number, stock: number): Observable<any> {
    const body = { stock: stock };
    return this.http.patch<any>(`${this.apiURL}/${productId}`, body);
  }
}
