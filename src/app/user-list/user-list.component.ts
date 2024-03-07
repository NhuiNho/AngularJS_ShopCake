import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Users } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() userList: Users[] = [];
  formUser = new FormGroup({
    // id: new FormControl<number>(1),
    name: new FormControl<string>(''),
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
    phone: new FormControl<string>(''),
    status: new FormControl<string>(''),
  });
  constructor(private prod: UserService, private authService: AuthService) {
    prod.getAllUserList().subscribe(data => {
      this.userList = data;
    })
  }
  isAdmin() {
    return this.authService.isAdmin;
  }
  ngOnInit(): void {
    this.prod.getAllUserList().subscribe((data) => {
      this.userList = data;
    });
  }
  IsAdd: number = 1;
  IsUpdate: number = 0;
  Add() {
    // this.formProduct.controls['id'].setValue(this.autoId())
    this.prod.AddUser(this.formUser.value).subscribe((result) => {
      console.log(result)
      this.ngOnInit()
      this.resetForm()
    })
  }
  // On file Select
  id: any
  Edit(index: number) {
    this.id = this.userList[index].id
    this.formUser.controls['email'].setValue(this.userList[index].email)
    this.formUser.controls['name'].setValue(this.userList[index].name)
    this.formUser.controls['phone'].setValue(this.userList[index].phone)
    this.formUser.controls['password'].setValue(this.userList[index].password)
    this.formUser.controls['status'].setValue(this.userList[index].status)
  }
  Update() {
    this.prod.UpdateUser(this.id, this.formUser.value).subscribe((result) => {
      console.log(result)
      this.ngOnInit()
      this.resetForm()
    })
  }
  Delete(index: number) {
    this.id = this.userList[index].id
    this.prod.DeleteUser(this.id).subscribe((result) => {
      console.log(result)
      this.ngOnInit()
    })
  }
  resetForm() {
    this.formUser.reset()
  }
}
