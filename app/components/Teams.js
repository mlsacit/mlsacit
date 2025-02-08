"use client";
import React, { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useRouter } from "next/navigation";

const Teams = () => {
  const containerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      offset:200,
      duration: 300,
      easing: "ease-out",
      once: true,
      mirror:false
    });
  }, []);

  // Scroll dynamically based on container width
  const scrollDistance = 0.5 * (containerRef.current?.offsetWidth || 210);

  const scrollLeft = () => {
    if (containerRef.current) containerRef.current.scrollLeft -= scrollDistance;
  };

  const scrollRight = () => {
    if (containerRef.current) containerRef.current.scrollLeft += scrollDistance;
  };

 return (
  <div className="relative w-full flex flex-col items-center justify-center  h-auto py-0  gap-4 ">
    {/* Heading and Paragraph Container */}
    <div className=" top-8 text-center w-full">
      <h1 className="text-3xl font-[CB] sm:text-3xl lg:text-4xl font-bold mb-4" data-aos="zoom-in">
        Meet Our <span className="text-blue-500">Team</span>
      </h1>
    </div>

    {/* Team Member Images Container */}
    <div
      ref={containerRef}
      className="space-x-2 w-full h-full flex scroll-smooth px-2 py-2 whitespace-nowrap  overflow-x-auto no-scrollbar 
       "
    >
      {teamData.map((member, index) => (
        <div
          key={index}
          onClick={() => router.push(`/teams/${member.path}`)}
          className="team-card  flex flex-shrink-0 flex-col justify-center items-center border-l-indigo-800 border-t-indigo-800 border-2 rounded-full hover:scale-105 hover:bg-gray-600 duration-300 cursor-pointer w-[200px] h-[200px] max-sm:w-[150px] max-sm:h-[150px] "
          data-aos="zoom-out"
          
        >
          <Image
            src={member.image}
            alt={member.name}
            width={90}
            height={90}
            className="relative max-sm:w-[70px]"
            data-aos="flip-right"
          />
          {/* <div>
          <p className="text-xs font-bold" data-aos>{member.name}</p>
          </div> */}
        </div>
      ))}
    </div>

    {/* Scroll Buttons Container */}
    <div className="flex justify-between w-full px-4 mt-4">
      {/* Left Scroll Button */}
      <button
        onClick={scrollLeft}
        className="flex justify-center items-center p-2 bg-gray-600 rounded-full shadow-lg hover:bg-gray-400 transition-all duration-300 text-black 
                   w-[40px] h-[40px] md:w-[60px] md:h-[60px]" data-aos="slide-right"
      >
        <IoIosArrowRoundBack size={30} />
      </button>

      {/* Right Scroll Button */}
      <button
        onClick={scrollRight}
        className="flex justify-center items-center p-2 bg-gray-600 text-black rounded-full shadow-lg hover:bg-gray-400 transition-all duration-300 
                   w-[40px] h-[40px] md:w-[60px] md:h-[60px]" data-aos="slide-left"
      >
        <IoIosArrowRoundForward size={30} />
      </button>
    </div>
  </div>
);
};

const teamData = [
  { name: "Advisor", path: "advisor", image: "/images/teams/advisor.png" },
  { name: "President", path: "president", image: "/images/teams/president.png" },
  { name: "Vice President", path: "vp", image: "/images/teams/vice-president.png" },
  { name: "Social Media", path: "socmed", image: "/images/teams/social-media.png" },
  { name: "Technical", path: "technical", image: "/images/teams/technical.png" },
  { name: "Designers", path: "designers", image: "/images/teams/designers.png" },
  { name: "Marketing", path: "marketing", image: "/images/teams/marketing.png" },
  { name: "Curation", path: "curation", image: "/images/teams/curation.png" },
  { name: "Treasure", path: "treasure", image: "/images/teams/treasure.png" },
];

export default Teams;