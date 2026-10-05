import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { products } from "../data/products.js";
import { money } from "../utils/format.js";
import ProductImage from "../components/ProductImage.jsx";
import Rating from "../components/Rating.jsx";
import QuantityControl from "../components/QuantityControl.jsx";
import ProductCard from "../components/ProductCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-bold">Product not found</h1>
        <p className="mt-2 text-muted">It may have been removed.</p>
        <Link to="/products" className="mt-6 inline-block rounded-md bg-brand px-6 py-3 font-semibold text-white">
          Back to shop
        </Link>
      </div>
    );
  }

  const related = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4);

  const handleAdd = () => {
    addToCart(product.id, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Link to="/products" className="text-sm text-muted underline hover:text-ink">
        Back to shop
      </Link>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <ProductImage product={product} className="aspect-square w-full rounded-lg" />

        <div>
          <p className="text-sm text-muted">{product.category}</p>
          <h1 className="mt-1 font-display text-3xl font-bold text-brand sm:text-4xl">{product.name}</h1>
          <div className="mt-2">
            <Rating value={product.rating} />
          </div>
          <p className="mt-4 text-2xl font-semibold">{money(product.price)}</p>
          <p className="mt-4 max-w-prose leading-relaxed text-muted">{product.description}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QuantityControl
              quantity={quantity}
              onIncrease={() => setQuantity(quantity + 1)}
              onDecrease={() => setQuantity(Math.max(1, quantity - 1))}
            />
            <button
              type="button"
              onClick={handleAdd}
              className="rounded-md bg-accent px-6 py-3 font-semibold text-ink hover:brightness-95"
            >
              Add {quantity} to cart
            </button>
          </div>
          {added && (
            <p className="mt-4 text-sm text-brand" role="status">
              Added to your cart. <Link to="/cart" className="font-semibold underline">View cart</Link>
            </p>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <section className="pt-16">
          <SectionHeading title={`More in ${product.category}`} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
