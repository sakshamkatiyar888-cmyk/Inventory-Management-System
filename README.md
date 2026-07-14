# 📦 Inventory Management System

A console-based Inventory Management System built using JavaScript (ES6) and Object-Oriented Programming concepts.

## 🚀 Features

- Add new items
- Remove items
- Search items by name
- Update stock quantity
- Calculate total inventory value
- Find low stock items
- Sort items by price
- Generate inventory statistics
- Undo last operation
- Support for different item types using inheritance

## 🛠 Technologies Used

- JavaScript (ES6)
- Node.js
- Object-Oriented Programming (OOP)
- ES Modules

## 📂 Project Structure

```
Inventory System/
│── data/
│   └── sampleItems.js
│
│── inventory/
│   └── Inventory.js
│
│── model/
│   ├── Item.js
│   ├── ElectronicItem.js
│   └── GroceryItem.js
│
│── index.js
│── package.json
│── README.md
```

## ▶️ How to Run

1. Clone the repository

```bash
git clone <repository-url>
```

2. Open the project folder

```bash
cd inventory-system
```

3. Run the project

```bash
node index.js
```

## 📊 Sample Output

```
========== STATS ==========
{
  totalItems: 4,
  electronics: 2,
  groceries: 2,
  lowStock: 1,
  totalValue: 651120
}
```

## 📚 Concepts Used

- Classes & Objects
- Inheritance
- Constructors
- Getters & Setters
- Static Properties
- Closures
- Higher Order Functions
- Array Methods
- ES6 Modules

## 👨‍💻 Author

Saksham Katiyar