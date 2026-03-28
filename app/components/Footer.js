<<<<<<< HEAD
<<<<<<< HEAD
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
                Microsoft Student Ambassadors
              </h1>
              {/* <p className='text-sm font-light text-gray-300'>An ISE dept. Initiative</p> */}
              <p className="text-sm font-light text-gray-300">CIT Chapter</p>
=======
"use client"
import React from 'react'
import Link from 'next/link'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
=======
"use client"
import React from 'react'
import Link from 'next/link'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
    <div className='bg-transparent text-white w-full p-8 rounded-md opacity-85 bg-red-600'>
      <h3 className='text-slate-500 text-xl font-bold'>Microsoft Learn Student Ambassador</h3>
      <div className='w-full h-[2px] bg-slate-400 '></div>
        <div className="container grid grid-cols-2 ">
            <div className="name text-left text-lg text-semibold">
                {/* <img src="/msc_logo.png" alt="" width={50} height={50}/> */}
                
                <h4 className='text-slate-500'>Cambridge Institute of Technology</h4>
            </div>
            <div className="parts text-right text-lg grid grid-rows-3 text-semibold">
                <Link href="/events" className="text-slate-500 hover:text-white">Events</Link>
                <Link href="/"
                className="text-slate-500 hover:text-white">Team</Link>
                {/* <Link href="/projects" className="text-slate-500 hover:text-white">Projects</Link> */}
<<<<<<< HEAD
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
=======
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
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
<<<<<<< HEAD
<<<<<<< HEAD
                <FaLinkedin />
              </a>
=======
=======
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
                <FaLinkedin size={30}/>
              </a>
            </div>
            <div className="mt-6 mb-6 text-slate-500 hover:text-white">
<<<<<<< HEAD
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
=======
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
              <a
                href="https://www.instagram.com/mlsacit"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-pink-700 transition-colors"
                aria-label="Instagram"
              >
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
                <FaInstagram size={30}/>
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
=======
                <FaInstagram size={30}/>
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
              </a>
            </div>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055
        <div className='w-full h-[2px] bg-slate-400 '></div>
      <p className='text-center p-2'>Copyright &copy; MLSA, Cambridge Institute of Technology.</p>
    </div>
  )
}
>>>>>>> 3c51a0aad7112e75bbd6ac9d6f219495ea4cf055

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