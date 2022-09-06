import ProductType from "../types/Product";
import { supabase } from "../utils/supabase";
import { useState, useContext, createContext, useEffect } from "react";

interface MenuContextInterface {
  data: ProductType[];
  error: any;
}

type Props = {
  children: React.ReactNode;
};

export const MenuContext = createContext<MenuContextInterface | null>(null);

export default function MenuWrapper({ children }: Props) {
  const [products, setProducts] = useState<any>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await supabase.from("products").select("*");
        setProducts(products.data);
      } catch (e) {
        setError(e);
      }
    };
    fetchProducts();
  }, []);

  return (
    <MenuContext.Provider value={{ data: products, error }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenuContext() {
  return useContext(MenuContext);
}
