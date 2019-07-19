import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {DetailComponent} from './detail/detail.component';
import {AuthguardService} from './authguard.service';
import {AdmindetailsComponent} from './admindetails/admindetails.component';

const routes: Routes = [
  {path:"Login",component:LoginComponent},
  {path:"Home",component:HomeComponent,canActivate:[AuthguardService]},
  {path:"Details",component:DetailComponent,canActivate:[AuthguardService]},
  {path:"Admin",component:AdmindetailsComponent,canActivate:[AuthguardService]},
  {path:"",component:HomeComponent,pathMatch:"full",canActivate:[AuthguardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
