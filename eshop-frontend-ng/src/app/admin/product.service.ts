import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:3000/products';
  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor( private httpClient: HttpClient) { }

  createProduct(product: Product) {
    return this.httpClient.post<Product>(this.baseUrl, product);
  }
  deleteProduct(product: Product) {
    const fullURL = `${this.baseUrl}/${product._id}`;
    return this.httpClient.delete<Product>(fullURL, this.httpHeaders);
  }
  updateProduct(productId: string, product: Product) {
    const fullURL = `${this.baseUrl}/${productId}`;
    return this.httpClient.put<Product>(fullURL, product, this.httpHeaders);
  }

}
