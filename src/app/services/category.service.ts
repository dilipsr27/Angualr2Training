import { Injectable } from '@angular/core';
import { Category } from '../models/category';

export class CategoryService {
  private categories:Category[]=[
    {id:1, name:'Electronics', description:'Mobiles and Laptops'},
    {id:2, name:'Home appliances', description:'House hold items'},
    {id:3, name:'Cosmetics', description:'Cosmetic items'}
  ];
  constructor() { }

  public getCategories():Category[]{
    return this.categories;
  }

}
