import ProductCard from "./ProductCard.jsx";

export default function ProductList({ products }) {
  // Conditional rendering: show an empty state when nothing matches.
  if (products.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-line bg-white p-10 text-center">
        <p className="font-display text-xl font-semibold">No products found</p>
        <p className="mt-2 text-muted">Try a different search word or choose another category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
