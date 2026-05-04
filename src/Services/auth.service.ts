import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.loggedInSubject.asObservable();

  constructor() {}

  private hasToken(): boolean {
    if (typeof localStorage !== 'undefined') {
      return !!localStorage.getItem('token');
    }
    return false;
  }

  login(token: string, isAdmin: boolean = false): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('token', token);
      if (isAdmin) {
        localStorage.setItem('role', 'admin');
      } else {
        localStorage.setItem('role', 'user');
      }
    }
    this.loggedInSubject.next(true);
  }

  logout(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
    }
    this.loggedInSubject.next(false);
  }

  isLoggedIn(): boolean {
    return this.hasToken();
  }

  isAdmin(): boolean {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('role') === 'admin';
    }
    return false;
  }
}

