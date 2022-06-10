import React, { useEffect, useRef } from "react";
import anime from "animejs";

const Hero = ({ video }) => {
  const animationRef = useRef(null);
  useEffect(() => {
    animationRef.current = anime({
      targets: '.content-hero',
      opacity: '100%',
      duration: 1000,
      easing: 'easeInOutQuad',
    });
  }, []);

  return (
    <div className="bg-black">
      <div
        className={`hero ${
          video ? "" : "bg-[url('../public/hero.webp')] bg-cover"
        }`}
      >
        <div className="gap-8 flex flex-col justify-center items-center p-16 h-[100vh] ">
          <div className="content-hero opacity-0 flex flex-col justify-center items-center z-10 gap-4">
            <div className="heading">
              <h1 className="website-title uppercase text-bright-yellow text-6xl md:text-8xl text-center xl:text-9xl tracking-tighter leading-none font-bold font-tan-nimbus">
                Andromeda Roasters
              </h1>
            </div>
            <div className="cta">
              <button className="bg-bright-yellow py-4 px-16 text-white font-bold font-space-grotesk text-xl hover:scale-110 transition-all duration-100">
                Shop Coffee
              </button>
            </div>
          </div>
          {video && (
            <video
              autoPlay
              muted
              loop
              className="absolute overflow-hidden w-full h-full object-cover opacity-80"
            >
              <source src="/bg-video.mp4" type="video/mp4" />
            </video>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
