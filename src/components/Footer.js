import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer bg-leaf grid grid-cols-1 md:grid-cols-3 py-8 justify-center items-center px-4 md:px-16 gap-4 md:gap-8">
      <div className="logo flex justify-start items-center gap-4 p-0">
        <img
          src="/a.png"
          className="h-12 md:h-24 lg:h-36 rounded-full"
          alt="Andromeda Coffee logo"
        />
        <h1 className="text-white font-tan-nimbus text-xl md:text-3xl lg:text-5xl">
          Andromeda <br /> Coffee
        </h1>
      </div>
      <div className="links-internal flex flex-col justify-center items-start md:items-center text-neutral-200 font-space-grotesk text-2xl">
        <div className="link">
          <p>
            <Link to="/menu" className="hover:underline">
              Menu
            </Link>
          </p>
          <p>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </p>
          <p>
            <Link to="/quality" className="hover:underline">
              Quality
            </Link>
          </p>
        </div>
      </div>
      <div className="links-external flex flex-col justify-center items-start md:items-center text-neutral-200 font-space-grotesk text-2xl">
        <div className="links">
          <p>
            <a
              href="https://www.instagram.com/andromedacoffee/"
              target={"_blank"}
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
