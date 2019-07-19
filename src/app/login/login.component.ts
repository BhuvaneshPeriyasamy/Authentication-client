import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:AuthService,private route:Router) { }
data={};
disable:boolean;
  ngOnInit() {
  }

  login()
  {   
    this.service.Login(this.data);
    this.disable=true
    setTimeout(() => {
    if(localStorage.getItem("auth_token"))
    {      
      this.route.navigate(["/Home"]);
    }
    this.disable=false
    }, 500);    
  }
}
