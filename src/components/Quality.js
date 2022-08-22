import React from "react";
import { Link } from "react-router-dom";

const Quality = ({ topPadding }) => {
  return (
    <div
      className={`${
        topPadding ? "pt-4" : ""
      } grid grid-cols-1 max-w-7xl mx-auto`}
      id="quality"
    >
      <div className="bg-snow text">
        <h1 className="leading-normal bg-neutral-800 moroccan text-bright-yellow text-5xl md:text-6xl md:mx-20 py-16 text-center lg:text-8xl font-tan-nimbus">
          <Link to="/quality">Quality</Link>
        </h1>
        <p className="text-xl p-5 md:px-20 font-sans text-justify text-neutral-600">
          As a coffee fanatic myself, I strive to deliver customers with the
          best coffee experience they'll ever have. We use high quality coffee
          beans from Lavazza and guarantee a tasty and satisfying experience. We
          specialize in every aspect of coffee, from the bean to the milk
          texture, to the temperature of the cup.
        </p>
      </div>
      <div className="image px-5 md:px-20 pb-5 h-96 md:h-[40rem] w-full">
        <img
          src="/bw-coffee.JPG"
          alt="Coffee beans"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Quality;
