import React from "react";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <div className="hero bg-[url('../public/cups.jpeg')]">
      <Navigation />
      <div className="gap-8 flex flex-col justify-center items-center p-16 h-[95vh]">
        <div className="heading z-10">
          <h1 className="uppercase text-snow text-6xl md:text-8xl text-center xl:text-9xl tracking-tighter leading-none font-bold font-tan-nimbus">
            Andromeda Roasters
          </h1>
        </div>
        <div className="cta">
          <button className="bg-snow py-4 px-12 font-bold font-space-grotesk text-lg hover:scale-110 transition-all duration-100">
            Shop Coffee
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
