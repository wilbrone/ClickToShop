import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';


const routes: Routes = [
  {path: 'click-2-shop', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products-details', component: ProductDetailComponent},
  {path: 'order', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},

  {path: '', pathMatch: 'full', redirectTo: 'click-2-shop'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
