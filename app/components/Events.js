import React, { useEffect, useRef, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';

const Events = () => {
  const eventRefs = useRef([]);
  const eventsSectionRef = useRef(null);
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1000,
      easing: "ease-out",
      once: true,
      mirror: false
    });
  }, []);

  const setEventRef = (el) => {
    if (el) {
      eventRefs.current = [...new Set([...eventRefs.current, el])];
    }
  };

  useEffect(() => {
    setTimeout(() => setShowCode(true), 1000);
    return () => {
      eventRefs.current = [];
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      eventRefs.current.forEach((rect, index) => {
        gsap.fromTo(
          rect,
          { opacity: 0, x: -200 },
          { opacity: 1, x: 0, duration: 1, delay: index * 0.2, ease: "power3.out" }
        );
      });
    }, 500);
  }, []);

  return (
    <div ref={eventsSectionRef} className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 py-8 px-6 md:px-12 lg:px-16 bg-[#070724] rounded-[2rem] border border-[#334155] shadow-lg relative">
      {/* Code-themed background */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        {showCode && (
          <pre className="text-[8px] text-blue-500 font-mono leading-tight">
            {`function initEvent(type, speakers) {
  const event = {
    type,
    speakers,
    attendees: [],
    register(user) {
      this.attendees.push(user);
      return true;
    }
  };
  return event;
}

const zeitgeist = initEvent('AI Conference', ['Lalit Rawat', 'Lakshit Pant']);
const uiuxWorkshop = initEvent('Workshop', ['Imthiyaz Ahmed']);
const genAIWorkshop = initEvent('Deep Dive', ['Deepak Chawla']);`}
          </pre>
        )}
      </div>

      {/* Image Section */}
      {/* Image Section */}
      <div className="relative w-full flex justify-center items-center">
      <Image
        src="/images/Tech x Design/Vector 68.png"
        alt="Curved Line"
        width={500}  // Reduce width
        height={120}  // Reduce height
        priority  // Load images faster
        className="w-full max-w-4xl max-sm:w-full"
        data-aos="slide-right"
      />

        <div className="absolute top-0 left-0 w-full h-full">
          {/* First Circle */}
          <Image
            src="/images/Tech x Design/Ellipse 22.png"
            alt="Circle"
            width={50}
            height={50}
            className="absolute top-[77%] left-[15%] sm:left-[17%] max-sm:w-7 animate-pulse"
            data-aos="zoom-out"
          />
          <div
            className="absolute top-[calc(77%+60px)] left-[15%] sm:left-[17%] transform -translate-x-1/2"
          >
            <div ref={setEventRef} className="relative group hover:scale-105 transition-all duration-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300 "></div>
              <Image
                src="/images/c1 rect.png"
                alt="Rectangle"
                width={180}
                height={90}
                className="w-44 h-24 rounded-lg relative "
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-4 backdrop-blur-sm bg-black/30 rounded-lg">
                <div className="flex justify-between items-center w-full mb-2">
                  <div className="flex items-center">
                    <div className="bg-blue-500 w-1 h-6 rounded-lg mr-2"></div>
                    <p className="text-sm md:text-base font-semibold font-mono">The Zeitgeist</p>
                  </div>
                </div>
                <p className="text-xs font-mono">350+ participants, AI transforming engineering.</p>
              </div>
            </div>
          </div>

          {/* Second Circle */}
          <Image
            src="/images/Tech x Design/Vector 68.png"
            alt="Curved Line"
            width={500}  // Reduce width
            height={120}  // Reduce height
            priority  // Load images faster
            className="w-full max-w-4xl max-sm:w-full"
            data-aos="slide-right"
          />

          <div
            className="absolute top-[calc(37%-140px)] left-[30%] sm:left-[32%] transform -translate-x-1/2"
          >
            <div ref={setEventRef} className="relative group hover:scale-105 transition-all duration-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
              <Image
                src="/images/c2 rect.png"
                alt="Rectangle"
                width={180}
                height={90}
                className="w-44 h-24 rounded-lg relative"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-4 backdrop-blur-sm bg-black/30 rounded-lg">
                <div className="flex justify-between items-center w-full mb-2">
                  <div className="flex items-center">
                    <div className="bg-purple-500 w-1 h-6 rounded-lg mr-2"></div>
                    <p className="text-sm md:text-base font-semibold font-mono">Understanding UI/UX</p>
                  </div>
                </div>
                <p className="text-xs font-mono">100+ attendees, mastering design strategies.</p>
              </div>
            </div>
          </div>

          {/* Third Circle */}
          <Image
            src="/images/Tech x Design/Ellipse 24.png"
            alt="Circle"
            width={50}
            height={50}
            className="absolute top-[61%] left-[50%] max-sm:left-[53%] max-sm:w-7 animate-pulse"
            data-aos="zoom-out"
          />
          <div
            className="absolute top-[calc(61%+60px)] left-[50%] max-sm:left-[73%] transform -translate-x-1/3 max-sm:w-44"
          >
            <div ref={setEventRef} className="relative group hover:scale-105 transition-all duration-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
              <Image
                src="/images/c3-rect.png"
                alt="Rectangle"
                width={180}
                height={90}
                className="w-44 h-24 rounded-lg relative"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-4 backdrop-blur-sm bg-black/30 rounded-lg">
                <div className="flex justify-between items-center w-full mb-2">
                  <div className="flex items-center">
                    <div className="bg-green-500 w-1 h-6 rounded-lg mr-2"></div>
                    <p className="text-sm md:text-base font-semibold font-mono">GenAI & RAG</p>
                  </div>
                </div>
                <p className="text-xs font-mono">5 days, deep dive into AI.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Content Section */}
      <div className="text-white max-sm:mt-32 sm:mt-24">
        <div className="flex items-center mb-6">
          <div className="h-8 w-2 bg-blue-500 rounded-full mr-3"></div>
          <h1 className="text-4xl md:text-4xl font-bold font-[CB]" data-aos="fade-left">
            Our Past <span className="text-blue-500">&lt;Events/&gt;</span>
          </h1>
        </div>
        
        <p className="text-sm md:text-base mb-6 pl-5 border-l-2 border-blue-500/30 font-mono text-gray-300" data-aos="fade-left">
          / / Stay tuned for upcoming events and explore our past highlights.
        </p>

        <div className="space-y-6 text-base" data-aos="fade-left">
          {[
            { title: "The Zeitgeist", speaker: "Lalit Rawat & Lakshit Pant", desc: "AI transforming engineering" },
            { title: "Understanding UI/UX", speaker: "Imthiyaz Ahmed", desc: "Mastering design strategies" },
            { title: "GenAI & RAG", speaker: "Deepak Chawla", desc: "5 days, deep dive into AI" }
          ].map((event, index) => (
            <div key={index} className="p-4 bg-slate-800/50 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 font-mono">
              <span className="text-blue-400">const</span> <span className="font-bold text-yellow-400">{event.title.toLowerCase().replace(/\s+/g, '')}</span> = {'{'}
              <p className="pl-4"><span className="text-purple-400">title:</span> &quot;{event.title}&quot;,</p>
              <p className="pl-4"><span className="text-purple-400">speaker:</span> &quot;{event.speaker}&quot;,</p>
              <p className="pl-4"><span className="text-purple-400">description:</span> &quot;{event.desc}&quot;</p>
              {'}'};
            </div>
          ))}
        </div>

        <Link href="/events">
          <button className="mt-8 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 font-mono flex items-center group" data-aos="zoom-up">
            <span className="mr-2">function(</span> exploreEvents <span className="ml-2">);</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Events;
