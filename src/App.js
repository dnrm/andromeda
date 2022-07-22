import Hero from "./components/Hero";
import Statement from "./components/Statement";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Quality from "./components/Quality";
import Footer from "./components/Footer";
import MenuProvider from "./context/MenuContext";

function App() {
  return (
    <div className="bg-snow">
      <MenuProvider>
        <Hero />
        <Statement />
        <Menu />
        <Testimonials />
        <Quality />
        <Footer />
      </MenuProvider>
    </div>
  );
}

export default App;
