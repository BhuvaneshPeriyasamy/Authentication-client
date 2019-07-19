import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:AuthService) { }
name:string;
  ngOnInit() {
  this.name=this.service.getuser();
  }
  Logout()
  {
    this.service.Logout();
  }
}
