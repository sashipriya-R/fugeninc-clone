import React from "react";
import HeroSection from "./herosection";
import MissionSection from "./missionsection";
import HRSection from "./hrsection";
import TechStackSection from "./techstacksection";
import WhyFugenSection from "./whyfugensection";
import OurClients from "./ourclients";


const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <MissionSection />
      <HRSection />
      <TechStackSection />
      <WhyFugenSection />
      <OurClients />
    </div>
  );
};

export default Home;
