"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Cookies from 'js-cookie';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const authStatus = Cookies.get('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
    setAnimate(true); // Trigger animation on mount
  }, []);

  const handleSignOut = () => {
    Cookies.remove('isAuthenticated');
    Cookies.remove('userEmail');
    setIsAuthenticated(false);
  };

  return (
    <div className="sticky top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex justify-center w-full">
        <div className="w-full px-4">
          {/* Navbar container */}
          <div className="flex items-center justify-between py-4">
            {/* Left links with background image */}
            <div
              className="text-white p-3 flex items-center justify-start space-x-8 shadow-lg w-full sm:w-1/2"
              style={{
                backgroundImage: "url('/c1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
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
                SPEAKERS
              </Link>
              <Link
                href="https://teams-page-msc.vercel.app/"
                className="hover:text-slate-300 hover:underline text-bold hover:scale-110 transition-transform duration-1500"
              >
                TEAM
              </Link>
              <Link
                href="https://teams-page-msc.vercel.app/"
                className="hover:text-slate-300 hover:underline text-bold hover:scale-110 transition-transform duration-1500"
              >
                EVENTS
              </Link>
            </div>

            {/* Center Image */}
            <div className="flex justify-center items-center mx-4">
              <Image
                src="/msc-logo.png"
                alt="MSC Logo"
                width={100}
                height={100}
                className={`rounded-sm transform transition-transform duration-500 hover:scale-110`}
              />
            </div>
            
            {/* Right links */}
            <div className="text-white  p-3 flex items-center justify-end space-x-8 shadow-lg w-full sm:w-1/2"
              style={{
                backgroundImage: "url('/c2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
            {!isAuthenticated ? (
              <div className="flex items-center space-x-8">
              <Link
                href="/login"
                className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500"
              >
                LOGIN
              </Link>
              <Link
                href="/signup"
                className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500"
              >
                SIGN UP
              </Link>
              <Link
                href="/course"
                className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-1500"
              >
                COURSE
              </Link>
            </div>
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
