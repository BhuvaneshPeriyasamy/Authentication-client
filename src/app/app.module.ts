import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import {AuthService} from './auth.service';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import {interceptor} from './interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DetailComponent,
    AdmindetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:interceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
