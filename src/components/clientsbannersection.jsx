import React from "react";
import { Link } from "react-router-dom";
import handImage from "../assets/images/hand.jpg";

const ClientsBannerSection = () => {
  return (
    <section className="relative w-full h-[350px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${handImage})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />

      <div className="relative z-10 flex flex-col justify-center h-full text-white px-16 sm:px-28">
        <h1 className="text-4xl font-bold mb-2">CLIENTS</h1>
        <p className="text-lg flex items-center space-x-2">
          <Link
            to="/"
            className="text-white hover:text-orange-500 transition-colors duration-300"
          >
            HOME
          </Link>
          <span className="text-white">.</span>
          <span
            className="text-white hover:text-orange-500 cursor-pointer transition-colors duration-300"
          >
            CLIENTS
          </span>
        </p>
      </div>
    </section>
  );
};

export default ClientsBannerSection;
