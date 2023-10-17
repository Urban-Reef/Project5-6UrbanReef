import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { reefService } from '../reefs.service';
import { PlotlyDirective } from 'src/app/shared/plotly.directive';
import { reef } from 'src/app/models/reef.model';

@Component({
  selector: 'app-reef-detail',
  templateUrl: './reef-detail.component.html',
  styleUrls: ['./reef-detail.component.scss']
})


export class ReefDetailComponent {
  humidityPlot: Plotly.Data[] = [
    {
      type: 'scatter',
      x: [0,1,2,3],
      y: [10,20,30,40]
    },
  ];

  reefData:reef = new reef(0,"Reef 1A", ["source", "source"] ,"Green house", 55,21);

  constructor(  
    private route: ActivatedRoute,
    private router: Router,
    private service: reefService
  ) {}

}