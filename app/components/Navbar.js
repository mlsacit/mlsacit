"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Cookies from 'js-cookie';
import { gsap } from "gsap"; // Import GSAP

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const authStatus = Cookies.get('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
    setAnimate(true); // Trigger animation on mount

    // GSAP animation for left and right navbar sections
    // gsap.fromTo(
    //   ".left-nav", // Targeting the left navbar
    //   { x: 50, }, // Initial position (left and hidden)
    //   { x: 0, opacity: 1, duration: 1 } // Final position (centered and visible)
    // );

    // gsap.fromTo(
    //   ".right-nav", // Targeting the right navbar
    //   { x: -50, }, // Initial position (right and hidden)
    //   { x: 0, opacity: 1, duration: 1 } // Final position (centered and visible)
    // );
  }, []);

  const handleSignOut = () => {
    Cookies.remove('isAuthenticated');
    Cookies.remove('userEmail');
    setIsAuthenticated(false);
  };

  return (
    <div className="top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex justify-center w-full">
        <div className="w-full px-4">
          {/* Navbar container */}
          <div className="flex items-center justify-between py-8 gap-28">
            {/* Left links with GSAP animation */}
            <div className="left-nav bg-[#64748b45] bg-opacity-80 text-white rounded-lg p-3 flex items-center justify-start space-x-8 shadow-lg w-full sm:w-1/2">
              <Link
                href="/"
                className="hover:text-slate-300 hover:underline text-bold hover:scale-110 transition-transform duration-1500"
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="hover:text-slate-300 hover:underline text-bold hover:scale-110 transition-transform duration-1500"
              >
                ABOUT
              </Link>
              <Link
                href="/events"
                className="hover:text-slate-300 hover:underline text-bold hover:scale-110 transition-transform duration-1500"
              >
                EVENTS
              </Link>
              <Link
                href="https://teams-page-msc.vercel.app/"
                className="hover:text-slate-300 hover:underline text-bold hover:scale-110 transition-transform duration-1500"
              >
                TEAM
              </Link>
            </div>

            {/* Right links with GSAP animation */}
            <div className="right-nav bg-[#64748b45] text-white rounded-lg p-3 flex items-center justify-end space-x-8 shadow-lg w-full sm:w-1/2">
              {!isAuthenticated ? (
                <>
                  <Link href="/login" className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500">LOGIN</Link>
                  <Link href="/signup" className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500">SIGN UP</Link>
                </>
              ) : (
                <button
                  onClick={handleSignOut}
                  className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500"
                >
                  SIGN OUT
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;




