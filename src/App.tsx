import { useEffect } from "react";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Quality from "./components/Quality";
import Statement from "./components/Statement";
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
        <Menu />
      </div>
    </div>
  );
}

export default App;
