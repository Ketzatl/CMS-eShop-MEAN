import {Component, Input, Output, EventEmitter ,OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductService} from "../../admin/product.service";
import {catchError, throwError} from "rxjs";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-products-summary',
  templateUrl: './products-summary.component.html',
  styleUrls: ['./products-summary.component.css']
})
export class ProductsSummaryComponent implements OnInit {
  @Input() product!: Product;
  @Output() deleteSuccess = new EventEmitter<boolean>();

  @Output() updateSuccess = new EventEmitter<boolean>();

  isWaitingForServerResponse = false;
  error = null;
  isInEditMode = false;


  constructor(private productService: ProductService, public authService: AuthService) { }

  ngOnInit(): void {}

  delete(product: Product) {
    this.isWaitingForServerResponse = true;
    // this.httpClient.delete(`http://localhost:3000/products/${product._id}`)
    this.productService
      .deleteProduct(product)
      .pipe(
        catchError(this.handleError)
      ).subscribe(
      data => {
        this.isWaitingForServerResponse = false;
        this.handleSuccess(data);
      },
      err => {
        this.isWaitingForServerResponse = false;
        this.handleError(err);
      }
    );
  }
  reloadProducts(product: Product) {
    console.log(product);
    this.product = product;
  }

  handleError(err: any) {
    // @ts-ignore
    this.error = err['name'] + ' ' + '-' + ' ' + err['message'];
    return throwError(this.error);
  }

  handleSuccess(data: any) {
    // console.log('Success !', data);
    this.deleteSuccess.emit(true);
  }
}
