"use client"
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className=' bg-slate-950 text-white w-full p-8 rounded-md'>
        <div className="container grid grid-cols-2 ">
            <div className="name text-left text-lg text-semibold">
                {/* <img src="/msc_logo.png" alt="" width={50} height={50}/> */}
                <h3 className='text-slate-500'>Microsoft Club</h3>
                <h4 className='text-slate-500'>Cambridge Institute of Technology</h4>
            </div>
            <div className="parts text-right text-lg grid grid-rows-3 text-semibold">
                <Link href="/main" className="text-slate-500 hover:text-white">Events</Link>
                <Link href="/teams" className="text-slate-500 hover:text-white">Team</Link>
                <Link href="/projects" className="text-slate-500 hover:text-white">Projects</Link>
            </div>
        </div>
        <div>
            <h3 className='text-slate-500'>Social Links</h3>
            <div className="flex gap-8">
            <div className="mt-6 text-slate-500 hover:text-white">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-2xl "
              >
                <i className="fab fa-linkedin text-4xl"></i>
              </a>
            </div>
            <div className="mt-6 text-slate-500 hover:text-white">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-2xl "
              >
                <i className="fa-brands fa-instagram text-4xl"></i>
              </a>
            </div>
            </div>
        </div>
      <p className='text-center p-2'>Copyright &copy; 2024, All rights reserved.</p>
    </div>
  )
}

export default Footer
