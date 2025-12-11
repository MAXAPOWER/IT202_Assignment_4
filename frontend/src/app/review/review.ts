import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../services/product';

@Component({
  selector: 'app-review',
  imports: [CommonModule],
  templateUrl: './review.html'
})
export class Review {
  productService = inject(ProductService);
  product$ = this.productService.getSelectedProduct();
  confirmationMessage = '';

  submitOrder(product: Product) {
    this.productService.submitOrder(product).subscribe(response => {
      this.confirmationMessage = response.message;
    });
  }
}