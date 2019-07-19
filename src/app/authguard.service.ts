import { Injectable } from '@angular/core';
import {Router,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private service:AuthService,private route:Router) { }
  canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
  
    if(this.service.IsLogin())
    {
    return true
    } 
      this.route.navigate(["/Login"]);
      return false;  
  }
  
}
