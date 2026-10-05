import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24 text-center">
      <h1 className="font-display text-4xl font-bold text-brand">Page not found</h1>
      <p className="mt-3 text-muted">The page you opened does not exist.</p>
      <Link to="/" className="mt-6 inline-block rounded-md bg-brand px-6 py-3 font-semibold text-white">
        Go home
      </Link>
    </div>
  );
}
