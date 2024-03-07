import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from '../orders';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent {
  protected orderList: Orders[] = [];
  constructor(private ordersService: OrdersService, private router: Router) {
    ordersService.getAllOrders().subscribe(orders => {
      this.orderList = orders
    })
  }



  ngOnInit(): void {
    this.ordersService.getAllOrders().subscribe(orders => {
      this.orderList = orders
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
