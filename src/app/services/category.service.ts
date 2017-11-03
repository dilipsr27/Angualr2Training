import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import {Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService {
  private API_URL:string="http://bst-products-api.azurewebsites.net/api/categories";
  constructor(private http:Http) { }

  public getCategories():Observable<Category[]>{
    
    return this.http.get(this.API_URL)
    .map(data=>data.json())
    .catch(err=>err)
  }

}
