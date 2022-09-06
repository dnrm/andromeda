import { toast } from "react-hot-toast";
import { OrderType } from "../types/Order";
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase";
import MoonLoader from "react-spinners/MoonLoader";
import { useCartContext } from "../context/CartContext";

const Checkout = () => {
  const { cart } = useCartContext();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [uploading, setUploading] = useState(false);
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

  const emailChange = (e: any) => {
    setEmail(e.target.value);
  };
  const nameChange = (e: any) => {
    setName(e.target.value);
  };

  const placeOrder = async () => {
    setUploading(true);
    const order: OrderType = {
      customerEmail: email,
      deliveryDate: new Date(),
      products: cart,
      total: prices.subtotal,
    };

    try {
      const insert = await supabase.from("orders").insert(order);

      if (insert.error) {
        toast.error("Unable to place order :c");
      } else {
        toast.success("Order placed successfully!");
      }
    } catch (error) {
      console.log(error);
    }

    setUploading(false);
  };

  return (
    <div className="min-h-[80vh] bg-white">
      <div className="w-full h-full px-5 pt-0 md:pt-4 max-w-6xl mx-auto">
        <h1 className="pt-8 md:pt-16 pb-3 text-4xl md:text-6xl lg:text-8xl font-tan-nimbus text-black">
          Checkout
        </h1>
        <hr />
        <div className="min-h-[70vh] pt-6">
          <div className="grid grid-cols-1 gap-2">
            <div className="payment-method bg-neutral-100 pt-4 px-4 pb-2 font-montserrat text-base md:text-xl">
              <div className="part-one text-neutral-600 pb-2">
                <div className="subtotal flex justify-center flex-col items-start">
                  <p>
                    Name <span className="text-red-400">*</span>{" "}
                  </p>
                  <input
                    onChange={nameChange}
                    value={name}
                    type="text"
                    placeholder="John Doe"
                    className="bg-white mt-3 text-lg p-2 text-teal-600 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="payment-method bg-neutral-100 pt-4 px-4 pb-2 font-montserrat text-base md:text-xl">
              <div className="part-one text-neutral-600 pb-2">
                <div className="subtotal flex justify-center flex-col items-start">
                  <p>
                    Email <span className="text-red-400">*</span>{" "}
                  </p>
                  <input
                    onChange={emailChange}
                    value={email}
                    type="text"
                    placeholder="example@medina.dev"
                    className="bg-white mt-3 text-lg p-2 text-teal-600 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="payment-method bg-neutral-100 pt-4 px-4 pb-2 font-montserrat text-base md:text-xl">
              <div className="part-one text-neutral-600 pb-2">
                <div className="subtotal flex justify-between items-center">
                  <p>Payment method: </p>
                  <select name="payment-method" id="payment-method">
                    <option value="cash">Cash</option>
                    <option value="credit-card">Credit card</option>
                    <option value="promo-code">Promo code</option>
                  </select>
                </div>
              </div>
            </div>
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
            <div className="checkout p-4 bg-neutral-100 flex flex-col gap-4">
              <div className="checkout-button">
                <button
                  onClick={placeOrder}
                  className="bg-neutral-900 hover:underline flex justify-center items-center hover:bg-black text-base md:text-lg text-white font-montserrat w-full px-4 py-4 font-bold"
                >
                  {!uploading ? (
                    "Place order"
                  ) : (
                    <MoonLoader loading={true} color={"white"} size={20} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
