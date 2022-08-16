import Hero from "./components/Hero";
import Statement from "./components/Statement";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Quality from "./components/Quality";
import Footer from "./components/Footer";
import MenuWrapper from "./context/MenuContext";

function App() {
  return (
    <div className="bg-snow">
      <Hero />
      <div className="">
        <Statement />
        <Quality />
        <Testimonials />
        <MenuWrapper>
          <Menu />
        </MenuWrapper>
        <Footer />
      </div>
    </div>
  );
}

export default App;
