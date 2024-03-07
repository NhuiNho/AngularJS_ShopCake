import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Lab10_2';
  constructor(private authService: AuthService, private router: Router) { }
  isAuthenticated() {
    return this.authService.ngOnInit();
  }
  isAdmin() {
    return this.authService.isAdmin;
  }
  logout() {
    this.authService.logout();
  }
}
