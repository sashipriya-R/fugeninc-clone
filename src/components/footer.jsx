import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo2 from "../assets/images/logo2.jpg";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/careers" },
    { name: "Clients", path: "/clients" },
    { name: "Contact us", path: "/contact-us" },
  ];

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B1C3D] text-white pt-12 pb-6 px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 items-start">
        

        <div className="pl-[40px]"> 
          <img src={logo2} alt="FuGen Logo" className="w-56 mb-4" /> 
          <p className="text-[#b8c0d1] text-[14px] leading-[1.5] max-w-sm font-light">
            FuGen Solutions as a Recruitment Consultancy in USA provides quality
            candidates by targeting on the resource’s technology and talent. We
            concentrate on each and every step that filters the quality candidates
            from the rest.
          </p>
        </div>

        <div className="pl-[100px]">
          <h3 className="uppercase tracking-wider text-[11px] mb-2 text-[#d0d5e1] font-medium">
            Important Links
          </h3>
          <ul className="space-y-[2px]">
            {links.map((link, idx) => (
              <li key={idx} className="border-b border-dotted border-[#2c3a55] pb-[1px]">
                <button
                  onClick={() => handleLinkClick(link.path)}
                  className="text-left text-[14px] text-[#b8c0d1] transition-colors duration-300 hover:text-lime-400 w-full font-light leading-[1.3]"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="pl-[60px] text-[14px] text-[#b8c0d1] leading-[1.3] font-light">
          <h3 className="uppercase tracking-wider text-[11px] mb-[2px] text-[#d0d5e1] font-medium">
            Address :
          </h3>
          <p className="border-b border-dotted border-[#2c3a55] pb-[1px] mb-2">
            5 Independence Way,<br />
            Suite 300 Princeton, NJ<br />
            08540
          </p>

          <h3 className="uppercase tracking-wider text-[11px] mb-[2px] text-[#d0d5e1] font-medium">
            Emails :
          </h3>
          <p className="border-b border-dotted border-[#2c3a55] pb-[1px] mb-2">
            hr@fugeninc.com
          </p>

          <h3 className="uppercase tracking-wider text-[11px] mb-[2px] text-[#d0d5e1] font-medium">
            Call us on :
          </h3>
          <p>+1 (732)-762-3756</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 border-t border-[#1e2c4d] pt-4 text-[12px] text-[#a3adc2]">
        © {new Date().getFullYear()} FuGEN Solutions INC • Design and Developed by INSPIRING WAVE DIGITECH PVT. LTD.
      </div>
    </footer>
  );
};

export default Footer;
