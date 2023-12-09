import React from "react";

const CTA = () => {
  return (
    <div className=" flex justify-between items-center rounded-lg shadow-sm my-28 px-8 py-9 bg-gradient-to-r from-mxCol1 to-mxCol2 text-black font-manrope">
      <div>
        <p className=" text-xs font-semibold">
          Request Early Access to Get Started
        </p>
        <p className=" md:text-xl  font-extrabold">
          Register today & start exploring the endless possiblities.
        </p>
      </div>
      <button className=" bg-black px-5 py-3 text-xs w-32 ml-6  text-white rounded-3xl ring-0 ring-blue-300">
        Get Started
      </button>
    </div>
  );
};

export default CTA;
