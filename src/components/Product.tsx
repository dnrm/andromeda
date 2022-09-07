import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useCartContext } from "../context/CartContext";
import { toast } from "react-hot-toast";
import { supabase } from "../utils/supabase";

const Products = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>();
  const { cart, setCart } = useCartContext();
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await supabase
          .from("products")
          .select("*")
          .eq("slug", id);
        if (!product.data) {
          return;
        }
        setProduct(product.data[0]);
      } catch (e) {
        console.log(e);
      }
    };

    fetchProduct();
  }, [id]);

  const handleOrder = () => {
    setCart([...cart, product]);
    toast.success(`1 ${product.name} added to cart!`);
  };

  return (
    <div className="bg-white h-full">
      {product ? (
        <div className="content grid grid-cols-1 xl:grid-cols-2">
          <div className="p-8 pt-12 order-2 xl:order-1">
            <div className="heading flex justify-between items-center">
              <h1 className="text-4xl flex lg:flex-col justify-start items-center lg:items-start gap-4 md:text-6xl lg:text-8xl text-black font-tan-nimbus">
                {product.name}
              </h1>
              <p className="font-space-grotesk block pb-4 text-white text-base md:text-xl">
                <span className="bg-bright-yellow text-lg p-2 lg:p-3 px-3 lg:px-5 rounded-xl">
                  ${product.price}
                </span>
              </p>
            </div>
            <ReactMarkdown className="prose pt-6 text-lg text-justify">
              {product.description}
            </ReactMarkdown>
            <button
              onClick={handleOrder}
              className="order bg-leaf flex justify-center items-center hover:shadow-xl p-2 lg:p-3 px-4 lg:px-5 rounded-xl text-white w-full mt-8 gap-2"
            >
              Add to cart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
          <div className="image xl:h-[80vh] w-full order-1 xl:order-2">
            <img
              src={
                process.env.REACT_APP_SUPABASE_URL +
                `/storage/v1/object/public/images/` +
                product.image
              }
              className="w-full h-[50vh] xl:h-full object-cover"
              alt=""
            />
          </div>
        </div>
      ) : (
        <div className="content h-[80vh] p-5 flex justify-center items-center">
          <h1 className="text-2xl md:text-8xl text-yellow-500 font-tan-nimbus">
            Loading...
          </h1>
        </div>
      )}
    </div>
  );
};

export default Products;
