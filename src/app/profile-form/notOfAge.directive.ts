import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

function notOfAgeValidator (control: AbstractControl): ValidationErrors | null {
    const acceptedMinAge = 18;
    const dateOfBirth = new Date(control.value);
    const age = new Date().getFullYear() - dateOfBirth.getFullYear();

    return age < acceptedMinAge ? {notOfAge: true, minAge: 18} : null;
}

@Directive({
    selector: '[appNotOfAge]',
    providers: [{provide: NG_VALIDATORS, useExisting: NotOfAgeDirective, multi: true}],
    standalone: true,
})
export class NotOfAgeDirective implements Validator {
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        return notOfAgeValidator(control);
    }
}