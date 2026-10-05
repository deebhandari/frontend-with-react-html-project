import { useState } from "react";

const emptyForm = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const found = {};
    if (form.name.trim().length < 2) found.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) found.email = "Enter a valid email address.";
    if (form.message.trim().length < 10) found.message = "Write at least 10 characters.";
    return found;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setSent(true);
      setForm(emptyForm);
    }
  };

  if (sent) {
    return (
      <div className="rounded-lg border border-line bg-white p-6">
        <h2 className="font-display text-xl font-bold text-brand">Message sent</h2>
        <p className="mt-2 text-muted">We reply within one working day.</p>
        <button type="button" onClick={() => setSent(false)} className="mt-4 text-sm underline">
          Send another message
        </button>
      </div>
    );
  }

  const fieldClass = "mt-1 w-full rounded-md border border-line bg-white px-4 py-2.5";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-lg border border-line bg-white p-6">
      <div>
        <label htmlFor="name" className="text-sm font-medium">Name</label>
        <input id="name" name="name" value={form.name} onChange={handleChange} className={fieldClass} />
        {errors.name && <p className="mt-1 text-sm text-red-700">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={fieldClass} />
        {errors.email && <p className="mt-1 text-sm text-red-700">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} className={fieldClass} />
        {errors.message && <p className="mt-1 text-sm text-red-700">{errors.message}</p>}
      </div>
      <button type="submit" className="rounded-md bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark">
        Send message
      </button>
    </form>
  );
}
