import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private service:AuthService) { }
data:any=[];
  ngOnInit() {
    this.service.LoadCommon().subscribe(res=>{this.data=res});
  }

}
