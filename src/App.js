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
      <Statement />
      <MenuWrapper>
        <Menu />
      </MenuWrapper>
      <Testimonials />
      <Quality />
      <Footer />
    </div>
  );
}

export default App;
