import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';


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
  constructor(private productSvc:ProductService, private router:Router) { 
    this.product = new Product()
  }

  ngOnInit() {
  }

  public save(frm){
    if(frm.valid){
     this.productSvc.addProducts(this.product);
     this.router.navigate(['/list']);
    }else{
      alert("Invalid Form")
    }
  }

}
