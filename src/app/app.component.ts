import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ReactiveProfileFormComponent } from './reactive-profile-form/reactive-profile-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProfileFormComponent,
    ReactiveProfileFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-form';
}
