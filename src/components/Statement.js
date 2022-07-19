import React from "react";

const Statement = () => {
  return (
    <div className="super-container image w-screen h-full bg-khaki crosses border-l-20 border-maroon p-5 md:p-20">
      <div className="col-span-2 text text-black font-inter pt-3 md:pt-10 flex flex-col justify-between items-start w-full">
        <div className="main xl:mt-12 z-10">
          <h2 className="coffee-trust text-4xl md:text-7xl xl:text-9xl font-tan-nimbus text-maroon font-bold tracking-tight leading-tighter">
            Coffee you <br className="xl:block hidden" />
            can trust
          </h2>
          <p className="font-space-grotesk text-xl md:text-3xl text-neutral-700 tracking-tighter pt-4 leading-tight">
            At Andromeda we strive to create the perfect cup of coffee, using
            beans from Lavazza, guranteeing a tasty and satisfying experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statement;
