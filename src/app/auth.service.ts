import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {map, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private route:Router) { }
  user:any=[];
  details:any=[];
 Logout()
 {
   localStorage.removeItem("auth_token");
   this.route.navigate(["/Login"]);
 }

 IsLogin()
 {
   if(localStorage.getItem("auth_token"))
   {
     return true;
   }
  return false;
 }
 getuser()
 {
  return this.user["Name"];
 }

 Login(data)
 { 
  this.http.post("http://localhost:3000/auth",data).subscribe(res=>{
  this.user=res;
  localStorage.setItem("auth_token","Bearer "+this.user["Token"]);
   });
 }

 LoadAdmin()
 {
   return this.http.get("http://localhost:3000/Admin").pipe(map(res=>this.details=res));
 }

 
 LoadCommon()
 {
  return this.http.get("http://localhost:3000/Normal").pipe(map(res=>this.details=res));
 }
}
