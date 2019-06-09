import { Injectable } from "@angular/core";
import { ShoppingCarService } from "app/restaurant-detail/shopping-car/shopping-car.service";
import { CartItem } from "app/restaurant-detail/shopping-car/cart-item.model";

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCarService) { }

    itemsVelue(): number {
        return this.cartService.total();
    }

    cartItems(): CartItem[] {
        return this.cartService.itens;
    }

    increseQty(item: CartItem) {
        this.cartService.increseQty(item);
    }

    decreseQty(item: CartItem) {
        this.cartService.decreseQty(item);
    }
    remove(item: CartItem) {
        this.cartService.removeItem(item);
    }
}
