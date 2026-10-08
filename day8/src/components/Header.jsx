import Button from "./Button";

function Header() {
  return <header className="flex justify-between items-center bg-yellow-400 px-10 py-3">
    <h3>Logo</h3>
    <nav className="flex gap-3">
      <a href="#">Home</a>
      <a href="#">About us</a>
      <a href="#">Services</a>
      <a href="#">Blog</a>
      <a href="#">Contact</a>
    </nav>
    <div className="buttons flex gap-3">
      <Button title="Login" />
      <Button title="Register" />
    </div>
  </header>
}
export default Header;