import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddReefComponent } from './add-reef/add-reef.component';
import {ReefDetailComponent} from "./dashboard/reefs/reef-detail/reef-detail.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'userdetails',
    component: UserDetailsComponent
  },
  {
    path: 'adduser',
    component: AddUserComponent
  },
  {
    path: 'addreef',
    component: AddReefComponent
  },
  {
    path: 'reef/:id',
    component: ReefDetailComponent,
    title: 'Reef Details'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
