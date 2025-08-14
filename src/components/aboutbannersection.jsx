import React from "react";
import { Link } from "react-router-dom";
import handImage from "../assets/images/hand.jpg";

const AboutBannerSection = () => {
  return (
    <section className="relative w-full h-[350px] mb-12">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${handImage})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />

      <div className="relative z-10 flex flex-col justify-center h-full text-white px-10 sm:px-20 md:px-32 lg:px-48">
        <h1 className="text-4xl font-bold mb-2">ABOUT US</h1>
        <p className="text-lg">
          <Link
            to="/"
            className="hover:text-orange-500 transition-colors duration-300"
          >
            HOME
          </Link>
          <span className="mx-1">.</span>
          <span className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">
            ABOUT US
          </span>
        </p>
      </div>
    </section>
  );
};

export default AboutBannerSection;
