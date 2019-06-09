import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-car/cart-item.model';

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

  constructor(private orderService: OrderService) { }

  ngOnInit() {
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
}
