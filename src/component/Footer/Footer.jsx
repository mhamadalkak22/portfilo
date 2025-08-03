import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter ,FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" text-white py-8 bg-black">
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
        <div className="flex-1 mb-4 md:mb-0">
          <h3 className="text-2xl font-bold mb-2">mohamad</h3>
          <p className="text-gray-400">
          full stack Developer 
          </p>
        </div>
        <div className="flex-1 w-full">
         
        </div>
      </div>

      <div
        className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
        justify-between items-center"
      >
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} mohamad. All rights reserved.
        </p>
        <div className="flex space-x-4 my-4 md:my-0">
          <a href="https://www.instagram.com/alkak_mhamad/?igsh=MXdpejZibTFnbzZmeA%3D%3D" className="text-gray-400 hover:text-white">
          <FaInstagram />

          </a>
         
          <a href="https://github.com/mhamadalkak22/" className="text-gray-400 hover:text-white">
            <FaGithub />
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            Privacy
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
  )
}
