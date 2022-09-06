import Product from "./MenuProduct";
import { useEffect } from "react";
import { useMenuContext } from "../context/MenuContext";
import { Link } from "react-router-dom";

const Menu = () => {
  const menu = useMenuContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="product-section px-4 md:px-20 py-5 w-full bg-snow max-w-7xl mx-auto"
      id="menu"
    >
      <div className="heading py-4">
        <h1 className="text-4xl md:text-7xl xl:text-7xl font-tan-nimbus">
          <Link to="/menu">Menu</Link>
        </h1>
      </div>
      <hr />
      <div className="products py-5 min-h-[50vh]">
        {menu && menu.data ? (
          <div className="products grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-8">
            {menu &&
              menu.data.map(({ name, image, price, slug, id }) => (
                <Product
                  key={id}
                  title={name}
                  image={image}
                  price={price}
                  slug={slug}
                />
              ))}
          </div>
        ) : (
          <div className="loading">
            <h1 className="text-4xl md:text-7xl xl:text-7xl text-bright-yellow font-tan-nimbus">
              Loading...
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
