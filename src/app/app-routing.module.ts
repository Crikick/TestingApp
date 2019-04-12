import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './home/home.component';
import {VishalComponent} from './vishal/vishal.component';
import{SignUpComponent} from './sign-up/sign-up.component';
import{LoginComponent} from './login/login.component';
import{RulesAndRegulationComponent} from './rules-and-regulation/rules-and-regulation.component';
const routes: Routes = [  { path: 'Vishal', component: VishalComponent },
{path: 'Login', component: LoginComponent},
{ path: 'Rules', component: RulesAndRegulationComponent },
{path:'Home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
