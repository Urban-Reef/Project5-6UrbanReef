import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatDividerModule} from '@angular/material/divider'; 

import { ReefsRoutingModule } from './reefs-routing.module';
import { ReefDetailComponent } from './reef-detail/reef-detail.component';


@NgModule({
  declarations: [
    ReefDetailComponent
  ],
  imports: [
    CommonModule,
    ReefsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatDividerModule,
    
  ]
})
export class ReefsModule { }
