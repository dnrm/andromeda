import React from "react";

const Product = ({ title }) => {
  return (
    <div className="p-5 rounded-corners-product cursor-pointer">
      <div
        className={`image rounded-corners-product-child flex justify-center items-center dots bg-khaki p-16 pt-24 transition-all duration-500`}
      >
        <img src="/bag.png" className="h-[30vw] object-cover" alt="" />
      </div>
      <div className="product-info py-5">
        <h1 className="text-3xl font-tan-nimbus hover:underline">{title}</h1>
      </div>
    </div>
  );
};

export default Product;
