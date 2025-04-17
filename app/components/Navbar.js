"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Cookies from "js-cookie";
import { Link as ScrollLink } from 'react-scroll';
import { gsap } from "gsap";
import Link from 'next/link';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = React.useRef(null);
  const leftNavRef = React.useRef(null);
  const rightNavRef = React.useRef(null);
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

  useEffect(() => {
    const authStatus = Cookies.get("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);

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

    if (!isMenuOpen) {
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, scaleY: 0, transformOrigin: "top" },
        { opacity: 1, scaleY: 1, duration: 0.5, ease: "power3.out" }
      );

      gsap.to(hamburgerRef.current, {
        rotate: 45,
        transformOrigin: "center",
        duration: 0.3,
        ease: "power3.out",
      });

      gsap.to(hamburgerRef.current.querySelector(".line2"), {
        opacity: 0,
        duration: 0.3,
      });

      gsap.to(hamburgerRef.current.querySelector(".line3"), {
        rotate: -90,
        y: -11,
        duration: 0.3,
        ease: "power3.out",
      });

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

      gsap.to(hamburgerRef.current, {
        rotate: 0,
        duration: 0.3,
        ease: "power3.in",
      });

      gsap.to(hamburgerRef.current.querySelector(".line2"), {
        opacity: 1,
        duration: 0.3,
      });

      gsap.to(hamburgerRef.current.querySelector(".line3"), {
        rotate: 0,
        y: 0,
        duration: 0.3,
        ease: "power3.in",
      });

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
                to="about"
                smooth={true}
                duration={500}
                offset={-80}
                className="hover:text-blue-400 hover:underline text-bold hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                ABOUT
              </ScrollLink>
              <ScrollLink
                to="teams"
                smooth={true}
                duration={500}
                offset={-80}
                className="hover:text-blue-400 hover:underline text-bold hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                TEAM
              </ScrollLink>
              <ScrollLink
                to="events"
                smooth={true}
                duration={500}
                offset={-80}
                className="hover:text-blue-400 hover:underline text-bold hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                EVENTS
              </ScrollLink>
            </div>

            {/* Right links - darker theme */}
            <div
              ref={rightNavRef}
              className="right-nav z-50 bg-[#1e293b99] text-white rounded-lg p-3 flex items-center justify-end space-x-8 shadow-lg border border-[#334155] w-full sm:w-1/2 font-[Technor]"
            >
              {!isAuthenticated ? (
                <div className="flex items-center space-x-8">
                  <Link
                    href="/newsletter"
                    className="hover:text-blue-400 hover:underline text-bold hover:scale-110 transition-transform duration-300"
                  >
                    NEWSLETTER
                  </Link>
                  <Link
                    href="/login"
                    className="hover:text-blue-400 text-bold hover:underline hover:scale-110 transition-transform duration-300"
                  >
                    LOGIN
                  </Link>
                  <Link
                    href="/signup"
                    className="hover:text-blue-400 text-bold hover:underline hover:scale-110 transition-transform duration-300"
                  >
                    SIGN UP
                  </Link>
                </div>
              ) : (
                <button
                  onClick={handleSignOut}
                  className="hover:text-red-400 text-bold hover:scale-110 transition-transform duration-300"
                >
                  SIGN OUT
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar - darker theme */}
      <div className="custom:hidden w-full flex items-center justify-between h-20 px-4 py-3 bg-[#1e293b99] border border-[#334155] relative font-[Technor]">
        <button
          className="flex flex-col justify-center items-center space-y-1 focus:outline-none ml-auto"
          onClick={toggleMenu}
          ref={hamburgerRef}
        >
          <div className="w-6 h-0.5 bg-white line1"></div>
          <div className="w-6 h-0.5 bg-white line2"></div>
          <div className="w-6 h-0.5 bg-white line3"></div>
          <div className="w-1 h-1 rounded opacity-0 bg-white circle1"></div>
        </button>

        {/* Dropdown menu - darker theme */}
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 bg-[#0f172a] backdrop-blur-md text-white rounded-lg shadow-lg mt-2 p-4 flex flex-col space-y-4 z-50 max-sm:ml-3 max-sm:mr-3 border border-[#334155]"
          style={{
            display: isMenuOpen ? "flex" : "none",
            flexDirection: "column",
          }}
        >
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
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className="hover:text-blue-400 text-bold hover:scale-110 transition-transform duration-300 pl-1 border-[#334155]"
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT
          </ScrollLink>
          <ScrollLink
            to="teams"
            smooth={true}
            duration={500}
            offset={-80}
            className="hover:text-blue-400 text-bold hover:scale-110 transition-transform duration-300 pl-1 border-[#334155]"
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
          {!isAuthenticated ? (
            <>
              <Link
                href="/login"
                className="hover:text-blue-400 text-bold hover:scale-110 transition-transform duration-300 pl-1 border-[#334155]"
                onClick={() => setIsMenuOpen(false)}
              >
                LOGIN
              </Link>
              <Link
                href="/signup"
                className="hover:text-blue-400 text-bold hover:scale-110 transition-transform duration-300 pl-1 border-[#334155]"
                onClick={() => setIsMenuOpen(false)}
              >
                SIGN UP
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                handleSignOut();
                setIsMenuOpen(false);
              }}
              className="hover:text-red-400 text-bold hover:scale-110 transition-transform duration-300"
            >
              SIGN OUT
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;