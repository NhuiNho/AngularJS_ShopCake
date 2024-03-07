import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'product-list', component: ProductListComponent, title: 'Product List' },
  { path: 'product-details/:id', component: ProductDetailsComponent, title: 'Product Details' },
  { path: 'cart', component: CartComponent, title: 'Cart' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'register', component: RegisterComponent, title: 'Register' },
  { path: 'user-list', component: UserListComponent, title: 'User List' },
  { path: 'orders', component: OrdersComponent, title: 'Orders' },
  { path: 'order-list', component: OrderListComponent, title: 'Order List' },
  { path: 'order-history', component: OrderHistoryComponent, title: 'Order History' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
