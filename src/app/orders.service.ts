import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from './orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  protected orders: Orders[] = []
  private URL = 'http://localhost:3000/orders';
  constructor(private http: HttpClient) {
    this.http.get<Orders[]>(`${this.URL}`).subscribe(data => {
      this.orders = data;
    })
  }
  AddOrder(frmProduct: any): Observable<Orders[]> {
    return this.http.post<Orders[]>(`${this.URL}`, frmProduct);
  }
  getAllOrders(): Observable<Orders[]> {
    return this.http.get<Orders[]>(`${this.URL}`);
  }
  cancelOrder(id: string): Observable<Orders[]> {
    return this.http.delete<Orders[]>(`${this.URL}/${id}`);
  }

  getOrderUserId(userId: string): Observable<Orders[]> {
    return this.http.get<Orders[]>(`${this.URL}?user.id=${userId}`)
  }
}
