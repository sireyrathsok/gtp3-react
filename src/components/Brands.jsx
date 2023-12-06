import React from "react";

const Brands = () => {
  return (
    <div className=" text-white flex flex-1 flex-wrap  justify-center items-center mt-20 ">
      <img
        src={require("../assets/google.png")}
        alt="google"
        className="brand-logo"
      />
      <img
        src={require("../assets/shopify.png")}
        alt="shopify"
        className="brand-logo"
      />
      <img
        src={require("../assets/atlassian.png")}
        alt="atlassian"
        className="brand-logo"
      />

      <img
        src={require("../assets/slack.png")}
        alt="slack"
        className="brand-logo"
      />
      <img
        src={require("../assets/dropbox.png")}
        alt="dropbox"
        className="brand-logo"
      />
    </div>
  );
};

export default Brands;
