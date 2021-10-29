import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[rgPasswordConformationValidator]'
})
export class PasswordConformationValidatorDirective {

  constructor() { }

}

export const passwordConformation: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const password_conformation = control.get('password_conformation');

  console.log(password.value !== password_conformation.value)

  return password.value !== password_conformation.value ? { passwordConformation: true } : null;
};
