import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QueryString from "qs";
import ReactMarkdown from "react-markdown";
import Footer from "./Footer";

const Products = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      const query = QueryString.stringify({
        populate: "*",
        filters: {
          slug: {
            $eq: id,
          },
        },
      });

      const request = await fetch(
        `https://andromeda-strapi.herokuapp.com/api/products?${query}`
      );
      const data = await request.json();
      console.log(data.data[0]);
      setProduct(data.data[0]);
    };
    fetchProduct();
  }, [id]);

  return (
    <div className="bg-khaki h-[80vh]">
      {product ? (
        <div className="content grid grid-cols-1 xl:grid-cols-2">
          <div className="p-8 pt-10 md:pt-32 order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl lg:text-8xl text-yellow-500 font-tan-nimbus">
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </h1>
            <ReactMarkdown className="prose pt-4">
              {product.attributes.Description}
            </ReactMarkdown>
            <p className="font-space-grotesk pt-8 block pb-4 text-neutral-200 text-xl md:text-3xl">
              <span className="bg-leaf p-3 px-5 rounded-xl">
                ${product.attributes.Price}
              </span>
            </p>
          </div>
          <div className="image xl:h-[80vh] w-full order-1 xl:order-2">
            <img
              src={
                product.attributes.Image.data[0].attributes.formats.large.url
              }
              className="w-full h-[50vh] xl:h-full object-cover"
              alt=""
            />
          </div>
        </div>
      ) : (
        <div className="content">
          <h1 className="text-8xl text-yellow-500 font-tan-nimbus">
            Loading...
          </h1>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Products;
