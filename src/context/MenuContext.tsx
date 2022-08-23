import useSWR from "swr";
import ProductType from "../types/Product";
import { useContext } from "react";
import { createContext } from "react";
import { strapiUrl } from "../utils/strapiUrl";

interface MenuContextInterface {
  data: { data: ProductType[] };
  error: any;
}

type Props = {
  children: React.ReactNode;
};

export const MenuContext = createContext<MenuContextInterface | null>(null);
const fetcher = (url: any) => fetch(url).then((res) => res.json());

export default function MenuWrapper({ children }: Props) {
  const { data, error } = useSWR(
    strapiUrl + "api/products?populate=*",
    fetcher
  );

  return (
    <MenuContext.Provider value={{ data, error }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenuContext() {
  return useContext(MenuContext);
}
