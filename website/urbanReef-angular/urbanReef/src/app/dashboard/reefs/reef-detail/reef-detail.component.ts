import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { reefService } from '../reefs.service';
import { reef } from 'src/app/models/reef.model';
import {RestService} from "../../../services/rest.service";

@Component({
  selector: 'app-reef-detail',
  templateUrl: './reef-detail.component.html',
  styleUrls: ['./reef-detail.component.scss']
})


export class ReefDetailComponent implements OnInit {
  reef: reef | undefined;

  ngOnInit(): void {
    this.getReef();
  }

  getReef(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.rest.GetReefById(id).subscribe(reef => {
      console.log(reef.body[0]);
      this.reef = reef.body[0]});
  }


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reefService: reefService,
    private rest: RestService
  ) {}

}