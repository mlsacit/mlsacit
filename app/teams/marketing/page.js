"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiSolidBullseye } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa";

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
        className="absolute top-8 left-8 z-10 px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-400 text-black font-semibold rounded-lg shadow-md hover:bg-gray-400 transition-all font-[Excon]"
        data-aos="slide-right"
      >
        Go Back
      </button>

      {/* Background Vector */}
      <div
        className="absolute inset-0 w-full h-full bg-center  max-sm:bg-contain lg:bg-cover z-0"
        style={{ backgroundImage: "url('/Background.svg')" }}
      ></div>

      {/* Profile Section */}
      <div className="relative bg-gray-800/60 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-white/10 max-sm:mt-10" data-aos="slide-down">
        {/* Profile Image */}
        <div className="w-full h-full flex-col justify-center items-center  mb-6 " >
          <h2
            className="text-4xl font-bold text-center mb-10 text-white"
            data-aos="fade-down "
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-[Excon]" data-aos="slide-right">
              Meet Our Lead
            </span>
          </h2>
          <Image
            src="/images/individual pics/bharath.png"
            alt="Bharath Kumar S"
            width={228}
            height={228}
            className=" relative rounded-full object-cover shadow-lg max-sm:ml-5 ml-4"
          />
        </div>

        {/* Name and Title */}
        <div className="text-center mb-6 ">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-[Khand]">
            Bharath Kumar S
          </h1>
          <p className="text-gray-300 text-lg font-medium font-[Khand]">
            Marketing Team Lead
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-8 mt-8">
          <a
            href="https://www.linkedin.com/in/bharathsbk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-700 hover:scale-105 duration-300"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://www.instagram.com/mr.sbk03/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-700 hover:scale-105 duration-300"
          >
            <FaInstagram size={40} />
          </a>
        </div>
      </div>

      <div className="mt-32 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 py-10 shadow-2xl" data-aos="flip-up">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold text-center mb-10 text-white"
            data-aos="fade-down"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-[Excon]">
              Meet Our Marketing Team
            </span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2" data-aos="fade-right">
              <Image
                src="/images/team pics/Marketing Team.png"
                alt="Group Picture"
                className="rounded-lg shadow-lg border border-blue-500/20"
                width={680}
                height={600} // You can adjust the width and height as per your requirement
              />
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
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
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
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="text-purple-400 mb-3">
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
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
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
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="text-purple-400 mb-3">
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
      <div className="mt-32 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 p-10 shadow-2xl z-10" data-aos="zoom-out">
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
              src="/images/individual pics/anarghaya.png"
              alt="Member 1"
              className="w-32 h-32 mx-auto rounded-full mb-6 "
              width={128}
              height={128}
            />
            <h3 className="text-xl font-semibold mb-4 text-white font-[Khand]">
              Anarghya Gunashekaran
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/anarghya-gunashekaran-0a06bb331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="social-icon text-gray-500 hover:text-blue-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/ag25114/profilecard/?igsh=MWt0NTJ3ZHFjcG82eQ=="
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
              src="/images/individual pics/neelakshi.png"
              alt="Member 2"
              className="w-32 h-32 mx-auto rounded-full mb-6 "
              width={128}
              height={128}
            />
            <h3 className="text-xl font-semibold mb-4 text-white font-[Khand]">
              Neelakshi Yemde
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/neelakshi-yemde-3b4743306/"
                className="social-icon text-gray-500 hover:text-blue-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/ny._.neelsy?igsh=MWRhbjZ6endmeDlsMA=="
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
              src="/images/individual pics/tejas.png"
              alt="Member 3"
              className="w-32 h-32 mx-auto rounded-full mb-6 "
              width={128}
              height={128}
            />
            <h3 className="text-xl font-semibold mb-4 text-white font-[Khand]">
              Tejas R Mutalik
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/tejas-r-mutalik-b03214299/"
                className="social-icon text-gray-500 hover:text-blue-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/trm_3113/"
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
