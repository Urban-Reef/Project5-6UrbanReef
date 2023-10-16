import { Component } from '@angular/core';
import { reef } from 'src/app/models/reef.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  reefs:reef[] = [new reef(1,"Reef 1A", "Green house", 55, 21),
                  new reef(2,"Reef 1B", "Green house", 60, 22)]
  filteredReefsList:reef[] = [];

  getAllReefs():reef[] {
    let allReefs:reef[] = [];


    return allReefs;
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
