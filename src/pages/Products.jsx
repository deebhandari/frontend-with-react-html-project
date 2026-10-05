import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar.jsx";
import CategoryFilter from "../components/CategoryFilter.jsx";
import ProductList from "../components/ProductList.jsx";
import { products, categories } from "../data/products.js";

export default function Products() {
  const [searchParams] = useSearchParams();
  const startCategory = searchParams.get("category");

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(categories.includes(startCategory) ? startCategory : "All");
  const [sort, setSort] = useState("default");

  // Filter by category and search word, then sort a copy of the result.
  const visible = products
    .filter((product) => category === "All" || product.category === category)
    .filter((product) => product.name.toLowerCase().includes(query.trim().toLowerCase()));

  const sorted = [...visible];
  if (sort === "low") sorted.sort((a, b) => a.price - b.price);
  if (sort === "high") sorted.sort((a, b) => b.price - a.price);
  if (sort === "rating") sorted.sort((a, b) => b.rating - a.rating);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-bold text-brand">Shop</h1>
      <p className="mt-2 text-muted">
        {sorted.length} {sorted.length === 1 ? "product" : "products"}
      </p>

      <div className="mt-6 flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <SearchBar value={query} onChange={setQuery} />
          <div>
            <label htmlFor="sort" className="sr-only">Sort products</label>
            <select
              id="sort"
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="rounded-md border border-line bg-white px-3 py-2.5 text-sm"
            >
              <option value="default">Sort: Featured</option>
              <option value="low">Price: low to high</option>
              <option value="high">Price: high to low</option>
              <option value="rating">Top rated</option>
            </select>
          </div>
        </div>
        <CategoryFilter categories={categories} selected={category} onSelect={setCategory} />
      </div>

      <div className="mt-8">
        <ProductList products={sorted} />
      </div>
    </div>
  );
}
