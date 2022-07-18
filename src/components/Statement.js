import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Statement = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: element.querySelector(".coffee-trust"),
          scrub: true,
          start: "top bottom",
          end: "top top",
        },
      }
    );
  }, []);

  return (
    <div
      ref={ref}
      className="super-container image w-screen h-full bg-khaki crosses border-l-20 border-maroon p-5 md:p-20"
    >
      <div className="col-span-2 text text-black font-inter pt-10 md:pt-0 flex flex-col justify-between items-start w-full">
        <div className="main xl:mt-12 z-10">
          <h2 className="coffee-trust text-4xl md:text-7xl xl:text-9xl font-tan-nimbus text-maroon font-bold tracking-tight leading-squash">
            Coffee you <br className="xl:block hidden" />
            can trust
          </h2>
          <p className="font-space-grotesk text-3xl text-neutral-700 tracking-tighter pt-4 leading-tight">
            At Andromeda we strive to create the perfect cup of coffee, using
            beans from Lavazza, guranteeing a tasty and satisfying experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statement;
