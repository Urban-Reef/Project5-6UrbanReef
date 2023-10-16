import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { RestService } from '../services/rest.service';
import { Login } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginForm: FormGroup;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  matcher = new LoginErrorStateMatcher();

  constructor(private router : Router, private formBuilder: FormBuilder, private restService : RestService) {
    this.loginForm = this.formBuilder.group({
      email: this.emailFormControl,
      password: this.passwordFormControl,
    });
  }

  login() {
    let login = new Login();
    
    login.username = this.emailFormControl.value || "";
    login.password = this.passwordFormControl.value || ""

    this.restService.ValidateLogin(login)
      .subscribe(response => {
        if(response.status == 200) {
          this.router.navigate(['/dashboard']);
        } else {
          this.loginForm.setErrors({ 'incorrectLogin': true });
        }
      })
  }

  hide = true;
}

export class LoginErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null) : boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.touched || isSubmitted));
  }
}
