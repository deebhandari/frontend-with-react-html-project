
export default function WorksPage() {
  const works = [
    {
      title: "E-Commerce Website",
      description:
        "A modern online shopping website with product listings, shopping cart, user authentication, and secure checkout.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      tech: "React, Tailwind CSS, PHP, MySQL",
    },
    {
      title: "School Management System",
      description:
        "A complete school management system for managing students, users, courses, notices, and administrative operations.",
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
      tech: "HTML, CSS, JavaScript, PHP, MySQL",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio website showcasing skills, projects, services, experience, and contact information.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
      tech: "React, JavaScript, Tailwind CSS",
    },
  ];

  return (
    <section className="py-16 px-5 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            My Works
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects and work. I build modern,
            responsive, and user-friendly web applications.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  {work.title}
                </h2>

                <p className="text-gray-600 mb-4">
                  {work.description}
                </p>

                <p className="text-sm text-green-600 font-semibold mb-5">
                  {work.tech}
                </p>

                <button className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

