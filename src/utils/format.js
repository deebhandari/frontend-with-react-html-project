// Prices are in Nepali rupees (NPR), shown like "Rs. 4,800".
export const money = (amount) => `Rs. ${Math.round(amount).toLocaleString("en-IN")}`;
