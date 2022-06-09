import Hero from "./components/Hero";
import Product from "./components/Product";

function App() {
  return (
    <div className="bg-snow">
      <Hero />
      <div className="image w-screen grid grid-cols-1 xl:grid-cols-3 place-items-start h-full xl:h-[100vh] bg-khaki crosses border-l-20 border-maroon p-5 md:p-20">
        <div className="col-span-2 text text-black font-inter pt-10 md:pt-0 pb-10 flex flex-col justify-between items-start w-full">
          <div className="main xl:mt-12 z-10">
            <h2 className="text-4xl md:text-7xl xl:text-9xl font-tan-nimbus text-maroon font-bold tracking-tight leading-squash">
              Coffee you <br className="xl:block hidden" />
              can trust
            </h2>
            <p className="font-space-grotesk text-lg tracking-tighter max-w-2xl pt-4 leading-tight">
              At Andromeda we strive to create the perfect cup of coffee, using
              only the finest beans and roasting them to perfection.
            </p>
          </div>
        </div>
        <div className="image h-full w-full xl:flex xl:justify-end xl:items-end">
          <img
            src="/roaster.jpeg"
            className=" xl:-mx-16 xl:-my-8 xl:absolute xl:max-w-3xl w-full h-full xl:h-auto object-cover"
            alt=""
          />
        </div>
      </div>
      <hr />
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
