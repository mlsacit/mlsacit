"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";  // Import GSAP for animation
import Navbar from "./components/Navbar";  // Import the Navbar component
import Footer from "./components/Footer";  // Import the Footer component

export default function Home() {
  const logoRef = useRef(null); // Reference for the logo image
  const navbarRef = useRef(null); // Reference for the Navbar container
  const titleRef = useRef(null); // Reference for the title

  useEffect(() => {
    const dynamicY = window.innerHeight * 0.52;
    // Create a GSAP timeline
    const tl = gsap.timeline();

    // GSAP animation for logo
    tl.to(logoRef.current, {
      scale: 0.18,  // Scale the logo to 18%
      y: "-51vh",  // Move it upwards
      duration: 0.5,  // Duration of the animation
      delay: 1,
    });

    // GSAP animation for Navbar (move left and right navbar)
    tl.fromTo(
      navbarRef.current.querySelector('.left-nav'), // Left navbar
      { x: 50 }, // Initial position (hidden)
      { x: 0, opacity: 1, duration: 0.5 }, // Final position (visible)
      "<"
    ).fromTo(
      navbarRef.current.querySelector('.right-nav'), // Right navbar
      { x: -50 }, // Initial position (hidden)
      { x: 0, opacity: 1, duration: 0.5 }, // Final position (visible)
      "<"
    );

    // GSAP animation for title
    tl.fromTo(
      titleRef.current, // Title reference
      { opacity: 0, y: 50 }, // Initial state
      { opacity: 1, y: 0, duration: 0.6 }, // Final state (visible and moved up)
      "+=0.2" // Start 0.2 seconds after the previous animation
    );
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-gray-800 via-blue-700 to-black min-h-screen text-white flex flex-col overflow-hidden">
        <div ref={navbarRef}>
          <Navbar /> {/* Add the Navbar component here */}
        </div>
        
        {/* Main content container */}
        <div className="flex justify-center items-center flex-grow relative">
          <img
            src="/vector.png"
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-contain z-0"
          />

          <div ref={titleRef} className="mt-10 text-center z-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-wider font-[CB]">
              <span className="group-hover:hidden">Microsoft Learn Student Ambassadors-CIT Club</span>
            </h1>
            <p className="text-xl mt-4 text-center max-w-2xl mx-auto font-[MB]">
              Be a force for good
            </p>
          </div>

          <div className="mt-10 flex absolute justify-center items-center z-10">
            <img
              src="/msc_logo.png"
              alt="MSC Logo"
              width={500}
              height={500}
              ref={logoRef}  // Assign the ref to the logo
            />
          </div>
        </div>
      </div>
      <div className="mt-0 bg-[#080B1D]">
        <Footer />
      </div>
    </>
  );
}
