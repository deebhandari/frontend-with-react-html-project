import { Link } from "react-router-dom";
import ProductImage from "./ProductImage.jsx";
import { products } from "../data/products.js";

export default function Hero() {
  const showcase = [5, 2, 8].map((id) => products.find((p) => p.id === id));

  return (
    <section className="bg-brand text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Made in Nepal, delivered to your door.
          </h1>
          <p className="mt-5 max-w-md text-lg text-white/80">
            Tea, honey, pashmina and handicrafts from Nepali farms and artisans. Shop online and pay by cash on delivery, eSewa or Khalti.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/products" className="rounded-md bg-accent px-6 py-3 font-semibold text-ink hover:brightness-95">
              Shop all products
            </Link>
            <Link
              to={`/products?category=${encodeURIComponent("Food & Tea")}`}
              className="rounded-md border border-white/40 px-6 py-3 font-semibold hover:bg-white/10"
            >
              Browse food and tea
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {showcase.map((product, index) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className={`overflow-hidden rounded-lg ${index === 1 ? "mt-8" : ""}`}
            >
              <ProductImage product={product} className="aspect-[3/4] w-full" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
