import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { JobpostComponent } from './pages/jobpost/jobpost.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { JobdetailsComponent } from './pages/jobdetails/jobdetails.component';
import { JoblistcategoryComponent } from './pages/joblistcategory/joblistcategory.component';
const routes: Routes = [
  {path:'', redirectTo:"/home", pathMatch:"full" },
  { path:'home', component:HomeComponent},
  {path:'jobpost', component:JobpostComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'jobdetails', component:JobdetailsComponent},
  {path:'joblistcategory/:categoryid', component:JoblistcategoryComponent},
];

@NgModule({

  imports: [
  CommonModule,
  RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
