import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$ = null;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.products$ = this.httpClient.get<any[]>('http://localhost:3000/products');
  }
  reloadProducts(deletionSucceeded: any) {
    console.log('deletion successful: ', deletionSucceeded);
    // @ts-ignore
    this.ngOnInit()
  }

}
