import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'app/restaurant-detail/shopping-car/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[];

  @Output() increseQty = new EventEmitter<CartItem>();
  @Output() decreseQty = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();


  constructor() { }

  ngOnInit() {
  }

  emitIncreseQty(item: CartItem) {
    this.increseQty.emit(item);
  }

  emitDecreseQty(item: CartItem) {
    this.decreseQty.emit(item);
  }

  emitRemove(item: CartItem) {
    this.remove.emit(item);
  }

  showItems(): boolean {
    return this.items.length > 0;
  }
}
