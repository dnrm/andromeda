import React from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  image: string;
  price: number;
  slug: string;
};

const Product = ({ title, slug, image, price }: Props) => {
  return (
    <Link to={"/p/" + slug}>
      <div className="cursor-pointer">
        <div
          className={`w-full h-[30rem]  image flex justify-center items-center`}
        >
          <img
            src={
              `https://jmzinesoueyswqxzpykd.supabase.co/storage/v1/object/public/images/` +
              image
            }
            className="h-full object-cover w-full"
            alt=""
          />
        </div>
        <div className="product-info py-2 md:py-2 flex justify-between items-center">
          <h1 className="text-lg sm:text-xl md:text-2xl hover:scale-110 transition-all font-normal duration-200 font-montserrat uppercase tracking-tighter text-neutral-600 hover:underline">
            {title}
          </h1>
          <p className="font-montserrat tracking-tighter text-yellow-500 font-light text-base sm:text-xl md:text-2xl">
            ${price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
