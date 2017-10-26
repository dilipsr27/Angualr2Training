import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  private name:string;
  private location:string;
  private today:Date;

  private colors:string[]=['red','green','blue'];
  private products:Product[]=[
  {id:101,name:'Book',price:1250,mfgDate:new Date(2016,1,8)},
  {id:102,name:'Pen',price:1200,mfgDate:new Date()},
  {id:103,name:'Coca Cola',price:1000,mfgDate:new Date()},
  {id:104,name:'Pepsi',price:90,mfgDate:new Date(2016,5,6)},
  {id:105,name:'Thumbs Up',price:80,mfgDate:new Date()}
];

private currentYear:number = new Date().getFullYear();

private count:number=3;
  
  constructor() {
      this.name = "Riyaz Hawaldar";
      this.location = "Mumbai";
      this.today = new Date();
   }

}
