import React, { useState } from "react";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        
        {/* Left Column - Contact Info (moved more to the right) */}
        <div className="md:w-1/2 space-y-6 md:pl-16">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Our Address</h2>
            <p className="text-gray-600 mt-2 leading-relaxed">
              5 Independence Way, Suite 300 Princeton, NJ<br />08540
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">Send your message</h2>
            <p className="text-gray-600 mt-2">hr@fugeninc.com</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">Call us on</h2>
            <p className="text-gray-600 mt-2">+1 (732)-762-3756</p>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="md:w-1/2 bg-gray-50 p-8 shadow-md border border-gray-200 max-w-md w-full">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-medium text-gray-700">Your name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 p-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700">Your email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 p-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700">Subject</label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 p-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700">Your message (optional)</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 p-2 text-sm"
              />
            </div>

            <button
              type="submit"
              className="bg-orange-600 text-white px-5 py-2 text-sm font-semibold hover:bg-orange-700 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactFormSection;
