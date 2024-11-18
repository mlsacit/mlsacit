"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // Trigger animation on mount
  }, []);

  return (
    <div className="ml-12 my-0"> {/* Added left margin to shift the navbar */}
      <div className="h-4"></div> {/* Spacer */}
      <div className="container flex items-center justify-between relative">
        
        {/* Left links */}
        <div className="bg-slate-500 text-white rounded-full w-1/2 p-3 flex items-start justify-start space-x-8 shadow-lg">
          <Link href="/main" className="hover:text-slate-300 hover:scale-110 transition-transform on-duration-1500">HOME</Link>
          <Link href="/about" className="hover:text-slate-300 hover:scale-110 transition-transform on-duration-1500">ABOUT</Link>
          <Link href="/events" className="hover:text-slate-300 hover:scale-110 transition-transform on-duration-1500">EVENTS</Link>
          <Link href="/teams" className="hover:text-slate-300 hover:scale-110 transition-transform on-duration-1500">TEAM</Link>
        </div>

        {/* Center Image */}
        <div className="flex justify-center items-center">
          <Image
            src="/msc_logo.png"
            alt="MSC Logo"
            width={100}
            height={100}
            className={`rounded-sm mx-4 transform transition-transform duration-500 ${animate ? 'scale-105' : 'scale-100'}`}
          />
        </div>

        {/* Right links */}
        <div className="bg-slate-500 text-white rounded-full w-1/2 p-3 flex items-end justify-end space-x-8 shadow-lg">
          <Link href="/login" className="hover:text-slate-300 hover:scale-110 transition-transform on-duration-1500">LOGIN</Link>
          <Link href="/sign-up" className="hover:text-slate-300 hover:scale-110 transition-transform on-duration-1500">SIGN UP</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
