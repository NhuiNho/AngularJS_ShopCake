import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../user';
import { UserService } from '../user.service';
import { LoginForm, RegisterForm } from './auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: boolean = false;
  userId: string | undefined;
  isAdmin: boolean = false;
  isloading: boolean = false;
  users: Users[] = []
  constructor(private router: Router, private user: UserService) {
    user.getAllUserList().subscribe(data => {
      this.users = data;
    })
    this.ngOnInit()
  }

  ngOnInit() {
    var loggedInUserString = localStorage.getItem('loggedInUser');
    if (loggedInUserString) {
      this.userId = localStorage.getItem('user_id') || undefined;
      if (localStorage.getItem('status') == 'admin') {
        this.isAdmin = true;
      }
      return true;
    } else {
      return false;
    }
    return false;
  }
  login(form: LoginForm) {
    this.users.forEach(element => {
      if (element.email == form.email) {
        if (element.password == form.password) {
          this.isAuthenticated = true;
          this.router.navigate(['']);
          this.userId = String(element.id);
          localStorage.setItem('loggedInUser', 'true');
          localStorage.setItem('user_id', String(this.userId))
          localStorage.setItem('status', element.status)
        } else {
          alert('login not success');
          this.isAuthenticated = false;
        }
      }
    });
  }
  register(form: RegisterForm) {
    if (form.password != form.comfirm_password) {
      return;
    } else {
      this.user.AddUser({
        "name": form.name,
        "email": form.email,
        "password": form.password,
        "phone": form.phone,
        "status": form.status
      }).subscribe(user => { })
      this.router.navigate(['login']);
    }
  }
  logout() {
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('user_id');
    localStorage.removeItem('status');
    this.isAdmin = false;
    this.userId = undefined;
    this.router.navigate(['login']);
  }
}
