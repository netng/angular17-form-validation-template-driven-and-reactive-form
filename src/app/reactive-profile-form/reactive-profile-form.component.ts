import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { notOfAgeValidator } from './notOfAge.directive';
import { confirmPasswordValidator } from './confirmPassword.directive';

@Component({
  selector: 'app-reactive-profile-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './reactive-profile-form.component.html',
  styleUrl: './reactive-profile-form.component.css'
})
export class ReactiveProfileFormComponent {
  profileForm = new FormGroup({
    name: new FormGroup({
      fullname: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      username: new FormControl('', Validators.required),
    }),
    birth: new FormControl('', [
        Validators.required,
        notOfAgeValidator
    ]),
    // password: new FormControl('', Validators.required),
    // confirmPassword: new FormControl('', Validators.required)
  }, {validators: confirmPasswordValidator});

  name = this.profileForm.controls.name;
  step: number = 1;

  previousStep () {
    if (this.step !== 1) this.step -= 1;
  }

  nextStep () {
    console.log(this.profileForm)
    if (this.step !== 2) this.step += 1;
  }

  stepIsValid () {
    if (this.step === 1) {
      return (
        !!this.name.value.fullname
        && !!this.name.value.username
        && !this.name.controls.fullname.errors
        && !this.name.controls.username.errors
      )
    } else {
      return false;
    }
  }

  stepTitle () {
    switch (this.step) {
      case 1: return 'NAME'
      case 2: return 'BIRTH'
      default: return ''
    }
  }
  onSubmit () {
    console.log(
      `
        Full name is ${this.name.value.fullname}
        Username is ${this.name.value.username}
        Date of Birth is ${this.profileForm.value.birth}
      `
    )
  }
}

