import React from "react";
import { FeaturesList } from "../constants";

const Features = () => {
  return (
    <>
      <p className="bg-light w-100 left-0  rounded-tr-full rounded-br-full"></p>
      <div className=" text-white mt-24 font-manrope xl:flex xl:justify-between  lg:justify-center  ">
        <div className=" ">
          <p className=" md:mt-3 xl:mt-0 text-head2 xl:max-w-md ">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </p>
          <p className="  mt-4   text-mini">
            Request Early Access to Get Started
          </p>
        </div>
        <ul className=" md:mt-16 xl:mt-0 lg:w-3/4 lg:justify-center   ">
          {FeaturesList.map((nav) => {
            return (
              <div className=" my-16 lg:mt-0 md:my-10  ">
                <p className="horizontal-line  xl:mx-32 "></p>
                <div className=" md:flex ">
                  <li className=" mt-4 md:mt-0 md:mr-16 text-head3   lg:w-52 xl:w-40 md:w-1/3 xl:mx-32 ">
                    {nav.title}
                  </li>
                  <li className=" mt-4 md:mt-0   md:ml-6 text-Content md:w-2/3 lg:max-w-sm">
                    {nav.des}
                  </li>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Features;
