import React from "react";
import documentIcon from "../assets/images/document-icon.jpg";
import smartphoneIcon from "../assets/images/smartphone-icon.jpg";
import averageIcon from "../assets/images/average-icon.jpg";
import cityhallIcon from "../assets/images/cityhall-icon.jpg";
import videoBg from "../assets/videos/hi-tech-global-videos.mp4";

const HRSection = () => {
  const cards = [
    {
      title: "HR Practice",
      icon: documentIcon,
      description:
        "Transform your HR practices and unlock the full potential of your workforce with FuGen Solutions INC. Our services are designed to help businesses of all sizes",
    },
    {
      title: "Recruitment",
      icon: smartphoneIcon,
      description:
        "We are a leading recruitment company based in New Jersey, providing expert talent for full-time hiring, staffing services and business consultants",
    },
    {
      title: "Staffing",
      icon: averageIcon,
      description:
        "Build your future-ready workforce with one of the best IT staffing companies in USA. Reduce workforce administration cost and scale-up your teams.",
    },
    {
      title: "Talent Acquisition",
      icon: cityhallIcon,
      description:
        "Securing top talent is crucial for the success of your organization. we offer a wide range of services to enhance your talent acquisition strategies.",
    },
  ];

  return (
    <section className="relative w-full min-h-[70vh] overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Cards Container */}
      <div className="relative z-20 w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-4 min-h-[260px] max-w-[250px] mx-auto relative"
            >
              {/* Icon */}
              <img
                src={card.icon}
                alt={card.title}
                className="w-10 h-10 absolute top-4 left-4"
              />
              {/* Content */}
              <div className="mt-14">
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-700 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HRSection;
