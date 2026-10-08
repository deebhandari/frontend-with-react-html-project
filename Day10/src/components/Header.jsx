
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-yellow-200 px-10 py-5">
      {/* <h3 className="text-2xl font-bold"></h3> */}
      <img src="../src/assets/medicine.jpg"alt="Logo"width={85}></img>

      <nav className="flex gap-3">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/works">Works</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="flex gap-3">
        <Link
          to="/login"
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700"
        >
          Register
        </Link>
      </div>
    </header>
  );
}

