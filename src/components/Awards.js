import React from "react";

const Awards = () => {
  return (
    <div className="bg-leaf py-14 px-8 moroccan">
      <div className="layer1 flex">
        <div className="titles">
          <h1 className="text-shadow-awards text-bright-yellow text-6xl md:text-7xl xl:text-9xl font-tan-nimbus py-2">
            Awards.
          </h1>
          <h1 className="text-shadow-awards text-bright-yellow text-6xl md:text-7xl xl:text-9xl font-tan-nimbus py-2">
            Awards.
          </h1>
          <h1 className="text-shadow-awards text-bright-yellow text-6xl md:text-7xl xl:text-9xl font-tan-nimbus py-2">
            Awards.
          </h1>
        </div>
        <div className="award-icon grid place-items-center w-full">
          <img src="/award.png" className="h-[80%] rounded-full p-0 border-0 border-khaki bg-khaki" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Awards;
