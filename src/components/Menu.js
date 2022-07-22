import React, { useEffect, useState } from "react";
import Product from "./MenuProduct";
import { useMenuContext } from "../context/MenuContext";

const Menu = () => {
  const items = useMenuContext();
  console.log(items);

  // useEffect(() => {
  //   const getItems = async () => {
  //     const products = await fetch(
  //       "https://andromeda-strapi.herokuapp.com/api/products?populate=*"
  //     );
  //     const data = await products.json();
  //     setProducts(data.data);
  //   };
  //   getItems();
  // }, []);

  return (
    <div className="product-section px-4 py-5 md:p-10 w-full bg-snow" id="menu">
      <div className="heading">
        <h1 className="text-6xl md:text-7xl xl:text-8xl font-tan-nimbus py-8">
          Menu
        </h1>
      </div>
      <div className="products grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
        {items &&
          items.map(({ attributes, id }) => (
            <Product
              key={id}
              title={attributes.Title}
              description={attributes.Description}
              image={attributes.Image.data[0].attributes.formats.medium.url}
              price={attributes.Price}
              slug={attributes.Slug}
            />
          ))}
      </div>
    </div>
  );
};

export default Menu;
