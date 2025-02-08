"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Page = () => {
  const router = useRouter();

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
        onClick={() => {
          console.log("Navigating to /");
          router.back();
        }}
        className="absolute top-8 left-8 z-10 px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-400 text-black font-semibold rounded-lg shadow-md hover:bg-gray-400 transition-all font-[Excon]"
        data-aos="fade-left"
      >
        Go Back
      </button>

      {/* Background Vector */}
      <div
        className="absolute inset-0 w-full h-full bg-center  max-sm:bg-contain lg:bg-cover z-0"
        style={{ backgroundImage: "url('/Background.svg')" }}
        data-aos="fade-up"
      ></div>

      {/* Profile Section */}
      <div
        className="relative mt-16 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 p-7 shadow-2xl"
        data-aos="zoom-in"
      >
        <h2
          className="text-4xl font-bold font-[Excon] text-center mb-10 text-white"
          data-aos="fade-down"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Meet Our Vice President
          </span>
        </h2>

        {/* Profile Image */}
        <div
          className="w-auto h-auto flex justify-center items-center mx-auto mb-6"
          data-aos="flip-left"
        >
          <Image
            src="/images/individual pics/aaron.png"
            alt="Vice President Image"
            width={228}
            height={228}
            className="rounded-full object-cover"
          />
        </div>

        {/* Name and Title */}
        <div className="text-center mb-6" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-white font-[Khand]">Aaron Rohan</h1>
          <p className="text-white text-lg font-medium font-[Khand]">Vice-President of the Club</p>
        </div>

        {/* Biography */}
        <div className="mb-6" data-aos="fade-left">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4 font-[Khand]">Biography</h2>
          <p className="text-white leading-7 font-[GMVF]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            metus scelerisque ante sollicitudin commodo. Suspendisse potenti.
            Fusce tristique lorem non massa tristique, vel consequat eros
            viverra. Quisque ut semper nulla. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>

        {/* Contributions */}
        <div className="mb-6" data-aos="fade-right">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4 font-[Khand]">
            Contributions to the Club
          </h2>
          <ul className="list-disc list-inside space-y-3 text-white font-[GMVF]">
            <li>Guided the club to achieve its mission and vision.</li>
            <li>Organized successful events and mentorship programs.</li>
            <li>Supported club members with professional advice.</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-8 mt-8" data-aos="zoom-in-up">
          <a
            href="https://in.linkedin.com/in/aaron31/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-700 hover:scale-105 duration-300"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://www.instagram.com/aaronxrohan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-700 hover:scale-105 duration-300"
          >
            <FaInstagram size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
