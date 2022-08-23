import React, { useEffect } from "react";

const Admin = () => {
  useEffect(() => {
    window.location.href = "https://andromeda-strapi.herokuapp.com/admin";
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden pt-16 flex justify-center items-center">
      <h1>
        <a
          className="leading-normal text-4xl md:text-6xl md:pt-4 lg:text-8xl font-tan-nimbus text-leaf hover:underline"
          href="https://andromeda-strapi.herokuapp.com/admin"
        >
          Admin Dashboard
        </a>
      </h1>
    </div>
  );
};

export default Admin;
