export class Order {
    constructor(
        public address: string,
        public number: number,
        public optionalAddress: string,
        public paymantOption: string,
        public orderItems: OrderItem[] = []
    ) { }
}

export class OrderItem {
    constructor(public quantity: number, public menuId: string) { }
}
