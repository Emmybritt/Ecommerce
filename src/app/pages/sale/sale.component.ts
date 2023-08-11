import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css'],
})
export class SaleComponent implements OnInit {
  constructor(private productService: ProductService) {}

  cartItems: CartITemsAttr[] = [];
  subTotal: number = 0;

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
  RemoveItem(itemId: number) {
    if (window.confirm('Are you sure you want to delete this item'))
      this.productService.removeCartItemById(itemId).subscribe((res: any) => {
        if (res.result) {
          this.loadCustomerCart();
          this.productService.cartAddedSubject.next(true);
        }
      });
  }

  makeSale() {}
}
