import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="flex justify-between items-center p-2">
      <div className="ml-10 flex">
        <img className="w-20 h-20" src={logo} alt="" />
      </div>
      <div
        className="justify-flex-start items-center hidden md:flex
      lg:flex xl:flex 2xl:flex flex-none
       "
      >
        <div className="flex ml-20">
          <p
            className="text-white font-monrope text-xl ml-10;
          "
          >
            <a href="#home">Home</a>
          </p>
          <p className="text-white manroped font-monrope text-xl ml-10">
            <a href="#wgpt3">WHAt is GPT3</a>
          </p>
          <p className="text-white manroped font-monrope text-xl ml-10">
            <a href="#possibility">Open AI</a>
          </p>
          <p className="text-white manroped font-monrope text-xl ml-10">
            <a href="#feature">Case Studies</a>
          </p>
          <p className="text-white manroped font-monrope text-xl ml-10">
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
      <div
        className="gap-10 mr-10 items-center hidden md:flex
        lg:flex xl:flex 2xl:flex
      "
      >
        <p className="text-white font-monrope text-xl ml-10">sign in</p>
        <button
          className="bg-red-500 text-white  p-4 w-40 rounded-md cursor-pointer"
          type-button
        >
          sign up
        </button>
      </div>
      <div
        className=" flex md:hidden
      cursor-pointer
      "
      >
        {toggleMenu ? (
          <RiCloseLine
            className="text-white text-3xl z-50"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            className="text-white text-3xl"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div
            className="flex flex-col gap-4 absolute right-0 bg-gray-600 h-96 p-10 rounded-md justify-center mt-0
          "
          >
            <p className="text-white font-monrope text-xl ml-10">
              <a href="#home">Home</a>
            </p>
            <p className="text-white manroped font-monrope text-xl ml-10">
              <a href="#wgpt3">WHAt is GPT3</a>
            </p>
            <p className="text-white manroped font-monrope text-xl ml-10">
              <a href="#possibility">Open AI</a>
            </p>
            <p className="text-white manroped font-monrope text-xl ml-10">
              <a href="#feature">Case Studies</a>
            </p>
            <p className="text-white manroped font-monrope text-xl ml-10">
              <a href="#blog">Library</a>
            </p>
            <p className="text-white font-monrope text-xl ml-10">sign in</p>
            <button
              className="bg-red-500 text-white  p-4 w-40 rounded-md cursor-pointer"
              type-button
            >
              sign up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
