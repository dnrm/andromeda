import React, { useEffect, useRef } from "react";
import anime, { AnimeInstance } from "animejs";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  const animationRef = useRef<AnimeInstance>();
  useEffect(() => {
    animationRef.current = anime({
      targets: ".content-hero",
      opacity: "100%",
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, []);

  return (
    <div className="bg-black w-full">
      <div className={`hero bg-[url('../public/hero.webp')] bg-cover`}>
        <div className="gap-8 flex flex-col justify-center items-center p-12 h-[95vh] ">
          <div className="content-hero opacity-0 flex flex-col justify-center items-center z-10 gap-4">
            <div className="heading">
              <h1 className="website-title uppercase text-bright-yellow text-4xl sm:text-6xl md:text-8xl text-center xl:text-9xl tracking-tighter leading-none font-bold font-tan-nimbus">
                Andromeda <br /> Coffee
              </h1>
            </div>
            <div className="cta">
              <HashLink
                smooth
                to="/#menu"
                className="bg-bright-yellow py-2 md:py-4 text-base md:text-xl px-8 md:px-16 text-white font-bold font-space-grotesk hover:scale-110 transition-all duration-100"
              >
                Menu
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
