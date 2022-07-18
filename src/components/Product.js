import React from "react";

const Product = ({ title, image, price }) => {
  return (
    <div className="cursor-pointer">
      <div
        className={`h-96 image flex rounded-corners-product justify-center items-center`}
      >
        <img src={image} className="h-full rounded-corners-product-child object-cover rounded-corners-product-child transition-all duration-500 w-full" alt="" />
      </div>
      <div className="product-info py-5 flex justify-between items-center">
        <h1 className="text-3xl font-tan-nimbus hover:underline">{title}</h1>
        <p className="font-mono text-yellow-500 text-2xl font-bold">${price}</p>
      </div>
    </div>
  );
};

export default Product;
