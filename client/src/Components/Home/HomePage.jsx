import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../HeroSection/Hero";
import About from "../About/About";
import Offers from "../Offer/Offers";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="max-w-[1600px] mx-auto">
        <Hero />
        <About />
        <Offers />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
