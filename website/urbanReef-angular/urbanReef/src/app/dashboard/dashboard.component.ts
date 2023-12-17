import {Component, OnInit} from '@angular/core';
import { reef } from 'src/app/models/reef.model';
import {reefService} from "./reefs/reefs.service";
import {RestService} from "../services/rest.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  reefs: reef[] = [];
  filteredReefsList:reef[] = [];

  constructor(private reefService: reefService, private rest: RestService) { }

  ngOnInit() {
    this.getReefs();
  }

  getReefs(): void {
    this.rest.GetReefs().subscribe(data => this.reefs = data.body);
  }

  filterReefs(searchText:string) {
    if(!searchText) {
      this.filteredReefsList = this.reefs;
      return;
    }
    this.filteredReefsList = this.reefs.filter( current =>
      current?.name.toLowerCase().includes(searchText.toLowerCase()));
  }
}
