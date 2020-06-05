import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path: 'click-2-shop', component: HomeComponent},

  {path: '', pathMatch: 'full', redirectTo: 'click-2-shop'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
