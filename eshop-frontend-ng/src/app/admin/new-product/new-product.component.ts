import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  response$ = null;

  constructor(private fb: FormBuilder, private productService: ProductService) { }

  productForm: FormGroup = this.fb.group({
    name: ['', [
      Validators.required,]
    ],
    description: ['', [
      Validators.required,
      Validators.minLength(4)]],
    price: ['', [
      Validators.required,
      Validators.max(5),
      Validators.pattern('\\d{1,3}(?:[.,]\\d{3})*(?:[.,]\\d{2})')]],
    pictures: [''],
    creationDate: new Date().toISOString()
  })

  ngOnInit() {
  }

  async submit() {
    // console.log('product / submit', this.productForm.value);
    // @ts-ignore
    this.response$ = this.productService.createProduct(this.productForm.value).subscribe(
        (res: any) => console.log(res)
    );
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
}
