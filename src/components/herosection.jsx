import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero3 from "../assets/images/hero3.jpg";
import hero4 from "../assets/images/hero4.jpg";
import hero5 from "../assets/images/hero5.jpg";
import hero6 from "../assets/images/hero6.jpg";

const images = [hero1, hero2, hero3, hero4, hero5, hero6];

const HeroSection = () => {
  const [dropped, setDropped] = useState(false); // controls drop-down intro animation
  const [firstLoad, setFirstLoad] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(firstLoad ? -1 : 0); // slideshow index
  const navigate = useNavigate();

  // Play drop animation on first load, then start slideshow
  useEffect(() => {
    if (firstLoad) {
      const dropTimer = setTimeout(() => {
        setDropped(true);
        setTimeout(() => {
          setCurrentSlide(1);
          setFirstLoad(false);
        }, 2500); // allow drop animation to finish before slide transition
      }, 400);
      return () => clearTimeout(dropTimer);
    }
  }, [firstLoad]);

  // Automatically change slide every 4 seconds after intro animation
  useEffect(() => {
    if (currentSlide >= 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentSlide]);

  return (
    <div className="relative w-screen h-screen md:h-[150vh] overflow-hidden">
      
      {firstLoad && currentSlide === -1 && (
        <img
          src={hero1}
          alt="hero1"
          className={`absolute top-0 left-0 w-full h-full sm:object-cover object-contain z-0 ${
            dropped ? "animate-dropDown" : "opacity-0"
          }`}
        />
      )}

      {/* Slideshow images */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none overflow-hidden">
        {images.map((img, i) => {
          let positionClass = "-translate-x-full opacity-0";
          if (i === currentSlide) {
            positionClass = "translate-x-0 opacity-100 z-20";
          } else if (i === (currentSlide - 1 + images.length) % images.length) {
            positionClass = "translate-x-full opacity-0";
          }
          return (
            <img
              key={i}
              src={img}
              alt={`slide-${i + 1}`}
              className={`absolute top-0 left-0 w-full h-full sm:object-cover object-contain transition-all duration-[300ms] ease-in-out ${positionClass}`}
            />
          );
        })}
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-30" />

      {/* Text & Call to Action */}
      <div
        className={`relative z-40 flex flex-col justify-center items-center text-center h-full px-4 md:px-8 text-white ${
          firstLoad && currentSlide === -1 ? "animate-dropDown" : ""
        }`}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-sky-300 drop-shadow-lg leading-tight">
          Welcome to "FuGEN Solutions INC"
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg font-normal text-white text-center whitespace-nowrap">
          Your trusted partner in revolutionizing HR and IT practices. Established with a vision to empower businesses with innovative solutions.
        </p>
        <button
          onClick={() => navigate("/services")}
          className="flex items-center gap-2 bg-orange-500 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg transition-all duration-300 hover:bg-[#0a1f44] mt-6 sm:mt-8 text-sm sm:text-lg"
        >
          LEARN MORE <FaPlay size={14} />
        </button>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes dropDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-dropDown {
          animation: dropDown 1.5s ease-out forwards;
        }
        @media (max-width: 480px) {
          .text-3xl { font-size: 1.5rem !important; }
          .md\\:text-5xl { font-size: 2.3rem !important; }
          .px-4 { padding-left: 8px !important; padding-right: 8px !important; }
          .whitespace-nowrap { white-space: normal !important; }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
