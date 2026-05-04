import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DynamicData } from '../../Services/dynamic-data';

@Component({
  selector: 'app-sign-up',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  signupForm: FormGroup;
  private fb = inject(FormBuilder);
  private dynamicData = inject(DynamicData);
  private router = inject(Router);

  constructor() {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      address: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(1)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.dynamicData.registerUser(this.signupForm.value).subscribe({
        next: () => {
          alert('User registered successfully');
          this.router.navigate(['/signin']);
        },
        error: (err) => {
          console.error(err);
          alert('Failed to register user');
        }
      });
    }
  }
}
