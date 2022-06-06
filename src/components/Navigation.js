import React from "react";

const Navigation = () => {
  return (
    <div className="flex justify-between items-center tracking-tighter bg-davys p-3 text-snow font-space-grotesk px-16 z-50">
      <div className="home">
        <p className="text-2xl">Home</p>
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
