import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Events = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center">
      {/* Image Section */}
      <div className="relative w-full h-auto flex justify-center items-center">
        {/* Main Vector Image */}
        <Image 
          src="/images/Tech x Design/Vector 68.png"
          alt="Tech x Design"
          width={1000} 
          height={240}
          className="relative"
        />
        {/* Circles Positioned on Top */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-between px-8 items-center">
          <Image  
            src="/images/Tech x Design/Ellipse 22.png"
            alt="circle"
            width={50}
            height={50}
            className="circle"
          />
          <Image  
            src="/images/Tech x Design/Ellipse 23.png"
            alt="circle"
            width={50}
            height={50}
            className="circle"
          />
          <Image  
            src="/images/Tech x Design/Ellipse 24.png"
            alt="circle"
            width={50}
            height={50}
            className="circle"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="content px-6">
        <div>
          <h1 className="text-2xl font-bold mb-4">Our past <span className='text-blue-600'>Events!</span></h1>
          <p className="mb-6">Stay tuned for upcoming events</p>
          <div className="events space-y-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, temporibus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, harum?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, harum?</p>
          </div>
          <Link href="/events">
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Past Events!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;
