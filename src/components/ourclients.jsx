import React from "react";
import bny from "../assets/images/bny.jpg";
import ibm from "../assets/images/ibm.jpg";
import accenture from "../assets/images/accenture.jpg";
import tcl from "../assets/images/tcl.jpg";
import chase from "../assets/images/chase.jpg";
import dhl from "../assets/images/dhl.jpg";

const OurClients = () => {
  const clientImages = [bny, chase, dhl, ibm, accenture, tcl];

  return (
    <section className="w-full bg-white py-8 px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Our Clients
      </h2>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 w-fit">
          {clientImages.map((logo, index) => (
            <div
              key={index}
              className="min-w-[25vw] h-[25vw] flex items-center justify-center"
            >
              <img
                src={logo}
                alt={`client-${index}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
};

export default OurClients;
