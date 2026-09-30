// 1. Define the shopping cart data
const shoppingCart = [
  { id: "p1", name: "Wireless Mouse", price: 29.99, quantity: 2 },
  { id: "p2", name: "Mechanical Keyboard", price: 89.99, quantity: 1 },
  { id: "p3", name: "USB-C Cable (6ft)", price: 12.5, quantity: 3 },
  { id: "p4", name: "Noise-Canceling Headphones", price: 149.0, quantity: 1 },
];

// 2. Use reduce to calculate the absolute total
const cartTotal = shoppingCart.reduce((accumulator, currentItem) => {
  // Multiply price by quantity for the item, then add it to the accumulator
  const itemTotal = currentItem.price * currentItem.quantity;
  return accumulator + itemTotal;
}, 0); // 0 is the starting initialValue

// 3. Output the result formatted as currency
console.log(`Grand Total: $${cartTotal.toFixed(2)}`);
// Output: Grand Total: \$298.96
