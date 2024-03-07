import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from '../auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: LoginForm = {
    email: '',
    password: ''
  }
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {
    if (this.isAuthenticated()) {
      alert("Bạn đã đăng nhập, Không thể đăng nhập nữa")
      this.router.navigate(['']);
    }
  }
  submit() {
    this.authService.login(this.form)
  }
  isAuthenticated() {
    return this.authService.ngOnInit()
  }
}
