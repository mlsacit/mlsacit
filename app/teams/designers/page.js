"use client";
import {useEffect} from "react";
import Image from "next/image";
import AOS from "aos";
import { useRouter } from "next/navigation";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { PiGraphLight } from "react-icons/pi";
import { MdPalette } from "react-icons/md";
import "aos/dist/aos.css"

const Page = () => {
  const router = useRouter();

  const handleBackButtonClick = () => {
    console.log("Navigating to /");
    router.back();
  };

  useEffect(() => {
    AOS.init({
      duration:1000,
      once: true,
    });
  },[]);

  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center py-16 px-4 overflow-hidden">
      {/* Background Vector */}
      <div
        className="absolute inset-0 w-full h-full bg-center  max-sm:bg-contain lg:bg-cover z-0"
        style={{ backgroundImage: "url('/Background.svg')" }}
      ></div>

      {/* Back Button */}
      <button
        onClick={handleBackButtonClick}
        className="absolute top-8 left-8 z-10 px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-400 text-black font-semibold rounded-lg shadow-md hover:bg-gray-400 transition-all font-[Excon]" data-aos="fade-down"
      >
        Go Back
      </button>

      <div className="container mx-auto  sm:px-6 md:px-8 mt-16 sm:mt-10 z-10 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 py-5 shadow-2xl" data-aos="flip-left">
        <h2
          className="text-3xl sm:text-4xl font-bold text-center font-[Excon] mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          data-aos="fade-up"
        >
          Our Team Leads
        </h2>

        {/* Profile Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Member 1: Debasis Maharana */}
          <div
            className="relative bg-gray-800/50 backdrop-blur p-8 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 w-full max-w-xs mx-auto"
            data-aos="zoom-out"
          >
            {/* Profile Image */}
            <div className="flex justify-center items-center mx-auto mb-6">
              <Image
                src="/images/individual pics/debasis.png"
                alt="Debasis Maharana"
                width={228}
                height={228}
                className="rounded-full object-cover"
              />
            </div>

            {/* Name and Title */}
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-white font-[Khand]">
                Debasis Maharana
              </h1>
              <p className="text-white text-lg font-medium font-[Khand]">
                Design Team Lead
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center items-center gap-8 mt-8">
              <a
                href="https://www.linkedin.com/in/debasis-maharana07/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-300 hover:scale-105 duration-300"
              >
                <FaLinkedin size={40} />
              </a>
              <a
                href="https://www.instagram.com/__sachin2003__/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-300 hover:scale-105 duration-300"
              >
                <FaInstagram size={40} />
              </a>
            </div>
          </div>

          {/* Member 2: Hadiya Tareen */}
          <div
            className="relative bg-gray-800/50 backdrop-blur p-8 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 w-full max-w-xs mx-auto"
            data-aos="zoom-out"
          >
            {/* Profile Image */}
            <div className="flex justify-center items-center mx-auto mb-6">
              <Image
                src="/images/individual pics/hadiya.png"
                alt="Hadiya Tareen"
                width={228}
                height={228}
                className="rounded-full object-cover"
              />
            </div>

            {/* Name and Title */}
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-white font-[Khand]">
                Hadiya Tareen
              </h1>
              <p className="text-white text-lg font-medium font-[Khand]">
                Design Team Lead
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center items-center gap-8 mt-8">
              <a
                href="http://www.linkedin.com/in/hadiyatareen/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-300 hover:scale-105 duration-300"
              >
                <FaLinkedin size={40} />
              </a>
              <a
                href="https://www.instagram.com/hadiyatareen/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-300 hover:scale-105 duration-300"
              >
                <FaInstagram size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 sm:mt-32 py-6 sm:py-10 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden" data-aos="zoom-in">
        <div className="mx-auto px-4">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-10 text-white"
            data-aos="fade-down"
          >
            <span className="bg-clip-text text-transparent font-[Excon] bg-gradient-to-r from-blue-400 to-purple-400">
              Meet Our Design Team
            </span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-12">
            <div className="md:w-1/2" data-aos="fade-right">
              <Image
                src="/DesignTeam.png"
                alt="Group Picture"
                className="rounded-lg shadow-lg border border-blue-500/20"
                width={640}
                height={500} // You can adjust the width and height as per your requirement
              />
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
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                  data-aos="fade-up"
                >
                  <div className="text-blue-400 mb-3">
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
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
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
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
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
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
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

      <div className="mt-32 z-10 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 p-10 shadow-2xl" data-aos="zoom-out-up">
        <h2
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-[Excon]"
          data-aos="fade-up"
        >
          Team Volunteers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Member 1 */}
          <div
            className="team-card bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center"
            data-aos="fade-up"
          >
            <Image
              src="/images/individual pics/sahithi.png"
              alt="Member 1"
              className="w-32 h-32 mx-auto rounded-full mb-6 "
              width={128}
              height={128}
            />
            <h3 className="text-xl font-semibold mb-4 text-white font-[Khand]">
              Sahithi K
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/sahithi2005/"
                className="social-icon text-gray-500 hover:text-blue-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/sahithiik?igsh=MXJvYXYyZnBsc2NmMg%3D%3D&utm_source=qr"
                className="social-icon text-gray-500 hover:text-pink-300"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Member 2 */}
          <div
            className="team-card bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Image
              src="/images/individual pics/mehika.jpg"
              alt="Member 2"
              className="w-32 h-32 mx-auto rounded-full mb-6 "
              width={128}
              height={128}
            />
            <h3 className="text-xl font-[Khand] font-semibold mb-4 text-white">
              Mehika Varma
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/amehikavarma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="social-icon text-gray-500 hover:text-blue-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/meh_hika/"
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
              src="/images/individual pics/daksha.png"
              alt="Member 3"
              className="w-32 h-32 mx-auto rounded-full mb-6 "
              width={128}
              height={128}
            />
            <h3 className="text-xl font-[Khand] font-semibold mb-4 text-white">
              Daksha K Gowda
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/dakshakgowda/"
                className="social-icon text-gray-500 hover:text-blue-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/the_red_dk"
                className="social-icon text-gray-500 hover:text-pink-300"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
