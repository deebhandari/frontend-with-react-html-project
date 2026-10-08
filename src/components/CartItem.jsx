import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { money } from "../utils/format.js";
import ProductImage from "./ProductImage.jsx";
import QuantityControl from "./QuantityControl.jsx";

export default function CartItem({ product, quantity }) {
  const { increase, decrease, removeFromCart } = useCart();

  return (
    <li className="flex gap-4 rounded-lg border border-line bg-white p-3 sm:p-4">
      <ProductImage product={product} className="h-24 w-24 shrink-0 rounded-md sm:h-28 sm:w-28" />
      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link to={`/products/${product.id}`} className="font-display font-semibold hover:text-brand">
              {product.name}
            </Link>
            <p className="text-sm text-muted">{money(product.price)} each</p>
          </div>
          <p className="font-semibold">{money(product.price * quantity)}</p>
        </div>
        <div className="mt-auto flex items-center justify-between pt-3">
          <QuantityControl
            quantity={quantity}
            onIncrease={() => increase(product.id)}
            onDecrease={() => decrease(product.id)}
          />
          <button
            type="button"
            onClick={() => removeFromCart(product.id)}
            className="text-sm text-muted underline hover:text-ink"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
}
