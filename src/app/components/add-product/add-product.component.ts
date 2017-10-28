import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';


@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  private categories:Category[];
  private product:Product;
  constructor(private productSvc:ProductService, private categorySvc:CategoryService, private router:Router) { 
    this.product = new Product()
  }

  ngOnInit() {
    this.categories = this.categorySvc.getCategories();
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
