import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterForm } from '../auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form: RegisterForm = {
    name: '',
    email: '',
    password: '',
    comfirm_password: '',
    phone: '',
    status: 'user'
  };
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {
    if (this.isAuthenticated()) {
      alert("Bạn đã đăng nhập, Không thể đăng ký tài khoản")
      this.router.navigate(['']);
    }
  }
  submit() {
    this.authService.register(this.form);
  }
  isAuthenticated() {
    return this.authService.ngOnInit()
  }
}
