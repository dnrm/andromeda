import React, { useState } from "react";
import useSWR from "swr";
import { strapiUrl } from "../utils/strapiUrl";

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Banner = () => {
  const [showBanner, setShowBanner] = useState(true);

  const { data, error } = useSWR(strapiUrl + "/api/banner", fetcher);

  const closeBanner = () => {
    setShowBanner(false);
    localStorage.setItem("banner-is-closed", "true");
  };

  console.log(data);

  return (
    <>
      {showBanner && !error && data && data.data ? (
        <div className="banner bg-neutral-800 text-white font-sans p-2 flex justify-between items-center h-12 w-full">
          <span></span>
          <p>{data.data.attributes.Content}</p>
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
      ) : null}
    </>
  );
};

export default Banner;
