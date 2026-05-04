import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Iusers } from '../Models/iusers';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class DynamicData {
  private readonly usersUrl = 'http://localhost:2000/users';
  private authService = inject(AuthService);

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<Iusers[]> {
    return this.http.get<unknown>(this.usersUrl).pipe(
      map((response) => this.normalizeUsersResponse(response)),
      catchError((err) => {
        console.error('Error fetching users:', err);
        return throwError(() => err);
      })
    );
  }

  getUserById(id: number): Observable<Iusers | undefined> {
    return new Observable((observer) => {
      this.getAllUsers().subscribe({
        next: (users) => {
          const user = users.find((u) => u.id === id);
          observer.next(user);
          observer.complete();
        },
        error: (err) => observer.error(err),
      });
    });
  }

  deleteUser(id: number): Observable<void> {
    if (!this.authService.isAdmin()) {
      return throwError(() => new Error('Unauthorized: Admin access required to delete users.'));
    }
    return this.http.delete<void>(`${this.usersUrl}/${id}`);
  }

  saveUser(user: Omit<Iusers, 'id'> | Iusers): Observable<Iusers> {
    if (!this.authService.isAdmin()) {
      return throwError(() => new Error('Unauthorized: Admin access required to save users.'));
    }
    return this.http.post<Iusers>(this.usersUrl, user);
  }

  registerUser(user: Omit<Iusers, 'id'> | Iusers): Observable<Iusers> {
    return this.http.post<Iusers>(this.usersUrl, user);
  }

  updateUser(id: number, user: Partial<Iusers>): Observable<Iusers> {
    if (!this.authService.isAdmin()) {
      return throwError(() => new Error('Unauthorized: Admin access required to update users.'));
    }
    return this.http.put<Iusers>(`${this.usersUrl}/${id}`, user);
  }

  private extractUsers(response: unknown): unknown[] {
    if (Array.isArray(response)) {
      return response;
    }

    if (response && typeof response === 'object') {
      const record = response as Record<string, unknown>;
      if (Array.isArray(record['users'])) {
        return record['users'];
      }
    }

    return [];
  }

  private normalizeUser(raw: unknown): Iusers {
    const user = (raw ?? {}) as Record<string, unknown>;
    const id = Number(user['id'] ?? 0);
    const firstName = String(user['firstName'] ?? '').trim();
    const lastName = String(user['lastName'] ?? '').trim();
    const combinedName = `${firstName} ${lastName}`.trim();
    const name = String(user['name'] ?? combinedName ?? '').trim() || `User ${id || ''}`.trim();
    const username =
      String(user['username'] ?? '').trim() ||
      name.toLowerCase().replace(/\s+/g, '_') ||
      `user_${id}`;
    const email = String(user['email'] ?? '').trim();
    const password = String(user['password'] ?? '').trim();
    const confirmPassword = String(user['confirm_password'] ?? '').trim() || password;
    const age = Number(user['age'] ?? 0);
    const address = this.normalizeAddress(user['address']);

    return {
      id,
      name,
      address,
      age,
      username,
      email,
      password,
      confirm_password: confirmPassword,
    };
  }

  private normalizeUsersResponse(response: unknown): Iusers[] {
    return this.extractUsers(response)
      .map((user) => this.normalizeUser(user))
      .filter((user) => user.id > 0);
  }

  private normalizeAddress(address: unknown): string {
    if (typeof address === 'string') {
      return address;
    }

    if (!address || typeof address !== 'object') {
      return 'N/A';
    }

    const addressObj = address as Record<string, unknown>;
    const parts = [
      String(addressObj['address'] ?? '').trim(),
      String(addressObj['city'] ?? '').trim(),
      String(addressObj['state'] ?? '').trim(),
      String(addressObj['country'] ?? '').trim(),
    ].filter(Boolean);

    return parts.join(', ') || 'N/A';
  }
}
