"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Image from "next/image";
<<<<<<< HEAD
import { useRouter } from "next/navigation";
import { FaInstagram, FaLinkedin, FaArrowLeft, FaBook } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaBoxArchive } from "react-icons/fa6";
import { MdChecklist } from "react-icons/md";
import Link from "next/link";

const Page = () => {
  const router = useRouter();

  const handleBackButtonClick = () => {
    console.log("Navigating to /");
    router.back();
  };
=======
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaBoxArchive } from "react-icons/fa6";
import { MdChecklist } from "react-icons/md";
import { useInView } from "react-intersection-observer";

const Page = () => {
  const router = useRouter();
  const handleBackButtonClick = () => router.back();

  // Intersection observer for animations
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1, // Trigger animation when 10% of the section is visible
    triggerOnce: false, // Allow animation to reverse when scrolling up
  });
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055

  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
<<<<<<< HEAD
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center py-16 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Image
          src="/images/team_bg/CURATION.jpg"
          alt="Background"
          fill
          className="object-cover blur-sm brightness-50"
          priority
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
      </div>

      {/* Back Button */}
      <button
        onClick={handleBackButtonClick}
        className="absolute top-6 left-6 z-20 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg shadow-lg backdrop-blur-md border border-white/20 transition-all font-[Excon] flex items-center gap-2" 
        data-aos="fade-down"
      >
        <FaArrowLeft className="text-sm" /> Back
      </button>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        
        {/* Title Section */}
        <div className="mb-20 mt-4" data-aos="fade-down">
          <h1 className="text-5xl md:text-7xl font-bold text-center text-white font-[Excon] mb-4 tracking-tight">
            Curation & Documentation 
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-6"></div>
          <p className="text-center text-white/70 text-lg font-[GMVF] max-w-2xl mx-auto">
            Curating excellence in content and preserving knowledge for our community
          </p>
        </div>

        {/* Team Lead Section */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white font-[Excon] mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Team Lead
            </span>
          </h2>
          
          <div className="flex justify-center max-w-md mx-auto">
            
            {/* Member 1 - Naga Tejaswini P */}
            <div className="group relative w-full" data-aos="zoom-in" data-aos-delay="100">
              
              {/* Glass morphism container */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl transition-all duration-500 hover:border-blue-400/50 hover:shadow-blue-500/20">
                
                {/* Animated border glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-blue-500/20 transition-all duration-500 -z-10 blur-xl"></div>
                
                {/* Profile Image */}
                <div className="relative flex justify-center items-center mx-auto mb-8">
                  <div className="relative">
                    {/* Glow ring */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur-lg transition-all duration-500"></div>
                    
                    <div className="relative w-48 h-48 rounded-full border-2 border-blue-400/30 group-hover:border-blue-400/60 transition-all duration-500 overflow-hidden">
                      <Image
                        src="/images/individual pics/Tejaswini.jpg"
                        alt="Naga Tejaswini P"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Name and Title */}
                <div className="text-center mb-6">
                  <h2 className="text-4xl font-bold text-white font-[Khand] mb-3">
                    Naga Tejaswini P
                  </h2>
                  <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-blue-300 text-sm font-semibold tracking-wide">Team Lead</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-8">
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Content Curation", "Documentation", "Quality Assurance"].map((skill, index) => (
                      <span 
                        key={skill} 
                        className="px-4 py-2 bg-white/5 backdrop-blur-sm text-white/80 rounded-lg text-sm font-medium border border-white/10 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300"
                        data-aos="fade-up"
                        data-aos-delay={100 + index * 50}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>

                {/* Social Links */}
                <div className="flex justify-center items-center gap-6">
                  <Link
                    href="https://www.linkedin.com/in/tejaswini-p-5b0bb9299/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/icon relative p-4 bg-white/5 hover:bg-blue-500/20 rounded-xl text-white/70 hover:text-white transition-all duration-300 border border-white/10 hover:border-blue-400/50"
                  >
                    <FaLinkedin size={24} />
                    <div className="absolute inset-0 rounded-xl bg-blue-500/0 group-hover/icon:bg-blue-500/10 blur transition-all duration-300"></div>
                  </Link>
                  <Link
                    href="https://www.instagram.com/nagatejaswini.p/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/icon relative p-4 bg-white/5 hover:bg-pink-500/20 rounded-xl text-white/70 hover:text-white transition-all duration-300 border border-white/10 hover:border-pink-400/50"
                  >
                    <FaInstagram size={24} />
                    <div className="absolute inset-0 rounded-xl bg-pink-500/0 group-hover/icon:bg-pink-500/10 blur transition-all duration-300"></div>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Core Team Section */}
        <div className="mb-32" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white font-[Excon] mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Core Team
            </span>
          </h2>
          
          <div className="flex justify-center max-w-md mx-auto">
            
            {/* Core Member - Natalia Mathews */}
            <div className="group relative w-full" data-aos="zoom-in" data-aos-delay="100">
              
              {/* Glass morphism container - Compact */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl transition-all duration-500 hover:border-purple-400/50 hover:shadow-purple-500/20">
                
                {/* Animated border glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-purple-500/20 group-hover:via-indigo-500/20 group-hover:to-purple-500/20 transition-all duration-500 -z-10 blur-xl"></div>
                
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  {/* Profile Image - Smaller */}
                  <div className="relative flex-shrink-0">
                    <div className="relative">
                      {/* Glow ring */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-50 blur-lg transition-all duration-500"></div>
                      
                      <div className="relative w-32 h-32 rounded-full border-2 border-purple-400/30 group-hover:border-purple-400/60 transition-all duration-500 overflow-hidden">
                        <Image
                          src="/images/individual pics/natalia.jpg"
                          alt="Natalia Mathews"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center sm:text-left">
                    {/* Name and Title */}
                    <div className="mb-4">
                      <h2 className="text-3xl font-bold text-white font-[Khand] mb-2">
                        Natalia Mathews
                      </h2>
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-400/30">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <span className="text-purple-300 text-xs font-semibold tracking-wide">Core Team Member</span>
                      </div>
                    </div>

                    {/* Skills - Compact */}
                    <div className="mb-4">
                      <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                        {["Research", "Organization", "Archiving"].map((skill, index) => (
                          <span 
                            key={skill} 
                            className="px-3 py-1 bg-white/5 backdrop-blur-sm text-white/80 rounded-lg text-xs font-medium border border-white/10 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Social Links - Compact */}
                    <div className="flex justify-center sm:justify-start items-center gap-4">
                      <Link
                        href="https://www.linkedin.com/in/natalia-mathews-b387b32bb/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/icon relative p-3 bg-white/5 hover:bg-blue-500/20 rounded-xl text-white/70 hover:text-white transition-all duration-300 border border-white/10 hover:border-blue-400/50"
                      >
                        <FaLinkedin size={20} />
                        <div className="absolute inset-0 rounded-xl bg-blue-500/0 group-hover/icon:bg-blue-500/10 blur transition-all duration-300"></div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      
        {/* Team Overview Section */}
        <div className="relative" data-aos="fade-up">
          
          {/* Glass morphism container */}
          <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            
            {/* Top accent line */}
            <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
            
            <div className="p-8 md:p-16">
              
              <h2 className="text-4xl md:text-5xl font-bold font-[Excon] text-center mb-4 text-white" data-aos="fade-down">
                What We Do
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-16"></div>
              
              <div className="flex flex-col lg:flex-row items-center gap-16">
                
                {/* Image Section */}
                <div className="lg:w-1/2" data-aos="fade-right">
                  <div className="relative group/img">
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 rounded-2xl opacity-0 group-hover/img:opacity-100 blur-xl transition-all duration-500"></div>
                    
                    <div className="relative rounded-2xl overflow-hidden border border-white/20 group-hover/img:border-white/40 transition-all duration-500">
                      <Image 
                        src="/CurationTeam.png" 
                        alt="Curation Team" 
                        className="w-full h-auto"
                        width={640} 
                        height={500}
                      />
                    </div>
                  </div>
                </div>
              
                {/* Content Section */}
                <div className="lg:w-1/2" data-aos="fade-left">
                  <h3 className="text-3xl md:text-4xl font-[Khand] font-bold mb-6 text-white">
                    Curating Excellence in Content
                  </h3>
                  <p className="text-white/70 mb-10 leading-relaxed font-[GMVF] text-lg">
                    Our curation team is dedicated to collecting, organizing, and delivering high-quality content and documentation. 
                    We ensure that knowledge is preserved and shared effectively within our community.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Feature Card 1 */}
                    <div 
                      className="group/card relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:bg-white/[0.07]" 
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <div className="absolute inset-0 rounded-2xl bg-blue-500/0 group-hover/card:bg-blue-500/5 transition-all duration-300"></div>
                      <div className="relative">
                        <div className="text-blue-400 mb-4">
                          <FaBook size={32}/>
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-2 font-[Khand]">Content Curation</h4>
                        <p className="text-white/60 font-[GMVF] text-sm">Carefully selecting and organizing valuable resources and materials.</p>
                      </div>
                    </div>

                    {/* Feature Card 2 */}
                    <div 
                      className="group/card relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:bg-white/[0.07]" 
                      data-aos="fade-up" 
                      data-aos-delay="200"
                    >
                      <div className="absolute inset-0 rounded-2xl bg-purple-500/0 group-hover/card:bg-purple-500/5 transition-all duration-300"></div>
                      <div className="relative">
                        <div className="text-purple-400 mb-4">
                          <IoDocumentTextSharp size={32}/>
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-2 font-[Khand]">Documentation</h4>
                        <p className="text-white/60 font-[GMVF] text-sm">Creating and maintaining comprehensive documentation for all activities.</p>
                      </div>
                    </div>

                    {/* Feature Card 3 */}
                    <div 
                      className="group/card relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-indigo-400/50 transition-all duration-300 hover:bg-white/[0.07]" 
                      data-aos="fade-up" 
                      data-aos-delay="300"
                    >
                      <div className="absolute inset-0 rounded-2xl bg-indigo-500/0 group-hover/card:bg-indigo-500/5 transition-all duration-300"></div>
                      <div className="relative">
                        <div className="text-indigo-400 mb-4">
                          <FaBoxArchive size={32}/>
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-2 font-[Khand]">Knowledge Repository</h4>
                        <p className="text-white/60 font-[GMVF] text-sm">Building and maintaining a centralized knowledge base.</p>
                      </div>
                    </div>

                    {/* Feature Card 4 */}
                    <div 
                      className="group/card relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:bg-white/[0.07]" 
                      data-aos="fade-up" 
                      data-aos-delay="400"
                    >
                      <div className="absolute inset-0 rounded-2xl bg-cyan-500/0 group-hover/card:bg-cyan-500/5 transition-all duration-300"></div>
                      <div className="relative">
                        <div className="text-cyan-400 mb-4">
                          <MdChecklist size={32}/>
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-2 font-[Khand]">Quality Assurance</h4>
                        <p className="text-white/60 font-[GMVF] text-sm">Ensuring accuracy and quality of all curated content.</p>
                      </div>
                    </div>
                    
                  </div>
=======
    }, []);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#020084] to-[#000149] flex flex-col items-center py-16 px-4 overflow-hidden">
      {/* Back Button */}
      <button
        onClick={handleBackButtonClick}
        className="absolute top-8 left-8 z-10 px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-400 text-black font-semibold rounded-lg shadow-md hover:bg-gray-400 transition-all font-[Excon]" data-aos="slide-right"
      >
        Go Back
      </button>

      <div
        className="absolute inset-0 w-full h-full bg-center  max-sm:bg-contain lg:bg-cover z-0"
        style={{ backgroundImage: "url('/Background.svg')" }}
      ></div>

      {/* Our Team Leads Section */}
      <div
        ref={sectionRef}
        className={`mt-16 rounded-lg bg-gray-800/30 backdrop-blur-lg border border-white/10 py-10 shadow-2xl max-sm- transition-transform duration-700 ${
          sectionInView
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-[CB]">
              Our Team Leads
            </span>
          </h2>

          {/* Profile Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Member 1 */}
            <div
              className={`bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center border border-blue-500/20 hover:border-blue-500/40 transition-all duration-700 ${
                sectionInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <Image
                src="/images/individual pics/subash.png"
                alt="AV Subash"
                width={128}
                height={128}
                className="w-32 h-32 mx-auto rounded-full mb-6 "
              />
              <h3 className="text-3xl font-semibold text-white font-[Khand]">
                AV Subash
              </h3>
              <p className="text-white text-lg font-medium mb-6 font-[Khand]">
                Curation Team Lead
              </p>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.linkedin.com/in/subash-av-7586792ab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-gray-500 hover:text-blue-300"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://www.instagram.com/su.bash6350/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-gray-500 hover:text-pink-300"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>

            {/* Member 2 */}
            <div
              className={`bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center border border-blue-500/20 hover:border-blue-500/40 transition-all duration-700 ${
                sectionInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <Image
                src="/images/individual pics/neha_cur.png"
                alt="Neha Shantagiri"
                width={128}
                height={128}
                className="w-32 h-32 mx-auto rounded-full mb-6 "
              />
              <h3 className="text-3xl font-semibold font-[Khand] text-white">
                Neha Shantagiri
              </h3>
              <p className="text-white font-[Khand] text-lg font-medium mb-6">
                Curation Team Lead
              </p>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.linkedin.com/in/neha-shantagiri-11a8b6298/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-gray-500 hover:text-blue-300"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://www.instagram.com/_neha_2810/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-gray-500 hover:text-pink-300"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>

            {/* Member 3 */}
            <div
              className={`bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center border border-blue-500/20 hover:border-blue-500/40 transition-all duration-700 ${
                sectionInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <Image
                src="/images/individual pics/deekshita.png"
                alt="Palleyboina Deekshitha"
                width={128}
                height={128}
                className="w-32 h-32 mx-auto rounded-full mb-6 "
              />
              <h3 className="text-3xl font-semibold font-[Khand] text-white">
                Palleyboina Deekshitha
              </h3>
              <p className="text-white text-lg font-[Khand] font-medium mb-6">
                Curation Team Lead
              </p>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.linkedin.com/in/deekshi1124/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-gray-500 hover:text-blue-300"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://www.instagram.com/deekshi_1124/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-gray-500 hover:text-pink-300"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-32 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 py-10 shadow-2xl">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold text-center mb-10 text-white"
            data-aos="fade-down"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 ">
              Meet Our Curation Team
            </span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2" data-aos="fade-right">
              <Image
                src="/images/team pics/Curation team.png"
                alt="Group Picture"
                className="rounded-lg shadow-lg border border-blue-500/20"
                width={640}
                height={500} // You can adjust the width and height as per your requirement
              />
            </div>

            <div className="md:w-1/2 md:pl-12" data-aos="fade-left">
              <h3 className="text-3xl font-[Khand] font-bold mb-6 text-white">
                Curating Excellence in Content
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed font-[GMVF]">
                Our curation team is dedicated to collecting, organizing, and
                delivering high-quality content and documentation. We ensure
                that knowledge is preserved and shared effectively within our
                community.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
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
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
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
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
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
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
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
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
                </div>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
=======
      </div> */}
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
            <div className="md:w-1/2" data-aos="fade-right">
              <Image
                src="/CurationTeam.png"
                alt="Group Picture"
                className="rounded-lg shadow-lg border border-blue-500/20"
                width={640}
                height={500} // You can adjust the width and height as per your requirement
              />
            </div>

            <div className="w-full md:w-1/2 md:pl-12" data-aos="fade-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white font-[Khand]">
                Curating Excellence in Content
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed font-[GMVF]">
                Our curation team is dedicated to collecting, organizing, and
                delivering high-quality content and documentation. We ensure
                that knowledge is preserved and shared effectively within our
                community.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
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
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
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
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
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
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
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

      <div className="mt-32 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 p-10 shadow-2xl" data-aos="slide-up">
        <h2
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 font-[CB] bg-clip-text text-transparent "
          data-aos="fade-up"
        >
          Team Members
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Member 1 */}
          <div
            className="team-card bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center"
            data-aos="fade-up"
          >
            <Image
              src="/images/individual pics/natalia.jpg"
              alt="Member 1"
              className="w-32 h-32 mx-auto rounded-full mb-6 "
              width={128}
              height={128}
            />
            <h3 className="text-xl font-semibold mb-4 text-white font-[Khand]">
              Natalia Mathews
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/natalia-mathews-b387b32bb/"
                className="social-icon text-gray-500 hover:text-blue-300"
              >
                <FaLinkedin size={24} />
              </a>
              {/* <a href="https://www.instagram.com/acexswaroop/profilecard/?igsh=MWMyeWJtMmViNXlkdw==" className="social-icon text-gray-500 hover:text-pink-300">
              <FaInstagram size={24}/>
            </a> */}
            </div>
          </div>

          {/* Member 2 */}
          <div
            className="team-card bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Image
              src="/images/individual pics/vidhula.png"
              alt="Member 2"
              className="w-32 h-32 mx-auto rounded-full mb-6 "
              width={128}
              height={128}
            />
            <h3 className="text-xl font-semibold mb-4 text-white font-[Khand]">
              Vidhula Shree Shankar
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/vidhula-shree-shankar-2371062a7/"
                className="social-icon text-gray-500 hover:text-blue-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/_vidhhh__/"
                className="social-icon text-gray-500 hover:text-pink-300"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Member 3 */}
          <div
            className="team-card bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Image
              src="/images/individual pics/tejaswini.png"
              alt="Member 3"
              className="w-32 h-32 mx-auto rounded-full mb-6 "
              width={128}
              height={128}
            />
            <h3 className="text-xl font-semibold mb-4 text-white font-[Khand]">
              Naga Tejaswini Pathipati
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/tejaswini-p-5b0bb9299/"
                className="social-icon text-gray-500 hover:text-blue-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/nagatejaswini.p/profilecard/?igsh=dm42eHZyN28xcG91"
                className="social-icon text-gray-500 hover:text-pink-300"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Page;
=======
export default Page;
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
