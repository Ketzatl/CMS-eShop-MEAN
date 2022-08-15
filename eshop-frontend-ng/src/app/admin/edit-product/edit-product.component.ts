import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Product} from "../../models/product.model";
import {ProductService} from "../product.service";
import {catchError, EMPTY} from "rxjs";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  @Input() product!: Product;
  productForm!: FormGroup;
  response$ = null;
  error = null;

  constructor(private fb: FormBuilder, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      pictures: [this.product.pictures, !Validators.required],
      name: [this.product.name, Validators.required],
      description: [this.product.description, Validators.required],
      price: [this.product.price, Validators.required],
    });
  }

  get name() {
    return this.productForm.get('name');
  }

  get description() {
    return this.productForm.get('description');
  }

  get price() {
    return this.productForm.get('price');
  }

  async submit() {
    // console.log('product / submit', this.productForm.value);
    // @ts-ignore
    this.error = null;
    // @ts-ignore
    this.response$ = this.productService.updateProduct(this.product._id, this.productForm.value)
      .pipe(
        catchError(error => {
          this.error = error;
          return EMPTY;
        })
      )
  }
}
