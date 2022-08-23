import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useCartContext } from "../context/CartContext";

const Navigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(
    window.location.pathname
  );
  const location = useLocation();
  const { cart } = useCartContext();

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location]);

  return (
    <>
      <div
        className={`${
          currentLocation === "/"
            ? "bg-black text-white"
            : "bg-white text-black"
        } w-full flex justify-between items-center tracking-tighter p-3 font-space-grotesk md:px-16 z-50 transition-all duration-200`}
      >
        <div className="home">
          <p className="text-2xl font-tan-nimbus">
            <HashLink smooth to="/#">
              <img
                src={currentLocation === "/" ? "/a.png" : "/colored-logo.png"}
                alt=""
                className="h-12 rounded-full"
              />
            </HashLink>
          </p>
        </div>
        <div className="links flex justify-center items-center gap-5 invisible sm:visible text-base">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <HashLink to="/#about">About</HashLink>
          </p>
          <p>
            <Link to="/menu">Menu</Link>
          </p>
          <p>
            <NavLink
              to="/cart"
              className="flex justify-center items-center gap-2"
            >
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
            </NavLink>
          </p>
        </div>
        <div
          className="hamburger sm:hidden"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
          )}
        </div>
      </div>
      {navbarOpen && (
        <div
          className={`mobile-navbar ${
            currentLocation === "/"
              ? "bg-black text-white"
              : "bg-white text-black"
          } drop-shadow-md`}
        >
          <div className="links p-4 font-tan-nimbus">
            <p className="text-2xl">
              <NavLink to="/">
                {({ isActive }) => (
                  <span className={isActive ? "text-leaf" : undefined}>
                    Home
                  </span>
                )}
              </NavLink>
            </p>
            <p className="text-2xl">
              <NavLink to="/menu">
                {({ isActive }) => (
                  <span className={isActive ? "text-leaf" : undefined}>
                    Menu
                  </span>
                )}
              </NavLink>
            </p>
            <p className="text-2xl">
              <NavLink to="/about">
                {({ isActive }) => (
                  <span className={isActive ? "text-leaf" : undefined}>
                    About
                  </span>
                )}
              </NavLink>
            </p>
            <p className="text-2xl">
              <NavLink to="/cart">
                {({ isActive }) => (
                  <span className={isActive ? "text-leaf" : undefined}>
                    Cart ({cart.length})
                  </span>
                )}
              </NavLink>
            </p>
          </div>
          <hr />
        </div>
      )}
    </>
  );
};

export default Navigation;
