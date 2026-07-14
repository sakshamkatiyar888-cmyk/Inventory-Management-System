import Item from "./Item.js";

class GroceryItem extends Item {

    constructor(id, name, quantity, price, expiryDate) {

        super(id, name, quantity, price);

        this.expiryDate = expiryDate;

    }

    displayInfo() {

        console.log(`
Grocery Item
-----------------
Name : ${this.name}
Price : ₹${this.price}
Quantity : ${this.quantity}
Expiry : ${this.expiryDate}
        `);

    }

}

export default GroceryItem;