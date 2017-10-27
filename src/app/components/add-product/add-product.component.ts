import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { Product } from '../../models/product';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  private categories:Category[]=[
    {id:1, name:'Electronics', description:'Mobiles and Laptops'},
    {id:2, name:'Home appliances', description:'House hold items'},
    {id:3, name:'Cosmetics', description:'Cosmetic items'}
  ];
  private product:Product;
  constructor() { 
    this.product = new Product()
  }

  ngOnInit() {
  }

}
