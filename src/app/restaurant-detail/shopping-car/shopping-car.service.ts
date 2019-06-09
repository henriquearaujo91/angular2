import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

export class ShoppingCarService {
    itens: CartItem[] = [];

    clear() {
        this.itens = [];
    }

    addItem(menuItem: MenuItem) {
        let foundItem = this.itens.find((mItem) => mItem.menuItem.id === menuItem.id);
        if (foundItem) {
            this.increseQty(foundItem);
        } else {
            this.itens.push(new CartItem(menuItem));
        }
    }

    increseQty(item: CartItem) {
        item.quantity += 1;
    }

    decreseQty(item: CartItem) {
        item.quantity -= 1;
        if (item.quantity === 0) {
            this.removeItem(item);
        }
    }

    removeItem(item: CartItem) {
        this.itens.splice(this.itens.indexOf(item), 1);
    }

    total(): number {
        let coutValorTotal = 0;
        this.itens.forEach(item => {
            coutValorTotal += item.value();
        });
        /*outro modo de fazer
        this.itens
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 1);*/

        return coutValorTotal;
    }

}
