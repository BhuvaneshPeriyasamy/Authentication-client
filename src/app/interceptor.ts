import {Injectable} from '@angular/core';
import {HttpRequest,HttpResponse,HttpErrorResponse,HttpInterceptor,HttpEvent,HttpHandler} from '@angular/common/http';
import {observable, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import { error } from 'protractor';
import {AuthService} from './auth.service';
import{Router} from '@angular/router';

@Injectable()
export class interceptor implements HttpInterceptor
{
    constructor(private service:AuthService,private route:Router){}
intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>
{
    var token=localStorage.getItem("auth_token")==null ? "": localStorage.getItem("auth_token");
    var requestTosend=request.clone({
        headers:request.headers.set("Authorization",token)
    });
    return next.handle(requestTosend).pipe(
        tap(
            (event:HttpResponse<any>)=>{             
                if(event.body)
                {                    
                    sessionStorage.setItem("auth_token",event.body["Token"]);
                }
            },
            (error:HttpErrorResponse)=>{
                if(error.status==401)
                {
                    alert(error.error["message"]);
                    this.route.navigate(["/Home"]);
                }
                if(error.status==400)
                {
                    alert(error.error["message"]);
                    this.service.Logout();
                }
                if(error.status==403)
                {
                    alert(error.error["message"]);
                }
            }
        )
    )
}
}