# 🛒 Shopping Cart Application with Free Gift Logic

A simple React app to add products to a cart, manage quantities, and unlock a free gift when subtotal crosses ₹1000.

---

## 📽 Deliverable

- ✅ Screen recording of the full development process (from reading the assignment to completing the code).
- 📤 Upload the screen recording to Google Drive.
- 🔗 Insert the link below once uploaded:

**Google Drive Link:** [Insert your link here]

---

## 🚀 Features

### ✅ Display Products

- Renders products from `PRODUCTS` constant.
- Each product includes:
  - Name and price.
  - `+` / `-` quantity buttons.
  - "Add to Cart" button.

---

### 🛍 Shopping Cart

- Cart appears below product list.
- Users can:
  - Update quantity of existing products.
  - Remove items from cart.
- Subtotal and total update dynamically.

---

### 🎁 Free Gift Logic

- Free gift (`Wireless Mouse`) auto-added when subtotal ≥ ₹1000.
- Gift shows in cart with:
  - A message: "Congrats! You've unlocked a Free Gift."
  - Progress bar indicating how close to threshold.
- Only **one gift** added.
- Gift **cannot** be manually removed.
- Gift is removed if subtotal drops below ₹1000.

---

### 🔧 State Management

- Uses React’s `useState` and `useEffect`.
- Tracks:
  - Product quantities
  - Cart items
  - Subtotal
  - Progress toward gift

---

### 💅 Styling

- Styled using `styled-components`.
- Clean, responsive UI.
- Progress bar and gift addition provide visual feedback.

---

## 🛠 Getting Started

### 1. Clone the Repository

bash
git clone https://github.com/your-username/shopping-cart-gift-app.git
cd shopping-cart-gift-app

### 2. Install Dependencies

bash
npm install

### 3. Run the Application

bash
npm start

App will run locally at: http://localhost:3000

---

## 📂 Provided Data

js
const PRODUCTS = [
{ id: 1, name: "Laptop", price: 500 },
{ id: 2, name: "Smartphone", price: 300 },
{ id: 3, name: "Headphones", price: 100 },
{ id: 4, name: "Smartwatch", price: 150 },
];

const FREE_GIFT = { id: 99, name: "Wireless Mouse", price: 0 };
const THRESHOLD = 1000;

---

## 📸 UI States

### ➖ Empty Cart

- Text: `"Your cart is currently empty."`

### ➕ After Adding Products

- Quantity, price, and total visible per product.
- Subtotal updates dynamically.
- Progress bar appears.

### 🎉 Free Gift Added

- Gift item shown automatically.
- Message: `"Congrats! You've unlocked a Free Gift."`
- If subtotal drops below ₹1000, gift is removed automatically.

---

## 📝 Submission Instructions

- Submit the Google Drive video link in the following form:  
  🔗 [https://forms.ccbp.in/ecloto_design_assignement_submission](https://forms.ccbp.in/ecloto_design_assignement_submission)

---

**Good luck and happy coding! 🚀**
