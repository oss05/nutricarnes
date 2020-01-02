import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ProductsComponent } from './pages/products/products.component';
import { RecetaryComponent } from './pages/recetary/recetary.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nosotros', component: AboutUsComponent },
  { path: 'productos', component: ProductsComponent },
  { path: 'contacto', component:  ContactUsComponent},
  { path: 'recetario', component: RecetaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
