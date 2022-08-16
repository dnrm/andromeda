import Product from "./MenuProduct";
import { useMenuContext } from "../context/MenuContext";

const Menu = () => {
  const menu = useMenuContext();
  let data;
  let error;
  if (menu && menu.data && menu.data.data) {
    data = menu.data.data;
    error = menu.error;
  }

  return (
    <div className="product-section px-4 md:p-10 w-full bg-snow" id="menu">
      <div className="heading py-4">
        <h1 className="text-4xl md:text-7xl xl:text-9xl font-tan-nimbus">
          Menu
        </h1>
      </div>
      <hr />
      <div className="products py-5">
        {data ? (
          <div className="products grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
            {data &&
              data.map(({ attributes, id }) => (
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
        ) : error ? (
          <div className="error">{error}</div>
        ) : null}
      </div>
    </div>
  );
};

export default Menu;
