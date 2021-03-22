import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import AboutSectionOne from "../components/AboutSectionOne";
import AboutSectionTwo from "../components/AboutSectionTwo";
import { aboutObjOne } from "../components/AboutSectionTwo/Data";
import AboutSectionThree from "../components/AboutSectionThree";
import { aboutObjTwo } from "../components/AboutSectionThree/Data";
import AboutSectionFour from "../components/AboutSectionFour";
import { aboutObjThree } from "../components/AboutSectionFour/Data";
import Footer from "../components/Footer";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <AboutSectionOne />
      <AboutSectionTwo {...aboutObjOne} />
      <AboutSectionThree {...aboutObjTwo} />
      <AboutSectionFour {...aboutObjThree} />
      <Footer />
    </>
  );
};

export default Home;
