import { supabase } from "../utils/supabase";
import { BannerType } from "../types/Banner";
import React, { useState, useEffect } from "react";

const Banner = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [banner, setBanner] = useState<BannerType>();

  useEffect(() => {
    const fetchBanner = async () => {
      const banner = await supabase.from("banner").select("*");
      const data: BannerType = banner.data?.[0];

      if (!banner) {
        setShowBanner(false);
        return;
      }

      if (data) {
        setBanner(data);
      }

      if (data.published === false) {
        setShowBanner(false);
      }
    };
    fetchBanner();
  }, []);

  const closeBanner = () => {
    setShowBanner(false);
    localStorage.setItem("banner-is-closed", "true");
  };

  return (
    <>
      {showBanner && banner ? (
        <div className="banner bg-neutral-800 text-white font-sans p-2 flex justify-between items-center h-12 w-full">
          <span></span>
          <p>{banner.content}</p>
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
