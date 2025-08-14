import React from "react";
import sfImage from "../assets/images/sf.jpg";
import shareIcon from "../assets/images/share.jpg";

const SoftwareDeveloperSection = () => {
  return (
    <section className="w-full py-10 bg-white overflow-hidden font-sans">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-16 px-6 md:pl-28 md:pr-20">
        <div className="w-full md:w-5/12 flex justify-center order-1 md:order-1">
          <img
            src={sfImage}
            alt="Software Developer"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-6/12 text-gray-800 max-w-[460px] ml-0 md:ml-10 order-2 md:order-2">
          <h2 className="text-[26px] font-bold mb-5 text-black leading-tight tracking-wide">
            SOFTWARE DEVELOPERS
          </h2>
          <p className="text-[16px] leading-[1.7] mb-5 text-gray-700">
            Involve in complete Software Development Lifecycle (SDLC). Design and
            implement technical solutions to meet business requirements. Write
            efficient and testable code for web-based software applications using
            .Net Framework, ADO.Net, ASP.Net, HTML, CSS, Bootstrap, and jQuery.
            Develop and implement continuous integration and continuous deployment
            (CI/CD) pipelines. Conduct unit and integration testing. Perform code
            review and debugging. Master’s degree in the Science, Technology, or
            Engineering (any) is required. Work location: Princeton, NJ and various
            unanticipated locations throughout the U.S.
          </p>
          <div className="flex items-start gap-4 mt-3">
            <img src={shareIcon} alt="Share" className="h-14 w-auto mt-1" />
            <div className="text-[15px] leading-[1.6] text-gray-700">
              <p className="font-semibold">
                Send Resume to HR Dept., Adya Technologies, Inc. dba Fugen Solutions,
                5 Independence Way, Suite 300, Princeton, NJ 08540.
              </p>
              <p className="mt-2">
                Should the candidate accept employment with Adya Technologies, Inc.
                dba Fugen Solutions, the referring employee will be eligible to
                receive an award of $1,000.00 for the successful referral.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareDeveloperSection;
