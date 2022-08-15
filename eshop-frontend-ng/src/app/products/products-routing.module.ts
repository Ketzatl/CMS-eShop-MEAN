import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products.component";
import {ProductsSummaryComponent} from "./products-summary/products-summary.component";

const routes: Routes = [
  { path: '', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
