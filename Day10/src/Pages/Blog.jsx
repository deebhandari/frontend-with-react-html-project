
export default function BlogPage() {
  const blogs = [
    {
      title: "Getting Started with React",
      description:
        "Learn the basics of React, components, props, state, and how to build your first modern web application.",
      date: "October 3, 2026",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Introduction to Tailwind CSS",
      description:
        "Discover how Tailwind CSS helps developers create responsive and beautiful user interfaces quickly.",
      date: "September 28, 2026",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Building Responsive Websites",
      description:
        "Understand important techniques for creating websites that work smoothly on mobile, tablet, and desktop.",
      date: "September 20, 2026",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="bg-gray-50 px-5 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">
            My Blog
          </h1>

          <p className="mx-auto max-w-2xl text-gray-600">
            Read my latest articles, tutorials, and thoughts about web
            development, React, JavaScript, and modern technologies.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <p className="mb-2 text-sm font-medium text-green-600">
                  {blog.date}
                </p>

                <h2 className="mb-3 text-xl font-bold text-gray-800">
                  {blog.title}
                </h2>

                <p className="mb-5 leading-relaxed text-gray-600">
                  {blog.description}
                </p>

                <button
                  type="button"
                  className="rounded-md bg-green-600 px-5 py-2 text-white transition hover:bg-green-700"
                >
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


