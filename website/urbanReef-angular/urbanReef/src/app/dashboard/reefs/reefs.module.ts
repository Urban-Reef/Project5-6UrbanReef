import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReefsRoutingModule } from './reefs-routing.module';
import { ReefDetailComponent } from './reef-detail/reef-detail.component';


@NgModule({
  declarations: [
    ReefDetailComponent
  ],
  imports: [
    CommonModule,
    ReefsRoutingModule
  ]
})
export class ReefsModule { }
