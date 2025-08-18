import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    // Send data to Web3Forms
    const formPayload = new FormData();
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("message", formData.message);
    formPayload.append("access_key", "80f7138a-4a13-4a8d-b2e1-7e18bf62371f"); // Replace with your API key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        // Hide the success message after 3 seconds
        setTimeout(() => {
          setStatus("");
        }, 3000);
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className=' bg-black text-white py-16'>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
      <div>
        <h3 className='text-3xl font-bold  bg-clip-text   text-green-400 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
        <div className="flex items-center mt-8 space-x-2 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="w-4 h-4 text-green-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
            ></path>
          </svg>
          <span>Beirut, Lebanon</span>
        </div>
        <div className="flex items-center mt-2 space-x-2 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="w-4 h-4 text-green-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            ></path>
          </svg>
          <a href="mailto:mhamadalkak220@gmail.com">  mhamadalkak220@gmail.com</a>
        </div>
        <div className="flex items-center mt-2 space-x-2 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="w-4 h-4 text-green-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            ></path>
          </svg>
          <a href="tel:11111111111"></a>
        </div>
      </div>
      <div >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-6  rounded-lg shadow-lg"
      >
        {/* Full Name */}
        <div className="mb-5">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 placeholder:text-white rounded-md outline-none border-gray-300 focus:border-green-400 bg-transparent text-white"
          />
        </div>

        {/* Email Address */}
        <div className="mb-5">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 placeholder:text-white rounded-md outline-none border-gray-300 focus:border-green-400 bg-transparent text-white"
          />
        </div>

        {/* Message */}
        <div className="mb-3">
          <textarea
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-8 border-2 placeholder:text-white rounded-md outline-none border-gray-300 focus:border-green-400 bg-transparent text-white"
          ></textarea>
        </div>

        {/* Status Message */}
        {status && <p className="text-white text-center mb-4">{status}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSending}
          className="relative inline-block px-6 py-3 text-lg font-medium tracking-wide text-white bg-transparent border-2 border-green-400 rounded-lg shadow-inner transition-all duration-500 hover:text-white hover:shadow-[inset_0_-100px_0_0] hover:shadow-green-700 active:scale-90"
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
    </div>
  </div>
  )
}
