import Hero from "./components/Hero";
import Product from "./components/Product";
import Statement from "./components/Statement";
import Awards from "./components/Awards";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="bg-snow">
      <Hero />
      <Statement />
      <Menu />
      <Awards />
    </div>
  );
}

export default App;
