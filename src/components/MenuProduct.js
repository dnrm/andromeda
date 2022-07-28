import React from "react";
import { Link } from "react-router-dom";

const Product = ({ title, description, slug, image, price }) => {
  return (
    <Link to={"/p/" + slug}>
      <div className="cursor-pointer">
        <div className={`h-52 md:h-96 image flex justify-center items-center`}>
          <img src={image} className="h-full object-cover w-full" alt="" />
        </div>
        <div className="product-info py-2 md:py-5 flex justify-between items-center">
          <h1 className="text-lg sm:text-xl md:text-2xl hover:scale-110 transition-all duration-200 font-tan-nimbus hover:underline">
            {title}
          </h1>
          <p className="font-mono text-yellow-500 text-base sm:text-xl md:text-2xl font-bold">
            ${price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
