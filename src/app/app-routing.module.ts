import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


const routes: Routes = [
  {path: 'click-2-shop', component: HomeComponent},
  {path: 'click-2-shop/products', component: ProductsComponent},
  {path: 'click-2-shop/products/details', component: ProductDetailComponent},

  {path: '', pathMatch: 'full', redirectTo: 'click-2-shop'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
