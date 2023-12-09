import React from "react";

const Footer = () => {
  return (
    <div className=" flex-col justify-center items-center  md:px-20 xl:px-44 px-5  mt-24  bg-primary  ">
      <p className=" text-center  text-head1 lg:text-5xl xl:px-24 lg:px-32 md:px-20    pt-24 w-full bg-gray-700  ">
        Do you want to step in to the future before others
      </p>
      <p className=" my-10 py-3 px-5 mx-24 xl:mx-96 lg:mx-72 md:mx-52   text-center  border-solid border-2 text-white font-manrope   ">
        Request Early Access
      </p>

      <div className=" md:flex md:justify-between mt-24 md:mt-32 ">
        <div className=" md:w-2/5  w-full">
          <div className=" xl:ml-20 ">
            <p className=" text-3xl md:text-4xl md:text-left text-center  font-manrope font-extrabold text-white">
              GPT-3
            </p>
            <p className=" text-min md:w-44 md:text-left text-center text-xs text-white mt-4">
              Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
            </p>
          </div>
        </div>
        <p className=" md:hidden w-full h-0.5 bg-slate-400 my-5"></p>
        <div className=" md:w-3/5 flex justify-around   ">
          <div>
            <p className="text-footer-head">Links</p>
            <p className=" text-footer-link">Overons</p>
            <p className=" text-footer-link">Social Media</p>
            <p className=" text-footer-link">Counters</p>
            <p className=" text-footer-link">Contact</p>
          </div>
          <div className=" mx-10">
            <p className="text-footer-head">Company</p>
            <p className=" text-footer-link">Term & Conditions</p>
            <p className=" text-footer-link">Privacy Policy</p>
            <p className=" text-footer-link">Contact</p>
          </div>
          <div>
            <p className="text-footer-head ">Get in touch</p>
            <p className=" text-footer-link w-32 ">
              Crechterwoord K12 182 DK Alknjkcb
            </p>
            <p className=" text-footer-link">Social Media</p>
            <p className=" text-footer-link">085-132567</p>
            <p className=" text-footer-link pb-5">info@payme.net</p>
          </div>
        </div>
      </div>
      <p className="text-footer-link text-center  py-5">
        © 2021 GPT-3. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
