"use client";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    // Start the animation
    setIsAnimating(true);
    // Navigate to the main page after the animation duration
    setTimeout(() => {
      window.location.href = "/main"; // Redirect after animation
    }, 1000); // Match this duration with CSS transition duration
  };

  return (
    
    <div
      className="bg-gradient-radial from-[#0052A1] to-[#002863] h-screen flex flex-col items-center justify-center relative cursor-pointer"
      onClick={handleClick}
    >
      
      <img
        src="/vector.png"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-contain z-0"
      />
      <div className="mt-10"> {/* Margin to create space from the top */}
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
  );
}
