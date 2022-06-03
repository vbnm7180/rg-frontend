import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { REGISTER_POPUP } from 'src/app/models/constants';
import { Popup } from 'src/app/models/popup';

import { APIService } from 'src/app/services/api-service/api-service.service';
import { PopupService } from 'src/app/services/popup-service/popup.service';
import { SpinnerService } from 'src/app/services/spinner-service/spinner.service';
import { passwordConfirmation } from '../../directives/password-confirmation-validator.directive';

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
  get password_confirmation() { return this.registerForm.get('password_confirmation'); }

  constructor(
    private apiService: APIService,
    private formBuilder: FormBuilder,
    private popupService: PopupService,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.minLength(6), Validators.required]],
        password_confirmation: ['', [Validators.required]]
      },
      { validators: passwordConfirmation }
    );
  }

  public registerUser() {
    this.validationVisible = true;
    if (this.registerForm.valid) {
      this.spinnerService.showSpinner();
      this.apiService.registerUser(this.registerForm.value).subscribe(
        () => {
          this.spinnerService.hideSpinner();
          this.popupService.showPopup(REGISTER_POPUP);
        },
        (error) => {
          this.spinnerService.hideSpinner();
          console.log(error)
          if (error.error.errors.email) {
            this.registerForm.controls.email.setErrors({ uniqueEmail: true });
          }
        }
      );
    }
  }
}
