import { useContext, createContext } from "react";
import { useLocalStorage } from "usehooks-ts";

const CartContext = createContext({ cart: [], setCart: (value: any) => {} });

type Props = {
  children: React.ReactNode;
};

export const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useLocalStorage("cart", []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCartContext() {
  return useContext(CartContext);
}
