import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="bg-white">
      <Navigation />
      <div className="flex justify-center items-center gap-8 py-16 pb-16 p-8">
        <div className="heading">
          <h1 className="uppercase text-5xl md:text-7xl xl:text-10xl tracking-tighter leading-squash font-sono">
            Andromeda Roasters
          </h1>
        </div>
        <div className="coffee-bean-image md:ml-10">
          <img src="/coffee-bean.png" alt="" />
        </div>
      </div>
      <div className="image w-screen">
        <div className="text absolute z-10 text-white font-inter px-8 py-20 bg-[url('../public/roaster.jpeg')] backdrop-blur-md w-full">
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-medium tracking-tighter leading-squash">
            Who are we?
          </h2>
          <p className="pt-4 text-xl">
            We are a coffee roaster company that specializes in the best flavour profiles and the best coffee quality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
