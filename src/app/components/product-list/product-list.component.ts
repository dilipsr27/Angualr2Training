import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  private products: Observable<Array<Product>>
  constructor(private productSvc: ProductService) {

  }

  ngOnInit() {
    this.products = this.productSvc.getProducts()
  

}
}
