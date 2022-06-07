import React from "react";
import Navigation from "./Navigation";

const Hero = ({ video }) => {
  return (
    <div className={`hero ${video ? "" : "bg-[url('../public/cups.jpeg')]"}`}>
      <Navigation />
      <div className="gap-8 flex flex-col justify-center items-center p-16 h-[100vh] bg-black">
        <div className="content flex flex-col justify-center items-center z-10 gap-4">
          <div className="heading">
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
        <video
          autoPlay
          muted
          loop
          className="absolute overflow-hidden w-full h-full object-cover opacity-80"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Hero;
