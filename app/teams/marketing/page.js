"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaInstagram, FaLinkedin, FaChartLine, FaBullhorn } from "react-icons/fa";
import { BiSolidBullseye } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaChartPie, FaHashtag } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdCampaign, MdOutlineAnalytics } from "react-icons/md";
import { TbSocial } from "react-icons/tb";

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
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#001e63] to-[#000149] flex flex-col items-center py-16 px-4 overflow-hidden">
      {/* Marketing-themed floating elements */}
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
              color: ['#4361ee', '#3a86ff', '#4cc9f0', '#7209b7'][Math.floor(Math.random() * 4)]
            }}
          >
            {[<FaChartLine />, <FaHashtag />, <FaBullhorn />, <MdCampaign />, <TbSocial />][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div> */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 10}px`,
              animation: `float ${Math.random() * 20 + 10}s linear infinite`,
              color: ['#4361ee', '#3a86ff', '#4cc9f0', '#7209b7'][Math.floor(Math.random() * 4)],
            }}
          >
            {
              [
                <FaChartLine key={`chart-${i}`} />,
                <FaHashtag key={`hashtag-${i}`} />,
                <FaBullhorn key={`bullhorn-${i}`} />,
                <MdCampaign key={`campaign-${i}`} />,
                <TbSocial key={`social-${i}`} />,
              ][Math.floor(Math.random() * 5)]
            }
          </div>
        ))}
      </div>


      {/* Background Vector with enhanced opacity */}
      <div
        className="absolute inset-0 w-full h-full bg-center max-sm:bg-contain lg:bg-cover z-0 opacity-40"
        style={{ backgroundImage: "url('/Background.svg')" }}
      ></div>

      {/* Back Button - Enhanced */}
      <button
        onClick={handleBackButtonClick}
        className="absolute top-8 left-8 z-10 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all font-[Excon] flex items-center gap-2"
        data-aos="flip-left"
      >
        <IoMdArrowRoundBack /> Go Back
      </button>

      {/* Page Title */}
      <div className="relative z-10 mb-12 mt-4" data-aos="fade-down">
        <h1 className="text-5xl font-bold text-center text-white font-[Excon]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            Marketing Team
          </span>
        </h1>
        <div className="flex items-center justify-center mt-3">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
          <div className="mx-2 text-blue-400">
            <FaBullhorn />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-blue-500"></div>
        </div>
      </div>

      {/* Profile Section - Enhanced */}
      <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-white/10 max-sm:mt-10 w-full max-w-4xl" data-aos="slide-down">
        {/* Decorative top bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500"></div>

        <h2
          className="text-3xl font-bold text-center bg-clip-text font-[Excon] text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 mb-12"
          data-aos="fade-up"
        >
          Meet Our Lead
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Image with glow effect */}
          <div className="relative flex justify-center items-center mx-auto mb-6 md:mb-0" data-aos="zoom-in">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-full opacity-70 blur-md"></div>
            <div className="relative rounded-full p-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20">
              <Image
                src="/images/individual pics/bharath.png"
                alt="Bharath Kumar S"
                width={228}
                height={228}
                className="rounded-full object-cover border-2 border-white/20"
              />
            </div>
          </div>

          {/* Name, Title and Bio */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 font-[Khand] mb-2">
              Bharath Kumar S
            </h1>
            <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-blue-300 text-lg font-medium mb-4">
              Marketing Team Lead
            </div>
            <p className="text-gray-300 mb-4 font-[GMVF]">
              Leading our marketing initiatives with strategic vision and creative direction. Passionate about building the MLSA brand and expanding our community reach.
            </p>

            {/* Skills */}
            <div className="mb-6">
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {["Digital Marketing", "Brand Strategy", "Community Building"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links - Enhanced */}
            <div className="flex justify-center md:justify-start items-center gap-6 mt-4">
              <a
                href="https://www.linkedin.com/in/bharathsbk/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-blue-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.instagram.com/mr.sbk03/"
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
      <div className="mt-24 rounded-lg bg-gradient-to-br from-gray-900/80 to-gray-800/30 backdrop-blur-sm border border-white/10 py-10 shadow-2xl w-full max-w-6xl relative" data-aos="flip-up">
        {/* Decorative top bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500"></div>

        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold text-center mb-10 text-white"
            data-aos="fade-down"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 font-[Excon]">
              Meet Our Marketing Team
            </span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2" data-aos="fade-right">
              {/* Add glow effect to image */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-lg opacity-70 blur-md"></div>
                <Image
                  src="/images/team pics/Marketing Team.png"
                  alt="Group Picture"
                  className="relative rounded-lg shadow-lg border border-blue-500/20"
                  width={680}
                  height={600}
                />
              </div>
            </div>

            <div className="md:w-1/2 md:pl-12" data-aos="fade-left">
              <h3 className="text-3xl font-bold mb-6 text-white font-[Khand]">
                Driving Growth Through Marketing
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed font-[GMVF]">
                Our marketing team is the driving force behind the club&apos;s
                growth and outreach initiatives. We&apos;re dedicated to
                creating impactful campaigns, building strategic partnerships,
                and expanding our club&apos;s presence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:-translate-y-1"
                  data-aos="fade-up"
                >
                  <div className="text-blue-400 mb-3">
                    <BiSolidBullseye size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
                    Campaign Strategy
                  </h3>
                  <p className="text-gray-400 font-[GMVF]">
                    Developing and executing targeted marketing campaigns.
                  </p>
                </div>

                <div
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 transform hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="text-indigo-400 mb-3">
                    <FaHandshake size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
                    Partnerships
                  </h3>
                  <p className="text-gray-400 font-[GMVF]">
                    Building relationships with sponsors and partner
                    organizations.
                  </p>
                </div>

                <div
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="text-blue-400 mb-3">
                    <FaUsers size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
                    Outreach Programs
                  </h3>
                  <p className="text-gray-400 font-[GMVF]">
                    Organizing events and initiatives to expand our community.
                  </p>
                </div>

                <div
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 transform hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="text-indigo-400 mb-3">
                    <FaChartPie size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
                    Market Research
                  </h3>
                  <p className="text-gray-400 font-[GMVF]">
                    Analyzing trends and opportunities for growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Volunteers Section - Enhanced */}
      <div className="mt-24 rounded-lg bg-gradient-to-br from-gray-900/80 to-gray-800/30 backdrop-blur-sm border border-white/10 p-10 shadow-2xl z-10 w-full max-w-6xl relative" data-aos="zoom-out">
        {/* Decorative top bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500"></div>
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full">
          <FaChartPie className="text-white" size={24} />
        </div>

        <h2
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 font-[Excon] mt-4"
          data-aos="fade-up"
        >
          Team Volunteers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Member 1 - Enhanced */}
          <div
            className="team-card bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-xl p-8 text-center border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-blue-500/20 hover:shadow-xl group"
            data-aos="fade-up"
          >
            {/* Profile Image with glow effect */}
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-full opacity-70 blur-md group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image
                src="/images/individual pics/anarghaya.png"
                alt="Anarghya Gunashekaran"
                className="relative w-32 h-32 mx-auto rounded-full border-2 border-white/20 group-hover:border-white/40 transition-all duration-300"
                width={128}
                height={128}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white font-[Khand] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-indigo-400 transition-all duration-300">
              Anarghya Gunashekaran
            </h3>
            <p className="text-blue-300 mb-4 text-sm">Social Media Specialist</p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/anarghya-gunashekaran-0a06bb331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="p-2 bg-white/5 hover:bg-blue-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/ag25114/profilecard/?igsh=MWt0NTJ3ZHFjcG82eQ=="
                className="p-2 bg-white/5 hover:bg-pink-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Member 2 - Enhanced */}
          <div
            className="team-card bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-xl p-8 text-center border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-indigo-500/20 hover:shadow-xl group"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Profile Image with glow effect */}
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 to-blue-500/30 rounded-full opacity-70 blur-md group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image
                src="/images/individual pics/neelakshi.png"
                alt="Neelakshi Yemde"
                className="relative w-32 h-32 mx-auto rounded-full border-2 border-white/20 group-hover:border-white/40 transition-all duration-300"
                width={128}
                height={128}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white font-[Khand] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-blue-400 transition-all duration-300">
              Neelakshi Yemde
            </h3>
            <p className="text-indigo-300 mb-4 text-sm">Content Strategist</p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/neelakshi-yemde-3b4743306/"
                className="p-2 bg-white/5 hover:bg-blue-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/ny._.neelsy?igsh=MWRhbjZ6endmeDlsMA=="
                className="p-2 bg-white/5 hover:bg-pink-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Member 3 - Enhanced */}
          <div
            className="team-card bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-xl p-8 text-center border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-blue-500/20 hover:shadow-xl group"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Profile Image with glow effect */}
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-full opacity-70 blur-md group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image
                src="/images/individual pics/tejas.png"
                alt="Tejas R Mutalik"
                className="relative w-32 h-32 mx-auto rounded-full border-2 border-white/20 group-hover:border-white/40 transition-all duration-300"
                width={128}
                height={128}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white font-[Khand] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-indigo-400 transition-all duration-300">
              Tejas R Mutalik
            </h3>
            <p className="text-blue-300 mb-4 text-sm">Campaign Coordinator</p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/tejas-r-mutalik-b03214299/"
                className="p-2 bg-white/5 hover:bg-blue-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/trm_3113/"
                className="p-2 bg-white/5 hover:bg-pink-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Marketing-themed floating elements */}
      {/* <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-blue-500/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 10}px`,
              animation: `float ${Math.random() * 20 + 10}s linear infinite`,
            }}
          >
            {[<FaChartPie />, <BiSolidBullseye />, <FaHandshake />][Math.floor(Math.random() * 3)]}
          </div>
        ))}
      </div> */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-blue-500/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 10}px`,
              animation: `float ${Math.random() * 20 + 10}s linear infinite`,
            }}
          >
            {
              [
                <FaChartPie key={`chart-${i}`} />,
                <BiSolidBullseye key={`bullseye-${i}`} />,
                <FaHandshake key={`handshake-${i}`} />,
              ][Math.floor(Math.random() * 3)]
            }
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
          box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.3);
          border-color: rgba(59, 130, 246, 0.4);
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default Page;






// "use client";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import React from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { FaInstagram, FaLinkedin } from "react-icons/fa";
// import { BiSolidBullseye } from "react-icons/bi";
// import { FaHandshake } from "react-icons/fa";
// import { FaUsers } from "react-icons/fa6";
// import { FaChartPie } from "react-icons/fa";

// const Page = () => {
//   const router = useRouter();

//   const handleBackButtonClick = () => {
//     console.log("Navigating to /");
//     router.back();
//   };

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   return (
//     <div className="relative min-h-screen w-full bg-gradient-to-b from-[#020084] to-[#000149] flex flex-col items-center py-16 px-4 overflow-hidden">
//       {/* Back Button */}
//       <button
//         onClick={handleBackButtonClick}
//         className="absolute top-8 left-8 z-10 px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-400 text-black font-semibold rounded-lg shadow-md hover:bg-gray-400 transition-all font-[Excon]"
//         data-aos="slide-right"
//       >
//         Go Back
//       </button>

//       {/* Background Vector */}
//       <div
//         className="absolute inset-0 w-full h-full bg-center  max-sm:bg-contain lg:bg-cover z-0"
//         style={{ backgroundImage: "url('/Background.svg')" }}
//       ></div>

//       {/* Profile Section */}
//       <div className="relative bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-white/10 max-sm:mt-10" data-aos="slide-down">
//         {/* Profile Image */}
//         <div className="w-full h-full flex-col justify-center items-center  mb-6 " >
//           <h2
//             className="text-4xl font-bold text-center mb-10 text-white"
//             data-aos="fade-down "
//           >
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-[Excon]" data-aos="slide-right">
//               Meet Our Lead
//             </span>
//           </h2>
//           <Image
//             src="/images/individual pics/bharath.png"
//             alt="Bharath Kumar S"
//             width={228}
//             height={228}
//             className=" relative rounded-full object-cover shadow-lg max-sm:ml-5 ml-4"
//           />
//         </div>

//         {/* Name and Title */}
//         <div className="text-center mb-6 ">
//           <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-[Khand]">
//             Bharath Kumar S
//           </h1>
//           <p className="text-gray-300 text-lg font-medium font-[Khand]">
//             Marketing Team Lead
//           </p>
//         </div>

//         {/* Social Links */}
//         <div className="flex justify-center items-center gap-8 mt-8">
//           <a
//             href="https://www.linkedin.com/in/bharathsbk/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-500 hover:text-blue-700 hover:scale-105 duration-300"
//           >
//             <FaLinkedin size={40} />
//           </a>
//           <a
//             href="https://www.instagram.com/mr.sbk03/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-500 hover:text-pink-700 hover:scale-105 duration-300"
//           >
//             <FaInstagram size={40} />
//           </a>
//         </div>
//       </div>

//       <div className="mt-32 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 py-10 shadow-2xl" data-aos="flip-up">
//         <div className="container mx-auto px-4">
//           <h2
//             className="text-4xl font-bold text-center mb-10 text-white"
//             data-aos="fade-down"
//           >
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-[Excon]">
//               Meet Our Marketing Team
//             </span>
//           </h2>
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <div className="md:w-1/2" data-aos="fade-right">
//               <Image
//                 src="/images/team pics/Marketing Team.png"
//                 alt="Group Picture"
//                 className="rounded-lg shadow-lg border border-blue-500/20"
//                 width={680}
//                 height={600} // You can adjust the width and height as per your requirement
//               />
//             </div>

//             <div className="md:w-1/2 md:pl-12" data-aos="fade-left">
//               <h3 className="text-3xl font-bold mb-6 text-white font-[Khand]">
//                 Driving Growth Through Marketing
//               </h3>
//               <p className="text-gray-300 mb-4 text-sm leading-relaxed font-[GMVF]">
//                 Our marketing team is the driving force behind the club&apos;s
//                 growth and outreach initiatives. We&apos;re dedicated to
//                 creating impactful campaigns, building strategic partnerships,
//                 and expanding our club&apos;s presence.
//               </p>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 <div
//                   className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
//                   data-aos="fade-up"
//                 >
//                   <div className="text-blue-400 mb-3">
//                     <BiSolidBullseye size={20} />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
//                     Campaign Strategy
//                   </h3>
//                   <p className="text-gray-400 font-[GMVF]">
//                     Developing and executing targeted marketing campaigns.
//                   </p>
//                 </div>

//                 <div
//                   className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
//                   data-aos="fade-up"
//                   data-aos-delay="100"
//                 >
//                   <div className="text-purple-400 mb-3">
//                     <FaHandshake size={20} />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
//                     Partnerships
//                   </h3>
//                   <p className="text-gray-400 font-[GMVF]">
//                     Building relationships with sponsors and partner
//                     organizations.
//                   </p>
//                 </div>

//                 <div
//                   className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
//                   data-aos="fade-up"
//                   data-aos-delay="200"
//                 >
//                   <div className="text-blue-400 mb-3">
//                     <FaUsers size={20} />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
//                     Outreach Programs
//                   </h3>
//                   <p className="text-gray-400 font-[GMVF]">
//                     Organizing events and initiatives to expand our community.
//                   </p>
//                 </div>

//                 <div
//                   className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
//                   data-aos="fade-up"
//                   data-aos-delay="300"
//                 >
//                   <div className="text-purple-400 mb-3">
//                     <FaChartPie size={20} />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
//                     Market Research
//                   </h3>
//                   <p className="text-gray-400 font-[GMVF]">
//                     Analyzing trends and opportunities for growth.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-32 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 p-10 shadow-2xl z-10" data-aos="zoom-out">
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
//               src="/images/individual pics/anarghaya.png"
//               alt="Member 1"
//               className="w-32 h-32 mx-auto rounded-full mb-6 "
//               width={128}
//               height={128}
//             />
//             <h3 className="text-xl font-semibold mb-4 text-white font-[Khand]">
//               Anarghya Gunashekaran
//             </h3>
//             <div className="flex justify-center space-x-6">
//               <a
//                 href="https://www.linkedin.com/in/anarghya-gunashekaran-0a06bb331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
//                 className="social-icon text-gray-500 hover:text-blue-300"
//               >
//                 <FaLinkedin size={24} />
//               </a>
//               <a
//                 href="https://www.instagram.com/ag25114/profilecard/?igsh=MWt0NTJ3ZHFjcG82eQ=="
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
//               src="/images/individual pics/neelakshi.png"
//               alt="Member 2"
//               className="w-32 h-32 mx-auto rounded-full mb-6 "
//               width={128}
//               height={128}
//             />
//             <h3 className="text-xl font-semibold mb-4 text-white font-[Khand]">
//               Neelakshi Yemde
//             </h3>
//             <div className="flex justify-center space-x-6">
//               <a
//                 href="https://www.linkedin.com/in/neelakshi-yemde-3b4743306/"
//                 className="social-icon text-gray-500 hover:text-blue-300"
//               >
//                 <FaLinkedin size={24} />
//               </a>
//               <a
//                 href="https://www.instagram.com/ny._.neelsy?igsh=MWRhbjZ6endmeDlsMA=="
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
//               src="/images/individual pics/tejas.png"
//               alt="Member 3"
//               className="w-32 h-32 mx-auto rounded-full mb-6 "
//               width={128}
//               height={128}
//             />
//             <h3 className="text-xl font-semibold mb-4 text-white font-[Khand]">
//               Tejas R Mutalik
//             </h3>
//             <div className="flex justify-center space-x-6">
//               <a
//                 href="https://www.linkedin.com/in/tejas-r-mutalik-b03214299/"
//                 className="social-icon text-gray-500 hover:text-blue-300"
//               >
//                 <FaLinkedin size={24} />
//               </a>
//               <a
//                 href="https://www.instagram.com/trm_3113/"
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
