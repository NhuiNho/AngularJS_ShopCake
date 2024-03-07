import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Carts } from '../cart';
import { CartService } from '../cart.service';
import { OrdersService } from '../orders.service';
import { Users } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  userId: string | undefined;
  protected productList: Carts[] = []
  protected user: Users | undefined
  constructor(private ordersService: OrdersService, private authService: AuthService, private cartService: CartService, private userService: UserService,
    private router: Router) {
    this.preload()
  }

  preload() {
    this.authService.ngOnInit()
    this.userId = this.authService.userId;
    this.cartService.getAllCartList(this.userId!).subscribe(carts => {
      this.productList = carts
    })
    this.userService.getUserId1(this.userId!).subscribe(i => {
      this.user = i
    })
  }

  ngOnInit(): void {
    this.preload()
  }

  itemCount() {
    return this.cartService.ItemCount(this.userId!)
  }

  itemSum() {
    return this.cartService.ItemSum(this.userId!)
  }

  add() {
    var item = {
      "user": this.user,
      "products": this.productList
    }
    this.ordersService.AddOrder(item).subscribe((result) => {
    })
    item.products.forEach((product) => {
      this.cartService.DeleteCart(product.id).subscribe(res => {
      })
    })
    alert('Đơn hàng đã được đặt thành công')
    this.router.navigate(['']
    )
  }
}

