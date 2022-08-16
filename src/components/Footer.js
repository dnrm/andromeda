import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer grid grid-cols-1 gap-5 bg-leaf p-5 md:px-16 md:gap-8">
      <div className="logo flex justify-between items-center">
        <h1 className="text-white font-tan-nimbus text-2xl md:text-3xl lg:text-5xl">
          ANDROMEDA COFFEE
        </h1>
        <img
          src="/a.png"
          className="h-10 md:h-24 lg:h-36 rounded-full"
          alt="Andromeda Coffee logo"
        />
      </div>
      <hr />
      <div className="link-grid grid grid-cols-2 justify-start items-start">
        <div className="links-internal text-neutral-200 font-space-grotesk">
          <div className="link">
            <p>
              <Link
                to="/menu"
                className="text-base md:text-lg lg:text-2xl hover:underline"
              >
                Menu
              </Link>
            </p>
            <p>
              <Link
                to="/about"
                className="text-base md:text-lg lg:text-2xl hover:underline"
              >
                About
              </Link>
            </p>
            <p>
              <Link
                to="/quality"
                className="text-base md:text-lg lg:text-2xl hover:underline"
              >
                Quality
              </Link>
            </p>
            <p>
              <Link
                to="/cart"
                className="text-base md:text-lg lg:text-2xl hover:underline"
              >
                Cart
              </Link>
            </p>
          </div>
        </div>
        <div className="links-external flex flex-col justify-center items-start md:items-center text-neutral-200 font-space-grotesk">
          <div className="links">
            <p>
              <a
                href="https://www.instagram.com/andromedacoffee/"
                target={"_blank"}
                rel="noopener noreferrer"
                className="text-base md:text-lg lg:text-2xl hover:underline"
              >
                Instagram
              </a>
            </p>
            <p>
              <a
                href="https://www.instagram.com/andromedacoffee/"
                target={"_blank"}
                rel="noopener noreferrer"
                className="text-base md:text-lg lg:text-2xl hover:underline"
              >
                Contact
              </a>
            </p>
            <p>
              <a
                href="https://www.instagram.com/andromedacoffee/"
                target={"_blank"}
                rel="noopener noreferrer"
                className="text-base md:text-lg lg:text-2xl hover:underline"
              >
                FAQ
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="text-[#A7B1A1] text-sm uppercase font-space-grotesk">
          © {new Date().getFullYear()} Andromeda Coffee. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
