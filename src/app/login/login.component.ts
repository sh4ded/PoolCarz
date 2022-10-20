import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { windowCount } from 'rxjs';

import { Login } from './Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public success!: boolean;
  public login = new Login();

  constructor() { }

  ngOnInit(): void {
  }
  public valid = [
    {
      "userName" : "sai",
      "password" : "1234"
    }
  ]

  onSubmit(f: NgForm) {
    for(let a of this.valid) {
      if(a.userName === f.value.userName && a.password === f.value.password) {
        this.success = true;
      }
    }
    if (this.success) {
      window.alert("Login Success!");
    }
    else {
      window.alert("Invalid Login Credentials!");
    }
    this.success = false;
  }

}
