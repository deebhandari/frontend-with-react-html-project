import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import CartItem from "../components/CartItem.jsx";
import CartSummary from "../components/CartSummary.jsx";

export default function Cart() {
  const { lines } = useCart();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-bold text-brand">Your cart</h1>

      {lines.length === 0 ? (
        <div className="mt-8 rounded-lg border border-dashed border-line bg-white p-10 text-center">
          <p className="font-display text-xl font-semibold">Your cart is empty</p>
          <p className="mt-2 text-muted">Add some tea, honey or a pashmina to get started.</p>
          <Link to="/products" className="mt-6 inline-block rounded-md bg-accent px-6 py-3 font-semibold text-ink">
            Browse products
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
          <ul className="space-y-4">
            {lines.map((line) => (
              <CartItem key={line.product.id} product={line.product} quantity={line.quantity} />
            ))}
          </ul>
          <CartSummary />
        </div>
      )}
    </div>
  );
}
