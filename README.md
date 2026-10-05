# Emart: Online Shopping in Nepal

Final project for the Frontend Development Training (10 days). A demo e-commerce store for Nepali products, built
with **React**, **React Router** and **Tailwind CSS**. It uses mock data and has no backend. Prices are in NPR.

## Features
- 6 pages: Home, Shop, Product Details, Cart, About, Contact (plus a 404 page)
- 12 Nepali products in 4 categories: Food & Tea, Clothing, Handicrafts, Home & Living
- Live search, category filter, sorting by price or rating
- Add to cart, remove, quantity +/-, subtotal, shipping (Rs. 150, free over Rs. 3,000) and total
- Cart saved in `localStorage` so it survives a refresh
- Contact form with validation
- Responsive layout for mobile, tablet and desktop

## Run locally
```bash
npm install
npm run dev
```
Open the URL shown in the terminal (usually http://localhost:5173).

## Build and deploy
```bash
npm run build
```
Deploy the `dist` folder on Netlify or Vercel. `public/_redirects` already handles page refreshes on Netlify.

## Folder structure
```
src/
  components/   Navbar, Footer, Hero, ProductCard, ProductList, SearchBar,
                CategoryFilter, CartItem, CartSummary, QuantityControl,
                ContactForm, ProductImage, Rating, SectionHeading, ScrollToTop
  context/      CartContext.jsx (cart state shared by all pages)
  data/         products.js, content.js (mock data)
  pages/        Home, Products, ProductDetails, Cart, About, Contact, NotFound
  utils/        format.js (NPR price formatting)
  App.jsx, main.jsx, index.css
```

## Product photos
Put JPG photos in `public/images/` using the file names listed in `public/images/README.txt`
(for example `ilam-tea.jpg`). Each product's `image` path is set in `src/data/products.js`.
If a photo is missing, `ProductImage` shows a drawn illustration instead.
