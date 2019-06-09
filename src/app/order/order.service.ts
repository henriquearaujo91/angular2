import { Injectable } from "@angular/core";
import { ShoppingCarService } from "app/restaurant-detail/shopping-car/shopping-car.service";
import { CartItem } from "app/restaurant-detail/shopping-car/cart-item.model";
import { Observable } from "rxjs/Observable";
import { Order } from "./order.model";
import { Http, RequestOptions, Headers } from "@angular/http";
import { MEAT_API } from "app/app.api";

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCarService, private http: Http) { }

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
    checkOrder(order: Order): Observable<string> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(`${MEAT_API}/orders`,
            JSON.stringify(order),
            new RequestOptions({ headers: headers }))
            .map(response => response.json())
            .map(order => order.id);
    }
    clear() {
        this.cartService.clear();
    }
}
