export default function AboutPage() {
  return (
    <section className="p-10">
      <h1 className="mb-5 text-3xl font-bold">
        About
      </h1>

      <img
        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
        alt="About us"
        className="h-80 w-full rounded-xl object-cover"
      />

      <p className="mt-5">
        Welcome to our website. This is the About page.
      </p>
    </section>
  );
}