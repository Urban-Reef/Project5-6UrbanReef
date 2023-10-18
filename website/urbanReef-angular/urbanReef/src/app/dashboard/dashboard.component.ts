import {Component, OnInit} from '@angular/core';
import { reef } from 'src/app/models/reef.model';
import {reefService} from "./reefs/reefs.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  reefs: reef[] = [];
  filteredReefsList:reef[] = [];

  constructor(private reefService: reefService) { }

  ngOnInit() {
    this.getReefs();
  }

  getReefs(): void {
    this.reefService.getReefs().subscribe(reefs => this.reefs = reefs);
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
