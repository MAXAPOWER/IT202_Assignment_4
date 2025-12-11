import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http = inject(HttpClient);
  apiUrl = 'http://localhost:8067/api';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  selectProduct(productId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/select-product`, { productId });
  }

  getSelectedProduct(): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/selected-product`);
  }

  submitOrder(product: Product): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/submit-order`, product);
  }
}