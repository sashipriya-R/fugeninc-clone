import React, { useState, useEffect } from "react";
// Logo imports in order
import dhl from "../assets/images/dhl.jpg";
import ibm from "../assets/images/ibm.jpg";
import tcl from "../assets/images/tcl.jpg";
import chase from "../assets/images/chase.jpg";
import bny from "../assets/images/bny.jpg";
import accenture from "../assets/images/accenture.jpg";

const logos = [dhl, ibm, tcl, chase, bny, accenture];

const ClientsLogosSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Update visible logos count based on screen width
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1); // Mobile: show 1 logo
      } else {
        setVisibleCount(3); // Desktop: show 3 logos
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const looped = [...logos, ...logos];
  const visible = looped.slice(currentIndex, currentIndex + visibleCount);

  const handleClick = (i) => {
    setCurrentIndex(i);
  };

  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto px-6 md:px-16">
        {/* Heading + content */}
        <div className="flex flex-col items-start mb-3">
          <h2 className="text-3xl text-black mb-1">OUR CLIENTS</h2>
          <p className="text-lg text-gray-700 max-w-lg leading-relaxed">
            Our clients are at the heart of everything we do. We listen to their
            needs, understand their challenges, and tailor our solutions to exceed
            their expectations.
          </p>
        </div>

        {/* Logo carousel */}
        <div className="flex justify-center gap-10 mb-1">
          {visible.map((logo, idx) => (
            <div
              key={idx}
              className={`flex justify-center items-center 
                ${visibleCount === 1 ? "w-80 h-80" : "w-112 h-72"}`}
            >
              <img
                src={logo}
                alt="Client Logo"
                className={`object-contain 
                  ${visibleCount === 1 ? "max-h-80" : "max-h-72"}`}
              />
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-1">
          <div className="flex gap-3">
            {logos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleClick(idx)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                  currentIndex % logos.length === idx
                    ? "bg-black"
                    : "bg-gray-400"
                }`}
                aria-label={`Go to logo ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsLogosSection;
