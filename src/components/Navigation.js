import React, { useState, useEffect } from "react";

const Navigation = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div
      className={`${
        visible ? "" : "opacity-0"
      } fixed w-full flex justify-between items-center tracking-tighter bg-black p-3 text-snow font-space-grotesk px-16 z-50 bg-opacity-70 transition-all duration-200`}
    >
      <div className="home">
        <p className="text-2xl font-tan-nimbus">Home</p>
      </div>
      <div className="links flex justify-center items-center gap-5 invisible sm:visible text-sm">
        <p>About</p>
        <p>Shop Coffee</p>
        <p>Sustainability</p>
        <p>Top Rated</p>
        <p>Cart</p>
      </div>
      <div className="hamburger sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
