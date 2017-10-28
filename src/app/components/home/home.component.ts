import { Component, OnInit, Input } from '@angular/core';
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
  private products:any[]=[
  {id:101,name:'Book',price:1250,mfgDate:new Date(2016,1,8)},
  {id:102,name:'Pen',price:1200,mfgDate:new Date(2017,4,8)},
  {id:103,name:'Coca Cola',price:1000,mfgDate:new Date(2016,3,2)},
  {id:104,name:'Pepsi',price:90,mfgDate:undefined},
  {id:105,name:'Thumbs Up',price:80,mfgDate:new Date(2016,5,8)}
];

private currentYear:number = new Date().getFullYear();

private count:number=3;
private myCssClass = "highlight";
private colorName:string = 'red';
private size:number = 20;

@Input() private userType:string;
  constructor() {
      this.name = "Riyaz Hawaldar";
      this.location = "Mumbai";
      this.today = new Date();
   }
   public changeClass(){
     if(this.myCssClass=="highlight"){
      this.myCssClass = "strike";
     }else{
      this.myCssClass = "highlight";
     }
     
   }
}
