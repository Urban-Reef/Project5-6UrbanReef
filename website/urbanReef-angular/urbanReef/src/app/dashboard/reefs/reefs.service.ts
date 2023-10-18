import {Injectable} from '@angular/core';
import {REEFS} from "../../mock-reefs";

import {Observable, of} from 'rxjs';
import {reef} from "../../models/reef.model";

@Injectable({
  providedIn: 'root',
})
export class reefService {

  getReefs() : Observable<reef[]> {
    return of(REEFS);
  }

  getReef(id: number): Observable<reef> {
    const reef = REEFS.find(h => h.id == id)!;
    return of(reef);
  }

  constructor() { }
}
