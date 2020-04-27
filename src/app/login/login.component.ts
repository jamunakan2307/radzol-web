import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error: string;
  success: string;

  constructor(private router: Router, private formBuilder: FormBuilder, private loginService: LoginService) {
  }

  ngOnInit() {
    this.createForm();
  }

  login() {
    this.success = null;
    this.error = null;
    this.loginService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value,
      this.loginForm.controls.tenant.value).subscribe(
      (data: User) => this.success = 'successfully load',
      error => this.error = 'Failed to load'

    );
  }

  private createForm() {
    this.loginForm = this.formBuilder.group( {
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      tenant: new FormControl('', [Validators.required])
    });
  }

}
