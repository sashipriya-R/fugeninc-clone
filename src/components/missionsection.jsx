import React from "react";
import { motion } from "framer-motion";
import missionImage from "../assets/images/mission.jpg";

const MissionSection = () => {
  return (
    <section className="bg-white py-6">
      
      {/* Heading & Intro Text with Zoom-in Animation */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-6"
        style={{ transformOrigin: "center" }}
      >
        <h2 className="text-3xl font-bold text-orange-500">Our Mission</h2>
        <p className="mt-2 text-gray-600 max-w-3xl mx-auto text-base">
          We strive to be at the forefront of industry advancements, leveraging
          our expertise and creativity to provide tailored solutions that address
          the unique challenges faced by our clients.
        </p>
      </motion.div>

      {/* Two-Column Layout (Image Left / Content Right) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

        {/* Left Column - Mission Image */}
        <div className="flex justify-center">
          <motion.img
            src={missionImage}
            alt="Our Mission"
            className="w-full h-auto object-contain rounded-lg shadow-md"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Right Column - Mission Details */}
        <div className="flex flex-col">
          <motion.p
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-orange-500 font-semibold uppercase tracking-widest text-base mb-2"
          >
            Who We Serve
          </motion.p>

          <motion.h3
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-900 mb-3"
          >
            Matching your Timeline
          </motion.h3>

          <div className="w-12 h-[2px] bg-orange-500 mb-4"></div>

          <motion.p
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gray-600 mb-4 text-base leading-relaxed"
          >
            As though placing the right talent at the right time is the key step in our
            process, we also focus on the resource’s flexibility who will be a
            perfect fit for your company.
          </motion.p>

          {/* Bullet Points for Mission Values */}
          <motion.ul
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-2 text-base"
          >
            {[
              "Our Mission & Values",
              "Quality",
              "Professional",
              "Our Motto",
              "Success",
              "Dedicated",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-gray-900 font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
