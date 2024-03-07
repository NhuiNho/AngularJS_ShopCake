import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Orders } from '../orders';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent {
  protected orderList: Orders[] = [];
  userId: string | undefined
  constructor(private ordersService: OrdersService, private router: Router, private authService: AuthService) {
    this.authService.ngOnInit()
    this.userId = this.authService.userId;
    ordersService.getOrderUserId(this.userId!).subscribe(orders => {
      this.orderList = orders;
    })
  }

  ngOnInit(): void {
    this.ordersService.getOrderUserId(this.userId!).subscribe(orders => {
      this.orderList = orders;
    })
  }

  cancelOrder(id: string) {
    const userConfirmed = window.confirm("Bạn có chắc muốn hủy đơn hàng này ?");
    if (userConfirmed) {
      this.ordersService.cancelOrder(id).subscribe(data => {
        this.reloadCurrentRoute()
      })
    }
  }

  private reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
      this.ngOnInit()
    });
  }
}
