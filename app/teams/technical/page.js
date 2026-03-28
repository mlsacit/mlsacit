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
    console.log("Navigating back");
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
          src="/images/team_bg/TECH.jpg"
          alt="Background"
          fill
          className="object-cover blur-sm brightness-50"
          priority
        />
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
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl transition-all duration-500 hover:border-blue-400/50 hover:shadow-blue-500/20">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-blue-500/20 transition-all duration-500 -z-10 blur-xl"></div>

                {/* Profile Image */}
                <div className="relative flex justify-center items-center mx-auto mb-8">
                  <div className="relative">
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
                  <h2 className="text-4xl font-bold text-white font-[Khand] mb-3">Sreejith</h2>
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
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl transition-all duration-500 hover:border-purple-400/50 hover:shadow-purple-500/20">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:via-pink-500/20 group-hover:to-purple-500/20 transition-all duration-500 -z-10 blur-xl"></div>

                {/* Profile Image */}
                <div className="relative flex justify-center items-center mx-auto mb-8">
                  <div className="relative">
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
                  <h2 className="text-4xl font-bold text-white font-[Khand] mb-3">Anik Tiwary</h2>
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
      </div>
    </div>
  );
};

export default Page;
