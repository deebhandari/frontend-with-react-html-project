import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="flex justify-between bg-gray-900 px-10 py-10 text-white">
      <h3 className="text-2xl font-bold">Logo</h3>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/works">Works</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/user/1">User Details</Link>
        </li>
      </ul>
    </footer>
  );
}