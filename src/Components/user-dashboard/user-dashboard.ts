import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DynamicData } from '../../Services/dynamic-data';
import { Iusers } from '../../Models/iusers';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user-dashboard',
  imports: [AsyncPipe],
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.css',
    changeDetection:ChangeDetectionStrategy.OnPush

})
export class UserDashboard implements OnInit {

  users: Iusers[] = [];
  filteredUsers: Iusers[] = [];
  selectedUser: Iusers | null = null;
  loading = true;
  errorMessage = '';
  searchTerm = '';
  
  constructor(private dynamicData: DynamicData, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;
    this.errorMessage = '';

    this.dynamicData.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.filteredUsers = data;
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.errorMessage = 'Could not load users.';
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }

  onSearch(term: string): void {
    this.searchTerm = term;
    this.applyFilter();
  }

  selectUser(user: Iusers): void {
    this.selectedUser = this.selectedUser?.id === user.id ? null : user;
  }

  deleteUser(user: Iusers): void {
    if (!confirm(`Delete ${user.name}?`)) {
      return;
    }

    this.dynamicData.deleteUser(user.id).subscribe({
      next: () => {
        this.selectedUser = this.selectedUser?.id === user.id ? null : this.selectedUser;
        this.loadUsers();
      },
      error: () => {
        this.errorMessage = 'Could not delete the user from dynamic service.';
        this.cdr.markForCheck();
      },
    });
  }

  initials(name: string): string {
    return name
      .split(' ')
      .slice(0, 2)
      .map((part) => part.charAt(0).toUpperCase())
      .join('');
  }

  get totalUsers(): number {
    return this.users.length;
  }

  get averageAge(): number {
    if (this.users.length === 0) {
      return 0;
    }

    const totalAge = this.users.reduce((sum, user) => sum + user.age, 0);
    return Math.round(totalAge / this.users.length);
  }

  get youngestAge(): number {
    if (this.users.length === 0) {
      return 0;
    }

    return Math.min(...this.users.map((user) => user.age));
  }

  get oldestAge(): number {
    if (this.users.length === 0) {
      return 0;
    }

    return Math.max(...this.users.map((user) => user.age));
  }

  private applyFilter(): void {
    const query = this.searchTerm.trim().toLowerCase();
    this.filteredUsers = this.users.filter((user) => {
      if (!query) {
        return true;
      }

      return (
        user.name.toLowerCase().includes(query) ||
        user.username.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.address.toLowerCase().includes(query)
      );
    });
  }
}
