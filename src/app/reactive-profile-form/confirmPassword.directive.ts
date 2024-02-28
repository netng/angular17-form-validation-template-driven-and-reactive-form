import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password1 = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    return confirmPassword?.value !== password1?.value ? {passwordNotSame: true} : null;
}