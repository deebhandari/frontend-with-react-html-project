import { useState } from "react";

function Report() {
  const [form, setForm] = useState({
    name: "",
    location: "",
    type: "",
    description: ""
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    localStorage.setItem("disasterReport", JSON.stringify(form));

    setMessage("✅ Disaster report submitted successfully!");

    setForm({
      name: "",
      location: "",
      type: "",
      description: ""
    });
  }

  return (
    <section className="page">
      <h1>Report a Disaster</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Disaster Location"
          value={form.location}
          onChange={handleChange}
          required
        />

        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          required
        >
          <option value="">Select Disaster</option>
          <option value="Flood">Flood</option>
          <option value="Earthquake">Earthquake</option>
          <option value="Landslide">Landslide</option>
          <option value="Fire">Fire</option>
          <option value="Heavy Rainfall">Heavy Rainfall</option>
          <option value="Lightning">Lightning</option>
        </select>

        <textarea
          name="description"
          placeholder="Describe the situation..."
          value={form.description}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit Report</button>

        {message && <p className="success">{message}</p>}
      </form>
    </section>
  );
}

export default Report;