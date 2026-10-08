import { Link } from "react-router-dom";
import { categories } from "../data/products.js";

export default function Footer() {
  return (
    <footer className="mt-16 bg-brand-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold">Emart</p>
          <p className="mt-3 max-w-xs text-sm text-white/70">
            Online shopping for Nepali food, clothing, handicrafts and home goods. Delivered across Nepal.
          </p>
        </div>
        <div>
          <p className="font-semibold">Shop</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            {categories.map((category) => (
              <li key={category}>
                <Link className="hover:text-white" to={`/products?category=${encodeURIComponent(category)}`}>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold">Help</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><Link className="hover:text-white" to="/about">About us</Link></li>
            <li><Link className="hover:text-white" to="/contact">Contact</Link></li>
            <li><Link className="hover:text-white" to="/cart">Your cart</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Emart, Kathmandu. A student project with demo products.
      </div>
    </footer>
  );
}
