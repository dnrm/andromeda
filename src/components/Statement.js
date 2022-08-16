import React from "react";

const Statement = () => {
  return (
    <div
      id="about"
      className="super-container image w-screen h-full bg-white p-5 md:p-20"
    >
      <div className="col-span-2 text text-black font-inter pt-3 md:pt-10 flex flex-col justify-between items-start w-full">
        <div className="main xl:mt-12 z-10">
          <h2 className="pb-4 coffee-trust text-4xl md:text-7xl xl:text-9xl font-tan-nimbus text-black font-bold tracking-tight leading-tighter">
            Coffee you <br className="xl:block hidden" />
            can trust
          </h2>
          <hr />
          <p className="font-space-grotesk text-xl md:text-3xl text-neutral-700 tracking-tighter pt-4 pb-2 leading-tight">
            At Andromeda we strive to create the perfect cup of coffee, using
            beans from Lavazza, guranteeing a tasty and satisfying experience.
          </p>
          <div className="image py-2">
            <img src="/cups.jpeg" alt="" />
          </div>
          <p className="font-space-grotesk text-xl md:text-3xl text-neutral-700 tracking-tighter py-2 leading-tight">
            We also offer seasonal coffee’s such as beans from foreign shops
            when we go on trips. Some past offerings include roasts from San
            Diego, San Antonio, Fredricksburg, and Mexico City.
          </p>
          <div className="image pt-4">
            <img src="/roaster.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statement;
