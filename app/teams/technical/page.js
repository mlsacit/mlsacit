"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaInstagram, FaLinkedin, FaArrowLeft } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import Link from "next/link";

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
    <div className="relative min-h-screen w-full flex flex-col items-center py-16 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Image
          src="/images/team_bg/TECH.jpg" // Replace with your dark blue background image path
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
            Technical Team
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-6"></div>
          <p className="text-center text-white/70 text-lg font-[GMVF] max-w-2xl mx-auto">
            Innovating through technology and driving excellence in everything we build
          </p>
        </div>

        {/* Team Leads Section */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white font-[Excon] mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Team Leads
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Member 1 - Sreejith */}
            <div className="group relative" data-aos="zoom-in" data-aos-delay="100">
              
              {/* Glass morphism container */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl transition-all duration-500 hover:border-blue-400/50 hover:shadow-blue-500/20">
                
                {/* Animated border glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-blue-500/20 transition-all duration-500 -z-10 blur-xl"></div>
                
                {/* Profile Image */}
                <div className="relative flex justify-center items-center mx-auto mb-8">
                  <div className="relative">
                    {/* Glow ring */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-50 blur-lg transition-all duration-500"></div>
                    
                    <div className="relative w-48 h-48 rounded-full border-2 border-blue-400/30 group-hover:border-blue-400/60 transition-all duration-500 overflow-hidden">
                      <Image
                        src="/images/individual pics/Sreejith s .jpg"
                        alt="Sreejith"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Name and Title */}
                <div className="text-center mb-6">
                  <h2 className="text-4xl font-bold text-white font-[Khand] mb-3">
                    Sreejith
                  </h2>
                  <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-blue-300 text-sm font-semibold tracking-wide">Team Lead</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-8">
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Game Development", "Backend Engineering", "Creative Prototyping"].map((skill, index) => (
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
                    href="https://www.linkedin.com/in/sreejith-s-b232092a9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/icon relative p-4 bg-white/5 hover:bg-blue-500/20 rounded-xl text-white/70 hover:text-white transition-all duration-300 border border-white/10 hover:border-blue-400/50"
                  >
                    <FaLinkedin size={24} />
                    <div className="absolute inset-0 rounded-xl bg-blue-500/0 group-hover/icon:bg-blue-500/10 blur transition-all duration-300"></div>
                  </Link>
                  <Link
                    href="https://www.instagram.com/sreejith_s_nair/"
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

            {/* Member 2 - Anik Tiwary */}
            <div className="group relative" data-aos="zoom-in" data-aos-delay="200">
              
              {/* Glass morphism container */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl transition-all duration-500 hover:border-purple-400/50 hover:shadow-purple-500/20">
                
                {/* Animated border glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:via-pink-500/20 group-hover:to-purple-500/20 transition-all duration-500 -z-10 blur-xl"></div>
                
                {/* Profile Image */}
                <div className="relative flex justify-center items-center mx-auto mb-8">
                  <div className="relative">
                    {/* Glow ring */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-50 blur-lg transition-all duration-500"></div>
                    
                    <div className="relative w-48 h-48 rounded-full border-2 border-purple-400/30 group-hover:border-purple-400/60 transition-all duration-500 overflow-hidden">
                      <Image
                        src="/images/individual pics/Anik.jpg"
                        alt="Anik Tiwary"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Name and Title */}
                <div className="text-center mb-6">
                  <h2 className="text-4xl font-bold text-white font-[Khand] mb-3">
                    Anik Tiwary
                  </h2>
                  <div className="inline-flex items-center gap-2 px-5 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-400/30">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <span className="text-purple-300 text-sm font-semibold tracking-wide">Team Lead</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-8">
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Full-Stack Development", "System Architecture", "Interface Development"].map((skill, index) => (
                      <span 
                        key={skill} 
                        className="px-4 py-2 bg-white/5 backdrop-blur-sm text-white/80 rounded-lg text-sm font-medium border border-white/10 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300"
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
                    href="https://www.linkedin.com/in/anik-tiwary-4a1161292/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/icon relative p-4 bg-white/5 hover:bg-blue-500/20 rounded-xl text-white/70 hover:text-white transition-all duration-300 border border-white/10 hover:border-blue-400/50"
                  >
                    <FaLinkedin size={24} />
                    <div className="absolute inset-0 rounded-xl bg-blue-500/0 group-hover/icon:bg-blue-500/10 blur transition-all duration-300"></div>
                  </Link>
                  <Link
                    href="https://www.instagram.com/anik_tiwary08/"
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
              Core Team
            </span>
          </h2>
          
          <div className="flex justify-center">
            {/* Member 3 - Sahina Parbin - Compact Card */}
            <div className="group relative max-w-md w-full" data-aos="zoom-in" data-aos-delay="100">
              
              {/* Glass morphism container - Compact */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl transition-all duration-500 hover:border-cyan-400/50 hover:shadow-cyan-500/20">
                
                {/* Animated border glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-cyan-500/20 group-hover:via-blue-500/20 group-hover:to-cyan-500/20 transition-all duration-500 -z-10 blur-xl"></div>
                
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  {/* Profile Image - Smaller */}
                  <div className="relative flex-shrink-0">
                    <div className="relative">
                      {/* Glow ring */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-50 blur-lg transition-all duration-500"></div>
                      
                      <div className="relative w-32 h-32 rounded-full border-2 border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-500 overflow-hidden">
                        <Image
                          src="/images/individual pics/Sahina.jpg"
                          alt="Sahina Parbin"
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
                        Sahina Parbin
                      </h2>
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/20 backdrop-blur-sm rounded-full border border-cyan-400/30">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <span className="text-cyan-300 text-xs font-semibold tracking-wide">Core Team Member</span>
                      </div>
                    </div>

                    {/* Skills - Compact */}
                    <div className="mb-4">
                      <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                        {["Frontend Dev", "UI Design", "ReactJS"].map((skill, index) => (
                          <span 
                            key={skill} 
                            className="px-3 py-1 bg-white/5 backdrop-blur-sm text-white/80 rounded-lg text-xs font-medium border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Social Links - Compact */}
                    <div className="flex justify-center sm:justify-start items-center gap-4">
                      <Link
                        href="https://www.linkedin.com/in/sahinaparbin/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/icon relative p-3 bg-white/5 hover:bg-blue-500/20 rounded-xl text-white/70 hover:text-white transition-all duration-300 border border-white/10 hover:border-blue-400/50"
                      >
                        <FaLinkedin size={20} />
                        <div className="absolute inset-0 rounded-xl bg-blue-500/0 group-hover/icon:bg-blue-500/10 blur transition-all duration-300"></div>
                      </Link>
                      <Link
                        href="https://www.instagram.com/s4hinaura/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/icon relative p-3 bg-white/5 hover:bg-pink-500/20 rounded-xl text-white/70 hover:text-white transition-all duration-300 border border-white/10 hover:border-pink-400/50"
                      >
                        <FaInstagram size={20} />
                        <div className="absolute inset-0 rounded-xl bg-pink-500/0 group-hover/icon:bg-pink-500/10 blur transition-all duration-300"></div>
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
            <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
            
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
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-2xl opacity-0 group-hover/img:opacity-100 blur-xl transition-all duration-500"></div>
                    
                    <div className="relative rounded-2xl overflow-hidden border border-white/20 group-hover/img:border-white/40 transition-all duration-500">
                      <Image 
                        src="/TechTeam.png" 
                        alt="Technical Team" 
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
                    Innovating Through Technology
                  </h3>
                  <p className="text-white/70 mb-10 leading-relaxed font-[GMVF] text-lg">
                    Our technical team is the backbone of the club, driving innovation and excellence through technology. 
                    We&apos;re passionate about creating impactful solutions and sharing knowledge with our community.
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
                          <FaCode size={32}/>
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-2 font-[Khand]">Website Development</h4>
                        <p className="text-white/60 font-[GMVF] text-sm">Crafting seamless digital experiences through modern web technologies.</p>
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
                          <FaCalendarAlt size={32}/>
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-2 font-[Khand]">Backbone of Events</h4>
                        <p className="text-white/60 font-[GMVF] text-sm">Ensuring flawless technical execution of all club events.</p>
                      </div>
                    </div>

                    {/* Feature Card 3 */}
                    <div 
                      className="group/card relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:bg-white/[0.07]" 
                      data-aos="fade-up" 
                      data-aos-delay="300"
                    >
                      <div className="absolute inset-0 rounded-2xl bg-cyan-500/0 group-hover/card:bg-cyan-500/5 transition-all duration-300"></div>
                      <div className="relative">
                        <div className="text-cyan-400 mb-4">
                          <GrWorkshop size={32}/>
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-2 font-[Khand]">Technical Workshops</h4>
                        <p className="text-white/60 font-[GMVF] text-sm">Conducting hands-on sessions on cutting-edge technologies.</p>
                      </div>
                    </div>

                    {/* Feature Card 4 */}
                    <div 
                      className="group/card relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-pink-400/50 transition-all duration-300 hover:bg-white/[0.07]" 
                      data-aos="fade-up" 
                      data-aos-delay="400"
                    >
                      <div className="absolute inset-0 rounded-2xl bg-pink-500/0 group-hover/card:bg-pink-500/5 transition-all duration-300"></div>
                      <div className="relative">
                        <div className="text-pink-400 mb-4">
                          <FaLightbulb size={32}/>
                        </div>
                        <h4 className="text-xl font-semibold text-white mb-2 font-[Khand]">Innovation Hub</h4>
                        <p className="text-white/60 font-[GMVF] text-sm">Fostering creativity and technical innovation within the community.</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;