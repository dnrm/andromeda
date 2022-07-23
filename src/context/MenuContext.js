import { useContext, useState } from "react";
import { createContext } from "react";
import useSWR from "swr";

export const MenuContext = createContext();

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function MenuWrapper({ children }) {
  const { data, error } = useSWR(
    "https://andromeda-strapi.herokuapp.com/api/products?populate=*",
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
