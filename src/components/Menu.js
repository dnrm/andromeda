import React, { useEffect, useState } from "react";
import Product from "./Product";

const Menu = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const products = await fetch(
        "https://andromeda-strapi.herokuapp.com/api/products?populate=*"
      );
      const data = await products.json();
      setProducts(data.data);
    };
    getItems();
  }, []);

  return (
    <div className="product-section p-5 md:p-10 w-full bg-snow" id="menu">
      <div className="heading">
        <h1 className="text-6xl md:text-7xl xl:text-8xl font-tan-nimbus py-8">
          Menu
        </h1>
      </div>
      <div className="products grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8">
        {products &&
          products.map(({ attributes, id }) => (
            <Product
              key={id}
              title={attributes.Title}
              description={attributes.Description}
              image={attributes.Image.data[0].attributes.formats.medium.url}
              price={attributes.Price}
            />
          ))}
      </div>
    </div>
  );
};

export default Menu;
