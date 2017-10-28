import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductService {
  private products:Product[]=[
    {id:1, name:'Apple', price:120, mfgDate:new Date(), categoryId:1},
    {id:2, name:'Samsung', price:130, mfgDate:new Date(), categoryId:1},
    {id:3, name:'Redmi', price:140, mfgDate:new Date(), categoryId:1}
  ];
  constructor() { }
  public getProduct():Product[]{
    return this.products
  }
  public addProducts(product:Product):void{
    product.id=this.products.length + 1;
    this.products.push(product)
  }
}
