import React from "react";
import Footer from "./containers/footer/Footer";
import Header from "./containers/header/Header";
import WhatGPT3 from "./containers/whatGPT3/WhatGPT3";
import Features from "./containers/features/Features";
import Possibilty from "./containers/possibility/Possibility";
import Navbar from "./components/navbar/Navbar.js";
import Brand from "./components/brand/Brand.js";
import CTA from "./components/cta/CTA.js";
import Blog from "./containers/blog/Blog.js";

const App = () => {
  return (
    <div
    className="bg-navy font-body body h-screen overflow-x-hidden"
    >
      <div
        className="bg-gradient-to-r from-cyan-900 to-black
          font-body body "
      >
        <Navbar />
        <Header />
       </div>
      <div  >
        <Brand />

        <WhatGPT3 />
        <div
          className='w-full h-0.5 bg-gradient-to-r from-orange-400 to-purple-500 mt-10'
         />
        <Features />
        <div
          className='w-full h-0.5 bg-gradient-to-r from-orange-400 to-purple-500 mt-10'
         />
        <Possibilty />
        <CTA />
        <div
          className='w-full h-0.5 bg-gradient-to-r from-orange-400 to-purple-500 mt-10'
         />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default App;
