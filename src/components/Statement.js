import React from "react";

const Statement = () => {
  return (
    <div
      id="about"
      className="super-container image w-screen h-full bg-white p-5 md:px-20 pt-12 pb-4 max-w-7xl mx-auto"
    >
      <div className="col-span-2 text text-black font-inter pt-3 md:pt-0 flex flex-col justify-between items-start w-full">
        <div className="main z-10">
          <h2 className="pb-4 coffee-trust text-4xl md:text-7xl font-tan-nimbus text-black font-bold tracking-tight leading-tighter">
            Coffee you can trust
          </h2>
          <hr />
          <p className="font-sans text-justify text-xl text-neutral-600 tracking-tighter pt-4 pb-2">
            At Andromeda we strive to create the perfect cup of coffee, using
            beans from Lavazza, guranteeing a tasty and satisfying experience.
          </p>
          <div className="image py-2">
            <img
              src="/roaster.jpeg"
              className="max-h-96 w-full object-cover"
              alt=""
            />
          </div>
          <p className="font-sans text-justify text-xl text-neutral-600 tracking-tighter py-2">
            We also offer seasonal coffee’s such as beans from foreign shops
            when we go on trips. Some past offerings include roasts from San
            Diego, San Antonio, Fredricksburg, and Mexico City.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statement;
