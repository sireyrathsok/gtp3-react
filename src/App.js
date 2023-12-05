import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div class="  px-7 sm:px-12 md:px-32 w-full h-screen bg-slate-950">
      <NavBar />

      <Hero />
    </div>
  );
};

export default App;
