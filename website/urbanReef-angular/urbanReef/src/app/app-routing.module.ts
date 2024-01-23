import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddReefComponent } from './add-reef/add-reef.component';
import {ReefDetailComponent} from "./dashboard/reefs/reef-detail/reef-detail.component";
import { AddUserComponent } from './add-user/add-user.component';

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
    path: 'addreef',
    component: AddReefComponent
  },
  {
    path: 'reef/:id',
    component: ReefDetailComponent,
    title: 'Reef Details'
  },
  {
    path: 'adduser',
    component: AddUserComponent,
    title: 'Add User'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
