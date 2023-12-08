import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import WhatGPT3 from "./components/WhatGPT3";
import Features from "./components/Features";
import Possibilities from "./components/Possibilities";
import CTA from "./components/CTA";

const App = () => {
  return (
    <div class="  px-7 sm:px-12 md:px-20 lg:px-32   bg-slate-950">
      <NavBar />
      <Hero />
      <Brands />
      <WhatGPT3 />
      <Features />
      <Possibilities />
      <CTA />
    </div>
  );
};

export default App;
