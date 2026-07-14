import Inventory from "./inventory/Inventory.js";
import sampleItems from "./data/sampleItems.js";

const inventory = new Inventory();

// Add Sample Items
sampleItems.forEach(item => inventory.addItem(item));

console.log("========== ALL ITEMS ==========");

inventory.getAllItems().forEach(item => item.displayInfo());

console.log("\n========== SEARCH ==========");

console.log(inventory.findItem("Laptop"));

console.log("\n========== TOTAL VALUE ==========");

console.log(inventory.getTotalValue());

console.log("\n========== LOW STOCK ==========");

console.log(inventory.getLowStockItems());

console.log("\n========== SORT BY PRICE ==========");

console.log(inventory.sortByPrice());

console.log("\n========== UPDATE STOCK ==========");

inventory.updateStock(4, 3);

console.log(inventory.findItem("Bread"));

console.log("\n========== REMOVE ==========");

inventory.removeItem(3);

console.log(inventory.getAllItems());

console.log("\n========== UNDO ==========");

inventory.undo();

console.log(inventory.getAllItems());

console.log("\n========== STATS ==========");

console.log(inventory.generateStats());

console.log("\n========== CURRENT INVENTORY ==========");

console.log(`Current Items : ${inventory.getAllItems().length}`);