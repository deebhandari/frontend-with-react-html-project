import ContactForm from "../components/ContactForm.jsx";

export default function Contact() {
  return (
    <div className="mx-auto grid max-w-5xl gap-10 px-4 py-12 md:grid-cols-[1fr_1.2fr]">
      <div>
        <h1 className="font-display text-4xl font-bold text-brand">Contact us</h1>
        <p className="mt-4 max-w-sm text-muted">
          Questions about an order, delivery to your district or a gift? Send a message and we will reply within one
          working day.
        </p>
        <dl className="mt-8 space-y-4 text-sm">
          <div>
            <dt className="font-semibold">Email</dt>
            <dd className="text-muted">hello@emart.example</dd>
          </div>
          <div>
            <dt className="font-semibold">Address</dt>
            <dd className="text-muted">New Road, Kathmandu, Nepal (demo address)</dd>
          </div>
          <div>
            <dt className="font-semibold">Hours</dt>
            <dd className="text-muted">Sunday to Friday, 10 am to 6 pm</dd>
          </div>
        </dl>
      </div>
      <ContactForm />
    </div>
  );
}
