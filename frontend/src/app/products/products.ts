import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../services/product';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html'
})
export class Products {
  productService = inject(ProductService);
  router = inject(Router);
  products$ = this.productService.getProducts();

  buyProduct(product: Product) {
    this.productService.selectProduct(product.id).subscribe(() => {
      this.router.navigate(['/review']);
    });
  }
}