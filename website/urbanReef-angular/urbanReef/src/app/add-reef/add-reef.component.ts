import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../services/rest.service';
import { reef } from '../models/reef.model';

@Component({
  selector: 'app-add-reef',
  templateUrl: './add-reef.component.html',
  styleUrls: ['./add-reef.component.scss']
})
export class AddReefComponent {
  reefForm: FormGroup;
  nameFormControl = new FormControl('', [Validators.required]);
  LocationFormControl = new FormControl('', [Validators.required]);

  constructor(private rest: RestService, private formBuilder: FormBuilder) {
    this.reefForm = this.formBuilder.group({
      name: this.nameFormControl,
      location: this.LocationFormControl,
    });
  }
    
  addReef():void {
    let newReef:reef;
    let reefName = this.nameFormControl.value || "";
    let reefLocation = this.LocationFormControl.value || "";
    newReef = new reef(reefName, reefLocation, false);
    this.rest.AddReef(newReef).subscribe();
  }
} 
