import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from './products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) { }
  protected productsList: Products[] = [];

  private URL = 'http://localhost:3000/products';
  getAllProductList(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.URL}`);
  }
  ganGiaTri() {
    this.http.get<Products[]>(`${this.URL}`).subscribe(data => {
      this.productsList = data
    })
  }
  getProductId(id: string): Products | undefined {
    return this.productsList.find((i) => i.id == id);
  }
  getProductId1(id: number) {
    return this.http.get<Products>(`${this.URL}/${id}`);
  }
  searchId(id: string) {
    return this.productsList.find((item) => item.id == id);
  }
  AddProduct(frmProduct: any): Observable<Products[]> {
    return this.http.post<Products[]>(`${this.URL}`, frmProduct);
  }
  EditProduct(index: number) {
    return this.productsList[index];
  }
  UpdateProduct(id: number, frmProduct: any): Observable<Products[]> {
    return this.http.put<Products[]>(`${this.URL}/${id}`, frmProduct);
  }
  DeleteProduct(id: number): Observable<Products[]> {
    return this.http.delete<Products[]>(`${this.URL}/${id}`);
  }
}
