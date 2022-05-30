import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { APIService } from 'src/app/services/api-service/api-service.service';
import { SpinnerService } from 'src/app/services/spinner-service/spinner.service';

@Component({
  selector: 'rg-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public loginForm: FormGroup;
  public validationVisible: boolean = false;

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  constructor(
    private apiService: APIService,
    private spinnerService: SpinnerService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public loginUser() {
    this.validationVisible = true;
    if (this.loginForm.valid) {
      this.spinnerService.showSpinner();
      this.apiService.loginUser(this.loginForm.value).subscribe(
        () => {
          this.spinnerService.hideSpinner();
          this.router.navigateByUrl('/account');
        },
        (error) => {
          this.spinnerService.hideSpinner();
          console.log(error)
          if (error.error.errors.email) {
            this.loginForm.controls.email.setErrors({ emailCorrect: true });
          }
          if (error.error.errors.password) {
            this.loginForm.controls.password.setErrors({ passwordCorrect: true });
          }
        }
      );
    }
  }
}
