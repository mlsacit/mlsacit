"use client";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showMainPage, setShowMainPage] = useState(false); // New state to toggle between pages

  const handleClick = () => {
    // Start the animation
    setIsAnimating(true);
    // After animation ends, show the main page content
    setTimeout(() => {
      setShowMainPage(true); // Set state to show main content after animation
    }, 1000); // Duration should match the CSS animation time
  };

  return (
    <div>
      {/* Conditional Rendering */}
      {showMainPage ? (
        // Main Page Content
        <div className="relative bg-gradient-radial from-[#0052A1] to-[#002863] h-full w-screen">
          <img
            src="/vector.png"
            alt="Background"
            className="absolute top-1/2 left-1/2 w-full h-[80%] object-contain z-0 transform -translate-x-1/2 -translate-y-1/2"
          />
          <div className="relative z-10">
            <Navbar />
            <div className="flex flex-col p-8 items-center text-center justify-center h-full">
              <div className="container mx-auto p-8 text-center text-white">
                {/* Additional content goes here */}
                <h1 className="text-9xl font-bold" style={{ fontFamily: "Karantina" }}>
                  MSC
                </h1>

                <h3 className="text-2xl font-normal relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1/3 before:h-0.5 before:bg-white after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-1/3 after:h-0.5 after:bg-white">
                  BE A FORCE FOR GOOD
                </h3>
                <p className="text-lg h-auto">
                  If you&apos;re looking for random paragraphs, you&apos;ve come to the right place. When a random word or a random sentence isn&apos;t quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple.
                </p>
                <button className="box-border bg-slate-900 text-white py-4 px-12 text-xl rounded-xl my-4">
                  CLICK HERE
                </button>
              </div>
              
            </div>
            <Footer />
          </div>
        </div>
      ) : (
        <div
          className="bg-gradient-radial from-[#0052A1] to-[#002863] h-screen flex flex-col items-center justify-center relative cursor-pointer"
          onClick={handleClick}
        >
          {/* Background Image */}
          <Head>
            <link href="https://fonts.googleapis.com/css2?family=Karantina:wght@400;700&display=swap" rel="stylesheet" />
          </Head>
          <img
            src="/vector.png"
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-contain z-0"
          />
          {/* Initial Page Content (Before Animation) */}
          <div className="mt-10">
            <Image
              src="/msc_logo.png"
              alt="MSC Logo"
              width={500}
              height={500}
              className={`rounded-lg z-20 transition-transform duration-1000 ease-in-out ${isAnimating ? "transform scale-25 translate-y-[-250px]" : ""}`}
              style={isAnimating ? { transform: 'scale(0.2) translateY(-200px)' } : {}} // Adjust translateY for top center
            />
          </div>
        </div>
      )}
    </div>
  );
}
