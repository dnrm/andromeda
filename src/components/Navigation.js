import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useCartContext } from "../context/CartContext";

const Navigation = () => {
  const opacity = window.location.pathname.includes("/p/");
  const { cart } = useCartContext();

  return (
    <div
      className={`w-full flex justify-between items-center tracking-tighter bg-black p-4 text-snow font-space-grotesk px-6 md:px-16 z-50 transition-all duration-200`}
    >
      <div className="home">
        <p className="pt-1 text-2xl font-tan-nimbus">
          <HashLink smooth to="/#">
            Home
          </HashLink>
        </p>
      </div>
      <div className="links flex justify-center items-center gap-5 invisible sm:visible text-base">
        <p>
          <HashLink smooth to="/#about">
            About
          </HashLink>
        </p>
        <p>
          <HashLink smooth to="/#menu">
            Menu
          </HashLink>
        </p>
        <p>
          <HashLink smooth to="/#quality">
            Quality
          </HashLink>
        </p>
        <p>
          <Link to="/cart" className="flex justify-center items-center gap-2">
            Cart ({cart.length}){" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </Link>
        </p>
      </div>
      <div className="hamburger sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navigation;
