import { Injectable } from '@angular/core';
import { Product } from '../models/product';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProductService {
  private API_URL:string="http://bst-products-api.azurewebsites.net/api/products";
  // private products:Product[]=[
  //   {id:1, name:'Apple', price:120, mfgDate:new Date(), categoryId:1},
  //   {id:2, name:'Samsung', price:130, mfgDate:new Date(), categoryId:1},
  //   {id:3, name:'Redmi', price:140, mfgDate:new Date(), categoryId:1}
  // ];
  
  constructor(private http:Http) { }
 
  public getProducts(): Observable<Product[]>{

    let requestHeaders = new Headers({
      "Content-Type":"application/json",
      "Accept":"application/json"
    });
    let options = new RequestOptions({
      headers: requestHeaders
    })
    
    return this.http.get(this.API_URL,options)
    .map((resp:Response)=>resp.json())
    .catch(err=>err)
  }
  public getProduct(id:number):Observable<Product>{
    let requestHeaders = new Headers({
      "Content-Type":"application/json",
      "Accept":"application/json"
    });
    let options = new RequestOptions({
      headers: requestHeaders
    })
    
    return this.http.get(`${this.API_URL}/${id}`,options)
    .map((resp:Response)=>resp.json())
    .catch(err=>err)
  }
  public addProducts(product:Product):Observable<Product>{
    return this.http.post(this.API_URL, product)
    .map(data=>data.json())
    .catch(err=> err)
  }
  public updateProduct(product:Product):Observable<Product>{
    let requestHeaders = new Headers({
      "Content-Type":"application/json",
      "Accept":"application/json"
    });
    let options = new RequestOptions({
      headers: requestHeaders
    })
    return this.http.put(`${this.API_URL}/${product.id}`, product, options)
    .map(data=>data.json())
    .catch(err=> err);
  }
}
