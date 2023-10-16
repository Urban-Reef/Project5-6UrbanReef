import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { reefService } from '../reefs.service';

@Component({
  selector: 'app-reef-detail',
  templateUrl: './reef-detail.component.html',
  styleUrls: ['./reef-detail.component.scss']
})


export class ReefDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: reefService
  ) {}

  Items:string[] = ["ehllo", "secondPhotos"];
}