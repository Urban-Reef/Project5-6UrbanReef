import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlotlyDirective } from './plotly.directive';



@NgModule({
  declarations: [
    PlotlyDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlotlyDirective
  ],
})
export class SharedModule { }
