import React from "react";
import whyfugen1 from "../assets/images/city-blur-bg.jpg";
import whyfugen2 from "../assets/images/whyfugen2.jpg";

const WhyFugenSection = () => {
  const points = [
    {
      title: "Innovation in Services Delivery",
      description:
        "FuGEN Solutions INC was founded in response to the growing need for innovation within the software services industry and were able to successfully deliver the needs.",
    },
    {
      title: "Innovation in Staffing Services",
      description:
        "FuGEN Solutions INC sets itself apart by continually advancing its recruitment processes and integrating the latest technologies.",
    },
    {
      title: "Embracing an Agile Approach",
      description:
        "Agile development succeeds when each team member takes ownership of their tasks while maintaining focus on the overall project objectives.",
    },
  ];

  return (
    <section className="relative bg-white py-16 px-6 md:px-20 text-gray-800 overflow-hidden">
      <img
        src={whyfugen1}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Overlay Image */}
      <div className="absolute bottom-0 left-0 w-full h-3/4 flex z-10">
        <img src={whyfugen2} alt="Overlay" className="w-1/3 h-full object-cover" />
        <img src={whyfugen2} alt="Overlay" className="w-1/3 h-full object-cover" />
        <img src={whyfugen2} alt="Overlay" className="w-1/3 h-full object-cover" />
      </div>

      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white shadow-lg">
          Why FuGEN INC?
        </h2>
      </div>

      {/* Cards */}
      <div className="relative z-20 mt-28 max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-2 justify-items-center">
          {points.map(({ title, description }) => (
            <div
              key={title}
              className="bg-white bg-opacity-90 shadow-lg flex flex-col items-center justify-center p-6 text-center min-h-[220px] w-[280px]"
            >
              <h3 className="text-lg font-bold text-black mb-3">{title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFugenSection;
