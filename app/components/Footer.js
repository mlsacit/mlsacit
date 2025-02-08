"use client"
import React from 'react'
import Link from 'next/link'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
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
            </div>
        </div>
        <div>
            <h3 className='text-slate-500'>Social Links</h3>
            <div className="flex gap-8">
            <div className="mt-6 text-slate-500 hover:text-white">
              <a
                href="https://www.linkedin.com/company/microsoft-student-club-citech/"
                
                rel="noopener noreferrer"
                className=" text-2xl "
              >
                <FaLinkedin size={30}/>
              </a>
            </div>
            <div className="mt-6 mb-6 text-slate-500 hover:text-white">
              <a
                href="https://www.instagram.com/msclub_cit?igsh=ajhqcWJoN3VnNGRw"
                
                rel="noopener noreferrer"
                className=" text-2xl "
              >
                <FaInstagram size={30}/>
              </a>
            </div>
            </div>
        </div>
        <div className='w-full h-[2px] bg-slate-400 '></div>
      <p className='text-center p-2'>Copyright &copy; MLSA, Cambridge Institute of Technology.</p>
    </div>
  )
}

export default Footer
