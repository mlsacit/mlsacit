"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from './components/About';
import Events from "./components/Events";

export default function Home() {
  
  return (
    <div className="min-h-screen w-full relative">
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#020084] to-[#000149] z-0"></div>
      
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/gradient-rectangle.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      
      {/* Background Vector Image */}
      <Image
        src="/Vector up.png"
        alt="vector 1"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 z-0 opacity-60"
      />

      {/* Main Content */}
      <div className=" home relative z-10">
        {/* Navbar */}
        <Navbar />

        {/* Main Page Content */}
        <div className="grid grid-cols-3 w-full h-auto">
          <div className="flex col-span-3 lg:flex-row items-center justify-between w-full px-0 m-0">
            {/* Text Section */}
            <div className="text-white lg:w-1/2 text-center lg:text-left m-2 mb-8 lg:mb-0 px-4">
              <h1 className="font-extrabold text-6xl mb-4">Microsoft Learn</h1>
              <h1 className="font-extrabold text-6xl mb-4 whitespace-nowrap">Student Ambassadors</h1>
              <h2 className="font-extrabold text-4xl text-blue-600">CIT CHAPTER</h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit pariatur porro mollitia, necessitatibus tenetur optio fugiat aut molestiae ea, velit totam dolore quam ratione?
              </p>
            </div>

            {/* Foreground Image */}
            <div className="relative lg:w-1/2 flex justify-center lg:justify-end">
              <Image
                src="/fluids.png"
                alt="MSC Logo"
                width={1000}
                height={1000}
                className="rounded-sm bg-opacity-100 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="relative w-full h-36">
          {/* Background Image */}
          <div className="absolute z-0"> {/* Add margin between images if needed */}
            <Image 
              src="/banner2.png"
              alt="banner"
              width={1920}
              height={36}
              className="w-full"
            />
          </div>

          <div className="absolute z-10">
            <Image
              src="/banner 1.png"
              alt="banner"
              width={1920}
              height={36}
              className="w-full"
            />
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="about w-full scroll-mt-20 text-white">
          <About />
        </div>

        {/* Events Section */}
        {/* <div id="events" className="events w-full scroll-m-20 text-white">
          <Events />
        </div> */}
      </div>
    </div>
  );
}




