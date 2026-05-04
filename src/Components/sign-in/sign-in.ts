import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-sign-in',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {
  signinForm: FormGroup;
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);

  constructor() {
    this.signinForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signinForm.valid) {
      const { username, password } = this.signinForm.value;
      const isAdmin = username === 'admin' && password === 'admin';
      const token = btoa(username + ':' + password);
      
      this.authService.login(token, isAdmin);
      alert(isAdmin ? 'Signed in as Admin!' : 'Signed in as User!');
      this.router.navigate(['/home']);
    }
  }
}
