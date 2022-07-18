import Hero from "./components/Hero";
import Statement from "./components/Statement";
import Awards from "./components/Awards";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="bg-snow">
      <Hero />
      <Statement />
      <Menu />
      <div className="bg-neutral-900 p-5 py-14 md:px-10 md:py-28 dots-dark border-l-20 border-bright-yellow">
        <div className="heading">
          <h1 className="text-4xl md:text-7xl font-tan-nimbus text-bright-yellow w-full text-center pb-4 md:pt-0">
            Customers say:
          </h1>
        </div>
        <div className="testimonials grid grid-cols-1 md:grid-cols-3 pt-6 md:pt-12 gap-4">
          <div className="testimonial flex justify-center items-center p-4 bg-neutral-800">
            <div className="quote">
              <p className="text-xl md:text-2xl font-space-grotesk text-snow text-center">
                "I love the way you make your coffee. It's so good and I can't
                stop myself from ordering more!"
              </p>
              <p className="w-full text-right">
                <span className="text-bright-yellow font-bold text-xl font-space-grotesk">
                  - John Doe
                </span>
              </p>
            </div>
          </div>
          <div className="testimonial flex justify-center items-center p-4 bg-neutral-800">
            <div className="quote">
              <p className="text-xl md:text-2xl font-space-grotesk text-snow text-center">
                "Andromeda Coffee is the best coffee I've ever had."
              </p>
              <p className="w-full text-right">
                <span className="text-bright-yellow font-bold text-xl font-space-grotesk">
                  - Jane Doe
                </span>
              </p>
            </div>
          </div>
          <div className="testimonial flex justify-center items-center p-4 bg-neutral-800">
            <div className="quote">
              <p className="text-2xl md:text-2xl font-space-grotesk text-snow text-center">
                "I definitely recommend Andromeda Coffee. It's the best coffee I've ever had."
              </p>
              <p className="w-full text-right">
                <span className="text-bright-yellow font-bold text-2xl font-space-grotesk">
                  - Elon Musk
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Awards />
    </div>
  );
}

export default App;
