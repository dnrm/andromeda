import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Product from "./components/Product";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext";
import MenuWrapper from "./context/MenuContext";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

// * Route Components
import App from "./App";
import About from "./components/About";
import Menu from "./components/Menu";
import Admin from "./components/Admin";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <CartProvider>
      <MenuWrapper>
        <Banner />
        <Navigation />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/p/:id" element={<Product />} />
        </Routes>
        <Footer />
      </MenuWrapper>
    </CartProvider>
    <Toaster />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
