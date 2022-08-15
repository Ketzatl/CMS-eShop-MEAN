import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { HttpClientModule } from "@angular/common/http";
import {ProductsSummaryComponent} from "./products-summary/products-summary.component";
import {AdminModule} from "../admin/admin.module";


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsSummaryComponent
  ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        HttpClientModule,
        AdminModule
    ]
})
export class ProductsModule { }
