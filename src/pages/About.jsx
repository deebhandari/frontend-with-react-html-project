import { Link } from "react-router-dom";

const steps = [
  "We buy directly from farmers, women's cooperatives and artisans across Nepal.",
  "Every product is checked and packed in our Kathmandu warehouse.",
  "We deliver within the Kathmandu Valley in 1 to 2 days and to other districts in 3 to 5 days.",
];

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-display text-4xl font-bold text-brand">About Emart</h1>
      <p className="mt-5 max-w-prose text-lg leading-relaxed">
        Emart is an online shop for products made in Nepal. We want it to be easy to buy good Nepali tea, wool,
        crafts and home goods, and to make sure the people who make them are paid fairly.
      </p>

      <h2 className="mt-12 font-display text-2xl font-bold">How your order reaches you</h2>
      <ol className="mt-4 max-w-prose list-decimal space-y-3 pl-5 leading-relaxed">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>

      <h2 className="mt-12 font-display text-2xl font-bold">About this project</h2>
      <p className="mt-3 max-w-prose leading-relaxed text-muted">
        Emart is a demo store built for the Frontend Development Training final project with React and Tailwind
        CSS. Products are mock data, and orders and payments are not processed.
      </p>

      <Link to="/products" className="mt-10 inline-block rounded-md bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark">
        Start shopping
      </Link>
    </div>
  );
}
