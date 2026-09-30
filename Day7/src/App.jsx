import Header from "./components/header";
import Footer from "./components/footer";
import Button from "./components/Button";
import About from "./components/About";

function App() {
  return (
    <div>
      <Header />

      <main>
        Homepage
        <About />
      </main>

      <Button />

      <Footer />
    </div>
  );
}

export default App;