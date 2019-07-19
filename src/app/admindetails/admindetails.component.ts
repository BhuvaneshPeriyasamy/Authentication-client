import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-admindetails',
  templateUrl: './admindetails.component.html',
  styleUrls: ['./admindetails.component.css']
})
export class AdmindetailsComponent implements OnInit {

  constructor(private service:AuthService) { }
data={};
  ngOnInit() {   
    this.service.LoadAdmin().subscribe(res=>{
      this.data=res;
      console.log(this.data);
    });
  }

}

