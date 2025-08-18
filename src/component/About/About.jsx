import { useState } from "react";
import Lottie from "lottie-react";
import Anima from "../../assets/about.json";
import Photo3 from "../../assets/Photo3.jpg";
import Photofrom2 from "../../assets/Photofrom2.jpg";
import Photofrom from "../../assets/Photofrom.jpg";
import Photofrom1 from "../../assets/img-12.png";

import { Link } from "react-router-dom";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa6";
export default function About() {
  const projects = [
    {
      id: 1,
      technologies: "MERN Stack",
      image: Photo3,
      github:
        "https://drive.google.com/file/d/1RfRm4e1BvPfWLNjqJiS2dPRr264imsyt/view",
    },
    {
      id: 2,

      technologies: "MERN Stack",
      image: Photofrom2,
      github:
        "https://drive.google.com/file/d/1RcNObzyTeumvbOwKyvOIkrN9Sx6hkWlm/view",
    },
    {
      id: 3,

      technologies: "MERN Stack",
      image: Photofrom,
      github:
        "https://drive.google.com/file/d/1Ra6P_7IHRCo3-xVGA4mbMjl6AY_B-9rM/view?usp=drivesdk",
    },
  ];

  return (
    <>
      <div className="bg-black text-white  py-20">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-4xl font-bold text-center mb-12 font-title">About Me</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-12 font-body">
            <div className="flex-1">
              <h2 className="text-[2rem] md:text-5xl lg:text-2xl  font-title  font-bold mt-16   mb-7 text-[#83dbff]">
                Who I am?
              </h2>
              <p className="text-lg mb-8 font-body">
                My name is Mhamad. I am a professional and enthusiastic programmer
                in my daily life. I am a quick learner with a self-learning
                attitude. I love to learn and explore new technologies and am
                passionate about problem-solving. I love almost all the stacks
                of web application development and love to make the web more
                open to the world. My core skill is based on JavaScript and I
                love to do most of the things using JavaScript. I am available
                for any kind of job opportunity that suits my skills and
                interests.
              </p>
              {/* <Link to="/skills">
        <button className="relative inline-block px-6 py-3 text-lg font-medium tracking-wide text-white bg-transparent border-2 border-[#725AC1] rounded-lg shadow-inner transition-all duration-500 hover:text-white hover:shadow-[inset_0_-100px_0_0] hover:shadow-[#725AC1] active:scale-90">
        my skills         
         </button>

        </Link> */}
            </div>
            <div className="flex-1 w-full">
              <Lottie animationData={Anima} />
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-[#725AC1] tracking-wide">
            Certificates
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12"
            data-aos="fade-up"
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#1a1b2e] border border-[#725AC1] p-6 rounded-xl hover:shadow-2xl 
          hover:shadow-[#725AC1]/50 transform transition-transform duration-300 "
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-lg mb-4 w-full h-48 object-cover shadow-md"
                />
                <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
                <a
                  href={project.github}
                  className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-lg font-medium 
            hover:from-blue-500 hover:to-green-400 transition-all duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
