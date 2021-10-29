import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from 'src/app/services/api-service/api-service.service';
import { passwordConformation } from '../../directives/password-conformation-validator.directive';

@Component({
  selector: 'rg-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  public registerForm: FormGroup;
  public validationVisible: boolean = false;

  get name() { return this.registerForm.get('name'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get password_conformation() { return this.registerForm.get('password_conformation'); }

  constructor(
    private apiService: APIService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
      name: ['', Validators.required],
      email:['', [Validators.email, Validators.required]],
      password:['', [Validators.minLength(6), Validators.required]],
      password_conformation:['', [Validators.required]]
    }, 
    {validators : passwordConformation}
    );
  }

  public registerUser() {
    this.validationVisible = true;
    if (this.registerForm.valid) {
    this.apiService.registerUser(this.registerForm.value);
    }
  }

}
