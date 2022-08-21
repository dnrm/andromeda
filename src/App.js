import Hero from "./components/Hero";
import Statement from "./components/Statement";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Quality from "./components/Quality";

function App() {
  return (
    <div className="bg-snow">
      <Hero />
      <div className="">
        <Statement />
        <Quality />
        {/* <Testimonials /> */}
        <Menu />
      </div>
    </div>
  );
}

export default App;
