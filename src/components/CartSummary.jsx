import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { money } from "../utils/format.js";

export default function CartSummary() {
  const { subtotal, shipping, total, freeShippingOver, clearCart } = useCart();
  const [ordered, setOrdered] = useState(false);

  const placeOrder = () => {
    clearCart();
    setOrdered(true);
  };

  if (ordered) {
    return (
      <aside className="rounded-lg border border-line bg-white p-6">
        <h2 className="font-display text-xl font-bold text-brand">Order placed</h2>
        <p className="mt-2 text-muted">This is a demo store, so no payment was taken. Thanks for trying it out.</p>
      </aside>
    );
  }

  return (
    <aside className="h-fit rounded-lg border border-line bg-white p-6 lg:sticky lg:top-24">
      <h2 className="font-display text-xl font-bold">Order summary</h2>
      <dl className="mt-4 space-y-3 text-sm">
        <div className="flex justify-between">
          <dt className="text-muted">Subtotal</dt>
          <dd>{money(subtotal)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-muted">Shipping</dt>
          <dd>{shipping === 0 ? "Free" : money(shipping)}</dd>
        </div>
        <div className="flex justify-between border-t border-line pt-3 text-base font-semibold">
          <dt>Total</dt>
          <dd>{money(total)}</dd>
        </div>
      </dl>
      {shipping > 0 && (
        <p className="mt-3 text-sm text-muted">
          Add {money(freeShippingOver - subtotal)} more for free delivery.
        </p>
      )}
      <button
        type="button"
        onClick={placeOrder}
        className="mt-5 w-full rounded-md bg-brand px-4 py-3 font-semibold text-white hover:bg-brand-dark"
      >
        Place demo order
      </button>
      <button type="button" onClick={clearCart} className="mt-3 w-full text-sm text-muted underline hover:text-ink">
        Empty cart
      </button>
    </aside>
  );
}
