export default function HeroSection() {
  return (
    <section className="bg-blue-600 px-10 py-20 text-white">
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="mb-4 text-5xl font-bold">
          Welcome to Our Website
        </h1>

        <p className="mb-8 text-lg">
          Build modern and beautiful websites with React.
        </p>

        <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600">
          Get Started
        </button>
      </div>
    </section>
  );
}