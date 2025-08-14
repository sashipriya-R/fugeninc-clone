import React, { useEffect, useRef, useState } from "react";
import recruitmentImage from "../assets/images/recruitment.jpg";

const RecruitmentSection = () => {
  const headingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <section className="w-full py-16 bg-white overflow-hidden relative font-sans">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6 md:px-12">
        <div className="w-full md:w-1/2 text-gray-800 relative max-w-[450px] order-2 md:order-1">
          <div className="relative h-12 overflow-visible">
            <h2
              ref={headingRef}
              className={`absolute text-[28px] font-bold text-black leading-tight tracking-wide ${
                isVisible ? "animate-riseFromBelow" : "opacity-0"
              }`}
            >
              RECRUITMENT
            </h2>
          </div>

          <p className="text-[16px] leading-[1.75] text-gray-700 mt-12">
            At FuGEN Solutions INC, we understand that recruiting top talent is
            critical for the success of your organization. Our Recruitment
            Services are designed to streamline the hiring process, minimize
            time-to-fill, and ensure that you find the best-fit candidates to
            drive your business forward.
          </p>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <img
            src={recruitmentImage}
            alt="Recruitment"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <style>
        {`
          @keyframes riseFromBelow {
            0% {
              transform: translateY(200%);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .animate-riseFromBelow {
            animation: riseFromBelow 2.5s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default RecruitmentSection;
