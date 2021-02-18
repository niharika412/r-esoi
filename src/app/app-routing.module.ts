import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlansComponent } from './plans/plans.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'home',component:DashboardComponent},
  {path:'plans',component:PlansComponent},
  {path:'about', component:AboutComponent},
  {path:'signup',component:SignupComponent},
  {path:'', redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
