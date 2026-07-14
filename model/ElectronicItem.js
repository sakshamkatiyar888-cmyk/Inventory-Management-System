import Item from "./Item.js";

class ElectronicItem extends Item {

    constructor(id, name, quantity, price, warranty) {

        super(id, name, quantity, price);

        this.warranty = warranty;

    }

    displayInfo() {

        console.log(`
Electronic Item
-----------------
Name : ${this.name}
Price : ₹${this.price}
Quantity : ${this.quantity}
Warranty : ${this.warranty}
        `);

    }

}

export default ElectronicItem;