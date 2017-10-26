import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  private name:string;
  private location:string;
  private today:Date;
  
  constructor() {
      this.name = "Riyaz Hawaldar";
      this.location = "Mumbai";
      this.today = new Date();
   }

}
