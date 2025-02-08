"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { PiChatsCircleFill } from "react-icons/pi";
import { GoGraph } from "react-icons/go";

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
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#020084] to-[#000149] flex flex-col items-center py-16 px-4 overflow-hidden">
      {/* Back Button */}
      <button
        onClick={handleBackButtonClick}
        className="absolute top-8 left-8 z-10 px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-400 text-black font-semibold rounded-lg shadow-md hover:bg-gray-400 transition-all font-[Excon]" data-aos="fade-down-left"
      >
        Go Back
      </button>

      {/* Background Vector */}
      <div
        className="absolute inset-0 w-full h-full bg-center  max-sm:bg-contain lg:bg-cover z-0"
        style={{ backgroundImage: "url('/Background.svg')" }}
      ></div>

      {/* Profile Section */}
      <div className="relative mt-16 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 p-7 shadow-2xl" data-aos="zoom-in-down">

        <h2 className="text-4xl font-bold font-[Excon] text-center mb-10 text-white" data-aos="fade-down">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Meet Our Team Lead
          </span>
        </h2>

        {/* Profile Image */}
        <div className="w-auto h-auto flex justify-center items-center mx-auto mb-6">
          <Image
            src="/images/individual pics/neha.png"
            alt="Aaron Rohan"
            width={228}
            height={228}
            className="rounded-full object-cover "
          />
        </div>

        {/* Name and Title */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-[Khand] font-bold text-white">Neha S</h1>
          <p className="text-white text-lg font-[Khand] font-medium">Social Media Team Lead</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-8 mt-8">
          <a
            href="https://www.linkedin.com/in/neha-s-4a1944251/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-700 hover:scale-105 duration-300"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://www.instagram.com/goddessoflove_rain/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-700 hover:scale-105 duration-300"
          >
            <FaInstagram size={40} />
          </a>
        </div>

      </div>
      <div className="mt-32 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 py-10 shadow-2xl" data-aos="zoom-in">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-[Excon] text-center mb-10 text-white" data-aos="fade-down">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Meet Our Social Media Team
          </span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2" data-aos="fade-right">
            <Image 
              src="/MediaTeam.png" 
              alt="Group Picture" 
              className="rounded-lg shadow-lg border border-blue-500/20"
              width={640} 
              height={500} // You can adjust the width and height as per your requirement
            />
          </div>

          <div className="md:w-1/2 md:pl-12" data-aos="fade-left">
            <h3 className="text-3xl font-[Khand] font-bold mb-6 text-white">
              Engaging Through Social Media
            </h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed font-[GMVF]">
              Our social media team is the voice of the club, creating engaging content and building meaningful connections. 
              We&apos;re dedicated to showcasing our club&apos;s activities and keeping our community informed and entertained.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div 
                className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300" 
                data-aos="fade-up"
              >
                <div className="text-blue-400 mb-3">
                <FaCamera size={20}/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">Content Creation</h3>
                <p className="text-gray-400 font-[GMVF]">Crafting engaging visual content for all social media platforms.</p>
              </div>

              <div 
                className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300" 
                data-aos="fade-up" 
                data-aos-delay="100"
              >
                <div className="text-purple-400 mb-3">
                <FaBullhorn size={20}/>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">Event Promotion</h3>
                <p className="text-gray-400 font-[GMVF]">Promoting club events and activities across social channels.</p>
              </div>

              <div 
                className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300" 
                data-aos="fade-up" 
                data-aos-delay="200"
              >
                <div className="text-blue-400 mb-3">
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
    <div className="mt-32 z-10 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 p-12 shadow-2xl" data-aos="zoom-out-up">
      <h2 className="text-3xl font-[Excon] font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400" data-aos="fade-up">
        Team Volunteers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Member 1 */}
        <div className="team-card bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center" data-aos="fade-up">
          <Image 
            src="/images/individual pics/biswajit.png" 
            alt="Member 1" 
            className="w-32 h-32 mx-auto rounded-full mb-6 "
            width={128} 
            height={128} 
          />
          <h3 className="text-xl font-semibold mb-4 text-white  font-[Khand]">Biswajit Das</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/guru-swarupa-81a0a8262/" className="social-icon text-gray-500 hover:text-blue-300">
              <FaLinkedin size={24}/>
            </a>
            <a href="https://www.instagram.com/biswajitdaszz/" className="social-icon text-gray-500 hover:text-pink-300">
              <FaInstagram size={24}/>
            </a>
          </div>
        </div>

        {/* Member 2 */}
        <div className="team-card bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center" data-aos="fade-up" data-aos-delay="100">
          <Image 
            src="/images/individual pics/shibashish.png" 
            alt="Member 2" 
            className="w-32 h-32 mx-auto rounded-full mb-6 "
            width={128} 
            height={128} 
          />
          <h3 className="text-xl font-semibold mb-4 text-white font-[Khand]">Shibasish Banerjee</h3>
          <div className="flex justify-center space-x-6">
            <a href="http://www.linkedin.com/in/shibasishbanerjee/" className="social-icon text-gray-500 hover:text-blue-300">
              <FaLinkedin size={24}/>
            </a>
            <a href="https://www.instagram.com/shibufrrr/" className="social-icon text-gray-500 hover:text-pink-300">
              <FaInstagram size={24}/>
            </a>
          </div>
        </div>

        {/* Member 3 */}
        <div className="team-card bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center" data-aos="fade-up" data-aos-delay="200">
          <Image 
            src="/images/individual pics/sakshi.png" 
            alt="Member 3" 
            className="w-32 h-32 mx-auto rounded-full mb-6 "
            width={128} 
            height={128} 
          />
          <h3 className="text-xl font-semibold mb-4 text-white font-[Khand]">Sakshi Verma</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/sakshivermasv/" className="social-icon text-gray-500 hover:text-blue-300">
              <FaLinkedin size={24}/>
            </a>
            <a href="https://www.instagram.com/sakshiii.vermaaa/profilecard/?igsh=MWc5ZmdvdnJ0NWQzbA==" className="social-icon text-gray-500 hover:text-pink-300">
              <FaInstagram size={24}/>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Page;
