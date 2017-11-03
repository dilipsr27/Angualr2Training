import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Category } from '../../models/category';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  providers:[DatePipe]
})
export class EditProductComponent implements OnInit {
  private id:number;
  private product:Product;
  private form:FormGroup;
  private categories:Category[];
  private hasError:boolean=false;
  private errorMessage:string;
  constructor(private router:Router, 
              private route:ActivatedRoute, 
              private fb:FormBuilder,
              private categorySvc:CategoryService, 
              private productSvc:ProductService,
              private datePipe:DatePipe) { }

  ngOnInit() {
    this.categories = this.route.snapshot.data['categories'];
    this.id = this.route.snapshot.params.id;
    // this.product = this.productSvc.getProduct(this.id);
    this.product = this.route.snapshot.data['product'];
     
    
    var nameControl = new FormControl(this.product.name, Validators.compose([Validators.required, Validators.minLength(3)]));

    var priceControl = new FormControl(this.product.price, Validators.compose([Validators.required, Validators.min(1),Validators.max(10000)]));

    var dt = this.datePipe.transform(this.product.mfgDate,"yyyy-MM-dd")
    this.form = this.fb.group({
      'name':nameControl,
      'price':priceControl,
      'mfgDate':[dt, Validators.required], // different way to do the same
      'categoryId':[this.product.categoryId, Validators.required],
      'id':[this.product.id]
    })
    /*console.log(`Product id is ${id}`);
    console.log(this.route.snapshot.params);

    var myId:number;
    this.route.params.subscribe(p=>myId=p.id)

    var name = this.route.snapshot.queryParams.name;
    var price = this.route.snapshot.queryParams.price;*/
    
  }

  public update(){
    if(this.form.valid){
      this.productSvc.updateProduct(this.form.value)
      .subscribe(
        data=>this.router.navigate(['/list']),
        err=>{
        this.hasError = true;
        this.errorMessage = "Unable to update the product";
    }); // save to data source
      
    }else{
      this.hasError = true;
      this.errorMessage = "Unable to update the product";
    }
  }

}
