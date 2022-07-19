import React from "react";

const About = ({ topPadding }) => {
  return (
    <div className={`${topPadding ? "pt-16": 'pt-0'}`}>
      <div className="p-10 bg-snow">
        <h1 className="text-8xl font-tan-nimbus">About Us</h1>
      </div>
    </div>
  );
};

export default About;
