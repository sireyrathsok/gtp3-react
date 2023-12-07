import React from "react";
import { FeaturesList } from "../constants";

const Features = () => {
  return (
    <div className=" text-white mt-24 font-manrope lg:flex lg:justify-between  ">
      <div className=" ">
        <p className=" md:mt-3 lg:mt-0 text-head2 lg:text-3xl lg:max-w-md md:text-2xl">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </p>
        <p className="  mt-4   font-manrope text-transparent bg-clip-text bg-gradient-to-r from-mxCol1 to-mxCol2">
          Request Early Access to Get Started
        </p>
      </div>
      <ul className=" md:mt-16 lg:mt-0 lg:w-3/4    ">
        {FeaturesList.map((nav) => {
          return (
            <div className=" my-16 lg:mt-0 md:my-10">
              <p className="horizontal-line lg:mx-16 xl:mx-32 "></p>
              <div className=" md:flex ">
                <li className=" mt-4 md:mt-0 md:mr-16 text-head3 md:text-[16px] lg:text-[20px] lg:w-52 xl:w-40 md:w-1/3 lg:mx-16 xl:mx-32 ">
                  {nav.title}
                </li>
                <li className=" mt-4 md:mt-0  md:text-[16px] md:ml-6 text-Content md:w-2/3 lg:max-w-sm">
                  {nav.des}
                </li>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Features;
