import React from "react";

const Statement = () => {
  return (
    <div className="image w-screen grid grid-cols-1 xl:grid-cols-3 place-items-start h-full xl:h-[100vh] bg-khaki crosses border-l-20 border-maroon p-5 md:p-20">
      <div className="col-span-2 text text-black font-inter pt-10 md:pt-0 pb-10 flex flex-col justify-between items-start w-full">
        <div className="main xl:mt-12 z-10">
          <h2 className="text-4xl md:text-7xl xl:text-9xl font-tan-nimbus text-maroon font-bold tracking-tight leading-squash">
            Coffee you <br className="xl:block hidden" />
            can trust
          </h2>
          <p className="font-space-grotesk text-xl tracking-tighter max-w-2xl pt-4 leading-tight">
            At Andromeda we strive to create the perfect cup of coffee, using
            only the finest beans and roasting them to perfection.
          </p>
        </div>
      </div>
      <div className="image h-full w-full xl:flex xl:justify-end xl:items-end">
        <img
          src="/roaster.jpeg"
          className=" xl:-mx-16 xl:-my-8 xl:absolute xl:max-w-3xl w-full h-full xl:h-auto object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Statement;
