export default function QuantityControl({ quantity, onIncrease, onDecrease }) {
  return (
    <div className="inline-flex items-center rounded-md border border-line bg-white">
      <button
        type="button"
        onClick={onDecrease}
        aria-label="Decrease quantity"
        className="px-3 py-1.5 text-lg hover:bg-line/50"
      >
        −
      </button>
      <span className="min-w-8 text-center text-sm font-semibold" aria-live="polite">
        {quantity}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        aria-label="Increase quantity"
        className="px-3 py-1.5 text-lg hover:bg-line/50"
      >
        +
      </button>
    </div>
  );
}
