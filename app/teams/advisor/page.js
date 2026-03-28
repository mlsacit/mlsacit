"use client";
<<<<<<< HEAD
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaArrowLeft, FaQuoteLeft, FaQuoteRight, FaUniversity } from "react-icons/fa";

const AdvisorPage = () => {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center py-16 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Image
          src="/images/team_bg/Core.jpg" // Replace with your dark blue background image path
          alt="Background"
          fill
          className="object-cover blur-sm brightness-50"
          priority
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
      </div>
      
=======
import {useEffect} from "react";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"


const AdvisorPage = () => {
  const router = useRouter();

    useEffect(() => {
      AOS.init({
        duration:1000,
        once: true,
      });
    },[]);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#020084] to-[#000149] flex flex-col items-center py-16 px-4 overflow-hidden">
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
      {/* Back Button */}
      <button
        onClick={() => {
          console.log("Navigating to /");
          router.back();
        }}
<<<<<<< HEAD
        className="absolute top-6 left-6 z-20 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg shadow-lg backdrop-blur-md border border-white/20 transition-all font-[Excon] flex items-center gap-2"
        data-aos="fade-down"
      >
        <FaArrowLeft className="text-sm" /> Back
      </button>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        
        {/* Title Section */}
        <div className="mb-16 mt-4" data-aos="fade-down">
          <h1 className="text-5xl md:text-7xl font-bold text-center text-white font-[Excon] mb-4 tracking-tight">
            Faculty Advisor
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-4"></div>
          <p className="text-center text-white/70 text-lg font-[GMVF]">
            Guiding & Mentoring with Wisdom
          </p>
        </div>

        {/* Profile Section */}
        <div className="relative" data-aos="fade-up">
          
          {/* Glass morphism container */}
          <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            
            {/* Top accent line */}
            <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
            
            <div className="p-8 md:p-16">
              
              <div className="grid md:grid-cols-2 gap-12 items-start">
                
                {/* Left Column - Image and basic info */}
                <div className="flex flex-col items-center" data-aos="fade-right">
                  
                  {/* Profile Image with glow effect */}
                  <div className="relative group">
                    <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-full opacity-0 group-hover:opacity-70 blur-xl transition-all duration-500"></div>
                    
                    <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full border-2 border-blue-400/30 group-hover:border-blue-400/60 transition-all duration-500 overflow-hidden">
                      <Image
                        src="/images/individual pics/Megha_Sharma.jpg"
                        alt="Megha Sharma"
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 border-2 border-blue-500/20 rounded-full"></div>
                    <div className="absolute -z-10 -top-6 -left-6 w-20 h-20 border-2 border-purple-500/20 rounded-full"></div>
                  </div>

                  {/* Name and Title */}
                  <div className="text-center mt-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white font-[Khand] mb-4">
                      Megha Sharma
                    </h2>
                    <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-blue-300 text-base font-semibold tracking-wide">MLSA Club Advisor</span>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="mt-10 relative px-8 max-w-md" data-aos="fade-up" data-aos-delay="100">
                    <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                      <FaQuoteLeft className="text-blue-400/40 absolute top-4 left-4 text-xl" />
                      <p className="text-white/80 italic text-base leading-relaxed px-4 text-center font-[GMVF]">
                        Leadership isn&apos;t about being the loudest voice in the room—it&apos;s about listening, guiding, and making space for others to grow. That&apos;s what builds legacy.
                      </p>
                      <FaQuoteRight className="text-blue-400/40 absolute bottom-4 right-4 text-xl" />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"></div>

                  {/* Social Links */}
                  <div className="flex justify-center items-center gap-6" data-aos="fade-up" data-aos-delay="200">
                    <Link
                      href="https://www.linkedin.com/in/megha-sharma-09904b10/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/icon relative p-4 bg-white/5 hover:bg-blue-500/20 rounded-xl text-white/70 hover:text-white transition-all duration-300 border border-white/10 hover:border-blue-400/50"
                    >
                      <FaLinkedin size={28} />
                      <div className="absolute inset-0 rounded-xl bg-blue-500/0 group-hover/icon:bg-blue-500/10 blur transition-all duration-300"></div>
                    </Link>
                    <Link
                      href="https://www.instagram.com/megha_ise/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/icon relative p-4 bg-white/5 hover:bg-pink-500/20 rounded-xl text-white/70 hover:text-white transition-all duration-300 border border-white/10 hover:border-pink-400/50"
                    >
                      <FaInstagram size={28} />
                      <div className="absolute inset-0 rounded-xl bg-pink-500/0 group-hover/icon:bg-pink-500/10 blur transition-all duration-300"></div>
                    </Link>
                  </div>
                </div>
                
                {/* Right Column - Content */}
                <div className="space-y-8" data-aos="fade-left">
                  
                  {/* Credentials */}
                  <div className="group/card relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:bg-white/[0.07]">
                    <div className="absolute inset-0 rounded-2xl bg-blue-500/0 group-hover/card:bg-blue-500/5 transition-all duration-300"></div>
                    <div className="relative">
                      <h3 className="text-2xl font-semibold text-blue-400 mb-4 font-[Khand] flex items-center">
                        <FaUniversity className="mr-3 text-blue-300" />
                        Credentials
                      </h3>
                      <div className="space-y-4 text-white/70 font-[GMVF]">
                        {[
                          'Head Of The Department – Master Of Computer Applications, Cambridge Institute of Technology',
                          'Assistant Professor at Cambridge Institute of Technology',
                          'MLSA CIT chapter club advisor'
                        ].map((credential, index) => (
                          <div key={index} className="flex items-start group/item">
                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-white/20 transition-all duration-300">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                            </div>
                            <span className="leading-relaxed">{credential}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Biography */}
                  <div className="group/card relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:bg-white/[0.07]">
                    <div className="absolute inset-0 rounded-2xl bg-purple-500/0 group-hover/card:bg-purple-500/5 transition-all duration-300"></div>
                    <div className="relative">
                      <h3 className="text-2xl font-semibold text-purple-400 mb-4 font-[Khand]">Biography</h3>
                      <p className="text-white/70 leading-relaxed font-[GMVF]">
                        Megha Sharma, an esteemed assistant professor at our college, represents our club within the Microsoft community. Her unwavering dedication and invaluable insights drive our club to excel and innovate. With her mentorship, we are inspired to reach new heights, fostering an environment of growth and collaboration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
=======
        className="absolute top-8 left-8 z-10 px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-400 text-black font-semibold rounded-lg shadow-md hover:bg-gray-400 transition-all font-[Excon]" data-aos="flip-up"
      >
        Go Back
      </button>

      {/* Background Vector */}
      <div
        className="absolute inset-0 w-full h-full bg-center  max-sm:bg-contain lg:bg-cover z-0"
        style={{ backgroundImage: "url('/Background.svg')" }}
      ></div>

      {/* Profile Section */}
      <div className="relative  mt-16 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 p-7 shadow-2xl" data-aos="slide-up">

      <h2 className="text-4xl font-bold font-[Excon] text-center mb-10 text-white" data-aos="fade-down">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Meet Our Advisor
          </span>
        </h2>
        {/* Profile Image */}
        <div className="w-auto h-auto flex justify-center items-center mx-auto mb-6" data-aos="zoom-in">
          <Image
            src="/images/individual pics/megha mam.png"
            alt="Advisor Image"
            width={228}
            height={228}
            className="rounded-full object-cover "
          />
        </div>

        {/* Name and Title */}
        <div className="text-center mb-6" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-white font-[Khand]">Prof. Megha Sharma</h1>
          <p className="text-white text-lg font-medium font-[Khand]">Advisor of the Club</p>
        </div>

        {/* Biography */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4 font-[Khand]" data-aos="flip-down">Biography</h2>
          <p className="text-white leading-7 font-[GMVF]" data-aos="slide-down">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            metus scelerisque ante sollicitudin commodo. Suspendisse potenti.
            Fusce tristique lorem non massa tristique, vel consequat eros
            viverra. Quisque ut semper nulla. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>

        {/* Contributions */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4 font-[Khand]" data-aos="zoom-in-up">
            Contributions to the Club
          </h2>
          <ul className="list-disc list-inside space-y-3 text-white font-[GMVF]" data-aos="fade-down">
            <li>Guided the club to achieve its mission and vision.</li>
            <li>Organized successful events and mentorship programs.</li>
            <li>Supported club members with professional advice.</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-8 mt-8" data-aos="flip-left">
          <a
            href="https://www.linkedin.com/in/megha-sharma-09904b10/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-700 hover:scale-105 duration-300"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://www.instagram.com/megha_ise/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-700 hover:scale-105 duration-300"
          >
            <FaInstagram size={40} />
          </a>
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default AdvisorPage;
=======
export default AdvisorPage;
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
