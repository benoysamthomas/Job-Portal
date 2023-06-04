import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { JobpostComponent } from './pages/jobpost/jobpost.component';
const routes: Routes = [
  {path:'', redirectTo:"/home", pathMatch:"full" },
  { path:'home', component:HomeComponent},
  {path:'jobpost', component:JobpostComponent}
];

@NgModule({

  imports: [
  CommonModule,
  RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
