import { useEffect } from "react";
import Hero from "./components/Hero";
import Statement from "./components/Statement";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Quality from "./components/Quality";
import Announcement from "./components/Announcement";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-snow">
      <Hero />
      <div>
        <Announcement />
        <Statement />
        <Quality />
        {/* <Testimonials /> */}
        <Menu />
      </div>
    </div>
  );
}

export default App;
