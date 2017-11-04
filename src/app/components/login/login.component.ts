import { Component } from '@angular/core';
import { UserLoginComponent } from '../user-login/user-login.component';
import { AdminLoginComponent } from '../admin-login/admin-login.component';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  private login = UserLoginComponent
  constructor() { }

  public adminLogin(){
    this.login = AdminLoginComponent
  }
  public userLogin(){
    this.login = UserLoginComponent
  }
}
