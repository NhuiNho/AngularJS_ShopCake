import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  protected userList: Users[] = []

  private URL = 'http://localhost:3000/users';
  getAllUserList(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.URL}`);
  }
  getUserId(id: number): Users | undefined {
    return this.userList.find((i) => i.id == id);
  }
  getUserId1(id: string) {
    return this.http.get<Users>(`${this.URL}/${id}`);
  }
  getUserEmail(email: string): Users | undefined {
    return this.userList.find((i) => i.email == email);
  }
  searchId(id: number) {
    return this.userList.find((item) => item.id == id);
  }
  AddUser(frmProduct: any): Observable<Users[]> {
    return this.http.post<Users[]>(`${this.URL}`, frmProduct);
  }
  EditUser(index: number) {
    return this.userList[index];
  }
  UpdateUser(id: number, frmProduct: any): Observable<Users[]> {
    return this.http.put<Users[]>(`${this.URL}/${id}`, frmProduct);
  }
  DeleteUser(id: number): Observable<Users[]> {
    return this.http.delete<Users[]>(`${this.URL}/${id}`);
  }
  checkUser(frmProduct: any) {
    return this.userList.find((i) => i.email == frmProduct.email && i.password == frmProduct.password);
  }
}
