import { Routes } from '@angular/router';
import { Products } from './products/products';
import { Review } from './review/review';

export const routes: Routes = [
  { path: '', component: Products },
  { path: 'products', component: Products},
  { path: 'review', component: Review }
];