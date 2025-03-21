"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaInstagram, FaLinkedin, FaArrowLeft, FaCode, FaCalendarAlt, FaLightbulb, FaGithub } from "react-icons/fa";
import { FaCode as FaCodeSolid } from "react-icons/fa6";
import { GrWorkshop } from "react-icons/gr";
import { IoMdArrowRoundBack } from "react-icons/io";
import { BiCodeAlt, BiChip } from "react-icons/bi";

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
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#020084] to-[#000149] flex flex-col items-center py-16 px-4 overflow-hidden">
      {/* Tech-themed floating elements */}
      {/* <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 10}px`,
              animation: `float ${Math.random() * 20 + 10}s linear infinite`,
              color: ['#4287f5', '#42c5f5', '#4254f5', '#8042f5'][Math.floor(Math.random() * 4)]
            }}
          >
            {[<FaCode />, <BiCodeAlt />, <BiChip />, <FaGithub />][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div> */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 10}px`,
              animation: `float ${Math.random() * 20 + 10}s linear infinite`,
              color: ['#4287f5', '#42c5f5', '#4254f5', '#8042f5'][Math.floor(Math.random() * 4)]
            }}
          >
            {
              [
                <FaCode key={`code-${i}`} />,
                <BiCodeAlt key={`alt-${i}`} />,
                <BiChip key={`chip-${i}`} />,
                <FaGithub key={`github-${i}`} />,
              ][Math.floor(Math.random() * 4)]
            }
          </div>
        ))}
      </div>


      {/* Back Button - Enhanced */}
      <button
        onClick={handleBackButtonClick}
        className="absolute top-8 left-8 z-10 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition-all font-[Excon] flex items-center gap-2"
        data-aos="flip-left"
      >
        <IoMdArrowRoundBack /> Go Back
      </button>

      {/* Background Vector */}
      <div
        className="absolute inset-0 w-full h-full bg-center max-sm:bg-contain lg:bg-cover z-0 opacity-40"
        style={{ backgroundImage: "url('/Background.svg')" }}
      ></div>

      {/* Page Title */}
      <div className="relative z-10 mb-12 mt-4" data-aos="fade-down">
        <h1 className="text-5xl font-bold text-center text-white font-[Excon]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Technical Team
          </span>
        </h1>
        <div className="flex items-center justify-center mt-3">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <div className="mx-2 text-blue-400">
            <FaCodeSolid />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
        </div>
      </div>

      {/* Team Leads Section - Enhanced */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 z-10 max-sm:mt-10 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 shadow-2xl p-8 relative" data-aos="slide-down">
        {/* Decorative top bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>

        <h2
          className="text-3xl font-bold text-center bg-clip-text font-[Excon] text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-12"
          data-aos="fade-up"
        >
          Meet Our Leads
        </h2>

        {/* Profile Section - Enhanced with hover effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" data-aos="zoom-in-up">
          {/* Member 1 - Enhanced */}
          <div className="relative bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-blue-500/20 hover:shadow-xl" data-aos="zoom-in-right">
            {/* Profile Image with glow effect */}
            <div className="relative flex justify-center items-center mx-auto mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full opacity-70 blur-md"></div>
              <div className="relative rounded-full p-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                <Image
                  src="/images/individual pics/rithvik.png"
                  alt="Rithvik"
                  width={228}
                  height={228}
                  className="rounded-full object-cover border-2 border-white/20"
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="text-center mb-6">
              <h1 className="text-4xl font-bold text-white font-[Khand]">
                Rithvik
              </h1>
              <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-blue-300 text-lg font-medium mt-3">
                Technical Team Lead
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <div className="flex flex-wrap justify-center gap-2">
                {["React", "Node.js", "UI/UX"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links - Enhanced */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <a
                href="https://www.linkedin.com/in/rithvik1709/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-blue-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.instagram.com/_._.rithvik17_/ "
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-pink-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </div>

          {/* Member 2 - Enhanced */}
          <div className="relative bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-purple-500/20 hover:shadow-xl" data-aos="zoom-in">
            {/* Profile Image with glow effect */}
            <div className="relative flex justify-center items-center mx-auto mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full opacity-70 blur-md"></div>
              <div className="relative rounded-full p-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20">
                <Image
                  src="/images/individual pics/nikhil.png"
                  alt="Nikhil Kumar"
                  width={228}
                  height={228}
                  className="rounded-full object-cover border-2 border-white/20"
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="text-center mb-6">
              <h1 className="text-4xl font-bold text-white font-[Khand]">
                Nikhil Kumar
              </h1>
              <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-purple-300 text-lg font-medium mt-3">
                Technical Team Lead
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <div className="flex flex-wrap justify-center gap-2">
                {["Python", "ML/AI", "Cloud"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links - Enhanced */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <a
                href="https://www.linkedin.com/in/nikhilinked/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-blue-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.instagram.com/behera_munnu/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-pink-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </div>

          {/* Member 3 - Enhanced */}
          <div className="relative bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-blue-500/20 hover:shadow-xl" data-aos="zoom-in-left">
            {/* Profile Image with glow effect */}
            <div className="relative flex justify-center items-center mx-auto mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full opacity-70 blur-md"></div>
              <div className="relative rounded-full p-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                <Image
                  src="/images/individual pics/jai.png"
                  alt="G Jayaditya"
                  width={228}
                  height={228}
                  className="rounded-full object-cover border-2 border-white/20"
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="text-center mb-6">
              <h1 className="text-4xl font-bold text-white font-[Khand]">
                G Jayaditya
              </h1>
              <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-blue-300 text-lg font-medium mt-3">
                Technical Team Lead
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <div className="flex flex-wrap justify-center gap-2">
                {["Next.js", "Tailwind", "DevOps"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links - Enhanced */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <a
                href="https://www.linkedin.com/in/g-jayaditya/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-blue-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.instagram.com/g.jay_aditya/"
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
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>

        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-10 text-white"
            data-aos="fade-down"
          >
            <span className="bg-clip-text text-transparent font-[Excon] bg-gradient-to-r from-blue-400 to-purple-400">
              Meet Our Technical Team
            </span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-12">
            <div className="md:w-1/2" data-aos="fade-right">
              <Image
                src="/TechTeam.png"
                alt="Group Picture"
                className="rounded-lg shadow-lg border border-blue-500/20"
                width={640}
                height={500} // You can adjust the width and height as per your requirement
              />
            </div>

            <div className="w-full md:w-1/2 md:pl-12" data-aos="fade-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white font-[Khand]">
                Innovating Through Technology
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed font-[GMVF]">
                Our technical team is the backbone of the club, driving
                innovation and excellence through technology. We&apos;re
                passionate about creating impactful solutions and sharing
                knowledge with our community.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:-translate-y-1"
                  data-aos="fade-up"
                >
                  <div className="text-blue-400 mb-3">
                    <FaCode size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
                    Website Development
                  </h3>
                  <p className="text-gray-400 font-[GMVF]">
                    Crafting seamless digital experiences through modern web
                    technologies.
                  </p>
                </div>

                <div
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="text-purple-400 mb-3">
                    <FaCalendarAlt size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
                    Backbone of Events
                  </h3>
                  <p className="text-gray-400 font-[GMVF]">
                    Ensuring flawless technical execution of all club events.
                  </p>
                </div>

                <div
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="text-blue-400 mb-3">
                    <GrWorkshop size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
                    Technical Workshops
                  </h3>
                  <p className="text-gray-400 font-[GMVF]">
                    Conducting hands-on sessions on cutting-edge technologies.
                  </p>
                </div>

                <div
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="text-purple-400 mb-3">
                    <FaLightbulb size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
                    Innovation Hub
                  </h3>
                  <p className="text-gray-400 font-[GMVF]">
                    Fostering creativity and technical innovation within the
                    community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Volunteers Section - Enhanced */}
      <div className="mt-32 z-10 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 shadow-2xl p-12 relative" data-aos="slide-up">
        {/* Decorative top bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>

        <h2
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-[Excon]"
          data-aos="fade-up"
        >
          Team Volunteers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Member 1 - Enhanced */}
          <div
            className="team-card bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-blue-500/20 hover:shadow-xl"
            data-aos="fade-up"
          >
            {/* Profile Image with glow effect */}
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full opacity-70 blur-md"></div>
              <Image
                src="/images/individual pics/guru swarupa.png"
                alt="Member 1"
                className="relative w-32 h-32 mx-auto rounded-full border-2 border-white/20"
                width={128}
                height={128}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white font-[Khand]">
              Guru Swarupa
            </h3>
            <p className="text-blue-300 mb-4 text-sm">Technical Specialist</p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/guru-swarupa-81a0a8262/"
                className="p-2 bg-white/5 hover:bg-blue-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/acexswaroop/profilecard/?igsh=MWMyeWJtMmViNXlkdw=="
                className="p-2 bg-white/5 hover:bg-pink-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Member 2 - Enhanced */}
          <div
            className="team-card bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-purple-500/20 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Profile Image with glow effect */}
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full opacity-70 blur-md"></div>
              <Image
                src="/images/individual pics/chintu.png"
                alt="Member 2"
                className="relative w-32 h-32 mx-auto rounded-full border-2 border-white/20"
                width={128}
                height={128}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white font-[Khand]">
              Chintu Rai
            </h3>
            <p className="text-purple-300 mb-4 text-sm">Web Developer</p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/chinturai/"
                className="p-2 bg-white/5 hover:bg-blue-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/iamchinturai?igsh=YzljYTk1ODg3Zg=="
                className="p-2 bg-white/5 hover:bg-pink-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Member 3 - Enhanced */}
          <div
            className="team-card bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-blue-500/20 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Profile Image with glow effect */}
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full opacity-70 blur-md"></div>
              <Image
                src="/images/individual pics/sreejith.png"
                alt="Member 3"
                className="relative w-32 h-32 mx-auto rounded-full border-2 border-white/20"
                width={128}
                height={128}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white font-[Khand]">
              Sreejith S
            </h3>
            <p className="text-blue-300 mb-4 text-sm">Backend Developer</p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/sreejith-s-b232092a9/"
                className="p-2 bg-white/5 hover:bg-blue-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Member 4 - Enhanced */}
          <div
            className="team-card bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-purple-500/20 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Profile Image with glow effect */}
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full opacity-70 blur-md"></div>
              <Image
                src="/images/individual pics/sahina.png"
                alt="Member 4"
                className="relative w-32 h-32 mx-auto rounded-full border-2 border-white/20"
                width={128}
                height={128}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white font-[Khand]">
              Sahina Parbin
            </h3>
            <p className="text-purple-300 mb-4 text-sm">UI/UX Designer</p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/sahinaparbin/"
                className="p-2 bg-white/5 hover:bg-blue-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/s4hinaura?igsh=YzljYTk1ODg3Zg=="
                className="p-2 bg-white/5 hover:bg-pink-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Member 5 - Enhanced */}
          <div
            className="team-card bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-blue-500/20 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Profile Image with glow effect */}
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full opacity-70 blur-md"></div>
              <Image
                src="/images/individual pics/anik.png"
                alt="Member 5"
                className="relative w-32 h-32 mx-auto rounded-full border-2 border-white/20"
                width={128}
                height={128}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white font-[Khand]">
              Anik Tiwary
            </h3>
            <p className="text-blue-300 mb-4 text-sm">Frontend Developer</p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/anik-tiwary-4a1161292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="p-2 bg-white/5 hover:bg-blue-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/anik_tiwary08/"
                className="p-2 bg-white/5 hover:bg-pink-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Member 6 - Enhanced */}
          <div
            className="team-card bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-purple-500/20 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Profile Image with glow effect */}
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full opacity-70 blur-md"></div>
              <Image
                src="/images/individual pics/arjun.png"
                alt="Member 6"
                className="relative w-32 h-32 mx-auto rounded-full border-2 border-white/20"
                width={128}
                height={128}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white font-[Khand]">
              Arjun Dev
            </h3>
            <p className="text-purple-300 mb-4 text-sm">Backend Developer</p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/arjundev2005/"
                className="p-2 bg-white/5 hover:bg-blue-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Tech-themed floating elements */}
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
            <FaCode />
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
          box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Page;




// "use client";
// import React from "react";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { FaInstagram, FaLinkedin } from "react-icons/fa";
// import { FaCode } from "react-icons/fa6";
// import { FaCalendarAlt } from "react-icons/fa";
// import { GrWorkshop } from "react-icons/gr";
// import { FaLightbulb } from "react-icons/fa";

// const Page = () => {
//   const router = useRouter();

//   const handleBackButtonClick = () => {
//     console.log("Navigating to /");
//     router.back();
//   };

//   useEffect(() => {
//         AOS.init({
//           duration: 1000,
//           once: true,
//         });
//   }, []);

//   return (
//     <div className="relative min-h-screen w-full bg-gradient-to-b from-[#020084] to-[#000149] flex flex-col items-center py-16 px-4 overflow-hidden">
//       {/* Back Button */}
//       <button
//         onClick={handleBackButtonClick}
//         className="absolute top-8 left-8 z-10 px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-400 text-black  rounded-lg shadow-md hover:bg-gray-400 transition-all font-[Excon]" data-aos="flip-left"
//       >
//         Go Back
//       </button>

//       {/* Background Vector */}
//       <div
//         className="absolute inset-0 w-full h-full bg-center  max-sm:bg-contain lg:bg-cover z-0"
//         style={{ backgroundImage: "url('/Background.svg')" }}
//       ></div>

//       <div className="container mx-auto px-4 sm:px-6 md:px-8 z-10 max-sm:mt-10 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 shadow-2xl p-4" data-aos="slide-down">
//         <h2
//           className="text-3xl font-bold text-center bg-clip-text font-[Excon] text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-12"
//           data-aos="fade-up"
//         >
//           Meet Our Leads
//         </h2>

//         {/* Profile Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" data-aos="zoom-in-up">
//           {/* Member 1 */}
//           <div className="relative bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center shadow-lg border-2 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300" data-aos="zoom-in-right">
//             {/* Profile Image */}
//             <div className="flex justify-center items-center mx-auto mb-6">
//               <Image
//                 src="/images/individual pics/rithvik.png"
//                 alt="Rithvik"
//                 width={228}
//                 height={228}
//                 className="rounded-full object-cover"
//               />
//             </div>

//             {/* Name and Title */}
//             <div className="text-center mb-6">
//               <h1 className="text-4xl font-bold text-white font-[Khand]">
//                 Rithvik
//               </h1>
//               <p className="text-white text-lg font-medium font-[Khand]">
//                 Technical Team Lead
//               </p>
//             </div>

//             {/* Social Links */}
//             <div className="flex justify-center items-center gap-8 mt-8">
//               <a
//                 href="https://www.linkedin.com/in/rithvik1709/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-500 hover:text-blue-700 hover:scale-105 duration-300"
//               >
//                 <FaLinkedin size={40} />
//               </a>
//               <a
//                 href="https://www.instagram.com/_._.rithvik17_/ "
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-500 hover:text-pink-700 hover:scale-105 duration-300"
//               >
//                 <FaInstagram size={40} />
//               </a>
//             </div>
//           </div>

//           {/* Member 2 */}
//           <div className="relative bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center shadow-lg border-2 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300" data-aos="zoom-in">
//             {/* Profile Image */}
//             <div className="flex justify-center items-center mx-auto mb-6">
//               <Image
//                 src="/images/individual pics/nikhil.png"
//                 alt="Nikhil Kumar"
//                 width={228}
//                 height={228}
//                 className="rounded-full object-cover"
//               />
//             </div>

//             {/* Name and Title */}
//             <div className="text-center mb-6">
//               <h1 className="text-4xl font-bold text-white font-[Khand]">
//                 Nikhil Kumar
//               </h1>
//               <p className="text-white text-lg font-medium font-[Khand]">
//                 Technical Team Lead
//               </p>
//             </div>

//             {/* Social Links */}
//             <div className="flex justify-center items-center gap-8 mt-8">
//               <a
//                 href="https://www.linkedin.com/in/nikhilinked/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-500 hover:text-blue-700 hover:scale-105 duration-300"
//               >
//                 <FaLinkedin size={40} />
//               </a>
//               <a
//                 href="https://www.instagram.com/behera_munnu/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-500 hover:text-pink-700 hover:scale-105 duration-300"
//               >
//                 <FaInstagram size={40} />
//               </a>
//             </div>
//           </div>

//           {/* Member 3 */}
//           <div className="relative bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center shadow-lg border-2 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300" data-aos="zoom-in-left">
//             {/* Profile Image */}
//             <div className="flex justify-center items-center mx-auto mb-6">
//               <Image
//                 src="/images/individual pics/jai.png"
//                 alt="G Jayaditya"
//                 width={228}
//                 height={228}
//                 className="rounded-full object-cover"
//               />
//             </div>

//             {/* Name and Title */}
//             <div className="text-center mb-6">
//               <h1 className="text-4xl font-bold text-white font-[Khand]">
//                 G Jayaditya
//               </h1>
//               <p className="text-white text-lg font-medium font-[Khand]">
//                 Technical Team Lead
//               </p>
//             </div>

//             {/* Social Links */}
//             <div className="flex justify-center items-center gap-8 mt-8">
//               <a
//                 href="https://www.linkedin.com/in/g-jayaditya/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-500 hover:text-blue-700 hover:scale-105 duration-300"
//               >
//                 <FaLinkedin size={40} />
//               </a>
//               <a
//                 href="https://www.instagram.com/g.jay_aditya/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-500 hover:text-pink-700 hover:scale-105 duration-300"
//               >
//                 <FaInstagram size={40} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-16 sm:mt-32 py-6 sm:py-10 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden" data-aos="flip-right">
//         <div className="mx-auto px-4 sm:px-6 lg:px-8">
//           <h2
//             className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-10 text-white"
//             data-aos="fade-down"
//           >
//             <span className="bg-clip-text text-transparent font-[Excon] bg-gradient-to-r from-blue-400 to-purple-400">
//               Meet Our Technical Team
//             </span>
//           </h2>
//           <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-12">
//             <div className="md:w-1/2" data-aos="fade-right">
//             <Image 
//               src="/TechTeam.png" 
//               alt="Group Picture" 
//               className="rounded-lg shadow-lg border border-blue-500/20"
//               width={640} 
//               height={500} // You can adjust the width and height as per your requirement
//             />
//             </div>

//             <div className="w-full md:w-1/2 md:pl-12" data-aos="fade-left">
//               <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white font-[Khand]">
//                 Innovating Through Technology
//               </h3>
//               <p className="text-gray-300 mb-4 text-sm leading-relaxed font-[GMVF]">
//                 Our technical team is the backbone of the club, driving
//                 innovation and excellence through technology. We&apos;re
//                 passionate about creating impactful solutions and sharing
//                 knowledge with our community.
//               </p>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//                 <div
//                   className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
//                   data-aos="fade-up"
//                 >
//                   <div className="text-blue-400 mb-3">
//                     <FaCode size={20} />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
//                     Website Development
//                   </h3>
//                   <p className="text-gray-400 font-[GMVF]">
//                     Crafting seamless digital experiences through modern web
//                     technologies.
//                   </p>
//                 </div>

//                 <div
//                   className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
//                   data-aos="fade-up"
//                   data-aos-delay="100"
//                 >
//                   <div className="text-purple-400 mb-3">
//                     <FaCalendarAlt size={20} />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
//                     Backbone of Events
//                   </h3>
//                   <p className="text-gray-400 font-[GMVF]">
//                     Ensuring flawless technical execution of all club events.
//                   </p>
//                 </div>

//                 <div
//                   className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
//                   data-aos="fade-up"
//                   data-aos-delay="200"
//                 >
//                   <div className="text-blue-400 mb-3">
//                     <GrWorkshop size={20} />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
//                     Technical Workshops
//                   </h3>
//                   <p className="text-gray-400 font-[GMVF]">
//                     Conducting hands-on sessions on cutting-edge technologies.
//                   </p>
//                 </div>

//                 <div
//                   className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
//                   data-aos="fade-up"
//                   data-aos-delay="300"
//                 >
//                   <div className="text-purple-400 mb-3">
//                     <FaLightbulb size={20} />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
//                     Innovation Hub
//                   </h3>
//                   <p className="text-gray-400 font-[GMVF]">
//                     Fostering creativity and technical innovation within the
//                     community.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-32 z-10 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10  shadow-2xl p-12" data-aos="slide-up">
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
//               src="/images/individual pics/guru swarupa.png"
//               alt="Member 1"
//               className="w-32 h-32 mx-auto rounded-full mb-6 "
//               width={128}
//               height={128}
//             />
//             <h3 className="text-xl font-semibold mb-4 text-white font-[Khand]">
//               Guru Swarupa
//             </h3>
//             <div className="flex justify-center space-x-6">
//               <a
//                 href="https://www.linkedin.com/in/guru-swarupa-81a0a8262/"
//                 className="social-icon text-gray-500 hover:text-blue-300"
//               >
//                 <FaLinkedin size={24} />
//               </a>
//               <a
//                 href="https://www.instagram.com/acexswaroop/profilecard/?igsh=MWMyeWJtMmViNXlkdw=="
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
//               src="/images/individual pics/chintu.png"
//               alt="Member 2"
//               className="w-32 h-32 mx-auto rounded-full mb-6 "
//               width={128}
//               height={128}
//             />
//             <h3 className="text-xl font-semibold mb-4 text-white font-[Khand]">
//               Chintu Rai
//             </h3>
//             <div className="flex justify-center space-x-6">
//               <a
//                 href="https://www.linkedin.com/in/chinturai/"
//                 className="social-icon text-gray-500 hover:text-blue-300"
//               >
//                 <FaLinkedin size={24} />
//               </a>
//               <a
//                 href="https://www.instagram.com/iamchinturai?igsh=YzljYTk1ODg3Zg=="
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
//               src="/images/individual pics/sreejith.png"
//               alt="Member 3"
//               className="w-32 h-32 mx-auto rounded-full mb-6 "
//               width={128}
//               height={128}
//             />
//             <h3 className="text-xl font-semibold mb-4 text-white font-[Khand]">
//               Sreejith S
//             </h3>
//             <div className="flex justify-center space-x-6">
//               <a
//                 href="https://www.linkedin.com/in/sreejith-s-b232092a9/"
//                 className="social-icon text-gray-500 hover:text-blue-300"
//               >
//                 <FaLinkedin size={24} />
//               </a>
//               {/* <a href="https://www.instagram.com/sakshiii.vermaaa/profilecard/?igsh=MWc5ZmdvdnJ0NWQzbA==" className="social-icon text-gray-500 hover:text-pink-300">
//               <FaInstagram size={24}/>
//             </a> */}
//             </div>
//           </div>

//           {/* Member 4 */}
//           <div
//             className="team-card bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center"
//             data-aos="fade-up"
//             data-aos-delay="100"
//           >
//             <Image
//               src="/images/individual pics/sahina.png"
//               alt="Member 2"
//               className="w-32 h-32 mx-auto rounded-full mb-6 "
//               width={128}
//               height={128}
//             />
//             <h3 className="text-xl font-semibold mb-4 text-white font-[Khand]">
//               Sahina Parbin
//             </h3>
//             <div className="flex justify-center space-x-6">
//               <a
//                 href="https://www.linkedin.com/in/sahinaparbin/"
//                 className="social-icon text-gray-500 hover:text-blue-300"
//               >
//                 <FaLinkedin size={24} />
//               </a>
//               <a
//                 href="https://www.instagram.com/s4hinaura?igsh=YzljYTk1ODg3Zg=="
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
//               src="/images/individual pics/anik.png"
//               alt="Member 2"
//               className="w-32 h-32 mx-auto rounded-full mb-6 "
//               width={128}
//               height={128}
//             />
//             <h3 className="text-xl font-semibold mb-4 text-white font-[Khand]">
//               Anik Tiwary
//             </h3>
//             <div className="flex justify-center space-x-6">
//               <a
//                 href="https://www.linkedin.com/in/anik-tiwary-4a1161292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
//                 className="social-icon text-gray-500 hover:text-blue-300"
//               >
//                 <FaLinkedin size={24} />
//               </a>
//               <a
//                 href="https://www.instagram.com/anik_tiwary08/"
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
//               src="/images/individual pics/arjun.png"
//               alt="Member 2"
//               className="w-32 h-32 mx-auto rounded-full mb-6 "
//               width={128}
//               height={128}
//             />
//             <h3 className="text-xl font-semibold mb-4 text-white font-[Khand]">
//               Arjun Dev
//             </h3>
//             <div className="flex justify-center space-x-6">
//               <a
//                 href="https://www.linkedin.com/in/arjundev2005/"
//                 className="social-icon text-gray-500 hover:text-blue-300"
//               >
//                 <FaLinkedin size={24} />
//               </a>
//               {/* <a href="https://www.instagram.com/iamchinturai?igsh=YzljYTk1ODg3Zg==" className="social-icon text-gray-500 hover:text-pink-300">
//               <FaInstagram size={24}/>
//             </a> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
