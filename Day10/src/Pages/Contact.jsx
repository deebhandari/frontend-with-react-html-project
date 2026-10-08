
export default function ContactPage() {
  return (
    <section className="bg-gray-50 px-5 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">
            Contact Me
          </h1>

          <p className="mx-auto max-w-2xl text-gray-600">
            Have a project, question, or collaboration idea? Feel free to
            get in touch with me.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <div className="rounded-xl bg-white p-8 shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">
              Get In Touch
            </h2>

            <div className="space-y-5 text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p>your-email@example.com</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <p>+977 98XXXXXXXX</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">Location</h3>
                <p>Kathmandu, Nepal</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="rounded-xl bg-white p-8 shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">
              Send a Message
            </h2>

            <input
              type="text"
              placeholder="Your Name"
              className="mb-4 w-full rounded-md border px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="mb-4 w-full rounded-md border px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="mb-4 w-full rounded-md border px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="mb-4 w-full rounded-md border px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>

            <button
              type="submit"
              className="rounded-md bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}



