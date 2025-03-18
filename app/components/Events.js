// import React, { useEffect, useRef } from 'react';
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Link from 'next/link';
// import Image from 'next/image';
// import { gsap } from 'gsap';

// const Events = () => {
//   const eventRefs = useRef([]);
//   const eventsSectionRef = useRef(null);

//   useEffect(() => {
//       AOS.init({
//         offset:120,
//         duration: 1000,
//         easing: "ease-out",
//         once: true,
//         mirror:false
//       });
//     }, []);

//   const setEventRef = (el) => {
//     if (el && !eventRefs.current.includes(el)) {
//       eventRefs.current.push(el);
//     }
//   };

//   const animateEventRectangles = () => {
//     eventRefs.current.forEach((rect, index) => {
//       gsap.fromTo(
//         rect,
//         { opacity: 0, x: -200 },
//         {
//           opacity: 1,
//           x: 0,
//           duration: 1,
//           delay: index * 0.2,
//           ease: 'power3.out',
//         }
//       );
//     });
//   };

//   // Replace the intersection observer useEffect with a simpler one that runs once on mount
//   useEffect(() => {
//     // Run animation once when component mounts
//     setTimeout(() => {
//       animateEventRectangles();
//     }, 500); // Small delay to ensure DOM is ready
    
//     // Clear event refs on unmount
//     return () => {
//       eventRefs.current = [];
//     };
//   }, []);
  
//   // Remove the intersection observer useEffect
//   /*
//   useEffect(() => {
//     const sectionElement = eventsSectionRef.current;
  
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             animateEventRectangles();
//           }
//         });
//       },
//       { threshold: 0.25 }
//     );
  
//     if (sectionElement) {
//       observer.observe(sectionElement);
//     }
  
//     return () => {
//       if (sectionElement) {
//         observer.unobserve(sectionElement);
//       }
//     };
//   }, []);
//   */


//   return (
//     <div
//       ref={eventsSectionRef}
//       className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 py-8 px-6 md:px-12 lg:px-16 bg-[#070724] rounded-[2rem] border border-[#334155] shadow-lg relative "
//     >
//       {/* Code-themed background elements */}
//       <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
//         <div className="absolute top-0 left-0 w-full h-full">
//           <pre className="text-[8px] text-blue-500 font-mono leading-tight">
//             {`function initEvent(type, speakers) {
//   const event = {
//     type,
//     speakers,
//     attendees: [],
//     register(user) {
//       this.attendees.push(user);
//       return true;
//     }
//   };
//   return event;
// }

// const zeitgeist = initEvent('AI Conference', ['Lalit Rawat', 'Lakshit Pant']);
// const uiuxWorkshop = initEvent('Workshop', ['Imthiyaz Ahmed']);
// const genAIWorkshop = initEvent('Deep Dive', ['Deepak Chawla']);

// // Register participants
// zeitgeist.register({ name: 'Student1', email: 'student1@example.com' });
// uiuxWorkshop.register({ name: 'Student2', email: 'student2@example.com' });`}
//           </pre>
//         </div>
//       </div>

//       {/* Image Section */}
//       <div className="relative w-full flex justify-center items-center">
//         <Image
//           src="/images/Tech x Design/Vector 68.png"
//           alt="Curved Line"
//           width={1000}
//           height={240}
//           className="w-full max-w-4xl max-sm:w-full"
//           data-aos="slide-right"
//         />
//         <div className="absolute top-0 left-0 w-full h-full">
//           {/* First Circle */}
//           <Image
//             src="/images/Tech x Design/Ellipse 22.png"
//             alt="Circle"
//             width={50}
//             height={50}
//             className="absolute top-[77%] left-[15%] sm:left-[17%] max-sm:w-7 animate-pulse"
//             data-aos="zoom-out"
//           />
//           <div
//             className="absolute top-[calc(77%+60px)] left-[15%] sm:left-[17%] transform -translate-x-1/2"
//           >
//             <div ref={setEventRef} className="relative group hover:scale-105 transition-all duration-300">
//               <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300 "></div>
//               <Image
//                 src="/images/c1 rect.png"
//                 alt="Rectangle"
//                 width={180}
//                 height={90}
//                 className="w-44 h-24 rounded-lg relative "
//               />
//               <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-4 backdrop-blur-sm bg-black/30 rounded-lg">
//                 <div className="flex justify-between items-center w-full mb-2">
//                   <div className="flex items-center">
//                     <div className="bg-blue-500 w-1 h-6 rounded-lg mr-2"></div>
//                     <p className="text-sm md:text-base font-semibold font-mono">The Zeitgeist</p>
//                   </div>
//                 </div>
//                 <p className="text-xs font-mono">350+ participants, AI transforming engineering.</p>
//               </div>
//             </div>
//           </div>

//           {/* Second Circle */}
//           <Image
//             src="/images/Tech x Design/Ellipse 23.png"
//             alt="Circle"
//             width={50}
//             height={50}
//             className="absolute top-[37%] left-[30%] sm:left-[32%] max-sm:w-7 animate-pulse"
//             data-aos="zoom-out"
//           />
//           <div
//             className="absolute top-[calc(37%-140px)] left-[30%] sm:left-[32%] transform -translate-x-1/2"
//           >
//             <div ref={setEventRef} className="relative group hover:scale-105 transition-all duration-300">
//               <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
//               <Image
//                 src="/images/c2 rect.png"
//                 alt="Rectangle"
//                 width={180}
//                 height={90}
//                 className="w-44 h-24 rounded-lg relative"
//               />
//               <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-4 backdrop-blur-sm bg-black/30 rounded-lg">
//                 <div className="flex justify-between items-center w-full mb-2">
//                   <div className="flex items-center">
//                     <div className="bg-purple-500 w-1 h-6 rounded-lg mr-2"></div>
//                     <p className="text-sm md:text-base font-semibold font-mono">Understanding UI/UX</p>
//                   </div>
//                 </div>
//                 <p className="text-xs font-mono">100+ attendees, mastering design strategies.</p>
//               </div>
//             </div>
//           </div>

//           {/* Third Circle */}
//           <Image
//             src="/images/Tech x Design/Ellipse 24.png"
//             alt="Circle"
//             width={50}
//             height={50}
//             className="absolute top-[61%] left-[50%] max-sm:left-[53%] max-sm:w-7 animate-pulse"
//             data-aos="zoom-out"
//           />
//           <div
//             className="absolute top-[calc(61%+60px)] left-[50%] max-sm:left-[73%] transform -translate-x-1/3 max-sm:w-44"
//           >
//             <div ref={setEventRef} className="relative group hover:scale-105 transition-all duration-300">
//               <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
//               <Image
//                 src="/images/c3-rect.png"
//                 alt="Rectangle"
//                 width={180}
//                 height={90}
//                 className="w-44 h-24 rounded-lg relative"
//               />
//               <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-4 backdrop-blur-sm bg-black/30 rounded-lg">
//                 <div className="flex justify-between items-center w-full mb-2">
//                   <div className="flex items-center">
//                     <div className="bg-green-500 w-1 h-6 rounded-lg mr-2"></div>
//                     <p className="text-sm md:text-base font-semibold font-mono">GenAI & RAG</p>
//                   </div>
//                 </div>
//                 <p className="text-xs font-mono">5 days, deep dive into AI.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="text-white max-sm:mt-32 sm:mt-24">
//         <div className="flex items-center mb-6">
//           <div className="h-8 w-2 bg-blue-500 rounded-full mr-3"></div>
//           <h1 className="text-4xl md:text-4xl font-bold font-[CB]" data-aos="fade-left">
//             Our Past <span className="text-blue-500">&lt;Events/&gt;</span>
//           </h1>
//         </div>
        
//         <p className="text-sm md:text-base mb-6 pl-5 border-l-2 border-blue-500/30 font-mono text-gray-300" data-aos="fade-left">
//           // Stay tuned for upcoming events and explore our past highlights.
//         </p>
        
//         <div className="space-y-6 text-base" data-aos="fade-left">
//           <div className="p-4 bg-slate-800/50 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 font-mono">
//             <div className="flex items-start">
//               <span className="text-blue-400 mr-2">const</span>
//               <div>
//                 <span className="font-bold text-yellow-400">zeitgeist</span> = {"{"}
//                 <p className="pl-4"><span className="text-purple-400">title:</span> "AI and Redefined Engineering",</p>
//                 <p className="pl-4"><span className="text-purple-400">speakers:</span> ["Mr. Lalit Rawat", "Mr. Lakshit Pant"],</p>
//                 <p className="pl-4"><span className="text-purple-400">description:</span> "An exploration of AI's impact on modern engineering"</p>
//                 {"}"};
//               </div>
//             </div>
//           </div>
          
//           <div className="p-4 bg-slate-800/50 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 font-mono">
//             <div className="flex items-start">
//               <span className="text-blue-400 mr-2">const</span>
//               <div>
//                 <span className="font-bold text-yellow-400">uiuxWorkshop</span> = {"{"}
//                 <p className="pl-4"><span className="text-purple-400">title:</span> "Understanding UI/UX",</p>
//                 <p className="pl-4"><span className="text-purple-400">speaker:</span> "Imthiyaz Ahmed",</p>
//                 <p className="pl-4"><span className="text-purple-400">description:</span> "A deep dive into design principles and industry trends"</p>
//                 {"}"};
//               </div>
//             </div>
//           </div>
          
//           <div className="p-4 bg-slate-800/50 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-all duration-300 font-mono">
//             <div className="flex items-start">
//               <span className="text-blue-400 mr-2">const</span>
//               <div>
//                 <span className="font-bold text-yellow-400">genAIWorkshop</span> = {"{"}
//                 <p className="pl-4"><span className="text-purple-400">title:</span> "Building Intelligent Systems with GenAI and RAG",</p>
//                 <p className="pl-4"><span className="text-purple-400">speaker:</span> "Deepak Chawla",</p>
//                 <p className="pl-4"><span className="text-purple-400">description:</span> "A comprehensive workshop on AI, LLMs, and LangChain"</p>
//                 {"}"};
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <Link href="/events">
//           <button className="mt-8 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 font-mono flex items-center group" data-aos="zoom-up">
//             <span className="mr-2">{"function("}</span>
//             exploreEvents
//             <span className="ml-2">{");"}</span>
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//             </svg>
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Events;


import React, { useEffect, useRef } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';

const Events = () => {
  const eventRefs = useRef([]);
  const eventsSectionRef = useRef(null);

  useEffect(() => {
      AOS.init({
        offset:120,
        duration: 1000,
        easing: "ease-out",
        once: true,
        mirror:false
      });
    }, []);

  const setEventRef = (el) => {
    if (el && !eventRefs.current.includes(el)) {
      eventRefs.current.push(el);
    }
  };

  const animateEventRectangles = () => {
    eventRefs.current.forEach((rect, index) => {
      gsap.fromTo(
        rect,
        { opacity: 0, x: -200 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: index * 0.2,
          ease: 'power3.out',
        }
      );
    });
  };

  useEffect(() => {
    const sectionElement = eventsSectionRef.current;
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateEventRectangles();
          }
        });
      },
      { threshold: 0.25 }
    );
  
    if (sectionElement) {
      observer.observe(sectionElement);
    }
  
    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);
  

  return (
    <div
      ref={eventsSectionRef}
      className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 py-6 px-6 md:px-12 lg:px-16 bg-[#111827c8] rounded-2xl  relative" //data-aos="zoom-in"
    >
      {/* Image Section */}
      <div className="relative w-full flex justify-center items-center">
        <Image
          src="/images/Tech x Design/Vector 68.png"
          alt="Curved Line"
          width={1000}
          height={240}
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
            className="absolute top-[77%] left-[15%] sm:left-[17%] max-sm:w-7"
            data-aos="zoom-out"
          />
          <div
            className="absolute top-[calc(77%+60px)] left-[15%] sm:left-[17%] transform -translate-x-1/2"
          >
            <div ref={setEventRef} className="relative">
              <Image
                src="/images/c1 rect.png"
                alt="Rectangle"
                width={180}
                height={90}
                className="w-44 h-24"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-4">
                <div className="flex justify-between items-center w-full mb-2">
                  <div className="flex items-center">
                    <div className="bg-white w-1 h-6 rounded-lg mr-2"></div>
                    <p className="text-sm md:text-base font-semibold">The Zeitgeist</p>
                  </div>
                  {/* <p className="text-xs text-gray-400">26/14/2023</p> */}
                </div>
                <p className="text-xs">350+ participants, AI transforming engineering.</p>
              </div>
            </div>
          </div>

          {/* Second Circle */}
          <Image
            src="/images/Tech x Design/Ellipse 23.png"
            alt="Circle"
            width={50}
            height={50}
            className="absolute top-[37%] left-[30%] sm:left-[32%] max-sm:w-7"
            data-aos="zoom-out"
          />
          <div
            className="absolute top-[calc(37%-140px)] left-[30%] sm:left-[32%] transform -translate-x-1/2"
          >
            <div ref={setEventRef} className="relative">
              <Image
                src="/images/c2 rect.png"
                alt="Rectangle"
                width={180}
                height={90}
                className="w-44 h-24"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-4">
                <div className="flex justify-between items-center w-full mb-2">
                  <div className="flex items-center">
                    <div className="bg-white w-1 h-6 rounded-lg mr-2"></div>
                    <p className="text-sm md:text-base font-semibold">Understanding UI/UX</p>
                  </div>
                  {/* <p className="text-xs text-gray-400">26/14/2023</p> */}
                </div>
                <p className="text-xs">100+ attendees, mastering design strategies.</p>
              </div>
            </div>
          </div>

          {/* Third Circle */}
          <Image
            src="/images/Tech x Design/Ellipse 24.png"
            alt="Circle"
            width={50}
            height={50}
            className="absolute top-[61%] left-[50%] max-sm:left-[53%] max-sm:w-7"
            data-aos="zoom-out"
          />
          <div
            className="absolute top-[calc(61%+60px)] left-[50%] max-sm:left-[73%] transform -translate-x-1/3  max-sm:w-44"
          >
            <div ref={setEventRef} className='relative'>
              <Image
                src="/images/c3-rect.png"
                alt="Rectangle"
                width={180}
                height={90}
                className="w-44 h-24"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-4">
                <div className="flex justify-between items-center w-full mb-2">
                  <div className="flex items-center">
                    <div className="bg-white w-1 h-6 rounded-lg mr-2"></div>
                    <p className="text-sm md:text-base font-semibold">GenAI & RAG</p>
                  </div>
                  {/* <p className="text-xs text-gray-400">26/14/2023</p> */}
                </div>
                <p className="text-xs">5 days, deep dive into AI.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="text-white max-sm:mt-32 sm:mt-24" >
        <h1 className="text-4xl md:text-4xl font-bold mb-4 font-[CB]" data-aos="fade-left">
          Our Past <span className="text-blue-500">Events</span>
        </h1>
        <p className="text-sm md:text-base mb-4" data-aos="fade-left">
          Stay tuned for upcoming events and explore our past highlights.
        </p>
        <div className="space-y-4 text-lg" data-aos="fade-left">
          <p><span className='font-bold'>The Zeitgeist:</span> AI and Redefined Engineering  An exploration of AI&apos;s impact on modern engineering, led by Mr. Lalit Rawat and Mr. Lakshit Pant.</p>
          <p><span className='font-bold'>Understanding UI/UX :</span> A deep dive into design principles and industry trends with expert Imthiyaz Ahmed.</p>
          <p><span className='font-bold'>Building Intelligent Systems with GenAI and RAG </span> A comprehensive workshop on AI, LLMs, and LangChain, led by expert Deepak Chawla.</p>
        </div>
        <Link href="/events">
          <button className="mt-6 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition" data-aos="zoom-up">
            Past Events!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Events;
