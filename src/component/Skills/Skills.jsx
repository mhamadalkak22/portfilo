import React from 'react'
import node from '../../assets/node.png'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import js from '../../assets/تنزيل.png'
import bootstrap from '../../assets/bootstrap.svg'


import react from '../../assets/react.svg'

import express from '../../assets/expressicon.svg'
import mongo from '../../assets/mongoicon.svg'
import php from '../../assets/phpp.png'
import laravel from '../../assets/laravel.png'
import micro from '../../assets/micro.png'
import Marquee from "react-fast-marquee";

export default function Skills() {
    const skillsData = [
        {
          id: 1,
          title: "HTML",
          image:html,
        },
        {
          id: 2,
          title: "CSS",
          image:css,
        },
        {
          id: 2,
          title: "Bootstrap",
          image:bootstrap,
        },
        {
          id: 3,
          title: "Javascript",
          image:js,
        },
        {
          id: 4,
          title: "React",
          image:react,
        },
        {
          id: 4,
          title: "Node",
          image:node,
        },
      
        {
          id: 5,
          title: "express",
          image:express,
        },
        {
          id: 6,
          title: "Mondodb",
          image:mongo,
        },
        {
          id: 7,
          title: "php",
          image:php,
        },
        {
          id: 8,
          title: "laravel",
          image:laravel,
        },
        {
          id: 8,
          title: "microservice",
          image:micro,
        },
      ];
  return (
    <div className="bg-black ">
    <div  className="relative  border-t  py-24 lg:py-24  border-[#25213b] ">
          <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>
         
    
          <div className="flex justify-center my-5 lg:py-8">
            <div className="flex  items-center">
              <span className="w-24 h-[2px]  bg-[#1a1443] bn"></span>
              <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                Skills
              </span>
              <span className="w-24 h-[2px] bg-[#1a1443] bn"></span>
            </div>
          </div>
    
          <div className="w-full my-12">
            <Marquee
              gradient={false}
              speed={80}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="left"
            >
              {skillsData.map((skill, id) => (
                <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                  key={id}>
                  <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                    <div className="flex -translate-y-[1px] justify-center">
                      <div className="w-3/4">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 p-6">
                      <div className="h-8 sm:h-10">
                        <img src={skill.image} alt=""  width={40}
                          height={40}
                          className="h-full w-auto rounded-lg" /> 
                      </div>
                      <p className="text-white text-sm sm:text-lg">
                        {skill.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
            
          </div>
        </div>
        </div>
  )
}
