import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Disasters from "./pages/Disasters";
import Report from "./pages/Report";
import Emergency from "./pages/Emergency";
import Contact from "./pages/Contact";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <div>
      <Header onNavigate={setPage} />

      <main>
        {page === "Home" && <Home onNavigate={setPage} />}
        {page === "About" && <About />}
        {page === "Disasters" && <Disasters />}
        {page === "Report" && <Report />}
        {page === "Emergency" && <Emergency />}
        {page === "Contact" && <Contact />}
      </main>

      <Footer />
    </div>
  );
}

export default App;