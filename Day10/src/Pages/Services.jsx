const services = [
  {
    title: "Web Development",
    description:
      "We build modern, responsive, and user-friendly websites using the latest web technologies.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "UI/UX Design",
    description:
      "We create clean and attractive user interfaces that provide a smooth and engaging user experience.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d",
  },
  {
    title: "Mobile Development",
    description:
      "We develop responsive mobile applications designed to work smoothly across different devices.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-gray-50 px-10 py-16">
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Our Services
        </h1>

        <p className="mt-4 text-gray-600">
          We provide professional digital solutions to help businesses
          build, improve, and grow their online presence.
        </p>
      </div>

      {/* Services */}
      <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-52 w-full object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {service.title}
              </h2>

              <p className="mt-3 text-gray-600">
                {service.description}
              </p>

              <button className="mt-5">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}