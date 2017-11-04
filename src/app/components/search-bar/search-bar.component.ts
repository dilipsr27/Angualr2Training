import { Component, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent  {

  @Output() public search:EventEmitter<Product[]>=new EventEmitter<Product[]>();

  constructor(private productSvc:ProductService) { }

  public searchData(searchText){
    let temp: Product[]=[];

    this.productSvc.getProducts()
    .subscribe(
      data=>{
        data.forEach((item) =>{
          if(item.name.toLocaleLowerCase().startsWith(searchText.toLocaleLowerCase())){
            temp.push(item);
          }
        });
        this.search.emit(temp);
      },
      err=> console.log(err)
    )
   // var products = this.productSvc.getProducts();
    
  }

  

}
