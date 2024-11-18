"use client"
import React from 'react';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import Footer from '../components/Footer';

const Page = () => {

  return (
    <div className='relative bg-gradient-radial from-[#0052A1] to-[#002863] h-full'>
      {/* Background Image */}
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Karantina:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <img
        src="/vector.png" 
        alt="Background"
        className="absolute top-1/2 left-1/2 w-full h-[80%] object-contain z-0 transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Navbar and other components */}
      <div className="relative z-10">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="container mx-auto p-8 text-center text-white">
            {/* Additional content goes here */}
          <h1 className="text-9xl font-bold" style={{ fontFamily: 'Karantina' }}>MSC</h1>
          
          <h3 className="text-2xl font-normal relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1/3 before:h-0.5 before:bg-white after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-1/3 after:h-0.5 after:bg-white">BE A FORCE FOR GOOD</h3>
          <p className="text-lg h-auto" >
          If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple.
          </p>
          <button className="box-border bg-slate-900 text-white py-4 px-12 text-xl rounded-xl my-4">CLICK HERE</button>
        </div>
      </div>

      </div>
      <Footer/>
    </div>
  );
};

export default Page;