import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { products, categories, categoryInfo } from "../data/products.js";
import { perks, reviews } from "../data/content.js";

export default function Home() {
  const featured = products.filter((product) => product.featured);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 pt-16">
        <SectionHeading title="Shop by category" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/products?category=${encodeURIComponent(category)}`}
              className="rounded-lg border border-line bg-white p-5 transition-colors hover:border-brand"
            >
              <h3 className="font-display text-xl font-semibold text-brand">{category}</h3>
              <p className="mt-2 text-sm text-muted">{categoryInfo[category]}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16">
        <SectionHeading
          title="Featured this week"
          subtitle="Popular picks from Nepali makers."
          action={
            <Link to="/products" className="text-sm font-semibold text-brand underline">
              See all products
            </Link>
          }
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16">
        <div className="grid gap-6 rounded-lg bg-white p-6 md:grid-cols-3 md:p-8">
          {perks.map((perk) => (
            <div key={perk.title}>
              <h3 className="font-display text-lg font-semibold text-brand">{perk.title}</h3>
              <p className="mt-2 text-sm text-muted">{perk.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16">
        <SectionHeading title="What customers say" />
        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.name} className="rounded-lg border border-line bg-white p-5">
              <blockquote className="text-sm leading-relaxed">{review.text}</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-brand">{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
