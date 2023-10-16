import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReefDetailComponent } from './reef-detail/reef-detail.component';

const reefRoutes: Routes = [
  { path: 'reef/:id', component: ReefDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(reefRoutes)],
  exports: [RouterModule]
})
export class ReefsRoutingModule { }
