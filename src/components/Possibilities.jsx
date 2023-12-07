import React from "react";
import FeatureImage from "../assets/FeatureImage.png";

const Possibilities = () => {
  return (
    <div className=" mt-16 md:flex md:justify-between md:items-center ">
      <img
        src={FeatureImage}
        alt="FeatureImage"
        className=" h-fit md:max-w-xs lg:max-w-lg md:mr-10 lg:mr-16"
      />
      <div className=" md:w-1/2">
        <p className=" mt-16 font-manrope text-blue-400 ">
          Request Early Access to Get Started
        </p>
        <p className=" text-head2 mt-4 mb-8 max-w-md ">
          The possibilities are beyond your imagination
        </p>
        <p className=" text-Content mb-4 md:max-w-lg ">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className=" text-mini">Request Early Access to Get Started</p>
      </div>
    </div>
  );
};

export default Possibilities;
