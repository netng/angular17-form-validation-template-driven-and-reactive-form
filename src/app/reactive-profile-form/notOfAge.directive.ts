import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const notOfAgeValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const acceptedMinAge = 18;
    const dateOfBirth = new Date(control.value);
    const age = new Date().getFullYear() - dateOfBirth.getFullYear();

    return age < acceptedMinAge ? {notOfAge: true, minAge: 18} : null;
}