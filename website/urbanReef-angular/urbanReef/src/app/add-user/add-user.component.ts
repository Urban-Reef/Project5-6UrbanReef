import { Component } from '@angular/core';
import { user } from '../models/user.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginErrorStateMatcher } from '../login/login.component';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent {
  loginForm: FormGroup;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  nameFormControl = new FormControl('', [Validators.required]);
  roleFormControl = new FormControl('', [Validators.required]);
  matcher = new LoginErrorStateMatcher();

  constructor(private router : Router, private formBuilder: FormBuilder, private restService : RestService) {
    this.loginForm = this.formBuilder.group({
      email: this.emailFormControl,
      password: this.passwordFormControl,
    });
  }

  addUser() {
    let newUser:user;

    let email = this.emailFormControl.value || "";
    let password = this.passwordFormControl.value || "";
    let name = this.nameFormControl.value || "";
    let role = this.roleFormControl.value || "";

    newUser = new user(email,name, role, password);

    this.restService.AddUser(newUser)
      .subscribe(response => {
        const status = response.status;
        if(status === 200) {
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/dashboard'])
        }
      })
  }
}
