import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';
import * as Plotly from 'plotly.js';

@Directive({
  selector: '[appPlotly]'
})
export class PlotlyDirective {
  @Input('appPlotly') plot: Plotly.Data[] = [];

  constructor(private readonly elementRef: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['plot']) {
      return;
    }

    this.elementRef.nativeElement.innerHTML = '';
    if (this.plot.length > 0) {
      Plotly.newPlot(this.elementRef.nativeElement, this.plot);
    }
  }

  ngOnDestroy():void  {
    this.elementRef.nativeElement.innerHTML = '';
  }
}
