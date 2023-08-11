import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ecommerce';
  cartItems: CartITemsAttr[] = [];
  subTotal: number = 0;
  constructor(private productService: ProductService, private router: Router) {
    this.productService.cartAddedSubject.subscribe((res) => {
      this.loadCustomerCart();
    });
  }

  ngOnInit(): void {
    this.loadCustomerCart();
  }

  loadCustomerCart() {
    this.productService.getCartItem(1).subscribe((res: any) => {
      this.cartItems = res.data;
      this.cartItems.forEach((item: CartITemsAttr) => {
        this.subTotal += item.productPrice;
      });
    });
  }

  redirectToSale() {
    this.router.navigateByUrl('sale');
  }
}
