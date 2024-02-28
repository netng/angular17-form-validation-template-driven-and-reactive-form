import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NotOfAgeDirective } from './notOfAge.directive';
import { ConfirmPasswordDirective } from './confirmPassword.directive';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgClass,
    NotOfAgeDirective,
    ConfirmPasswordDirective,
  ],
  templateUrl: './profile-form.component.html',
  styleUrl: './profile-form.component.css'
})
export class ProfileFormComponent {

  model = {
    fullname: '',
    username: '',
    birth: ''
  }

  step = 1;

  previousStep () {
    if (this.step !== 1) this.step -= 1;
  }

  nextStep () {
    if (this.step !== 2) this.step += 1;
  }

  stepTitle() {
    switch (this.step) {
      case 1: return 'NAME';
      case 2: return 'BIRTH';
      default: return '';
    }
  }

  stepIsValid(profileForm: NgForm) {
    if (this.step === 1) {
      return (
        !!profileForm.form.controls?.['fullname'].value 
        && !!profileForm.form.controls?.['username'].value
        && !profileForm.form.controls?.['fullname'].errors
        && !profileForm.form.controls?.['username'].errors
      )
    } else {
      return (
        !!profileForm.form.controls?.['birth'].value 
        && !profileForm.form.controls?.['birth'].errors
      )
    }
  }

  onSubmit(profileForm: NgForm) {
    console.log(
      `
        Fullname: ${profileForm.form.controls?.['fullname'].value}
        Username: ${profileForm.form.controls?.['username'].value}
        Date of Birth: ${profileForm.form.controls}
        
      `
    );
    console.log(profileForm.form.controls)
  }
}
