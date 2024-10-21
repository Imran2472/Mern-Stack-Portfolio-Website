import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../HeroSection/Hero";
import About from "../About/About";
import Offers from "../Offer/Offers";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

function HomePage() {
  const [DarkMode, setDarkMode] = useState(() => {
    // Get dark mode from local storage
    const savedMode = localStorage.getItem("DarkMode");
    return savedMode === "true" ? true : false;
  });

  useEffect(() => {
    // Update local storage when dark mode changes
    localStorage.setItem("DarkMode", DarkMode);
  }, [DarkMode]);
  const HandleDarkMode = () => {
    setDarkMode(DarkMode === false ? true : false);
  };
  return (
    <div className="max-w-[1600px] mx-auto">
      <Navbar HandleDarkMode={HandleDarkMode} DarkMode={DarkMode} />
      <Hero DarkMode={DarkMode} />
      <About DarkMode={DarkMode} />
      <Offers DarkMode={DarkMode} />
      <Project DarkMode={DarkMode} />
      <Contact DarkMode={DarkMode} />
      <Footer DarkMode={DarkMode} />
    </div>
  );
}

export default HomePage;
