"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Page = () => {
  return (
    <div className="relative bg-gradient-radial from-[#0052A1] to-[#002863] h-full">
      <img
        src="/vector.png"
        alt="Background"
        className="absolute top-1/2 left-1/2 w-full h-[80%] object-contain z-0 transform -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative z-10">
        <Navbar />
        <div className="grid grid-cols-3 h-full">
          <div className="col-span-2 container mx-auto p-4 text-white m-2">
            {/* Heading */}
            <h1 className="text-6xl font-bold pt-2 pb-2" style={{ fontFamily: "Karantina" }}>
              MS club - CIT
            </h1>

            {/* About Us Section */}
            <h3 className="text-2xl font-normal pt-2 pb-2">What are we</h3>
            <p className="text-lg h-auto font-semibold pb-2 pt-2">
              Welcome to the Microsoft Club at Cambridge Institute of Technology (CIT)!
            </p>
            <p>
              Our club is a vibrant community of tech enthusiasts, innovators, and learners
              passionate about exploring and mastering cutting-edge technologies. As an official
              Microsoft-supported community, we are committed to fostering creativity,
              collaboration, and skill-building among students.
            </p>

            {/* What We Do Section */}
            <p className="font-bold text-2xl mt-6">What We Do</p>
            <p>
              At Microsoft Club CIT, we strive to bridge the gap between academia and the tech
              industry by providing:
            </p>
            <ul className="list-disc list-inside text-left mt-4">
              <li>
                <span className="font-semibold">Workshops & Bootcamps:</span> Hands-on training in
                technologies like Azure, AI, ML, Web Development, and more.
              </li>
              <li>
                <span className="font-semibold">Hackathons & Challenges:</span> Opportunities to
                showcase your skills and solve real-world problems.
              </li>
              <li>
                <span className="font-semibold">Tech Talks & Seminars:</span> Learn from industry
                experts and Microsoft professionals.
              </li>
              <li>
                <span className="font-semibold">Community Engagement:</span> Collaborate with peers
                and build lifelong connections.
              </li>
            </ul>
          </div>

          {/* Centered Image */}
          <div className="flex justify-center items-center">
            <img src="/group.png" alt="Group Image" className="w-full max-w-sm" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
