"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaInstagram, FaLinkedin, FaArrowLeft, FaHashtag } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { PiChatsCircleFill } from "react-icons/pi";
import { GoGraph } from "react-icons/go";
import { BsShare } from "react-icons/bs";

const Page = () => {
  const router = useRouter();

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
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#4a0084] to-[#000149] flex flex-col items-center py-16 px-4 overflow-hidden">
      {/* Back Button */}
      <button
        onClick={handleBackButtonClick}
        className="absolute top-8 left-8 z-10 px-4 py-2 bg-gradient-to-r from-pink-400 to-purple-400 text-black font-semibold rounded-lg shadow-md hover:bg-gray-400 transition-all font-[Excon] flex items-center gap-2" 
        data-aos="fade-down-left"
      >
        <FaArrowLeft /> Go Back
      </button>

      {/* Background Vector */}
      <div
        className="absolute inset-0 w-full h-full bg-center max-sm:bg-contain lg:bg-cover z-0"
        style={{ backgroundImage: "url('/Background.svg')" }}
      ></div>
      
      {/* Social Media themed background elements */}
      <div className="absolute inset-0 z-0">
        {/* Social media icons floating in background */}
        <div className="absolute top-1/4 left-1/4 text-pink-500/10 text-7xl">
          <FaInstagram />
        </div>
        <div className="absolute top-3/4 left-3/4 text-blue-500/10 text-7xl">
          <FaLinkedin />
        </div>
        <div className="absolute top-2/3 left-1/5 text-purple-500/10 text-7xl">
          <FaHashtag />
        </div>
        <div className="absolute top-1/5 right-1/4 text-indigo-500/10 text-7xl">
          <BsShare />
        </div>
        
        {/* Animated particles like notifications */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `linear-gradient(to right, ${
                ['#ff6b6b', '#48dbfb', '#ff9ff3', '#1dd1a1'][Math.floor(Math.random() * 4)]
              }, ${
                ['#fc5c65', '#0abde3', '#f368e0', '#10ac84'][Math.floor(Math.random() * 4)]
              })`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          ></div>
        ))}
      </div>

      {/* Title with social media theme */}
      <div className="relative z-10 mb-8 mt-4" data-aos="fade-down">
        <h1 className="text-5xl font-bold text-center text-white font-[Excon]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
            Social Media Team
          </span>
        </h1>
        <div className="flex items-center justify-center mt-3">
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500"></div>
          <div className="mx-2 text-pink-400">
            <FaHashtag />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </div>
      </div>

      {/* Profile Section - Enhanced */}
      <div className="relative mt-16 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 p-7 shadow-2xl" data-aos="zoom-in-down">
        {/* Decorative top bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500"></div>

        <h2 className="text-4xl font-bold font-[Excon] text-center mb-10 text-white" data-aos="fade-down">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
            Meet Our Team Lead
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and basic info */}
          <div className="flex flex-col items-center">
            {/* Profile Image with creative glow effect */}
            <div className="relative" data-aos="zoom-in">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full opacity-70 blur-md"></div>
              <div className="relative rounded-full p-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20">
                <Image
                  src="/images/individual pics/neha.png"
                  alt="Social Media Team Lead"
                  width={228}
                  height={228}
                  className="rounded-full object-cover border-2 border-white/20"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-24 h-24 border border-pink-500/30 rounded-full"></div>
              <div className="absolute -z-10 -top-4 -left-4 w-16 h-16 border border-purple-500/30 rounded-full"></div>
            </div>

            {/* Name and Title */}
            <div className="text-center mt-8" data-aos="fade-up">
              <h1 className="text-4xl font-bold text-white font-[Khand]">Neha S</h1>
              <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-pink-300 text-lg font-medium mt-3">
                Social Media Team Lead
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center items-center gap-6 mt-8" data-aos="flip-left">
              <a
                href="https://www.linkedin.com/in/neha-s-4a1944251/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-blue-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.instagram.com/goddessoflove_rain/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-pink-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div>
            {/* Skills & Expertise */}
            <div className="mb-8 bg-white/5 rounded-xl p-6 border border-white/10" data-aos="fade-left">
              <h2 className="text-2xl font-semibold text-pink-400 mb-4 font-[Khand]">Skills & Expertise</h2>
              <div className="space-y-4">
                {[
                  { skill: 'Content Strategy', level: 90 },
                  { skill: 'Visual Design', level: 85 },
                  { skill: 'Community Building', level: 95 },
                  { skill: 'Analytics', level: 80 }
                ].map((item, index) => (
                  <div key={index} className="mb-3">
                    <div className="flex justify-between mb-1">
                      <span className="text-white/80 font-[GMVF]">{item.skill}</span>
                      <span className="text-pink-400 font-[GMVF]">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full" 
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Role Description */}
            <div className="mb-8 bg-white/5 rounded-xl p-6 border border-white/10" data-aos="fade-left" data-aos-delay="100">
              <h2 className="text-2xl font-semibold text-pink-400 mb-4 font-[Khand] flex items-center">
                <FaCamera className="mr-3 text-pink-300" />
                Role & Vision
              </h2>
              <p className="text-white/80 leading-7 font-[GMVF]">
                As the Social Media Team Lead, Neha orchestrates our club&apos;s digital presence with creativity and strategic insight. She leads a talented team that crafts engaging content, builds our online community, and ensures our message reaches the right audience at the right time.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team Overview Section - Enhanced */}
      <div className="mt-32 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 py-10 shadow-2xl relative" data-aos="zoom-in">
        {/* Decorative top bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500"></div>
        
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-[Excon] text-center mb-10 text-white" data-aos="fade-down">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
              Meet Our Social Media Team
            </span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2" data-aos="fade-right">
              {/* Add glow effect to image */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-lg opacity-70 blur-md"></div>
                <Image 
                  src="/MediaTeam.png" 
                  alt="Group Picture" 
                  className="relative rounded-lg shadow-lg border border-pink-500/20"
                  width={640} 
                  height={500}
                />
              </div>
            </div>
          
            <div className="md:w-1/2 md:pl-12" data-aos="fade-left">
              <h3 className="text-3xl font-[Khand] font-bold mb-6 text-white">
                Engaging Through Social Media
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed font-[GMVF]">
                Our social media team is the voice of the club, creating engaging content and building meaningful connections. 
                We&apos;re dedicated to showcasing our club&apos;s activities and keeping our community informed and entertained.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div 
                  className="bg-white/5 backdrop-blur p-6 rounded-xl shadow-lg border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 transform hover:-translate-y-1" 
                  data-aos="fade-up"
                >
                  <div className="text-pink-400 mb-3">
                  <FaCamera size={24}/>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">Content Creation</h3>
                  <p className="text-white/70 font-[GMVF]">Crafting engaging visual content for all social media platforms.</p>
                </div>

                <div 
                  className="bg-white/5 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-1" 
                  data-aos="fade-up" 
                  data-aos-delay="100"
                >
                  <div className="text-purple-400 mb-3">
                  <FaBullhorn size={24}/>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">Event Promotion</h3>
                  <p className="text-white/70 font-[GMVF]">Promoting club events and activities across social channels.</p>
                </div>

                <div 
                  className="bg-white/5 backdrop-blur p-6 rounded-xl shadow-lg border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 transform hover:-translate-y-1" 
                  data-aos="fade-up" 
                  data-aos-delay="200"
                >
                  <div className="text-pink-400 mb-3">
                    <PiChatsCircleFill size={20}/>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">Community Engagement</h3>
                  <p className="text-gray-400 font-[GMVF]">Building and maintaining an active online community.</p>
                </div>

                <div 
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300" 
                  data-aos="fade-up" 
                  data-aos-delay="300"
                >
                  <div className="text-purple-400 mb-3">
                    <GoGraph size={20}/>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">Analytics & Strategy</h3>
                  <p className="text-gray-400 font-[GMVF]">Analyzing trends and optimizing social media strategies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* Team Volunteers Section - Enhanced */}
        <div className="mt-32 z-10 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 p-12 shadow-2xl relative" data-aos="zoom-out-up">
          {/* Decorative top bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500/10 text-purple-500 to-pink-500"></div>
          
          <h2 className="text-3xl font-[Excon] font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400" data-aos="fade-up">
            Team Volunteers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Member 1 - Enhanced */}
            <div className="team-card bg-white/5 backdrop-blur-lg rounded-xl p-8 text-center border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up">
              <div className="relative mb-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full opacity-70 blur-md"></div>
                <Image 
                  src="/images/individual pics/biswajit.png" 
                  alt="Member 1" 
                  className="relative w-32 h-32 mx-auto rounded-full border-2 border-white/20"
                  width={128} 
                  height={128} 
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white font-[Khand]">Biswajit Das</h3>
              <p className="text-pink-300 mb-4 text-sm">Social Media Specialist</p>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://www.linkedin.com/in/guru-swarupa-81a0a8262/" 
                  className="p-2 bg-white/5 hover:bg-blue-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
                >
                  <FaLinkedin size={20}/>
                </a>
                <a 
                  href="https://www.instagram.com/biswajitdaszz/" 
                  className="p-2 bg-white/5 hover:bg-pink-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
                >
                  <FaInstagram size={20}/>
                </a>
              </div>
            </div>
    
            {/* Member 2 - Enhanced */}
            <div className="team-card bg-white/5 backdrop-blur-lg rounded-xl p-8 text-center border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="100">
              <div className="relative mb-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full opacity-70 blur-md"></div>
                <Image 
                  src="/images/individual pics/shibashish.png" 
                  alt="Member 2" 
                  className="relative w-32 h-32 mx-auto rounded-full border-2 border-white/20"
                  width={128} 
                  height={128} 
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white font-[Khand]">Shibasish Banerjee</h3>
              <p className="text-purple-300 mb-4 text-sm">Content Creator</p>
              <div className="flex justify-center space-x-6">
                <a 
                  href="http://www.linkedin.com/in/shibasishbanerjee/" 
                  className="p-2 bg-white/5 hover:bg-blue-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
                >
                  <FaLinkedin size={20}/>
                </a>
                <a 
                  href="https://www.instagram.com/shibufrrr/" 
                  className="p-2 bg-white/5 hover:bg-pink-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
                >
                  <FaInstagram size={20}/>
                </a>
              </div>
            </div>
    
            {/* Member 3 - Enhanced */}
            <div className="team-card bg-white/5 backdrop-blur-lg rounded-xl p-8 text-center border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="200">
              <div className="relative mb-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full opacity-70 blur-md"></div>
                <Image 
                  src="/images/individual pics/sakshi.png" 
                  alt="Member 3" 
                  className="relative w-32 h-32 mx-auto rounded-full border-2 border-white/20"
                  width={128} 
                  height={128} 
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white font-[Khand]">Sakshi Verma</h3>
              <p className="text-pink-300 mb-4 text-sm">Community Manager</p>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://www.linkedin.com/in/sakshivermasv/" 
                  className="p-2 bg-white/5 hover:bg-blue-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
                >
                  <FaLinkedin size={20}/>
                </a>
                <a 
                  href="https://www.instagram.com/sakshiii.vermaaa/profilecard/?igsh=MWc5ZmdvdnJ0NWQzbA==" 
                  className="p-2 bg-white/5 hover:bg-pink-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
                >
                  <FaInstagram size={20}/>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Add floating social media animation */}
        <style jsx global>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            25% { transform: translateY(-15px) translateX(10px); }
            50% { transform: translateY(0) translateX(15px); }
            75% { transform: translateY(15px) translateX(5px); }
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
// import { FaCamera } from "react-icons/fa";
// import { FaBullhorn } from "react-icons/fa";
// import { PiChatsCircleFill } from "react-icons/pi";
// import { GoGraph } from "react-icons/go";

// const Page = () => {
//   const router = useRouter();

//   const handleBackButtonClick = () => {
//     console.log("Navigating to /");
//     router.back();
//   };

//   useEffect(() => {
//       AOS.init({
//         duration: 1000,
//         once: true,
//       });
//   }, []);

//   return (
//     <div className="relative min-h-screen w-full bg-gradient-to-b from-[#020084] to-[#000149] flex flex-col items-center py-16 px-4 overflow-hidden">
//       {/* Back Button */}
//       <button
//         onClick={handleBackButtonClick}
//         className="absolute top-8 left-8 z-10 px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-400 text-black font-semibold rounded-lg shadow-md hover:bg-gray-400 transition-all font-[Excon]" data-aos="fade-down-left"
//       >
//         Go Back
//       </button>

//       {/* Background Vector */}
//       <div
//         className="absolute inset-0 w-full h-full bg-center  max-sm:bg-contain lg:bg-cover z-0"
//         style={{ backgroundImage: "url('/Background.svg')" }}
//       ></div>

//       {/* Profile Section */}
//       <div className="relative mt-16 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 p-7 shadow-2xl" data-aos="zoom-in-down">

//         <h2 className="text-4xl font-bold font-[Excon] text-center mb-10 text-white" data-aos="fade-down">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
//             Meet Our Team Lead
//           </span>
//         </h2>

//         {/* Profile Image */}
//         <div className="w-auto h-auto flex justify-center items-center mx-auto mb-6">
//           <Image
//             src="/images/individual pics/neha.png"
//             alt="Aaron Rohan"
//             width={228}
//             height={228}
//             className="rounded-full object-cover "
//           />
//         </div>

//         {/* Name and Title */}
//         <div className="text-center mb-6">
//           <h1 className="text-4xl font-[Khand] font-bold text-white">Neha S</h1>
//           <p className="text-white text-lg font-[Khand] font-medium">Social Media Team Lead</p>
//         </div>

//         {/* Social Links */}
//         <div className="flex justify-center items-center gap-8 mt-8">
//           <a
//             href="https://www.linkedin.com/in/neha-s-4a1944251/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-500 hover:text-blue-700 hover:scale-105 duration-300"
//           >
//             <FaLinkedin size={40} />
//           </a>
//           <a
//             href="https://www.instagram.com/goddessoflove_rain/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-500 hover:text-pink-700 hover:scale-105 duration-300"
//           >
//             <FaInstagram size={40} />
//           </a>
//         </div>

//       </div>
//       <div className="mt-32 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 py-10 shadow-2xl" data-aos="zoom-in">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold font-[Excon] text-center mb-10 text-white" data-aos="fade-down">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
//             Meet Our Social Media Team
//           </span>
//         </h2>
//         <div className="flex flex-col md:flex-row items-center gap-12">
//           <div className="md:w-1/2" data-aos="fade-right">
//             <Image 
//               src="/MediaTeam.png" 
//               alt="Group Picture" 
//               className="rounded-lg shadow-lg border border-blue-500/20"
//               width={640} 
//               height={500} // You can adjust the width and height as per your requirement
//             />
//           </div>

//           <div className="md:w-1/2 md:pl-12" data-aos="fade-left">
//             <h3 className="text-3xl font-[Khand] font-bold mb-6 text-white">
//               Engaging Through Social Media
//             </h3>
//             <p className="text-gray-300 mb-4 text-sm leading-relaxed font-[GMVF]">
//               Our social media team is the voice of the club, creating engaging content and building meaningful connections. 
//               We&apos;re dedicated to showcasing our club&apos;s activities and keeping our community informed and entertained.
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <div 
//                 className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300" 
//                 data-aos="fade-up"
//               >
//                 <div className="text-blue-400 mb-3">
//                 <FaCamera size={20}/>
//                 </div>
//                 <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">Content Creation</h3>
//                 <p className="text-gray-400 font-[GMVF]">Crafting engaging visual content for all social media platforms.</p>
//               </div>

//               <div 
//                 className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300" 
//                 data-aos="fade-up" 
//                 data-aos-delay="100"
//               >
//                 <div className="text-purple-400 mb-3">
//                 <FaBullhorn size={20}/>
//                 </div>
//                 <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">Event Promotion</h3>
//                 <p className="text-gray-400 font-[GMVF]">Promoting club events and activities across social channels.</p>
//               </div>

//               <div 
//                 className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300" 
//                 data-aos="fade-up" 
//                 data-aos-delay="200"
//               >
//                 <div className="text-blue-400 mb-3">
//                     <PiChatsCircleFill size={20}/>
//                 </div>
//                 <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">Community Engagement</h3>
//                 <p className="text-gray-400 font-[GMVF]">Building and maintaining an active online community.</p>
//               </div>

//               <div 
//                 className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300" 
//                 data-aos="fade-up" 
//                 data-aos-delay="300"
//               >
//                 <div className="text-purple-400 mb-3">
//                   <GoGraph size={20}/>
//                 </div>
//                 <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">Analytics & Strategy</h3>
//                 <p className="text-gray-400 font-[GMVF]">Analyzing trends and optimizing social media strategies.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="mt-32 z-10 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 p-12 shadow-2xl" data-aos="zoom-out-up">
//       <h2 className="text-3xl font-[Excon] font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400" data-aos="fade-up">
//         Team Volunteers
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//         {/* Member 1 */}
//         <div className="team-card bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center" data-aos="fade-up">
//           <Image 
//             src="/images/individual pics/biswajit.png" 
//             alt="Member 1" 
//             className="w-32 h-32 mx-auto rounded-full mb-6 "
//             width={128} 
//             height={128} 
//           />
//           <h3 className="text-xl font-semibold mb-4 text-white  font-[Khand]">Biswajit Das</h3>
//           <div className="flex justify-center space-x-6">
//             <a href="https://www.linkedin.com/in/guru-swarupa-81a0a8262/" className="social-icon text-gray-500 hover:text-blue-300">
//               <FaLinkedin size={24}/>
//             </a>
//             <a href="https://www.instagram.com/biswajitdaszz/" className="social-icon text-gray-500 hover:text-pink-300">
//               <FaInstagram size={24}/>
//             </a>
//           </div>
//         </div>

//         {/* Member 2 */}
//         <div className="team-card bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center" data-aos="fade-up" data-aos-delay="100">
//           <Image 
//             src="/images/individual pics/shibashish.png" 
//             alt="Member 2" 
//             className="w-32 h-32 mx-auto rounded-full mb-6 "
//             width={128} 
//             height={128} 
//           />
//           <h3 className="text-xl font-semibold mb-4 text-white font-[Khand]">Shibasish Banerjee</h3>
//           <div className="flex justify-center space-x-6">
//             <a href="http://www.linkedin.com/in/shibasishbanerjee/" className="social-icon text-gray-500 hover:text-blue-300">
//               <FaLinkedin size={24}/>
//             </a>
//             <a href="https://www.instagram.com/shibufrrr/" className="social-icon text-gray-500 hover:text-pink-300">
//               <FaInstagram size={24}/>
//             </a>
//           </div>
//         </div>

//         {/* Member 3 */}
//         <div className="team-card bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center" data-aos="fade-up" data-aos-delay="200">
//           <Image 
//             src="/images/individual pics/sakshi.png" 
//             alt="Member 3" 
//             className="w-32 h-32 mx-auto rounded-full mb-6 "
//             width={128} 
//             height={128} 
//           />
//           <h3 className="text-xl font-semibold mb-4 text-white font-[Khand]">Sakshi Verma</h3>
//           <div className="flex justify-center space-x-6">
//             <a href="https://www.linkedin.com/in/sakshivermasv/" className="social-icon text-gray-500 hover:text-blue-300">
//               <FaLinkedin size={24}/>
//             </a>
//             <a href="https://www.instagram.com/sakshiii.vermaaa/profilecard/?igsh=MWc5ZmdvdnJ0NWQzbA==" className="social-icon text-gray-500 hover:text-pink-300">
//               <FaInstagram size={24}/>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Page;
