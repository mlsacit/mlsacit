"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
<<<<<<< HEAD
import Cookies from "js-cookie";
import { Link as ScrollLink } from 'react-scroll';
import { gsap } from "gsap";
import Link from 'next/link';
=======
import Image from "next/image";
import Cookies from "js-cookie";
import { Link } from "react-scroll";
import { gsap } from "gsap";
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = React.useRef(null);
  const leftNavRef = React.useRef(null);
  const rightNavRef = React.useRef(null);
<<<<<<< HEAD
  const hamburgerRef = React.useRef(null);

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 500,
      easing: "ease-out",
      once: true,
      mirror: false
    });
  }, []);
=======
  const hamburgerRef = React.useRef(null); 

  useEffect(() => {
      AOS.init({
        offset:120,
        duration: 500,
        easing: "ease-out",
        once: true,
        mirror:false
      });
    }, []);
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055

  useEffect(() => {
    const authStatus = Cookies.get("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);

<<<<<<< HEAD
=======
    // GSAP animation on mount
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
    gsap.fromTo(
      [leftNavRef.current, rightNavRef.current],
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  const handleSignOut = () => {
    Cookies.remove("isAuthenticated");
    Cookies.remove("userEmail");
    setIsAuthenticated(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

<<<<<<< HEAD
    if (!isMenuOpen) {
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, scaleY: 0, transformOrigin: "top" },
        { opacity: 1, scaleY: 1, duration: 0.5, ease: "power3.out" }
      );

=======
    // GSAP animation for the dropdown menu
    if (!isMenuOpen) {
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, scaleY: 0, transformOrigin: "top", ease:"power3.in", duration: 0.5 },
        { opacity: 1, scaleY: 1, duration: 0.5, ease: "power3.out" }
      );

      // GSAP animation for the hamburger icon (3 dashes to cross)
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
      gsap.to(hamburgerRef.current, {
        rotate: 45,
        transformOrigin: "center",
        duration: 0.3,
        ease: "power3.out",
      });

<<<<<<< HEAD
=======
      // Animate the second line to form the cross
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
      gsap.to(hamburgerRef.current.querySelector(".line2"), {
        opacity: 0,
        duration: 0.3,
      });

<<<<<<< HEAD
=======
      // Animate the third line to form the cross
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
      gsap.to(hamburgerRef.current.querySelector(".line3"), {
        rotate: -90,
        y: -11,
        duration: 0.3,
        ease: "power3.out",
      });

<<<<<<< HEAD
=======
      // Make the circle visible
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
      gsap.to(hamburgerRef.current.querySelector(".circle1"), {
        opacity: 1,
        y: -25, x: -6,
        duration: 0.3,
        ease: "power3.out",
      });
    } else {
      gsap.to(dropdownRef.current, {
        opacity: 0,
        scaleY: 0,
        duration: 0.3,
        ease: "power3.in",
      });

<<<<<<< HEAD
=======
      // GSAP animation for the hamburger icon (cross to 3 dashes)
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
      gsap.to(hamburgerRef.current, {
        rotate: 0,
        duration: 0.3,
        ease: "power3.in",
      });

<<<<<<< HEAD
=======
      // Revert the second line opacity to make it visible again
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
      gsap.to(hamburgerRef.current.querySelector(".line2"), {
        opacity: 1,
        duration: 0.3,
      });

<<<<<<< HEAD
=======
      // Revert the third line rotation to its original position
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
      gsap.to(hamburgerRef.current.querySelector(".line3"), {
        rotate: 0,
        y: 0,
        duration: 0.3,
        ease: "power3.in",
      });

<<<<<<< HEAD
=======
      // Make the circle invisible again
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
      gsap.to(hamburgerRef.current.querySelector(".circle1"), {
        opacity: 0,
        duration: 0.3,
      });
    }
  };

  return (
    <div className="top-0 left-0 w-full z-50 bg-transparent">
      {/* Desktop Navbar */}
      <div className="hidden custom:flex justify-center w-full">
        <div className="w-full px-4">
          <div className="flex items-center justify-between py-8 gap-28">
<<<<<<< HEAD
            {/* Left links - darker theme */}
            <div
              ref={leftNavRef}
              className="left-nav bg-[#1e293b99] text-white rounded-lg p-3 flex items-center justify-start space-x-8 shadow-lg border border-[#334155] w-full sm:w-1/2 font-[Technor]"
            >
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="hover:text-blue-400 hover:underline text-bold hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                HOME
              </ScrollLink>
              <ScrollLink
=======
            {/* Left links */}
            <div
              ref={leftNavRef}
              className="left-nav bg-[#64748b45] bg-opacity-80 text-white rounded-lg p-3 flex items-center justify-start space-x-8 shadow-lg w-full sm:w-1/2 font-[Technor]"
            >
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="hover:text-slate-300 hover:underline text-bold hover:scale-110 transition-transform duration-300 "
              >
                HOME
              </Link>
              <Link
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
                to="about"
                smooth={true}
                duration={500}
                offset={-80}
<<<<<<< HEAD
                className="hover:text-blue-400 hover:underline text-bold hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                ABOUT
              </ScrollLink>
              <ScrollLink
=======
                className="hover:text-slate-300 hover:underline text-bold hover:scale-110 transition-transform duration-300"
              >
                ABOUT
              </Link>
              <Link
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
                to="teams"
                smooth={true}
                duration={500}
                offset={-80}
<<<<<<< HEAD
                className="hover:text-blue-400 hover:underline text-bold hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                TEAM
              </ScrollLink>
              <ScrollLink
=======
                className="hover:text-slate-300 hover:underline text-bold hover:scale-110 transition-transform duration-300"
              >
                TEAM
              </Link>
              <Link
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
                to="events"
                smooth={true}
                duration={500}
                offset={-80}
<<<<<<< HEAD
                className="hover:text-blue-400 hover:underline text-bold hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                EVENTS
              </ScrollLink>
            </div>

            {/* Right links - darker theme */}
            <div
              ref={rightNavRef}
              className="right-nav z-50 bg-[#1e293b99] text-white rounded-lg p-3 flex items-center justify-end space-x-8 shadow-lg border border-[#334155] w-full sm:w-1/2 font-[Technor]"
=======
                className="hover:text-slate-300 hover:underline text-bold hover:scale-110 transition-transform duration-300"
              >
                EVENTS
              </Link>
            </div>

            {/* Right links */}
            <div
              ref={rightNavRef}
              className="right-nav bg-[#64748b45] text-white rounded-lg p-3 flex items-center justify-end space-x-8 shadow-lg w-full sm:w-1/2"
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
            >
              {!isAuthenticated ? (
                <div className="flex items-center space-x-8">
                  <Link
                    href="/newsletter"
                    className="hover:text-blue-400 hover:underline text-bold hover:scale-110 transition-transform duration-300"
                  >
                    NEWSLETTER
                  </Link>
                  {/* <Link
                    href="/login"
<<<<<<< HEAD
                    className="hover:text-blue-400 text-bold hover:underline hover:scale-110 transition-transform duration-300"
=======
                    className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-300"
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
                  >
                    LOGIN
                  </Link>
                  <Link
                    href="/signup"
<<<<<<< HEAD
                    className="hover:text-blue-400 text-bold hover:underline hover:scale-110 transition-transform duration-300"
                  >
                    SIGN UP
                  </Link> */}
=======
                    className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-300"
                  >
                    SIGN UP
                  </Link>
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
                </div>
              ) : (
                <button
                  onClick={handleSignOut}
<<<<<<< HEAD
                  className="hover:text-red-400 text-bold hover:scale-110 transition-transform duration-300"
=======
                  className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-300"
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
                >
                  SIGN OUT
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Mobile Navbar - darker theme */}
      <div className="custom:hidden w-full flex items-center justify-between h-20 px-4 py-3 bg-[#1e293b99] border border-[#334155] relative font-[Technor]">
        <button
          className="flex flex-col justify-center items-center space-y-1 focus:outline-none ml-auto"
=======
      {/* Mobile Navbar */}
      <div className="custom:hidden w-full flex items-center justify-between h-20 px-4 py-3 bg-[#64748b45] relative font-[Technor] " >
        <button
          className="flex flex-col justify-center items-center space-y-1 focus:outline-none ml-auto" 
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
          onClick={toggleMenu}
          ref={hamburgerRef}
        >
          <div className="w-6 h-0.5 bg-white line1"></div>
          <div className="w-6 h-0.5 bg-white line2"></div>
          <div className="w-6 h-0.5 bg-white line3"></div>
<<<<<<< HEAD
          <div className="w-1 h-1 rounded opacity-0 bg-white circle1"></div>
        </button>

        {/* Dropdown menu - darker theme */}
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 bg-[#0f172a] backdrop-blur-md text-white rounded-lg shadow-lg mt-2 p-4 flex flex-col space-y-4 z-50 max-sm:ml-3 max-sm:mr-3 border border-[#334155]"
=======
          <div className="w-1 h-1 rounded opacity-0 bg-white circle1"></div> {/* Circle element */}
        </button>

        {/* Dropdown menu */}
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 bg-gradient-to-b from-[#02008400] to-[#00014900] backdrop-blur-md bg-opacity-80 text-white rounded-lg shadow-lg mt-2 p-4 flex flex-col space-y-4 z-50 max-sm:ml-3 max-sm:mr-3  border-[1px] border-[#ffffff56]"
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
          style={{
            display: isMenuOpen ? "flex" : "none",
            flexDirection: "column",
          }}
        >
<<<<<<< HEAD
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-blue-400 text-bold hover:scale-110 transition-transform duration-300 pl-1"
            onClick={() => setIsMenuOpen(false)}
          >
            HOME
          </ScrollLink>
          <ScrollLink
=======
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-slate-500 text-bold hover:scale-110 transition-transform duration-300  pl-1 "
            onClick={() => setIsMenuOpen(false)}
          >
            HOME
          </Link>
          <Link
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
<<<<<<< HEAD
            className="hover:text-blue-400 text-bold hover:scale-110 transition-transform duration-300 pl-1 border-[#334155]"
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT
          </ScrollLink>
          <ScrollLink
=======
            className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-300  pl-1 border-[#ffffff5e]"
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT
          </Link>
          <Link
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
            to="teams"
            smooth={true}
            duration={500}
            offset={-80}
<<<<<<< HEAD
            className="hover:text-blue-400 text-bold hover:scale-110 transition-transform duration-300 pl-1 border-[#334155]"
=======
            className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-300  pl-1 border-[#ffffff5e]"
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
            onClick={() => setIsMenuOpen(false)}
          >
            TEAM
          </ScrollLink>
          <ScrollLink
            to="events"
            smooth={true}
            duration={500}
            offset={-80}
            className="hover:text-blue-400 text-bold hover:scale-110 transition-transform duration-300 pl-1 border-[#334155]"
            onClick={() => setIsMenuOpen(false)}
          >
            EVENTS
          </ScrollLink>
          <Link
            href="/newsletter"
            className="hover:text-blue-400 text-bold hover:scale-110 transition-transform duration-300 pl-1 border-[#334155]"
            onClick={() => setIsMenuOpen(false)}
          >
            NEWSLETTER
          </Link>
          <Link
            to="events"
            smooth={true}
            duration={500}
            offset={-80}
            className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-300  pl-1 border-[#ffffff5e]"
            onClick={() => setIsMenuOpen(false)}
          >
            EVENTS
          </Link>
          {!isAuthenticated ? (
            <>
              {/* <Link
                href="/login"
<<<<<<< HEAD
                className="hover:text-blue-400 text-bold hover:scale-110 transition-transform duration-300 pl-1 border-[#334155]"
=======
                className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-300  pl-1 border-[#ffffff5e]"
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
                onClick={() => setIsMenuOpen(false)}
              >
                LOGIN
              </Link>
              <Link
                href="/signup"
<<<<<<< HEAD
                className="hover:text-blue-400 text-bold hover:scale-110 transition-transform duration-300 pl-1 border-[#334155]"
=======
                className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-300  pl-1 border-[#ffffff5e]"
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
                onClick={() => setIsMenuOpen(false)}
              >
                SIGN UP
              </Link> */}
            </>
          ) : (
            <button
              onClick={() => {
                handleSignOut();
                setIsMenuOpen(false);
              }}
<<<<<<< HEAD
              className="hover:text-red-400 text-bold hover:scale-110 transition-transform duration-300"
=======
              className="hover:text-slate-300 text-bold hover:scale-110 transition-transform duration-300"
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
            >
              SIGN OUT
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
