import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-car/cart-item.model';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOption: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartao de Debito', value: 'DEB' },
    { label: 'Cartao Refeicao', value: 'REF' }
  ];

  delivery = 8;

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() {
  }

  itemsValue(): number {
    return this.orderService.itemsVelue();
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }

  increseQty(item: CartItem) {
    this.orderService.increseQty(item);
  }

  decreseQty(item: CartItem) {
    this.orderService.decreseQty(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }
  checkOrder(order: Order) {
    order.orderItems = this.cartItems()
      .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));
    this.orderService.checkOrder(order)
      .subscribe((orderId: string) => {
        this.router.navigate(['order-summary']);
        this.orderService.clear();
      });
    console.log(order);
  }
}
