import React from 'react';

const ContactFormSection = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div className="flex flex-col justify-center text-gray-800 space-y-6 pl-10 sm:pl-16">
          <div>
            <h3 className="text-xl font-semibold">Our Address</h3>
            <p className="mt-2">
              5 Independence Way, Suite 300 Princeton, NJ 08540
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Send your message</h3>
            <p className="mt-2 text-blue-900">hr@fugeninc.com</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Call us on</h3>
            <p className="mt-2">+1 (732)-762-3756</p>
          </div>
        </div>
        <div className="bg-gray-100 p-6 sm:p-6 md:p-8 lg:p-6 w-full max-w-[500px] mx-auto ml-[-20px]">
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Message (optional)</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 bg-white focus:outline-none resize-none"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="bg-[#f24c1a] hover:bg-orange-600 text-white font-semibold py-2 px-5"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
