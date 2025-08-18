import React, { useState} from 'react';
import { FaLink, FaGithub } from 'react-icons/fa';
import img1 from '../../assets/img-1.png'
import img0 from '../../assets/img-0.png'
import img12 from '../../assets/img-13.jpeg'

import img2 from '../../assets/img-2.png'
import img3 from '../../assets/img-3.png'
import img4 from '../../assets/img-4.png'
import img5 from '../../assets/img-5.png'
import img6 from '../../assets/img-6.png'
import img7 from '../../assets/img-7.png'
import img8 from '../../assets/img-8.png'
import img9 from '../../assets/img-9.png'
import img11 from '../../assets/img-11.png'
import tastezy from '../../assets/tastezy.jpg'
import { Link } from 'react-router-dom';
export default function Project() {
  const [visibleCards, setVisibleCards] = useState(6);
const [isShowMoreVisible, setIsShowMoreVisible] = useState(true);

const showMore = () => {
  const next = Math.min(visibleCards + 6, cardsData.length);
  setVisibleCards(next);
  setIsShowMoreVisible(next < cardsData.length); 
};

const showLess = () => {
  setVisibleCards(6);
  setIsShowMoreVisible(true); // إظهار زر "Show More"
};


    const cardsData = [
      {
        id: 0,
        image: img0,
        title: 'football',
        subtitle: 'Personal website for the game of football, available in English and Italian languages, and CONTACT',
        text1: 'React js ',
        text2: 'Bootstrap',
        links: [
          { href: 'https://asia-bragonzi-two.vercel.app/', icon: <FaLink />, text: 'Visit Site' }
        ],
      },
        {
          id: 1,
          image: img1,
          title: 'Sheefra',
          subtitle: 'Normal html css js with bootstrap and threejs Tech company',
          text1: 'React js ',
          text2: 'Bootstrap',
          links: [
            { href: 'https://www.sheefra.io/', icon: <FaLink />, text: 'Visit Site' }
          ],
        },
        
          {
            id: 2,
            image:  img12,
            title: 'viddy',
            subtitle: 'viddy dynamic production house that specializes in a broad range of creative and technical services, including animation, photography, videography, and live webcasting.',
            text1: 'Nextjs',
            text2: 'tailwind CSS',         
             links: [
              { href: 'https://viddy-web.vercel.app/', icon: <FaLink />, text: 'Visit Site' }
            ],
          },
        {
          id: 3,
          image: img3,
          title: 'Odaxperience ',
          subtitle: 'oda project Strapi JS node cms backend For a music company in the UAE',
          text1: 'Next js ',
          text2: 'Bootstrap',        
            links: [
            { href: 'https://www.odaxperience.com/', icon: <FaLink />, text: 'Visit Site' }
          ],
        },
        {
          id: 4,
          image: img4,
          title: 'Eyeverse ',
          subtitle: 'Eyeverse is a laravel cms voyager For a gaming company in the UAE',
          text1: 'React js ',
          text2: ' bootstrap',         
           links: [
            { href: 'https://theeyeverse.vercel.app/', icon: <FaLink />, text: 'Visit Site' }
          ],
        },
        {
            id: 5,
            image: img5,
            title: 'Appwell',
            subtitle: 'Appwell is a Wellness company in dubai that will integrate AI and nft generation and minting (still in process development)',
            text1: 'Next js ',
            text2: 'tailwind css',   
                        links: [
              { href: 'https://appwell.com/', icon: <FaLink />, text: 'Visit Site' }
            ],
          },
          {
            id: 6,
            image: img6,
            title: 'Watches',
            subtitle: 'The site for buying and selling watches is available in the shopping cart and the watch details',
            text1: 'React js ',
            text2: 'tailwind css',           
             links: [
              { href: 'https://cwatches.vercel.app/', icon: <FaLink />, text: 'Visit Site' }
            ],
          },
          {
            id: 7,
            image: img7,
            title: 'Edu Eats ',
            subtitle: '  Landing page  for a company in sweeden',
            text1: 'React js ',
            text2: 'tailwind css',
            text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
            links: [
              { href: 'https://edueats.vercel.app/', icon: <FaLink />, text: 'Visit Site' }
            ],
          },
          {
            id: 8,
            image:  img8,
            title: 'Molequl',
            subtitle: 'Molequl is a project Retirement project that calculates road to retirement based on incomes with charts using react charts for molequl a company in the UK',
            text1: 'Nextjs ',
            text2: 'tailwind css',
            text: 'Another example text to build on the card title.',
            links: [
              { href: 'https://molequl.vercel.app/', icon: <FaLink />, text: 'Visit Site' }
            ],
          },
          {
            id: 9,
            image: img9,
            title: 'Wynk App',
            subtitle: 'AI chatbot that knows lebanese restaurants and events for a startup',
            text1: 'React js ',
            text2: 'bootstrap',
            text: 'Yet another text to illustrate the card content.',
            links: [
              { href: 'https://www.wynkapp.org/', icon: <FaLink />, text: 'Visit Site' }
            ],
          },
          {
            id: 10,
            image: img11,
            title: 'Kedra',
            subtitle: 'Kedra is a project that aims to provide a set of services or solutions that may be related to technology or software development.',
            text1: 'Node js',
            text2: 'React js',
            text: 'Final example text for this card.',
            links: [
              { href: 'https://kedra-website.vercel.app/', icon: <FaLink />, text: 'Visit Site' }
            ],
          },
          {
            id: 11,
            image:  img2,
            title: 'Avene',
            subtitle: 'Avene is For avene company to promote a new product, showcasted in multiple events in the UAE',
            text1: 'React js ',
            text2: 'Bootstrap',         
             links: [
              { href: 'https://game.aveneme.com/', icon: <FaLink />, text: 'Visit Site' }
            ],
          }
          ,
          {
            id: 12,
            image:  tastezy,
            title: 'Tastezy',
            subtitle: 'Tastezy — E-commerce platform delivering authentic homemade pickles & sweets across India, blending traditional flavors with a seamless shopping experience.',
            text1: 'React js',
            text2: 'Express, TypeScript ,Sql',         
             links: [
              { href: 'https://www.tastezy.in/', icon: <FaLink />, text: 'Visit Site' }
            ],
          }

      ];
  return (
<div className="bg-black">
  <section className="bg-black py-14">
    <div className="container mx-auto px-3">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443] bn"></span>
          <span className="bg-[#1a1443] text-white p-2 px-5 text-xl rounded-md">
            Project
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443] bn"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.slice(0, visibleCards).map((card) => (
          <div
            key={card.id}
            className="bg-[#080914] border border-[#1f223c] text-gray-200 rounded-lg shadow-2xl p-4 group overflow-hidden relative"
            data-aos="fade-up"
          >
            <div className="overflow-hidden relative">
              <img
                src={card.image}
                alt={card.title}
                className="rounded-t-lg w-full h-48 object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              {/* العنصر الذي سيظهر عند التمرير على الـ div */}
              <div className="absolute inset-0 bg-black bg-opacity-80 text-white flex justify-center items-center opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 transition-all duration-300 ease-in-out">
                <a
                  href={card.links[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2"
                >
                  {card.links[0].icon} {card.links[0].text}
                </a>
              </div>
            </div>
            <div className="p-4">
              <h5 className="text-lg font-semibold text-blue-300">{card.title}</h5>
              <h6 className="text-sm text-gray-400 mb-2">{card.subtitle}</h6>
              <div className="flex flex-col sm:flex-row gap-4 mt-3">
  <button className="btn border border-[#2e2280] text-white px-4 py-2 rounded-md">
    {card.text1}
  </button>
  <button className="btn border border-[#2e2280] text-white px-4 py-2 rounded-md">
    {card.text2}
  </button>
</div>
             </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-4">
    {isShowMoreVisible && visibleCards < cardsData.length && (
      <button
        onClick={showMore}
        className="relative w-36 h-12 bg-black text-white flex items-center justify-center rounded-full overflow-hidden group shadow-md"
      >
        <span className="z-10 font-semibold">Show More</span>
        <span className="absolute inset-0 -left-1 -top-1 w-40 h-14 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full z-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
      </button>
    )}

    {!isShowMoreVisible && visibleCards > 6 && (
      <button
        onClick={showLess}
        className="relative w-36 h-12 bg-black text-white flex items-center justify-center rounded-full overflow-hidden group shadow-md"
      >
        <span className="z-10 font-semibold">Show Less</span>
        <span className="absolute inset-0 -left-1 -top-1 w-40 h-14 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full z-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
      </button>
    )}
  </div>
    </div>
  </section>
</div>
  )
}
