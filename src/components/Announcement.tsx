import React from "react";
import useSWR from "swr";

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Announcement = () => {
  const { data, error } = useSWR(
    "https://andromeda-strapi.herokuapp.com/api/announcements?populate=*&_limit=1",
    fetcher
  );

  return (
    <div className="announcement max-w-7xl mx-auto p-5 md:pt-8 md:px-20">
      {data && data.data.length > 0 && !error ? (
        <div className="image">
          <img
            src={data.data[0].attributes.File.data.attributes.url}
            alt="Announcement..."
          />
        </div>
      ) : null}
    </div>
  );
};

export default Announcement;
