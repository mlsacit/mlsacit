"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import { useRouter } from "next/navigation";
import { FaInstagram, FaLinkedin, FaArrowLeft } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { PiGraphLight } from "react-icons/pi";
import { MdPalette, MdOutlineDesignServices } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { RiPaintFill, RiPaletteLine } from "react-icons/ri";
import "aos/dist/aos.css"

const Page = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("all");

  const handleBackButtonClick = () => {
    console.log("Navigating to /");
    router.back();
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#1a0033] to-[#000000] flex flex-col items-center py-16 px-4 overflow-hidden">
      {/* Design-themed floating elements */}
      {/* <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 10}px`,
              animation: `float ${Math.random() * 20 + 10}s linear infinite`,
              color: ['#ff6b6b', '#4ecdc4', '#ffbe0b', '#a786df'][Math.floor(Math.random() * 4)]
            }}
          >
            {[<FaPaintBrush />, <MdPalette />, <FaPencilRuler />, <RiPaletteLine />][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div> */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const icons = [<FaPaintBrush key="paint" />, <MdPalette key="palette" />, <FaPencilRuler key="ruler" />, <RiPaletteLine key="paletteLine" />];
          const randomIcon = icons[Math.floor(Math.random() * icons.length)];

          return (
            <div
              key={i}
              className="absolute opacity-10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 30 + 10}px`,
                animation: `float ${Math.random() * 20 + 10}s linear infinite`,
                color: ['#ff6b6b', '#4ecdc4', '#ffbe0b', '#a786df'][Math.floor(Math.random() * 4)]
              }}
            >
              {randomIcon}
            </div>
          );
        })}
      </div>


      {/* Background Vector */}
      <div
        className="absolute inset-0 w-full h-full bg-center max-sm:bg-contain lg:bg-cover z-0 opacity-40"
        style={{ backgroundImage: "url('/Background.svg')" }}
      ></div>

      {/* Back Button - Enhanced */}
      <button
        onClick={handleBackButtonClick}
        className="absolute top-8 left-8 z-10 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-md hover:from-purple-600 hover:to-pink-600 transition-all font-[Excon] flex items-center gap-2"
        data-aos="flip-left"
      >
        <IoMdArrowRoundBack /> Go Back
      </button>

      {/* Page Title */}
      <div className="relative z-10 mb-12 mt-4" data-aos="fade-down">
        <h1 className="text-5xl font-bold text-center text-white font-[Excon]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Design Team
          </span>
        </h1>
        <div className="flex items-center justify-center mt-3">
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
          <div className="mx-2 text-pink-400">
            <MdOutlineDesignServices />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500"></div>
        </div>
      </div>

      {/* Team Leads Section - Enhanced */}
      <div className="container mx-auto sm:px-6 md:px-8 z-10 max-sm:mt-10 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 shadow-2xl p-8 relative" data-aos="slide-down">
        {/* Decorative top bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>

        <h2
          className="text-3xl font-bold text-center bg-clip-text font-[Excon] text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-12"
          data-aos="fade-up"
        >
          Meet Our Leads
        </h2>

        {/* Profile Section - Enhanced with hover effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" data-aos="zoom-in-up">
          {/* Member 1: Debasis Maharana - Enhanced */}
          <div
            className="relative bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-purple-500/20 hover:shadow-xl w-full max-w-xs mx-auto"
            data-aos="zoom-in-right"
          >
            {/* Profile Image with glow effect */}
            <div className="relative flex justify-center items-center mx-auto mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full opacity-70 blur-md"></div>
              <div className="relative rounded-full p-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                <Image
                  src="/images/individual pics/debasis.png"
                  alt="Debasis Maharana"
                  width={228}
                  height={228}
                  className="rounded-full object-cover border-2 border-white/20"
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-white font-[Khand]">
                Debasis Maharana
              </h1>
              <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-pink-300 text-lg font-medium mt-3">
                Design Team Lead
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <div className="flex flex-wrap justify-center gap-2">
                {["UI/UX", "Graphic Design", "Branding"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links - Enhanced */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <a
                href="https://www.linkedin.com/in/debasis-maharana07/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-blue-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.instagram.com/__sachin2003__/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-pink-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </div>

          {/* Member 2: Hadiya Tareen - Enhanced */}
          <div
            className="relative bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center shadow-lg border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-pink-500/20 hover:shadow-xl w-full max-w-xs mx-auto"
            data-aos="zoom-in-left"
          >
            {/* Profile Image with glow effect */}
            <div className="relative flex justify-center items-center mx-auto mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full opacity-70 blur-md"></div>
              <div className="relative rounded-full p-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20">
                <Image
                  src="/images/individual pics/hadiya.png"
                  alt="Hadiya Tareen"
                  width={228}
                  height={228}
                  className="rounded-full object-cover border-2 border-white/20"
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-white font-[Khand]">
                Hadiya Tareen
              </h1>
              <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-pink-300 text-lg font-medium mt-3">
                Design Team Lead
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <div className="flex flex-wrap justify-center gap-2">
                {["Illustration", "Motion Design", "Typography"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-pink-500/10 text-pink-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links - Enhanced */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <a
                href="http://www.linkedin.com/in/hadiyatareen/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-blue-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.instagram.com/hadiyatareen/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-pink-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Team Overview Section - Enhanced */}
      <div className="mt-16 sm:mt-32 py-6 sm:py-10 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden relative" data-aos="flip-right">
        {/* Decorative top bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>

        <div className="mx-auto px-4">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-10 text-white"
            data-aos="fade-down"
          >
            <span className="bg-clip-text text-transparent font-[Excon] bg-gradient-to-r from-purple-400 to-pink-400">
              Meet Our Design Team
            </span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-12">
            <div className="md:w-1/2" data-aos="fade-right">
              {/* Add glow effect to image */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-lg opacity-70 blur-md"></div>
                <Image
                  src="/DesignTeam.png"
                  alt="Group Picture"
                  className="relative rounded-lg shadow-lg border border-purple-500/20"
                  width={640}
                  height={500}
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 md:pl-12" data-aos="fade-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white font-[Khand]">
                Creating Visual Excellence
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed font-[GMVF]">
                Our design team is the creative force behind the club&apos;s
                visual identity. We&apos;re passionate about crafting beautiful,
                meaningful designs that communicate and inspire.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-1"
                  data-aos="fade-up"
                >
                  <div className="text-purple-400 mb-3">
                    <FaPaintBrush size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
                    Visual Design
                  </h3>
                  <p className="text-gray-400 font-[GMVF]">
                    Creating stunning visuals for events and social media.
                  </p>
                </div>

                <div
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 transform hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="text-purple-400 mb-3">
                    <FaPencilRuler size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
                    Brand Identity
                  </h3>
                  <p className="text-gray-400 font-[GMVF]">
                    Maintaining and evolving the club&apos;s visual brand.
                  </p>
                </div>

                <div
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="text-blue-400 mb-3">
                    <PiGraphLight size={20} />
                  </div>
                  <h3 className="text-xl font-[Khand] font-semibold text-white mb-2">
                    UI/UX Design
                  </h3>
                  <p className="text-gray-400 font-[GMVF]">
                    Designing intuitive and engaging user interfaces.
                  </p>
                </div>

                <div
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="text-purple-400 mb-3">
                    <MdPalette size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
                    Creative Workshop
                  </h3>
                  <p className="text-gray-400 font-[GMVF]">
                    Conducting sessions on design principles and tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Volunteers Section - Enhanced */}
      <div className="mt-32 z-10 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 shadow-2xl relative" data-aos="zoom-out-up">
        {/* Decorative top bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
        <div className="absolute -top-6 left-1/2 -translate-x-1/2  p-3 ">
          {/* <MdPalette className="text-white" size={24} /> */}
        </div>

        <h2
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 font-[Excon] mt-4"
          data-aos="fade-up"
        >
          Team Volunteers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Member 1 - Enhanced */}
          <div
            className="team-card bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-purple-500/20 hover:shadow-xl group"
            data-aos="fade-up"
          >
            {/* Profile Image with glow effect */}
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full opacity-70 blur-md group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image
                src="/images/individual pics/sahithi.png"
                alt="Sahithi K"
                className="relative w-32 h-32 mx-auto rounded-full border-2 border-white/20 group-hover:border-white/40 transition-all duration-300"
                width={128}
                height={128}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white font-[Khand] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
              Sahithi K
            </h3>
            <p className="text-purple-300 mb-4 text-sm">UI/UX Designer</p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/sahithi2005/"
                className="p-2 bg-white/5 hover:bg-blue-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/sahithiik?igsh=MXJvYXYyZnBsc2NmMg%3D%3D&utm_source=qr"
                className="p-2 bg-white/5 hover:bg-pink-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Member 2 - Enhanced */}
          <div
            className="team-card bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-pink-500/20 hover:shadow-xl group"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Profile Image with glow effect */}
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full opacity-70 blur-md group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image
                src="/images/individual pics/mehika.jpg"
                alt="Mehika Varma"
                className="relative w-32 h-32 mx-auto rounded-full border-2 border-white/20 group-hover:border-white/40 transition-all duration-300"
                width={128}
                height={128}
              />
            </div>
            <h3 className="text-xl font-[Khand] font-semibold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-300">
              Mehika Varma
            </h3>
            <p className="text-pink-300 mb-4 text-sm">Graphic Designer</p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/amehikavarma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="p-2 bg-white/5 hover:bg-blue-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/meh_hika/"
                className="p-2 bg-white/5 hover:bg-pink-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Member 3 - Enhanced */}
          <div
            className="team-card bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-purple-500/20 hover:shadow-xl group"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Profile Image with glow effect */}
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full opacity-70 blur-md group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image
                src="/images/individual pics/daksha.png"
                alt="Daksha K Gowda"
                className="relative w-32 h-32 mx-auto rounded-full border-2 border-white/20 group-hover:border-white/40 transition-all duration-300"
                width={128}
                height={128}
              />
            </div>
            <h3 className="text-xl font-[Khand] font-semibold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
              Daksha K Gowda
            </h3>
            <p className="text-purple-300 mb-4 text-sm">Visual Designer</p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/dakshakgowda/"
                className="p-2 bg-white/5 hover:bg-blue-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/the_red_dk"
                className="p-2 bg-white/5 hover:bg-pink-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Design-themed floating elements */}
      {/* <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-purple-500/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 10}px`,
              animation: `float ${Math.random() * 20 + 10}s linear infinite`,
            }}
          >
            {[<FaPaintBrush />, <MdPalette />, <FaPencilRuler />][Math.floor(Math.random() * 3)]}
          </div>
        ))}
      </div> */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-purple-500/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 10}px`,
              animation: `float ${Math.random() * 20 + 10}s linear infinite`,
            }}
          >
            {[
              <FaPaintBrush key={`paint-${i}`} />,
              <MdPalette key={`palette-${i}`} />,
              <FaPencilRuler key={`ruler-${i}`} />,
            ][Math.floor(Math.random() * 3)]}
          </div>
        ))}
      </div>


      {/* Add floating animation */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(5deg); }
          50% { transform: translateY(0) rotate(0deg); }
          75% { transform: translateY(15px) rotate(-5deg); }
        }
        
        .team-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 25px -5px rgba(139, 92, 246, 0.3);
          border-color: rgba(139, 92, 246, 0.4);
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default Page;



// "use client";
// import {useEffect} from "react";
// import Image from "next/image";
// import AOS from "aos";
// import { useRouter } from "next/navigation";
// import { FaInstagram, FaLinkedin } from "react-icons/fa";
// import { FaPaintBrush } from "react-icons/fa";
// import { FaPencilRuler } from "react-icons/fa";
// import { PiGraphLight } from "react-icons/pi";
// import { MdPalette } from "react-icons/md";
// import "aos/dist/aos.css"

// const Page = () => {
//   const router = useRouter();

//   const handleBackButtonClick = () => {
//     console.log("Navigating to /");
//     router.back();
//   };

//   useEffect(() => {
//     AOS.init({
//       duration:1000,
//       once: true,
//     });
//   },[]);

//   return (
//     <div className="relative min-h-screen w-full bg-black flex flex-col items-center py-16 px-4 overflow-hidden">
//       {/* Background Vector */}
//       <div
//         className="absolute inset-0 w-full h-full bg-center  max-sm:bg-contain lg:bg-cover z-0"
//         style={{ backgroundImage: "url('/Background.svg')" }}
//       ></div>

//       {/* Back Button */}
//       <button
//         onClick={handleBackButtonClick}
//         className="absolute top-8 left-8 z-10 px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-400 text-black font-semibold rounded-lg shadow-md hover:bg-gray-400 transition-all font-[Excon]" data-aos="fade-down"
//       >
//         Go Back
//       </button>

//       <div className="container mx-auto  sm:px-6 md:px-8 mt-16 sm:mt-10 z-10 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 py-5 shadow-2xl" data-aos="flip-left">
//         <h2
//           className="text-3xl sm:text-4xl font-bold text-center font-[Excon] mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
//           data-aos="fade-up"
//         >
//           Our Team Leads
//         </h2>

//         {/* Profile Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
//           {/* Member 1: Debasis Maharana */}
//           <div
//             className="relative bg-gray-800/50 backdrop-blur p-8 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 w-full max-w-xs mx-auto"
//             data-aos="zoom-out"
//           >
//             {/* Profile Image */}
//             <div className="flex justify-center items-center mx-auto mb-6">
//               <Image
//                 src="/images/individual pics/debasis.png"
//                 alt="Debasis Maharana"
//                 width={228}
//                 height={228}
//                 className="rounded-full object-cover"
//               />
//             </div>

//             {/* Name and Title */}
//             <div className="text-center mb-6">
//               <h1 className="text-3xl font-bold text-white font-[Khand]">
//                 Debasis Maharana
//               </h1>
//               <p className="text-white text-lg font-medium font-[Khand]">
//                 Design Team Lead
//               </p>
//             </div>

//             {/* Social Links */}
//             <div className="flex justify-center items-center gap-8 mt-8">
//               <a
//                 href="https://www.linkedin.com/in/debasis-maharana07/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-500 hover:text-blue-300 hover:scale-105 duration-300"
//               >
//                 <FaLinkedin size={40} />
//               </a>
//               <a
//                 href="https://www.instagram.com/__sachin2003__/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-500 hover:text-pink-300 hover:scale-105 duration-300"
//               >
//                 <FaInstagram size={40} />
//               </a>
//             </div>
//           </div>

//           {/* Member 2: Hadiya Tareen */}
//           <div
//             className="relative bg-gray-800/50 backdrop-blur p-8 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 w-full max-w-xs mx-auto"
//             data-aos="zoom-out"
//           >
//             {/* Profile Image */}
//             <div className="flex justify-center items-center mx-auto mb-6">
//               <Image
//                 src="/images/individual pics/hadiya.png"
//                 alt="Hadiya Tareen"
//                 width={228}
//                 height={228}
//                 className="rounded-full object-cover"
//               />
//             </div>

//             {/* Name and Title */}
//             <div className="text-center mb-6">
//               <h1 className="text-3xl font-bold text-white font-[Khand]">
//                 Hadiya Tareen
//               </h1>
//               <p className="text-white text-lg font-medium font-[Khand]">
//                 Design Team Lead
//               </p>
//             </div>

//             {/* Social Links */}
//             <div className="flex justify-center items-center gap-8 mt-8">
//               <a
//                 href="http://www.linkedin.com/in/hadiyatareen/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-500 hover:text-blue-300 hover:scale-105 duration-300"
//               >
//                 <FaLinkedin size={40} />
//               </a>
//               <a
//                 href="https://www.instagram.com/hadiyatareen/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-500 hover:text-pink-300 hover:scale-105 duration-300"
//               >
//                 <FaInstagram size={40} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-16 sm:mt-32 py-6 sm:py-10 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden" data-aos="zoom-in">
//         <div className="mx-auto px-4">
//           <h2
//             className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-10 text-white"
//             data-aos="fade-down"
//           >
//             <span className="bg-clip-text text-transparent font-[Excon] bg-gradient-to-r from-blue-400 to-purple-400">
//               Meet Our Design Team
//             </span>
//           </h2>
//           <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-12">
//             <div className="md:w-1/2" data-aos="fade-right">
//               <Image
//                 src="/DesignTeam.png"
//                 alt="Group Picture"
//                 className="rounded-lg shadow-lg border border-blue-500/20"
//                 width={640}
//                 height={500} // You can adjust the width and height as per your requirement
//               />
//             </div>

//             <div className="w-full md:w-1/2 md:pl-12" data-aos="fade-left">
//               <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white font-[Khand]">
//                 Creating Visual Excellence
//               </h3>
//               <p className="text-gray-300 mb-4 text-sm leading-relaxed font-[GMVF]">
//                 Our design team is the creative force behind the club&apos;s
//                 visual identity. We&apos;re passionate about crafting beautiful,
//                 meaningful designs that communicate and inspire.
//               </p>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//                 <div
//                   className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
//                   data-aos="fade-up"
//                 >
//                   <div className="text-blue-400 mb-3">
//                     <FaPaintBrush size={20} />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
//                     Visual Design
//                   </h3>
//                   <p className="text-gray-400 font-[GMVF]">
//                     Creating stunning visuals for events and social media.
//                   </p>
//                 </div>

//                 <div
//                   className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
//                   data-aos="fade-up"
//                   data-aos-delay="100"
//                 >
//                   <div className="text-purple-400 mb-3">
//                     <FaPencilRuler size={20} />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
//                     Brand Identity
//                   </h3>
//                   <p className="text-gray-400 font-[GMVF]">
//                     Maintaining and evolving the club&apos;s visual brand.
//                   </p>
//                 </div>

//                 <div
//                   className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
//                   data-aos="fade-up"
//                   data-aos-delay="200"
//                 >
//                   <div className="text-blue-400 mb-3">
//                     <PiGraphLight size={20} />
//                   </div>
//                   <h3 className="text-xl font-[Khand] font-semibold text-white mb-2">
//                     UI/UX Design
//                   </h3>
//                   <p className="text-gray-400 font-[GMVF]">
//                     Designing intuitive and engaging user interfaces.
//                   </p>
//                 </div>

//                 <div
//                   className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
//                   data-aos="fade-up"
//                   data-aos-delay="300"
//                 >
//                   <div className="text-purple-400 mb-3">
//                     <MdPalette size={20} />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
//                     Creative Workshop
//                   </h3>
//                   <p className="text-gray-400 font-[GMVF]">
//                     Conducting sessions on design principles and tools.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-32 z-10 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 p-10 shadow-2xl" data-aos="zoom-out-up">
//         <h2
//           className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-[Excon]"
//           data-aos="fade-up"
//         >
//           Team Volunteers
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           {/* Member 1 */}
//           <div
//             className="team-card bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center"
//             data-aos="fade-up"
//           >
//             <Image
//               src="/images/individual pics/sahithi.png"
//               alt="Member 1"
//               className="w-32 h-32 mx-auto rounded-full mb-6 "
//               width={128}
//               height={128}
//             />
//             <h3 className="text-xl font-semibold mb-4 text-white font-[Khand]">
//               Sahithi K
//             </h3>
//             <div className="flex justify-center space-x-6">
//               <a
//                 href="https://www.linkedin.com/in/sahithi2005/"
//                 className="social-icon text-gray-500 hover:text-blue-300"
//               >
//                 <FaLinkedin size={24} />
//               </a>
//               <a
//                 href="https://www.instagram.com/sahithiik?igsh=MXJvYXYyZnBsc2NmMg%3D%3D&utm_source=qr"
//                 className="social-icon text-gray-500 hover:text-pink-300"
//               >
//                 <FaInstagram size={24} />
//               </a>
//             </div>
//           </div>

//           {/* Member 2 */}
//           <div
//             className="team-card bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center"
//             data-aos="fade-up"
//             data-aos-delay="100"
//           >
//             <Image
//               src="/images/individual pics/mehika.jpg"
//               alt="Member 2"
//               className="w-32 h-32 mx-auto rounded-full mb-6 "
//               width={128}
//               height={128}
//             />
//             <h3 className="text-xl font-[Khand] font-semibold mb-4 text-white">
//               Mehika Varma
//             </h3>
//             <div className="flex justify-center space-x-6">
//               <a
//                 href="https://www.linkedin.com/in/amehikavarma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
//                 className="social-icon text-gray-500 hover:text-blue-300"
//               >
//                 <FaLinkedin size={24} />
//               </a>
//               <a
//                 href="https://www.instagram.com/meh_hika/"
//                 className="social-icon text-gray-500 hover:text-pink-300"
//               >
//                 <FaInstagram size={24} />
//               </a>
//             </div>
//           </div>

//           {/* Member 3 */}
//           <div
//             className="team-card bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <Image
//               src="/images/individual pics/daksha.png"
//               alt="Member 3"
//               className="w-32 h-32 mx-auto rounded-full mb-6 "
//               width={128}
//               height={128}
//             />
//             <h3 className="text-xl font-[Khand] font-semibold mb-4 text-white">
//               Daksha K Gowda
//             </h3>
//             <div className="flex justify-center space-x-6">
//               <a
//                 href="https://www.linkedin.com/in/dakshakgowda/"
//                 className="social-icon text-gray-500 hover:text-blue-300"
//               >
//                 <FaLinkedin size={24} />
//               </a>
//               <a
//                 href="https://www.instagram.com/the_red_dk"
//                 className="social-icon text-gray-500 hover:text-pink-300"
//               >
//                 <FaInstagram size={24} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
