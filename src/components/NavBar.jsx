import React from "react";
import { navLink } from "../constants";
import { useState } from "react";
import { FiAlignRight } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className=" mx-7 pt-3  text-white font-manrope">
      <div className=" flex flex-row justify-between items-center">
        <p className=" font-extrabold text-lg">GPT-3</p>

        <div className="  sm:hidden  ">
          {toggle ? (
            <IoMdClose onClick={() => setToggle(false)} />
          ) : (
            <FiAlignRight onClick={() => setToggle(!toggle)} className=" z-0" />
          )}
        </div>

        <ul
          className={`sm:flex sm:mt-0 sm:py-0 text-white text-cente sm:bg-black bg-slate-900  px-4  py-2 mt-3 rounded-lg ${
            !toggle
              ? "hidden"
              : " absolute sm:relative top-9 sm:top-0 sm:right-0   right-7 "
          }`}
        >
          {navLink.map((nav) => {
            return (
              <li
                key={nav.id}
                className={`sm:py-0 cursor-pointer hover:bg-slate-800 rounded-sm px-2  my-2 sm:my-0 `}
              >
                <a href={`#{nav.id}`}>{nav.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
