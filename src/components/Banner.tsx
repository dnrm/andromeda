import React, { useState } from "react";
import useSWR from "swr";

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Banner = () => {
  const [showBanner, setShowBanner] = useState(true);

  const { data, error } = useSWR(
    "https://andromeda-strapi.herokuapp.com/api/banner",
    fetcher
  );

  const closeBanner = () => {
    setShowBanner(false);
    localStorage.setItem("banner-is-closed", "true");
  };

  return (
    <>
      {showBanner && (
        <div className="banner bg-neutral-800 text-white font-sans p-2 flex justify-between items-center h-12 w-full">
          <span></span>
          <p>{data && !error ? data.data.attributes.Content : null}</p>
          <div className="close" onClick={closeBanner}>
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
