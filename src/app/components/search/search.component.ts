import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  private result:Product[];
  
  constructor() { }

  public onSearch(result:Product[]){
    this.result = result;
  }

}
