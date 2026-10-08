import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { money } from "../utils/format.js";
import ProductImage from "./ProductImage.jsx";
import Rating from "./Rating.jsx";

// Props: `product` comes from the parent. State: `added` controls the button label.
export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-line bg-white">
      <Link to={`/products/${product.id}`} className="relative block">
        <ProductImage product={product} className="aspect-square w-full" />
        {product.tag && (
          <span className="absolute left-3 top-3 rounded bg-ink px-2 py-1 text-xs font-medium text-white">
            {product.tag}
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-sm text-muted">{product.category}</p>
        <h3 className="mt-1 font-display text-lg font-semibold leading-snug">
          <Link to={`/products/${product.id}`} className="hover:text-brand">
            {product.name}
          </Link>
        </h3>
        <Rating value={product.rating} />
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-lg font-semibold">{money(product.price)}</span>
          <button
            type="button"
            onClick={handleAdd}
            className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
              added ? "bg-brand text-white" : "bg-accent text-ink hover:brightness-95"
            }`}
          >
            {added ? "Added" : "Add to cart"}
          </button>
        </div>
      </div>
    </article>
  );
}
