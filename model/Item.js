class Item {

    static totalItems = 0;

    constructor(id, name, quantity, price) {

        this.id = id;
        this.name = name;
        this.stock = quantity;
        this.price = price;

        Item.totalItems++;
    }

    get stock() {
        return this.quantity;
    }

    set stock(value) {

        if (value < 0) {
            throw new Error("Quantity cannot be negative");
        }

        this.quantity = value;
    }

    updateQuantity(value) {
        this.stock = value;
    }

    displayInfo() {

        console.log(`
ID : ${this.id}
Name : ${this.name}
Price : ₹${this.price}
Quantity : ${this.quantity}
        `);

    }

    static showTotalItems() {
        console.log(`Total Items : ${Item.totalItems}`);
    }

}

export default Item;