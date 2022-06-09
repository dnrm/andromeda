import Hero from "./components/Hero";
import Product from "./components/Product";
import Statement from './components/Statement'
import Awards from "./components/Awards";

function App() {
  return (
    <div className="bg-snow">
      <Hero />
      <Statement />
      <Awards />
      <div className="product-section px-8 py-10">
        <div className="heading">
          <h1 className="text-6xl md:text-7xl xl:text-8xl font-tan-nimbus py-8">
            Coffee
          </h1>
        </div>
        <div className="products grid grid-cols-1 md:grid-cols-2 gap-4">
          <Product title="Kepler Blend" />
          <Product title="Mercury Single Origin" />
        </div>
      </div>
    </div>
  );
}

export default App;
