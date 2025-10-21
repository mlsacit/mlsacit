"use client";
import Image from 'next/image';
import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-8 relative w-full mt-auto border-t border-gray-800">
      <div className="container mx-auto px-2">

        {/* Top section: Logo + Mission Statement */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          {/* Left: Logo and Title */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Image
              src="/msc-logo.png"
              alt="Microsoft Learn Student Ambassador Logo"
              className="h-14 w-auto"
              width={200}
              height={50}
            />
            <div>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Microsoft Learn Student Ambassadors
              </h1>
              {/* <p className='text-sm font-light text-gray-300'>An ISE dept. Initiative</p> */}
              <p className="text-sm font-light text-gray-300">CIT Chapter</p>
            </div>
          </div>
          {/* Right: Tagline */}
          <div className='flex items-center space-x-3 mb-4 md:mb-0'>
            
          <p className="text-center md:text-right text-sm max-w-md text-gray-300 italic">
            &quot;Every new question is a doorway to an amazing discovery; dare to step through.&quot;
          </p>
          <Image
              src="/cit logo.png"
              alt="Microsoft Learn Student Ambassador Logo"
              className="h-14 w-auto "
              width={200}
              height={50} 
            />
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

        {/* Middle section: Contact & Address & Social & Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Contact Us */}
          <div>
            <h2 className="text-lg font-semibold mb-3 text-blue-300">Contact Us</h2>
            <p className="text-sm text-gray-300 flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              msclub@cambridge.edu.in
            </p>
          </div>

          {/* Visit Us */}
          <div>
            <h2 className="text-lg font-semibold mb-3 text-blue-300">Visit Us At</h2>
            <p className="text-sm text-gray-300 mb-1 flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Cambridge Institute of Technology<br />Karnataka, India</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-3 text-blue-300">Quick Links</h2>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/team" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-lg font-semibold mb-3 text-blue-300">Follow Us</h2>
            <div className="flex space-x-4 text-xl">
              <a
                href="https://www.linkedin.com/company/microsoft-student-club-citech/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/mlsacit"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/mlsacit"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-600 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

        {/* Bottom section: Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} MLSA CIT | Designed & Developed by MLSA, CIT TEAM
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;