import Hero from "./components/Hero";
import Statement from "./components/Statement";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Quality from "./components/Quality";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-snow">
      <Hero />
      <Statement />
      <Menu />
      <Testimonials />
      <Quality />
      <Footer />
    </div>
  );
}

export default App;
