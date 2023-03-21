import React from "react";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="flex flex-col bg-blog p-10">
      <div className="flex flex-col justify-center items-center">
        <h1
          className="text-transparent bg-clip-text bg-gradient-to-l from-orange-400 to-purple-500 text-xl md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold p-5
        "
        >
          Do you want to step into the future before everyone else?
        </h1>
        <button
          type-button
          className="bg-blog border text-white font-bold mt-2 rounded-md bordder-2 border-white p-4"
        >
          Request early Access
        </button>
      </div>

      <div
        className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-10
       justify-evenly items-center mt-10"
      >
        <div
          className="flex flex-col md:
         gap-4"
        >
          <img className="w-16" src={logo} alt="logo" />
          <p className="text-white w-4/6">© 2023 GPT-3. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row
        gap-20 mt-10 text-white">
          <ul
            className="flex flex-col gap-4 
          list-none "
          >
            <li>links</li>
            <li>Social media</li>
            <li>Counters</li>
            <li>contact</li>
          </ul>

          <ul
            className="flex flex-col gap-4
          list-none"
          >
            <li>company</li>
            <li>Terms & Conditions</li>
            <li>Privacy and Policy</li>
            <li>contact</li>
          </ul>
          <ul
            className="flex flex-col gap-4
          list-none"
          >
            <li>Get in touch</li>
            <li>Peshawar hayatabad Pakistan</li>
            <li>+92 302 2835635</li>
            <li>hammali99@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
