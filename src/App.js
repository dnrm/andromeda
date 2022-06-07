import Hero from "./components/Hero";
import Product from "./components/Product";

function App() {
  return (
    <div className="bg-snow">
      <Hero video={true} />
      <div className="image w-screen grid grid-cols-1 md:grid-cols-2 h-[90vh]">
        <div className="text text-black font-inter px-8 pt-20 pb-10 bg-snow col-span-1 flex flex-col justify-between items-start h-full">
          <div className="main">
            <h2 className="text-4xl md:text-5xl xl:text-7xl font-tan-nimbus text-aqua font-bold tracking-tighter leading-squash">
              Who are we?
            </h2>
            <p className="font-space-grotesk text-md">
              We are a small coffee roasting company based in Seattle,
              Washington. We strive to create the perfect cup of coffee, using
              only the finest beans and roasting them to perfection. Our coffee
              is roasted in small batches to ensure quality and freshness. We
              hope you enjoy our coffee as much as we enjoy making it!
            </p>
          </div>
          <div className="cta-button">
            <button className="bg-davys hover:bg-gray-800 px-12 py-4 mt-4">
              <p className="text-snow font-space-grotesk text-lg">Learn More</p>
            </button>
          </div>
        </div>
        <div className="image h-full w-full">
          <img
            src="/roaster.jpeg"
            className="h-full object-cover rounded-t-full p-5"
            alt=""
          />
        </div>
      </div>
      <hr />
      <div className="product-section px-8 py-10">
        <div className="heading">
          <h1 className="text-6xl md:text-7xl xl:text-8xl font-tan-nimbus py-8">Coffee</h1>
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
