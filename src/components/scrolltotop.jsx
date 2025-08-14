import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const footerColor = '#001F3F'; // Replace with your footer color

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 group flex flex-col items-center space-y-2">
      {/* Tooltip box (only visible on hover of the group) */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-white text-black px-4 py-1 rounded-md shadow-md text-sm">
          Scroll to top
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-12 h-12 rounded-md flex items-center justify-center shadow-lg transition-colors duration-300 group-hover:bg-[#001F3F] bg-orange-500 text-white"
        style={{ cursor: 'pointer' }}
      >
        <FaArrowUp size={18} />
      </button>
    </div>
  );
};

export default ScrollToTop;
