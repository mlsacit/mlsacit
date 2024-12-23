"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
import aboutPage from './about/page'

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showMainPage, setShowMainPage] = useState(false); // New state to toggle between pages
  const [isHovered, setIsHovered] = useState(false); // State for hover effect

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setShowMainPage(true); 
      }, 1000);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);    //auto animate after a second

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
        
        <div className="min-h-screen w-full relative">
        {/* Background Gradient Layer */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#020084] to-[#000149] z-0" >
  
          {/* Background Image Layer */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
            backgroundImage: "url('/gradient-rectangle.png')", // Add your image URL
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}
          />
        
          {/* Navbar */}
          <Navbar />
  
          {/* Background Vector Image */}
          <Image
            src="/Vector up.png"
            alt="vector 1"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 z-0 opacity-60"
          />
  
          {/* Main Content */}
          <div className="relative z-10 grid gird-col-3 justify-between w-full h-full ">
            <div className="flex col-span-2 lg:flex-row items-center justify-between w-11/12 max-w-7xl px-4 m-auto">
              {/* Text Section */}
              <div className="text-white lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
                <h1 className="font-extrabold text-6xl mb-4">Microsoft Learn</h1>
                <h1 className="font-extrabold text-6xl mb-4 whitespace-nowrap">Student Ambassadors</h1>
                <h2 className="font-extrabold text-4xl text-blue-600">CIT CHAPTER</h2>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit pariatur porro mollitia, necessitatibus tenetur optio fugiat aut molestiae ea, velit totam dolore quam ratione?</p>
              </div>
  
              {/* Foreground Image */}
              <div className="col-span-1 relative lg:w-1/2 flex justify-end lg:justify-end">
                <Image
                  src="/fluids.png"
                  alt="MSC Logo"
                  width={1000}
                  height={1000}
                  className="rounded-sm bg-opacity-100 object-cover right-0"
                />
              </div>
            </div>
          </div>
  
          <div className="about ">
            <h1 >About Miscrosoft Student Club!!</h1>
            <aboutPage/>
          </div>
        </div>
      </div>
      
    </div>
  );
}
