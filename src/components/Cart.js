import React from "react";
import { useCartContext } from "../context/CartContext";
import Footer from "./Footer";
import { HashLink } from "react-router-hash-link";

const Cart = () => {
  const { cart, setCart } = useCartContext();
  console.log(cart);

  const createMessage = (cart) => {
    const message = `Hola, me gustaría hacer un pedido de los siguientes productos:

${cart
  .map((item) => `${item.attributes.Title} - $${item.attributes.Price}`)
  .join("\n")}

Total: $${cart.reduce((acc, item) => acc + item.attributes.Price, 0)}`;
    return message;
  };

  const placeOrder = () => {
    const message = createMessage(cart);
    window.open(
      `https://wa.me/528115306623?text=${encodeURIComponent(message)}`
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-[80vh] bg-khaki">
      <div className="w-full h-full px-5 pt-0 md:pt-4">
        <h1 className="pt-8 md:pt-16 pb-2 text-4xl md:text-6xl lg:text-8xl font-tan-nimbus text-yellow-500 max-w-6xl mx-auto">
          Cart
        </h1>
        <div className="stats max-w-6xl mx-auto pb-5 flex justify-between items-center font-space-grotesk">
          <div className="total flex justify-start items-center">
            <p className="text-base md:text-lg lg:text-xl text-snow bg-maroon p-2 md:p-3 rounded-lg">
              Total: $
              {cart.reduce((prev, curr) => {
                return curr.attributes.Price + prev;
              }, 0)}{" "}
              MXN
            </p>
          </div>
          <div className="actions flex justify-center items-center gap-4">
            <button
              className="order-button flex justify-start items-center"
              onClick={clearCart}
            >
              <p className="text-base md:text-lg lg:text-xl text-snow bg-red-400 p-2 md:p-3 rounded-lg">
                Clear cart
              </p>
            </button>
            <button
              className="order-button flex justify-start items-center"
              onClick={placeOrder}
            >
              <p className="text-base md:text-lg lg:text-xl text-snow bg-aqua p-2 md:p-3 rounded-lg">
                Place order →
              </p>
            </button>
          </div>
        </div>
        <div className="cart-contents min-h-[60vh] flex flex-col max-w-6xl mx-auto pb-8 gap-1">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div className="item border-b-2 bg-leaf p-3 last:border-b-0 rounded-lg">
                <div
                  className="cart-item flex gap-4 justify-start items-center rounded-xl"
                  key={index}
                >
                  <div className="image h-14 md:h-20 w-14 md:w-20">
                    <img
                      src={item.attributes.Image.data[0].attributes.url}
                      className={
                        "object-cover h-full w-full rounded-lg border-2 border-snow"
                      }
                      alt=""
                    />
                  </div>
                  <div className="info text-snow">
                    <div className="cart-item-name text-lg md:text-2xl lg:text-3xl font-sans font-bold">
                      {item.attributes.Title}
                    </div>
                    <div className="cart-item-price font-space-grotesk text-neutral-300">
                      ${item.attributes.Price}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="h-[60vh] flex justify-center items-center flex-col">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-tan-nimbus text-leaf">Your cart is empty</h1>
              <HashLink to="/#menu" className="text-base md:text-xl text-aqua underline font-space-grotesk">Choose some drinks</HashLink>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
