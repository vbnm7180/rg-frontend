import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[rgPasswordConfirmationValidator]'
})
export class PasswordConfirmationValidatorDirective {

  constructor() { }

}

export const passwordConfirmation: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const password_confirmation = control.get('password_confirmation');

  console.log(password.value !== password_confirmation.value)

  return password.value !== password_confirmation.value ? { passwordConfirmation: true } : null;
};
