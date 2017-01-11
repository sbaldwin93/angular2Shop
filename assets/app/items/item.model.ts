export class Item {
    name: string;
    quantity: string;
    type: string;
    username: string;
    itemId?: string;
    userId?: string;

    constructor(name: string, quantity: string, type: string, username: string, itemId?: string, userId?: string) {
        this.name = name;
        this.quantity = quantity;
        this.type = type;
        this.username = username;
        this.itemId = itemId;
        this.userId = userId;
    }
}