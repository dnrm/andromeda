import React from "react";
import { Link } from "react-router-dom";

const Quality = ({ topPadding }) => {
  return (
    <div
      className={`${topPadding ? "pt-16" : ""} grid grid-cols-1 lg:grid-cols-2`}
      id="quality"
    >
      <div className="p-10 bg-snow text">
        <h1 className="leading-normal text-4xl md:text-6xl md:pt-4 lg:text-8xl font-tan-nimbus text-leaf">
          <Link to="/quality">Quality</Link>
          <span className="no-underline">🪴</span>
        </h1>
        <p className="text-xl font-space-grotesk text-neutral-600 pt-4">
          As a coffee fanatic myself, I strive to deliver customers with the
          best coffee experience they'll ever have. We use high quality coffee
          beans from Lavazza and guarantee a tasty and satisfying experience. We
          specialize in every aspect of coffee, from the bean to the milk
          texture, to the temperature of the cup.
        </p>
      </div>
      <div className="image h-full w-full">
        <img
          src="/beans.jpeg"
          alt="Coffee beans"
          className="h-[75vh] w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Quality;
