import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from 'src/app/services/api-service/api-service.service';

@Component({
  selector: 'rg-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(
    private apiService: APIService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required],
      password_confirmation:['',Validators.required]
    });
  }

  public registerUser() {
    this.apiService.registerUser(this.registerForm.value);
  }

}
