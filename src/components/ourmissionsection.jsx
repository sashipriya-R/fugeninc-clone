import React from "react";
import missionImage from "../assets/images/sf.jpg";
import bulbIcon from "../assets/images/bulb.jpg";
import shareIcon from "../assets/images/share.jpg";
import onlineIcon from "../assets/images/online.jpg";

const Checkmark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 text-green-600 flex-shrink-0 mt-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const OurMissionSection = () => {
  return (
    <section
      className="w-full bg-white py-8 px-6 md:py-12 md:px-16 font-sans"
      style={{ fontFamily: "'Open Sans', Arial, sans-serif" }}
    >
      <div className="max-w-4xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex justify-center md:h-full w-full h-full">
          <img
            src={missionImage}
            alt="Mission"
            className="rounded-lg shadow-md w-full h-full object-cover md:max-h-[800px]"
            style={{ minHeight: "400px" }}
          />
        </div>

        {/* Our Mission text and bullet points */}
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Our mission is simple yet profound — to empower organizations to thrive by optimizing their HR and IT practices. We strive to be at the forefront of industry advancements, leveraging our expertise and creativity to provide tailored solutions that address the unique challenges faced by our clients.
          </p>

          <ul className="space-y-6 text-gray-700 text-base leading-relaxed">
            <li className="flex items-start gap-3">
              <img src={bulbIcon} alt="Bulb" className="w-10 h-14 flex-shrink-0 mt-4" />
              <span>
                We are dedicated to excellence in everything we do, from the quality of our services to the professionalism of our interactions with clients and partners.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <img src={shareIcon} alt="Share" className="w-10 h-14 flex-shrink-0 mt-1" />
              <span>
                Integrity is non-negotiable. We conduct our business with honesty, transparency, and a commitment to upholding the highest ethical standards.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <img src={onlineIcon} alt="Online" className="w-10 h-14 flex-shrink-0 mt-1" />
              <span>
                Our clients are at the heart of everything we do. We listen to their needs, understand their challenges, and tailor our solutions to exceed their expectations.
              </span>
            </li>
          </ul>
        </div>

        {/* Infrastructure heading and bullet points */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8 md:mt-12">Infrastructure</h3>
          <ul className="space-y-3 text-gray-700 text-base leading-relaxed pl-1">
            <li className="flex items-start gap-2">
              <Checkmark />
              <span>FuGen Solution INC corporate office is located at 5 Independence Way, Suite 300, Princeton, NJ 08540.</span>
            </li>
            <li className="flex items-start gap-2">
              <Checkmark />
              <span>Scalable workspace availability.</span>
            </li>
            <li className="flex items-start gap-2">
              <Checkmark />
              <span>Access controls for work area and Systems Administration facility.</span>
            </li>
            <li className="flex items-start gap-2">
              <Checkmark />
              <span>Disaster management & recovery processes.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurMissionSection;
