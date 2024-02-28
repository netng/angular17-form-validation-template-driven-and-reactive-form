import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

function confirmPasswordValidator (control: AbstractControl): ValidationErrors | null {
    const password1 = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    console.log(confirmPassword);

    return confirmPassword?.value !== password1?.value ? {passwordNotSame: true} : null;
}

@Directive({
    selector: '[appConfirmPassword]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: ConfirmPasswordDirective,
            multi: true
        }
    ],
    standalone: true
})
export class ConfirmPasswordDirective implements Validator {
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        return confirmPasswordValidator(control);
    }
}