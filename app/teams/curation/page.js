"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { FaInstagram, FaLinkedin, FaBook } from "react-icons/fa";
import { IoDocumentTextSharp, IoArrowBackOutline } from "react-icons/io5";
import { FaBoxArchive } from "react-icons/fa6";
import { MdChecklist } from "react-icons/md";
import { BiSolidBookContent } from "react-icons/bi";
import { useInView } from "react-intersection-observer";

const Page = () => {
  const router = useRouter();
  const handleBackButtonClick = () => router.back();
  const [isHoveredLeads, setIsHoveredLeads] = useState([false, false, false]);
  const [isHoveredMembers, setIsHoveredMembers] = useState([false, false, false]);

  // Intersection observer for animations
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1, // Trigger animation when 10% of the section is visible
    triggerOnce: false, // Allow animation to reverse when scrolling up
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleLeadHover = (index, isHovered) => {
    const newHoverState = [...isHoveredLeads];
    newHoverState[index] = isHovered;
    setIsHoveredLeads(newHoverState);
  };

  const handleMemberHover = (index, isHovered) => {
    const newHoverState = [...isHoveredMembers];
    newHoverState[index] = isHovered;
    setIsHoveredMembers(newHoverState);
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#020084] to-[#000149] flex flex-col items-center py-16 px-4 overflow-hidden">
      {/* Floating curation-themed elements */}
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
            {[<FaBook />, <IoDocumentTextSharp />, <FaBoxArchive />][Math.floor(Math.random() * 3)]}
          </div>
        ))}
      </div> */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => {
          const icons = [
            <FaBook key={`book-${i}`} />,
            <IoDocumentTextSharp key={`document-${i}`} />,
            <FaBoxArchive key={`archive-${i}`} />,
          ];
          return (
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
              {icons[Math.floor(Math.random() * icons.length)]}
            </div>
          );
        })}
      </div>


      {/* Background Vector with enhanced opacity */}
      <div
        className="absolute inset-0 w-full h-full bg-center max-sm:bg-contain lg:bg-cover z-0 opacity-40"
        style={{ backgroundImage: "url('/Background.svg')" }}
      ></div>

      {/* Enhanced Back Button */}
      <button
        onClick={handleBackButtonClick}
        className="absolute top-8 left-8 z-10 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all font-[Excon] flex items-center gap-2"
        data-aos="flip-left"
      >
        <IoArrowBackOutline /> Go Back
      </button>

      {/* Page Title */}
      <div className="relative z-10 mb-12 mt-4" data-aos="fade-down">
        <h1 className="text-5xl font-bold text-center text-white font-[Excon]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Curation Team
          </span>
        </h1>
        <div className="flex items-center justify-center mt-3">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
          <div className="mx-2 text-blue-400">
            <FaBook />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400"></div>
        </div>
      </div>

      {/* Our Team Leads Section - Enhanced */}
      <div
        ref={sectionRef}
        className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-white/10 w-full max-w-6xl transition-all duration-500 mb-16"
        data-aos="fade-up"
      >
        {/* Decorative top bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400"></div>

        <h2
          className="text-3xl font-bold text-center bg-clip-text font-[Excon] text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-12"
          data-aos="fade-up"
        >
          Our Team Leads
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Lead 1 - Enhanced */}
          <div
            className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-xl p-8 text-center border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-blue-500/20 hover:shadow-xl"
            onMouseEnter={() => handleLeadHover(0, true)}
            onMouseLeave={() => handleLeadHover(0, false)}
            data-aos="fade-up"
          >
            {/* Profile Image with glow effect */}
            <div className="relative mb-6">
              <div className={`absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full opacity-70 blur-md transition-opacity duration-300 ${isHoveredLeads[0] ? 'opacity-100' : 'opacity-50'}`}></div>
              <Image
                src="/images/individual pics/subash.png"
                alt="AV Subash"
                width={128}
                height={128}
                className="relative w-32 h-32 mx-auto rounded-full border-2 border-white/20 hover:border-white/40 transition-all duration-300"
              />
            </div>
            <h3 className={`text-2xl font-semibold mb-2 text-white font-[Khand] transition-all duration-300 ${isHoveredLeads[0] ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400' : ''}`}>
              AV Subash
            </h3>
            <p className="text-blue-300 mb-4 text-sm">Curation Team Lead</p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/subash-av-7586792ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-blue-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/su.bash6350/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-pink-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Lead 2 - Enhanced */}
          <div
            className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-xl p-8 text-center border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-purple-500/20 hover:shadow-xl"
            onMouseEnter={() => handleLeadHover(1, true)}
            onMouseLeave={() => handleLeadHover(1, false)}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Profile Image with glow effect */}
            <div className="relative mb-6">
              <div className={`absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full opacity-70 blur-md transition-opacity duration-300 ${isHoveredLeads[1] ? 'opacity-100' : 'opacity-50'}`}></div>
              <Image
                src="/images/individual pics/neha_cur.png"
                alt="Neha Shantagiri"
                width={128}
                height={128}
                className="relative w-32 h-32 mx-auto rounded-full border-2 border-white/20 hover:border-white/40 transition-all duration-300"
              />
            </div>
            <h3 className={`text-2xl font-semibold mb-2 text-white font-[Khand] transition-all duration-300 ${isHoveredLeads[1] ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400' : ''}`}>
              Neha Shantagiri
            </h3>
            <p className="text-purple-300 mb-4 text-sm">Curation Team Lead</p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/neha-shantagiri-11a8b6298/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-blue-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/_neha_2810/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-pink-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Lead 3 - Enhanced */}
          <div
            className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-xl p-8 text-center border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-blue-500/20 hover:shadow-xl"
            onMouseEnter={() => handleLeadHover(2, true)}
            onMouseLeave={() => handleLeadHover(2, false)}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Profile Image with glow effect */}
            <div className="relative mb-6">
              <div className={`absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full opacity-70 blur-md transition-opacity duration-300 ${isHoveredLeads[2] ? 'opacity-100' : 'opacity-50'}`}></div>
              <Image
                src="/images/individual pics/deekshita.png"
                alt="Palleyboina Deekshitha"
                width={128}
                height={128}
                className="relative w-32 h-32 mx-auto rounded-full border-2 border-white/20 hover:border-white/40 transition-all duration-300"
              />
            </div>
            <h3 className={`text-2xl font-semibold mb-2 text-white font-[Khand] transition-all duration-300 ${isHoveredLeads[2] ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400' : ''}`}>
              Palleyboina Deekshitha
            </h3>
            <p className="text-blue-300 mb-4 text-sm">Curation Team Lead</p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/deekshi1124/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-blue-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/deekshi_1124/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-pink-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Curation Team Section - Enhanced */}
      <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-white/10 w-full max-w-6xl transition-all duration-500 mb-16"
        data-aos="flip-right"
      >
        {/* Decorative top bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400"></div>

        <div className="mt-16 sm:mt-32 py-6 sm:py-10 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden" data-aos="flip-right">
          <div className="mx-auto px-4">
            <h2
              className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-10 text-white"
              data-aos="fade-down"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-[Excon]">
                Meet Our Curation Team
              </span>
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <div className="md:w-1/2 relative group" data-aos="fade-right">
                {/* Add glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-lg opacity-0 group-hover:opacity-70 blur-md transition-opacity duration-300"></div>
                <Image
                  src="/CurationTeam.png"
                  alt="Group Picture"
                  className="relative rounded-lg shadow-lg border border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300"
                  width={640}
                  height={500}
                />
              </div>

              <div className="w-full md:w-1/2 md:pl-12" data-aos="fade-left">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white font-[Khand]">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                    Curating Excellence in Content
                  </span>
                </h3>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed font-[GMVF]">
                  Our curation team is dedicated to collecting, organizing, and
                  delivering high-quality content and documentation. We ensure
                  that knowledge is preserved and shared effectively within our
                  community, creating a valuable resource for all members.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div
                    className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-blue-500/20 hover:shadow-lg"
                    data-aos="fade-up"
                  >
                    <div className="text-blue-400 mb-3">
                      <FaBook size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
                      Content Curation
                    </h3>
                    <p className="text-gray-400 font-[GMVF]">
                      Carefully selecting and organizing valuable resources and
                      materials.
                    </p>
                  </div>

                  <div
                    className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-purple-500/20 hover:shadow-lg"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="text-purple-400 mb-3">
                      <IoDocumentTextSharp size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
                      Documentation
                    </h3>
                    <p className="text-gray-400 font-[GMVF]">
                      Creating and maintaining comprehensive documentation for all
                      club activities.
                    </p>
                  </div>

                  <div
                    className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-blue-500/20 hover:shadow-lg"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="text-blue-400 mb-3">
                      <FaBoxArchive size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
                      Knowledge Repository
                    </h3>
                    <p className="text-gray-400 font-[GMVF]">
                      Building and maintaining a centralized knowledge base for
                      the club.
                    </p>
                  </div>

                  <div
                    className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-purple-500/20 hover:shadow-lg"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="text-purple-400 mb-3">
                      <MdChecklist size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
                      Quality Assurance
                    </h3>
                    <p className="text-gray-400 font-[GMVF]">
                      Ensuring accuracy and quality of all curated content and
                      documentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 sm:mt-32 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 p-10 shadow-2xl" data-aos="slide-up">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400"></div>

        <h2
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 font-[CB] bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          Team Members
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Member 1 */}
          <div
            className="team-card bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-xl p-8 text-center border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-blue-500/20 hover:shadow-xl"
            data-aos="fade-up"
          >
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full opacity-0 group-hover:opacity-70 blur-md transition-opacity duration-300"></div>
              <Image
                src="/images/individual pics/natalia.jpg"
                alt="Natalia Mathews"
                className="w-32 h-32 mx-auto rounded-full mb-6 border-2 border-white/20 hover:border-white/40 transition-all duration-300"
                width={128}
                height={128}
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white font-[Khand] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition-all duration-300">
              Natalia Mathews
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/natalia-mathews-b387b32bb/"
                className="p-2 bg-white/5 hover:bg-blue-500/20 rounded-full text-gray-500 hover:text-blue-300 transition-all duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Member 2 */}
          <div
            className="team-card bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-xl p-8 text-center border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-purple-500/20 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full opacity-0 group-hover:opacity-70 blur-md transition-opacity duration-300"></div>
              <Image
                src="/images/individual pics/vidhula.png"
                alt="Vidhula Shree Shankar"
                className="w-32 h-32 mx-auto rounded-full mb-6 border-2 border-white/20 hover:border-white/40 transition-all duration-300"
                width={128}
                height={128}
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white font-[Khand] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition-all duration-300">
              Vidhula Shree Shankar
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/vidhula-shree-shankar-2371062a7/"
                className="p-2 bg-white/5 hover:bg-blue-500/20 rounded-full text-gray-500 hover:text-blue-300 transition-all duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/_vidhhh__/"
                className="p-2 bg-white/5 hover:bg-pink-500/20 rounded-full text-gray-500 hover:text-pink-300 transition-all duration-300"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Member 3 */}
          <div
            className="team-card bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-xl p-8 text-center border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-blue-500/20 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="relative mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full opacity-0 group-hover:opacity-70 blur-md transition-opacity duration-300"></div>
              <Image
                src="/images/individual pics/tejaswini.png"
                alt="Naga Tejaswini Pathipati"
                className="w-32 h-32 mx-auto rounded-full mb-6 border-2 border-white/20 hover:border-white/40 transition-all duration-300"
                width={128}
                height={128}
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white font-[Khand] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition-all duration-300">
              Naga Tejaswini Pathipati
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/tejaswini-p-5b0bb9299/"
                className="p-2 bg-white/5 hover:bg-blue-500/20 rounded-full text-gray-500 hover:text-blue-300 transition-all duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/nagatejaswini.p/profilecard/?igsh=dm42eHZyN28xcG91"
                className="p-2 bg-white/5 hover:bg-pink-500/20 rounded-full text-gray-500 hover:text-pink-300 transition-all duration-300"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating curation-themed elements */}
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
            {[<FaBook />, <IoDocumentTextSharp />, <FaBoxArchive />][Math.floor(Math.random() * 3)]}
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
                <FaBook key={`book-${i}`} />,
                <IoDocumentTextSharp key={`document-${i}`} />,
                <FaBoxArchive key={`archive-${i}`} />,
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
        
        .team-card {
          transition: all 0.3s ease;
        }
        
        .team-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.3);
          border-color: rgba(59, 130, 246, 0.4);
        }
        
        .social-icon {
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          transform: scale(1.2);
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
// import dynamic from "next/dynamic";
// import { useRouter } from "next/navigation";
// import { FaInstagram, FaLinkedin } from "react-icons/fa";
// import { FaBook } from "react-icons/fa";
// import { IoDocumentTextSharp } from "react-icons/io5";
// import { FaBoxArchive } from "react-icons/fa6";
// import { MdChecklist } from "react-icons/md";
// import { useInView } from "react-intersection-observer";

// const Page = () => {
//   const router = useRouter();
//   const handleBackButtonClick = () => router.back();

//   // Intersection observer for animations
//   const { ref: sectionRef, inView: sectionInView } = useInView({
//     threshold: 0.1, // Trigger animation when 10% of the section is visible
//     triggerOnce: false, // Allow animation to reverse when scrolling up
//   });

//   useEffect(() => {
//       AOS.init({
//         duration: 1000,
//         once: true,
//       });
//     }, []);

//   return (
//     <div className="relative min-h-screen w-full bg-gradient-to-b from-[#020084] to-[#000149] flex flex-col items-center py-16 px-4 overflow-hidden">
//       {/* Back Button */}
//       <button
//         onClick={handleBackButtonClick}
//         className="absolute top-8 left-8 z-10 px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-400 text-black font-semibold rounded-lg shadow-md hover:bg-gray-400 transition-all font-[Excon]" data-aos="slide-right"
//       >
//         Go Back
//       </button>

//       <div
//         className="absolute inset-0 w-full h-full bg-center  max-sm:bg-contain lg:bg-cover z-0"
//         style={{ backgroundImage: "url('/Background.svg')" }}
//       ></div>

//       {/* Our Team Leads Section */}
//       <div
//         ref={sectionRef}
//         className={`mt-16 rounded-lg bg-gray-800/30 backdrop-blur-lg border border-white/10 py-10 shadow-2xl max-sm- transition-transform duration-700 ${
//           sectionInView
//             ? "translate-y-0 opacity-100"
//             : "translate-y-10 opacity-0"
//         }`}
//       >
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-12 text-white">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-[CB]">
//               Our Team Leads
//             </span>
//           </h2>

//           {/* Profile Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//             {/* Member 1 */}
//             <div
//               className={`bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center border border-blue-500/20 hover:border-blue-500/40 transition-all duration-700 ${
//                 sectionInView
//                   ? "translate-y-0 opacity-100"
//                   : "translate-y-10 opacity-0"
//               }`}
//             >
//               <Image
//                 src="/images/individual pics/subash.png"
//                 alt="AV Subash"
//                 width={128}
//                 height={128}
//                 className="w-32 h-32 mx-auto rounded-full mb-6 "
//               />
//               <h3 className="text-3xl font-semibold text-white font-[Khand]">
//                 AV Subash
//               </h3>
//               <p className="text-white text-lg font-medium mb-6 font-[Khand]">
//                 Curation Team Lead
//               </p>
//               <div className="flex justify-center space-x-6">
//                 <a
//                   href="https://www.linkedin.com/in/subash-av-7586792ab/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="social-icon text-gray-500 hover:text-blue-300"
//                 >
//                   <FaLinkedin size={24} />
//                 </a>
//                 <a
//                   href="https://www.instagram.com/su.bash6350/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="social-icon text-gray-500 hover:text-pink-300"
//                 >
//                   <FaInstagram size={24} />
//                 </a>
//               </div>
//             </div>

//             {/* Member 2 */}
//             <div
//               className={`bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center border border-blue-500/20 hover:border-blue-500/40 transition-all duration-700 ${
//                 sectionInView
//                   ? "translate-y-0 opacity-100"
//                   : "translate-y-10 opacity-0"
//               }`}
//             >
//               <Image
//                 src="/images/individual pics/neha_cur.png"
//                 alt="Neha Shantagiri"
//                 width={128}
//                 height={128}
//                 className="w-32 h-32 mx-auto rounded-full mb-6 "
//               />
//               <h3 className="text-3xl font-semibold font-[Khand] text-white">
//                 Neha Shantagiri
//               </h3>
//               <p className="text-white font-[Khand] text-lg font-medium mb-6">
//                 Curation Team Lead
//               </p>
//               <div className="flex justify-center space-x-6">
//                 <a
//                   href="https://www.linkedin.com/in/neha-shantagiri-11a8b6298/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="social-icon text-gray-500 hover:text-blue-300"
//                 >
//                   <FaLinkedin size={24} />
//                 </a>
//                 <a
//                   href="https://www.instagram.com/_neha_2810/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="social-icon text-gray-500 hover:text-pink-300"
//                 >
//                   <FaInstagram size={24} />
//                 </a>
//               </div>
//             </div>

//             {/* Member 3 */}
//             <div
//               className={`bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center border border-blue-500/20 hover:border-blue-500/40 transition-all duration-700 ${
//                 sectionInView
//                   ? "translate-y-0 opacity-100"
//                   : "translate-y-10 opacity-0"
//               }`}
//             >
//               <Image
//                 src="/images/individual pics/deekshita.png"
//                 alt="Palleyboina Deekshitha"
//                 width={128}
//                 height={128}
//                 className="w-32 h-32 mx-auto rounded-full mb-6 "
//               />
//               <h3 className="text-3xl font-semibold font-[Khand] text-white">
//                 Palleyboina Deekshitha
//               </h3>
//               <p className="text-white text-lg font-[Khand] font-medium mb-6">
//                 Curation Team Lead
//               </p>
//               <div className="flex justify-center space-x-6">
//                 <a
//                   href="https://www.linkedin.com/in/deekshi1124/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="social-icon text-gray-500 hover:text-blue-300"
//                 >
//                   <FaLinkedin size={24} />
//                 </a>
//                 <a
//                   href="https://www.instagram.com/deekshi_1124/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="social-icon text-gray-500 hover:text-pink-300"
//                 >
//                   <FaInstagram size={24} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <div className="mt-32 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 py-10 shadow-2xl">
//         <div className="container mx-auto px-4">
//           <h2
//             className="text-4xl font-bold text-center mb-10 text-white"
//             data-aos="fade-down"
//           >
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 ">
//               Meet Our Curation Team
//             </span>
//           </h2>
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <div className="md:w-1/2" data-aos="fade-right">
//               <Image
//                 src="/images/team pics/Curation team.png"
//                 alt="Group Picture"
//                 className="rounded-lg shadow-lg border border-blue-500/20"
//                 width={640}
//                 height={500} // You can adjust the width and height as per your requirement
//               />
//             </div>

//             <div className="md:w-1/2 md:pl-12" data-aos="fade-left">
//               <h3 className="text-3xl font-[Khand] font-bold mb-6 text-white">
//                 Curating Excellence in Content
//               </h3>
//               <p className="text-gray-300 mb-4 text-sm leading-relaxed font-[GMVF]">
//                 Our curation team is dedicated to collecting, organizing, and
//                 delivering high-quality content and documentation. We ensure
//                 that knowledge is preserved and shared effectively within our
//                 community.
//               </p>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 <div
//                   className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
//                   data-aos="fade-up"
//                 >
//                   <div className="text-blue-400 mb-3">
//                     <FaBook size={20} />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
//                     Content Curation
//                   </h3>
//                   <p className="text-gray-400 font-[GMVF]">
//                     Carefully selecting and organizing valuable resources and
//                     materials.
//                   </p>
//                 </div>

//                 <div
//                   className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
//                   data-aos="fade-up"
//                   data-aos-delay="100"
//                 >
//                   <div className="text-purple-400 mb-3">
//                     <IoDocumentTextSharp size={20} />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
//                     Documentation
//                   </h3>
//                   <p className="text-gray-400 font-[GMVF]">
//                     Creating and maintaining comprehensive documentation for all
//                     club activities.
//                   </p>
//                 </div>

//                 <div
//                   className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
//                   data-aos="fade-up"
//                   data-aos-delay="200"
//                 >
//                   <div className="text-blue-400 mb-3">
//                     <FaBoxArchive size={20} />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
//                     Knowledge Repository
//                   </h3>
//                   <p className="text-gray-400 font-[GMVF]">
//                     Building and maintaining a centralized knowledge base for
//                     the club.
//                   </p>
//                 </div>

//                 <div
//                   className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
//                   data-aos="fade-up"
//                   data-aos-delay="300"
//                 >
//                   <div className="text-purple-400 mb-3">
//                     <MdChecklist size={20} />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
//                     Quality Assurance
//                   </h3>
//                   <p className="text-gray-400 font-[GMVF]">
//                     Ensuring accuracy and quality of all curated content and
//                     documentation.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> */}
//       <div className="mt-16 sm:mt-32 py-6 sm:py-10 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden" data-aos="flip-right">
//         <div className="mx-auto px-4">
//           <h2
//             className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-10 text-white"
//             data-aos="fade-down"
//           >
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-[Excon]">
//               Meet Our Curation Team
//             </span>
//           </h2>
//           <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
//             <div className="md:w-1/2" data-aos="fade-right">
//               <Image
//                 src="/CurationTeam.png"
//                 alt="Group Picture"
//                 className="rounded-lg shadow-lg border border-blue-500/20"
//                 width={640}
//                 height={500} // You can adjust the width and height as per your requirement
//               />
//             </div>

//             <div className="w-full md:w-1/2 md:pl-12" data-aos="fade-left">
//               <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white font-[Khand]">
//                 Curating Excellence in Content
//               </h3>
//               <p className="text-gray-300 mb-4 text-sm leading-relaxed font-[GMVF]">
//                 Our curation team is dedicated to collecting, organizing, and
//                 delivering high-quality content and documentation. We ensure
//                 that knowledge is preserved and shared effectively within our
//                 community.
//               </p>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//                 <div
//                   className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
//                   data-aos="fade-up"
//                 >
//                   <div className="text-blue-400 mb-3">
//                     <FaBook size={20} />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
//                     Content Curation
//                   </h3>
//                   <p className="text-gray-400 font-[GMVF]">
//                     Carefully selecting and organizing valuable resources and
//                     materials.
//                   </p>
//                 </div>

//                 <div
//                   className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
//                   data-aos="fade-up"
//                   data-aos-delay="100"
//                 >
//                   <div className="text-purple-400 mb-3">
//                     <IoDocumentTextSharp size={20} />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
//                     Documentation
//                   </h3>
//                   <p className="text-gray-400 font-[GMVF]">
//                     Creating and maintaining comprehensive documentation for all
//                     club activities.
//                   </p>
//                 </div>

//                 <div
//                   className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
//                   data-aos="fade-up"
//                   data-aos-delay="200"
//                 >
//                   <div className="text-blue-400 mb-3">
//                     <FaBoxArchive size={20} />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
//                     Knowledge Repository
//                   </h3>
//                   <p className="text-gray-400 font-[GMVF]">
//                     Building and maintaining a centralized knowledge base for
//                     the club.
//                   </p>
//                 </div>

//                 <div
//                   className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
//                   data-aos="fade-up"
//                   data-aos-delay="300"
//                 >
//                   <div className="text-purple-400 mb-3">
//                     <MdChecklist size={20} />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
//                     Quality Assurance
//                   </h3>
//                   <p className="text-gray-400 font-[GMVF]">
//                     Ensuring accuracy and quality of all curated content and
//                     documentation.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-32 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 p-10 shadow-2xl" data-aos="slide-up">
//         <h2
//           className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 font-[CB] bg-clip-text text-transparent "
//           data-aos="fade-up"
//         >
//           Team Members
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           {/* Member 1 */}
//           <div
//             className="team-card bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center"
//             data-aos="fade-up"
//           >
//             <Image
//               src="/images/individual pics/natalia.jpg"
//               alt="Member 1"
//               className="w-32 h-32 mx-auto rounded-full mb-6 "
//               width={128}
//               height={128}
//             />
//             <h3 className="text-xl font-semibold mb-4 text-white font-[Khand]">
//               Natalia Mathews
//             </h3>
//             <div className="flex justify-center space-x-6">
//               <a
//                 href="https://www.linkedin.com/in/natalia-mathews-b387b32bb/"
//                 className="social-icon text-gray-500 hover:text-blue-300"
//               >
//                 <FaLinkedin size={24} />
//               </a>
//               {/* <a href="https://www.instagram.com/acexswaroop/profilecard/?igsh=MWMyeWJtMmViNXlkdw==" className="social-icon text-gray-500 hover:text-pink-300">
//               <FaInstagram size={24}/>
//             </a> */}
//             </div>
//           </div>

//           {/* Member 2 */}
//           <div
//             className="team-card bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center"
//             data-aos="fade-up"
//             data-aos-delay="100"
//           >
//             <Image
//               src="/images/individual pics/vidhula.png"
//               alt="Member 2"
//               className="w-32 h-32 mx-auto rounded-full mb-6 "
//               width={128}
//               height={128}
//             />
//             <h3 className="text-xl font-semibold mb-4 text-white font-[Khand]">
//               Vidhula Shree Shankar
//             </h3>
//             <div className="flex justify-center space-x-6">
//               <a
//                 href="https://www.linkedin.com/in/vidhula-shree-shankar-2371062a7/"
//                 className="social-icon text-gray-500 hover:text-blue-300"
//               >
//                 <FaLinkedin size={24} />
//               </a>
//               <a
//                 href="https://www.instagram.com/_vidhhh__/"
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
//               src="/images/individual pics/tejaswini.png"
//               alt="Member 3"
//               className="w-32 h-32 mx-auto rounded-full mb-6 "
//               width={128}
//               height={128}
//             />
//             <h3 className="text-xl font-semibold mb-4 text-white font-[Khand]">
//               Naga Tejaswini Pathipati
//             </h3>
//             <div className="flex justify-center space-x-6">
//               <a
//                 href="https://www.linkedin.com/in/tejaswini-p-5b0bb9299/"
//                 className="social-icon text-gray-500 hover:text-blue-300"
//               >
//                 <FaLinkedin size={24} />
//               </a>
//               <a
//                 href="https://www.instagram.com/nagatejaswini.p/profilecard/?igsh=dm42eHZyN28xcG91"
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

