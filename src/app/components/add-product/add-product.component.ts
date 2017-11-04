import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { UnsavedComponentBase } from '../../guards/unsaved.guard';


@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit, UnsavedComponentBase {
  private categories:Category[];
  private product:Product;
  private hasError;
  private errorMessage;
  constructor(private productSvc:ProductService, private categorySvc:CategoryService, private router:Router,private route:ActivatedRoute, ) { 
    this.product = new Product()
  }

  ngOnInit() {
    this.categories = this.route.snapshot.data['categories'];
  }

  public save(frm){
    if(frm.valid){
     this.productSvc.addProducts(this.product)
     .subscribe(
       data=>{
         console.log(data);
         this.router.navigate(['/list']);
       },
       err=>{
         this.hasError = true;
         this.errorMessage = "Unable to add new Product";
       }
     );
     
    }else{
      alert("Invalid Form")
    }
  }

}
