function Header({ onNavigate }) {
  return (
    <header>
      <h2>Sahayog</h2>

      <nav>
        <button onClick={() => onNavigate("Home")}>Home</button>
        <button onClick={() => onNavigate("About")}>About</button>
        <button onClick={() => onNavigate("Disasters")}>Disasters</button>
        <button onClick={() => onNavigate("Report")}>Report</button>
        <button onClick={() => onNavigate("Emergency")}>Emergency</button>
        <button onClick={() => onNavigate("Contact")}>Contact</button>
      </nav>
    </header>
  );
}

export default Header;