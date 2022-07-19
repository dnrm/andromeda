import React from "react";
import Product from "./Product";

const Menu = () => {
  return (
    <div className="product-section p-5 md:p-10 w-full" id="menu">
      <div className="heading">
        <h1 className="text-6xl md:text-7xl xl:text-8xl font-tan-nimbus py-8">
          Menu
        </h1>
      </div>
      <div className="products grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8">
        <Product
          title="Cappuccino"
          image={"https://images.unsplash.com/photo-1541167760496-1628856ab772"}
          price={49}
        />
        <Product
          title="Espresso"
          image={"https://images.unsplash.com/photo-1610889556528-9a770e32642f"}
          price={29}
        />
        <Product
          title="Americano"
          image={
            "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          }
          price={39}
        />
        <Product
          title="Caramel Latte"
          image={
            "https://images.unsplash.com/photo-1593443320739-77f74939d0da"
          }
          price={49}
        />
        <Product
          title="Cold Brew"
          image={
            "https://images.unsplash.com/photo-1501006094252-8dc90bfd2c3f"
          }
          price={39}
        />
        <Product
          title="Pour Over"
          image={
            "https://images.unsplash.com/photo-1544421604-4bfaaeba6830"
          }
          price={39}
        />
      </div>
    </div>
  );
};

export default Menu;
