import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private productService: ProductService) {}
  productList: ProductListAttr['data'] = [];
  productDiscount: number = 0.35;
  cartObj: CartAttr = {
    AddedDate: '2023-08-11T11:44:44.209Z',
    CartId: 0,
    CustId: 1,
    ProductId: 0,
    Quantity: 0,
  };

  ngOnInit(): void {
    this.loadAllProduct();
  }

  loadAllProduct() {
    this.productService.getAllProducts().subscribe((res: any) => {
      this.productList = res.data;
    });
  }

  addItemToCart(productId: number) {
    debugger;
    this.cartObj.ProductId = productId;
    this.productService.addToCart(this.cartObj).subscribe((res: any) => {
      if (res.result) {
        this.productService.cartAddedSubject.next(true);
      }
    });
    console.log(this.cartObj);
  }
}
