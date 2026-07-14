import ElectronicItem from "../model/ElectronicItem.js";
import GroceryItem from "../model/GroceryItem.js";

function Inventory() {

    let items = [];
    let history = [];

    function saveState() {
        history.push([...items]);
    }

    this.addItem = function (item) {

        const exists = items.some(i => i.id === item.id);

        if (exists) {
            console.log("Duplicate ID not allowed");
            return;
        }

        saveState();
        items.push(item);

    };

    this.removeItem = function (id) {

        saveState();

        items = items.filter(item => item.id !== id);

    };

    this.findItem = function (name) {

        return items.find(item =>
            item.name.toLowerCase() === name.toLowerCase()
        );

    };

    this.updateStock = function (id, quantity) {

        saveState();

        const item = items.find(item => item.id === id);

        if (item) {
            item.updateQuantity(quantity);
        }

    };

    this.getAllItems = function () {

        return items;

    };

    this.getTotalValue = function () {

        return items.reduce((sum, item) => {

            return sum + item.price * item.quantity;

        }, 0);

    };

    this.getLowStockItems = function () {

        return items.filter(item => item.quantity < 5);

    };

    this.sortByPrice = function () {

        return [...items].sort((a, b) => a.price - b.price);

    };

    this.sortByName = function () {

        return [...items].sort((a, b) => a.name.localeCompare(b.name));

    };

    // instanceof use kiya hai
    this.filterElectronics = function () {

        return items.filter(item => item instanceof ElectronicItem);

    };

    this.filterGroceries = function () {

        return items.filter(item => item instanceof GroceryItem);

    };

    this.generateStats = function () {

        return {

            totalItems: items.length,

            electronics: this.filterElectronics().length,

            groceries: this.filterGroceries().length,

            lowStock: this.getLowStockItems().length,

            totalValue: this.getTotalValue()

        };

    };

    this.undo = function () {

        if (history.length === 0) {

            console.log("Nothing to Undo");
            return;

        }

        items = history.pop();

    };

}

export default Inventory;