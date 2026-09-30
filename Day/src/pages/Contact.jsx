function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Message sent successfully!");
  }

  return (
    <section className="page">
      <h1>Contact Us</h1>

      <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />

        <input type="email" placeholder="Your Email" required />

        <textarea placeholder="Your Message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;