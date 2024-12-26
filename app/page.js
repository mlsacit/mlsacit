"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";  // Import GSAP for animation
import Navbar from "./components/Navbar";  // Import the Navbar component
import Footer from "./components/Footer";  // Import the Footer component

export default function Home() {
  const logoRef = useRef(null); // Reference for the logo image
  const navbarRef = useRef(null); // Reference for the Navbar container
  const titleRef = useRef(null); // Reference for the title
  const [isMobile, setIsMobile] = useState(false); // State to track if screen is mobile

  // Detect screen size on load and on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 642px)").matches);
    };
    
    handleResize();  // Check screen size on load
    window.addEventListener("resize", handleResize); // Update on resize
    
    return () => window.removeEventListener("resize", handleResize); // Cleanup event listener
  }, []);

  useEffect(() => {
    const animateLogo = () => {
      const logoScale = isMobile ? 0.13 : 0.18;
      const logoPosition = isMobile ? "-40vw" : "0"; // Leftward shift for mobile, centered for desktop
      const logoVerticalShift = isMobile ? "-53vh" : "-51vh"; // Adjust y position based on screen size

      const tl = gsap.timeline();

      // GSAP animation for logo
      tl.to(logoRef.current, {
        scale: logoScale,  // Scale the logo
        x: logoPosition, // Shift horizontally
        y: logoVerticalShift,  // Move upwards
        duration: 0.5,
        delay: 1,
      });

      // GSAP animation for Navbar
      tl.fromTo(
        navbarRef.current.querySelector('.left-nav'),
        { x: 50 },
        { x: 0, opacity: 1, duration: 0.5 },
        "<"
      ).fromTo(
        navbarRef.current.querySelector('.right-nav'),
        { x: -50 },
        { x: 0, opacity: 1, duration: 0.5 },
        "<"
      );

      // GSAP animation for title
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6 },
        "+=0.2"
      );
    };

    animateLogo();
  }, [isMobile]); // Trigger animation when screen size changes

  return (
    <>
      <div className="bg-gradient-to-br from-gray-800 via-blue-700 to-black min-h-screen text-white flex flex-col overflow-hidden">
        <div ref={navbarRef}>
          <Navbar />
        </div>
        
        <div className="flex justify-center items-center flex-grow relative">
          <img
            src="/vector.png"
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-contain z-0"
          />

          <div ref={titleRef} className="mt-10 text-center z-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-wider font-[CB]">
              {isMobile ? (
                <span className="group-hover:hidden">MLSA CLUB CIT</span>
              ) : (
                <span className="group-hover:hidden">Microsoft Learn Student Ambassadors Club CIT</span>
              )}
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
              ref={logoRef}
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




