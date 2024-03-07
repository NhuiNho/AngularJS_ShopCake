import { Component } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Products[] = []
  filterProductList: Products[] = []
  searching: string = ''
  constructor(private prod: ProductsService) {
    prod.getAllProductList().subscribe(data => {
      this.products = data
      this.filterProductList = this.products
    })

  }
  filterResults() {
    if (!this.products) {
      this.filterProductList = this.products
    }
    this.filterProductList = this.products.filter(
      item => item?.productName.toLowerCase().includes(this.searching.toLowerCase())
    )
  }
  onModalShow() {
    console.log('Modal shown');
    // Các hành động khi modal được mở
  }

  onModalHide() {
    console.log('Modal hidden');
    // Các hành động khi modal được đóng
  }
  check() {
    console.log(1);

  }


}
