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
            foundItem.quantity += 1;
        } else {
            this.itens.push(new CartItem(menuItem));
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
