import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductService {
  private products:Product[]=[];
  constructor() { }
  public getProduct():Product[]{
    return this.products
  }
  public addProducts(product:Product):void{
    product.id=this.products.length + 1;
    this.products.push(product)
  }
}
