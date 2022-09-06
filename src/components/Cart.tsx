import React, { useEffect, useState } from "react";
import { useCartContext } from "../context/CartContext";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Product from "../types/Product";

const Cart = () => {
  const { cart, setCart } = useCartContext();
  const [prices, setPrices] = useState({ subtotal: 0, tip: 0, total: 0 });

  useEffect(() => {
    const subtotal = cart.reduce(
      (acc: number, item: any) => acc + item.price,
      0
    );
    const tip = Math.floor(subtotal * 0.05);
    const total = subtotal + tip;

    setPrices({ subtotal, tip, total });
  }, [cart]);

  // ! CREATE MESSAGE
  const createMessage = (cart: Product[]) => {
    const message = `Hola, me gustaría hacer un pedido de los siguientes productos:

${cart.map((item: Product) => `${item.name} - $${item.price}`).join("\n")}

Total: $${cart.reduce((acc: number, item: Product) => acc + item.price, 0)}`;
    return message;
  };
  // ! END CREATE MESSAGE

  const placeOrder = () => {
    const message = createMessage(cart);
    window.open(
      `https://wa.me/528115306623?text=${encodeURIComponent(message)}`
    );
  };

  const deleteProduct = (index: number) => {
    const newCart = cart.filter((item, i) => i !== index);
    setCart(newCart);
  };

  return (
    <div className="min-h-[80vh] bg-white">
      <div className="w-full h-full px-5 pt-0 md:pt-4 max-w-6xl mx-auto">
        <h1 className="pt-8 md:pt-16 pb-3 text-4xl md:text-6xl lg:text-8xl font-tan-nimbus text-black">
          Cart
        </h1>
        <hr />
        <div className="min-h-[70vh]">
          <div className="pt-4 cart-contents flex flex-col pb-2 gap-2">
            {cart.length > 0 ? (
              cart.map((item: Product, index: number) => (
                <div key={index} className="item bg-neutral-100 p-4">
                  <div
                    className="cart-item flex gap-4 justify-start items-start"
                    key={index}
                  >
                    <div className="image h-14 md:h-20 w-14 md:w-20">
                      <img
                        src={
                          process.env.REACT_APP_SUPABASE_URL +
                          `/storage/v1/object/public/images/` +
                          item.image
                        }
                        className={"object-cover h-full w-full"}
                        alt=""
                      />
                    </div>
                    <div className="side w-full">
                      <div className="info text-black font-montserrat flex justify-between items-center w-full gap-2">
                        <div className="title-and-price flex justify-start items-center gap-4">
                          <div className="cart-item-name uppercase text-lg md:text-2xl lg:text-3xl font-light tracking-tighter">
                            <Link to={`/p/${item.slug}`}>{item.name}</Link>
                          </div>
                          <div className="inline cart-item-price font-space-grotesk bg-bright-yellow text-base md:text-lg p-1 px-2 rounded-md text-white">
                            ${item.price}
                          </div>
                        </div>
                        <div
                          className="delete-button cursor-pointer hover:text-red-400"
                          onClick={() => deleteProduct(index)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      </div>
                      <ReactMarkdown className="description overflow-x-scroll text-neutral-500 font-sans text-justify">
                        {item.excerpt ||
                          item.description.split(/[.!]/)[0] + "."}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="h-[70vh] flex justify-center items-center flex-col">
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-tan-nimbus text-leaf">
                  Your cart is empty
                </h1>
                <HashLink
                  to="/#menu"
                  className="text-base md:text-xl text-aqua underline font-space-grotesk"
                >
                  Choose some drinks
                </HashLink>
              </div>
            )}
          </div>
          {cart.length > 0 ? (
            <>
              <div className="prices bg-neutral-100 pt-4 px-4 pb-2 font-montserrat text-base md:text-xl">
                <div className="part-one text-neutral-600 pb-2">
                  <div className="subtotal flex justify-between items-center">
                    <p>Subtotal: </p>
                    <span>${prices.subtotal}</span>
                  </div>
                  <div className="subtotal flex justify-between items-center">
                    <p>Tip: </p>
                    <span>${prices.tip}</span>
                  </div>
                </div>
                <div className="part-two pt-2 pb-2 border-t-2 border-neutral-300 text-neutral-700 font-bold">
                  <div className="total flex justify-between items-center">
                    <p>Total: </p>
                    <span>${prices.total}</span>
                  </div>
                </div>
              </div>
              <div className="checkout p-4 bg-neutral-100 mt-2 mb-2 flex flex-col gap-4">
                <div className="checkout-button">
                  <Link
                    to="/checkout"
                    className="bg-neutral-900 hover:underline flex justify-center items-center hover:bg-black text-base md:text-lg text-white font-montserrat w-full px-4 py-4 font-bold"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
              <div className="to-menu flex justify-center items-center text-xs md:text-sm hover:underline text-neutral-600 pb-8">
                <Link
                  to={"/menu"}
                  className="flex items-center justify-center gap-1 tracking-tighter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>{" "}
                  Back to menu
                </Link>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Cart;
