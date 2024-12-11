"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Page = () => {
  return (
    <div className="relative bg-gradient-radial from-[#0052A1] to-[#002863] h-full ">
      {/* Background Image with Glow Effect */}
      
        <img
          src="/vector.png"
          alt="Background"
          className="absolute top-1/2 left-1/2 w-full h-[80%] object-contain z-0 transform -translate-x-1/2 -translate-y-1/2 "
        />
       
      <div className="relative z-10 p-4">
        <Navbar />
        {/* Centered Image */}
        <div className="flex justify-center items-center py-8">
          <img
          src="/group.png"
          alt="Group Image"
          className="max-w-4xl max-h-lg rounded-xl shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          />
        </div>


        <div className="h-full">
          <div className="container mx-auto p-4 text-white m-2">
            {/* Heading */}
            <h1 className="text-6xl font-bold pt-2 pb-2 text-center text-amber-100" style={{ fontFamily: "Karantina" }}>
              MS club - CIT
            </h1>
            <p className="text-xl text-center" style={{ fontFamily: "revert-layer" }}>
              Our club is a vibrant community of tech enthusiasts, innovators, and learners
              passionate about exploring and mastering cutting-edge technologies. As an official
              Microsoft-supported community, we are committed to fostering creativity,
              collaboration, and skill-building among students.
            </p>

            {/* What We Do Section */}
            <p className="font-bold text-4xl mt-6 text-center">The <span className="text-amber-300">Team</span></p>
            <p className="text-lg text-center">
              Meet the heart of our club, a enthusiastic group of innovators, creators, and leaders who bring their unique talents together to drive our mission forward. Whether it's coding, designing, strategizing, or inspiring, our team is all about collaboration and impact.
            </p>
            <p className="text-lg text-center" style={{ fontFamily: "monospace" }}>
              Meet the team - <Link className="text-red-100 hover:underline" href="https://teams-page-msc.vercel.app/">Team</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Content Grid with Glow Effect on Hover */}
      <div className="grid grid-cols-3 gap-2 m-4 z-10 relative">
        <div className="p-6 text-white bg-white bg-opacity-10 transition-colors duration-700 ease-in-out hover:shadow-[0_0_20px_4px_rgba(0,0,0,0.5)]">
          <h3 className="text-end text-xl p-2 font-bold">GOAL</h3>
          <p className="text-base font-thin">
            To build a strong, connected tech community that not only learns and innovates but excels in using technology as a Force for Good. We aim to empower people to leverage technology to create opportunities, spark change, and drive progress for the greater good.
          </p>
        </div>

        <div className="p-6 text-white bg-white bg-opacity-10 transition-colors duration-700 ease-in-out hover:shadow-[0_0_20px_4px_rgba(0,0,0,0.5)]">
          <h3 className="text-end text-xl p-2 font-bold">MISSION</h3>
          <p className="text-base font-thin">
            MLSA CIT is committed to going beyond textbooks by equipping individuals with the knowledge, skills, and resources to make an impact. We emphasize spreading the latest advancements in technology through hands-on learning opportunities such as workshops, webinars, and events. Empowering individuals to use technology for positive change and fostering collaboration to create meaningful solutions are at the heart of its mission.
          </p>
        </div>

        <div className="p-6 text-white bg-white bg-opacity-10 transition-colors duration-700 ease-in-out hover:shadow-[0_0_20px_4px_rgba(0,0,0,0.5)]">
          <h3 className="text-end text-xl p-2 font-bold">VISION</h3>
          <p className="text-base font-thin">
            At MLSA CIT, the vision is a world where technology is not just a tool, but a force for good—transforming ideas into impactful solutions and empowering individuals to shape a better future. It strives to foster a community that uses innovation to solve challenges and create lasting value.
          </p>
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default Page;
