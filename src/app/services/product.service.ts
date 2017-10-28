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
  public getProducts():Product[]{
    return this.products
  }
  public getProduct(id:number):Product{
    var product:Product=null;
    this.products.forEach((item,index)=>{
      if(item.id==id){
        product = item;
      }
    })
    return product;
  }
  public addProducts(product:Product):void{
    product.id=this.products.length + 1;
    this.products.push(product)
  }
  public updateProduct(product:Product):void{
    this.products.forEach((item,index)=>{
      if(item.id==product.id){
        this.products.splice(index,1, product);
      }
    });
    //this.products.push(product);
  }
}
