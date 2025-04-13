// "use client";

// import React, { useEffect, useRef, useState } from 'react';
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Image from "next/image";
// import { debounce } from 'lodash';

// const Fifth = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const aosInitialized = useRef(false);

//   useEffect(() => {
//     const handleResize = debounce(() => {
//       setIsMobile(window.innerWidth < 640);
//     }, 100);

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       handleResize.cancel();
//     };
//   }, []);

//   useEffect(() => {
//     if (!aosInitialized.current) {
//       AOS.init({
//         offset: 120,
//         duration: 800,
//         easing: 'ease-out',
//         once: true,
//       });
//       aosInitialized.current = true;
//     }
//   }, []);

//   const events = [
//     {
//       images: ["/fifth/zeitgist-1.jpg", "/fifth/zeitgist-2.jpg"],
//       title: "The ZEITGEIST: AI and redefined engineering",
//       date: "28/06/2024",
//       description: "A globally recognized event with over 350 participants, it explored the impact of AI, Generative AI, and Copilot in modern engineering. Industry experts Mr. Lalit Rawat and Mr. Lakshit Pant discussed how students can leverage these technologies, accelerate learning, and enhance their professional growth."
//     },
//     {
//       images: ["/fifth/ui_ux-1.jpg", "/fifth/ui_ux-2.jpg"],
//       title: "Understanding UI/UX",
//       date: "03/06/2024",
//       description: "The UI/UX workshop, led by the exceptional Imthiyaz Ahmed, attracted over 100 participants. It provided deep insights into design principles, user experience strategies, and the latest industry trends, equipping attendees with valuable knowledge to enhance their design approach."
//     },
//     {
//       images: ["/fifth/genai-1.jpg", "/fifth/genai-2.jpg"],
//       title: "Building Intelligent Systems with GEN AI and RAG",
//       date: "11/11/2024",
//       description: "The GenAI and RAG workshop, led by expert Deepak Chawla, was an intensive 5-day program covering AI, RAG, LLMs, and memory optimization with LangChain. Students gained valuable insights into AI-driven innovation, mastering cutting-edge tools while exploring career opportunities in this evolving field."
//     },
//     {
//       images: ["/fifth/tech_summit-1.jpg", "/fifth/tech_summit-2.jpg"],
//       title: "Bangalore tech summit",
//       date: "21/11/2024",
//       description: "The MLSA CIT Chapter embarked on an enriching journey to the Bangalore Tech Summit at Palace Grounds. The group immersed themselves in the cutting-edge world of technology, networking with industry experts, and gaining insights into the future of innovation."
//     },
//     {
//       images: ["/fifth/ai_hackathon-1.jpg", "/fifth/ai_hackathon-2.jpg"],
//       title: "AI Hackathon with meta llama",
//       date: "19/10/2024",
//       description: "AI Hackathon with Meta Llama brought together top talent for an intense problem-solving challenge. Representing MLSA CIT, President Dilip and Technical Lead Nikhil helped leverage cutting-edge AI to tackle real-world problems, pushing the boundaries of innovation and hands-on learning."
//     },
//     {
//       images: ["/fifth/visit-1.jpg", "/fifth/visit-2.jpg"],
//       title: "AI applications and Co-pilot technology workshop",
//       date: "01/02/2025",
//       description: "The Microsoft Luxor Office buzzed with innovation as a workshop on AI applications and Copilot technology drew an incredible turnout. Key contributors, Tejas R Mutalik and Marketing Lead Bharath Kumar S, played a crucial role in organizing the event, leading hands-on sessions on AI-powered productivity tools."
//     }
//   ];

//   const handleImageClick = (event) => {
//     setSelectedEvent(event);
//   };

//   const closeModal = () => {
//     setSelectedEvent(null);
//   };

//   const navigateGallery = (direction) => {
//     if (direction === 'next') {
//       setActiveIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
//     } else {
//       setActiveIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
//     }
//   };

//   return (
//     <div className="p-6 sm:p-10 bg-gradient-to-b from-[#070726] to-[#070726] w-auto m-[2rem] border border-[#334155] rounded-[2rem] max-sm:m-[1rem]">
//       {/* Header Section */}
//       <div className="mb-12 text-center" data-aos="fade-up">
//         <h1 className="text-3xl sm:text-5xl font-[CB] font-bold text-white mb-4">
//           <span className="text-transparent bg-clip-text bg-[#3B82F6]">Memorabilia</span>
//         </h1>
//         <div className="w-[12em] h-1.5 mx-auto mb-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/20"></div>
//         {/* <p className="text-gray-300 max-w-2xl mx-auto">
//           Explore our impactful tech events that have inspired hundreds of students and professionals.
//         </p> */}
//       </div>

//       {/* Featured Event Showcase */}
//       <div className="mb-16 relative overflow-hidden rounded-2xl shadow-2xl" data-aos="fade-up">
//         <div className="relative h-[50vh] sm:h-[60vh]">
//           <Image
//             src={events[activeIndex].images[0]}
//             alt={events[activeIndex].title}
//             fill
//             className="object-cover transition-transform duration-1000 ease-out"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70"></div>
          
//           <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
//             <h2 className="text-white text-2xl sm:text-4xl font-bold mb-2">{events[activeIndex].title}</h2>
//             <p className="text-blue-400 mb-4">{events[activeIndex].date}</p>
//             <p className="text-white/80 max-w-2xl line-clamp-3 sm:line-clamp-none">{events[activeIndex].description}</p>
            
//             <button 
//               className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
//               onClick={() => handleImageClick(events[activeIndex])}
//             >
//               View Details
//             </button>
//           </div>
          
//           {/* Navigation Controls */}
//           <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
//             <button 
//               className="bg-black/30 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/50 transition-colors"
//               onClick={() => navigateGallery('prev')}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>
//           </div>
          
//           <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
//             <button 
//               className="bg-black/30 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/50 transition-colors"
//               onClick={() => navigateGallery('next')}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>
          
//           {/* Indicator Dots */}
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//             {events.map((_, index) => (
//               <button
//                 key={index}
//                 className={`w-2 h-2 rounded-full transition-all ${
//                   activeIndex === index ? 'bg-blue-500 w-4' : 'bg-white/50'
//                 }`}
//                 onClick={() => setActiveIndex(index)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Event Grid */}
//       <div className="mb-16">
//         <h2 className="text-white text-2xl font-bold mb-8 border-l-4 border-blue-500 pl-4">Past Events</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {events.map((event, index) => (
//             <div 
//               key={index}
//               className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:translate-y-[-5px] group"
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//               onClick={() => handleImageClick(event)}
//             >
//               <div className="relative h-48 overflow-hidden">
//                 <Image
//                   src={event.images[0]}
//                   alt={event.title}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
//                 <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs px-2 py-1 rounded">
//                   {event.date}
//                 </div>
//               </div>
//               <div className="p-5">
//                 <h3 className="text-white text-lg font-semibold mb-3 group-hover:text-blue-400 transition-colors">{event.title}</h3>
//                 <p className="text-gray-400 text-sm line-clamp-3">{event.description}</p>
//                 <div className="mt-4 flex justify-end">
//                   <span className="text-blue-400 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform">
//                     View Details
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Photo Wall - Simplified */}
//       <div className="mt-16">
//         <h2 className="text-white text-2xl font-bold mb-8 border-l-4 border-blue-500 pl-4">Event Gallery</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-[180px]">
//           {events.flatMap((event, eventIndex) => 
//             event.images.map((src, imgIndex) => {
//               // Create a pattern of different sized images
//               const isWide = (eventIndex + imgIndex) % 5 === 0;
//               const isTall = (eventIndex + imgIndex) % 7 === 0;
              
//               let className = "col-span-1 row-span-1";
//               if (isWide) className = "col-span-2 row-span-1";
//               if (isTall) className = "col-span-1 row-span-2";
              
//               return (
//                 <div 
//                   key={`${eventIndex}-${imgIndex}`} 
//                   className={`${className} relative group overflow-hidden rounded-lg cursor-pointer`}
//                   data-aos="fade-up"
//                   data-aos-delay={(eventIndex + imgIndex) * 50}
//                   onClick={() => handleImageClick(event)}
//                 >
//                   <Image
//                     src={src}
//                     alt={`${event.title} ${imgIndex}`}
//                     fill
//                     className="object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div 
//                     className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 cursor-pointer"
//                     onClick={() => handleImageClick(event)}
//                   >
//                     <h3 className="text-white text-sm font-semibold">{event.title}</h3>
//                     <p className="text-blue-400 text-xs">{event.date}</p>
//                   </div>
//                 </div>
//               );
//             })
//           )}
//         </div>
//       </div>

//       {/* Modal for event details */}
//       {selectedEvent && (
//         <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={closeModal}>
//           <div 
//             className="bg-[#1e293b] p-6 rounded-xl max-w-2xl w-full shadow-2xl border border-blue-500/20" 
//             onClick={e => e.stopPropagation()}
//             data-aos="zoom-in"
//           >
//             <div className="flex justify-between items-start mb-6">
//               <div>
//                 <h1 className="text-xl sm:text-2xl text-white font-bold mb-1">{selectedEvent.title}</h1>
//                 <p className="text-sm text-blue-400">{selectedEvent.date}</p>
//               </div>
//               <button 
//                 className="text-gray-400 hover:text-white transition-colors"
//                 onClick={closeModal}
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
            
//             <div className="grid grid-cols-2 gap-4 mb-6">
//               {selectedEvent.images.map((src, index) => (
//                 <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
//                   <Image
//                     src={src}
//                     alt={`${selectedEvent.title} ${index}`}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               ))}
//             </div>
            
//             <p className="text-gray-300 leading-relaxed">{selectedEvent.description}</p>
            
//             <div className="mt-6 flex justify-end">
//               <button 
//                 className="bg-[#4793F4] text-white px-5 py-2 rounded-lg hover:bg-[#3a7fd9] transition-colors"
//                 onClick={closeModal}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Elegant Carousel */}
//       <div className="mt-12 mb-8">
//         <h2 className="text-white text-xl font-semibold mb-6">Featured Events</h2>
//         <div className="relative overflow-hidden">
//           <div className="flex space-x-6 overflow-x-auto pb-6 hide-scrollbar snap-x snap-mandatory">
//             {events.map((event, index) => (
//               <div 
//                 key={index} 
//                 className="flex-shrink-0 w-[280px] snap-start"
//                 data-aos="fade-up"
//                 data-aos-delay={index * 100}
//               >
//                 <div 
//                   className="bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] cursor-pointer"
//                   onClick={() => handleImageClick(event)}
//                 >
//                   <div className="relative h-40">
//                     <Image
//                       src={event.images[0]}
//                       alt={event.title}
//                       fill
//                       className="object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
//                   </div>
//                   <div className="p-4">
//                     <h3 className="text-white text-lg font-semibold mb-2 line-clamp-1">{event.title}</h3>
//                     <p className="text-[#4793F4] text-sm mb-3">{event.date}</p>
//                     <p className="text-gray-400 text-sm line-clamp-3">{event.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Elegant Photo Wall */}
//       <div className="mt-12">
//         <h2 className="text-white text-xl font-semibold mb-6">Photo Wall</h2>
//         <div className="grid grid-cols-3 md:grid-cols-6 gap-2 auto-rows-[120px]">
//           {events.flatMap((event, eventIndex) => 
//             event.images.map((src, imgIndex) => {
//               // Create a pattern of different sized images
//               const isWide = (eventIndex + imgIndex) % 5 === 0;
//               const isTall = (eventIndex + imgIndex) % 7 === 0;
//               const isLarge = (eventIndex + imgIndex) % 11 === 0;
              
//               let className = "col-span-1 row-span-1";
//               if (isWide) className = "col-span-2 row-span-1";
//               if (isTall) className = "col-span-1 row-span-2";
//               if (isLarge) className = "col-span-2 row-span-2";
              
//               return (
//                 <div 
//                   key={`${eventIndex}-${imgIndex}`} 
//                   className={`${className} relative group overflow-hidden rounded-lg`}
//                   data-aos="fade-up"
//                   data-aos-delay={(eventIndex + imgIndex) * 30}
//                 >
//                   <Image
//                     src={src}
//                     alt={`${event.title} ${imgIndex}`}
//                     fill
//                     className="object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div 
//                     className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 cursor-pointer"
//                     onClick={() => handleImageClick(event)}
//                   >
//                     <h3 className="text-white text-sm font-semibold line-clamp-1">{event.title}</h3>
//                     <p className="text-gray-300 text-xs">{event.date}</p>
//                   </div>
//                 </div>
//               );
//             })
//           )}
//         </div>
//       </div>

//       {/* CSS for hiding scrollbars */}
//       <style jsx global>{`
//         .hide-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .hide-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Fifth;


"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { debounce } from "lodash";
import { title } from "process";

const Fifth = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = debounce(() => {
      setIsMobile(window.innerWidth < 640);
    }, 100);

    handleResize();
    window.addEventListener("resize", handleResize);

    AOS.init({ offset: 120, duration: 800, easing: "ease-out", once: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      handleResize.cancel();
    };
  }, []);

  const events = [
    {
      images: ["/fifth/zeitgist-1.jpg", "/fifth/zeitgist-2.jpg"],
      title: "The ZEITGEIST: AI and redefined engineering",
      date: "28/06/2024",
      description: "A globally recognized event with over 350 participants, exploring the impact of AI and Copilot in modern engineering."
    },
    {
      images: ["/fifth/ui_ux-1.jpg", "/fifth/ui_ux-2.jpg"],
      title: "Understanding UI/UX",
      date: "03/06/2024",
      description: "Led by Imthiyaz Ahmed, this workshop offered deep insights into UI/UX design principles and trends."
    },
    {
      images: ["/fifth/genai-1.jpg", "/fifth/genai-2.jpg"],
      title: "Building Intelligent Systems with GEN AI and RAG",
      date: "11/11/2024",
      description: "Deepak Chawla's 5-day workshop on AI, RAG, and LangChain covering career opportunities and innovation."
    },
    {
      images: ["/fifth/git-workshop-2.jpg", "/fifth/git-workshop-1.jpg"],
      title: "Git & Github Workshop",
      date: "17/05/2024",
      description: "An interactive, hands-on workshop on Git and GitHub essentials was conducted by team tech member Ayushman & Chetan KP."
    },
    {
      images: ["/fifth/linkedIn-1.jpg", "/fifth/linkedIn-2.jpg"],
      title: "LinkedIn Workshop",
      date: "16/12/2024",
      description: "A LinkedIn workshop by team member Bharat Kumar S guided students on building a strong professional presence, optimizing profiles, and leveraging networking opportunities."
    },
    {
      images: ["/fifth/webdev-2.jpg", "/fifth/webdev-1.jpg"],
      title: "Webcraft: Fundamentals of web development",
      date: "25/09/2024",
      description: "The Web Development workshop, conducted by tech team member Chintu Rai, covered HTML, CSS and JavaScript providing a strong foundation in programming and web technologies."
    },
    {
      images: ["/fifth/gamedev-1.jpg", "/fifth/gamedev-2.jpg"],
      title: "GAME DEV WORKSHOP",
      date: "08/02/2025",
      description: "The Game Development Workshop, conducted by team member Sreejith S, guided participants in using Godot and Pygame to develop their own games. "
    },
  ];

  const navigateGallery = (direction) => {
    setActiveIndex((prev) =>
      direction === "next"
        ? (prev + 1) % events.length
        : (prev - 1 + events.length) % events.length
    );
  };

  return (
    <div className="p-6 sm:p-10 bg-gradient-to-b from-[#070726] to-[#070726] w-auto m-6 border border-[#334155] rounded-2xl">
      
      {/* Header */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h1 className="text-3xl sm:text-5xl font-[CB] font-bold text-white mb-4">
          <span className="bg-clip-text text-transparent bg-[#3B82F6]">Memorabilia</span>
        </h1>
        <div className="w-32 h-1.5 bg-blue-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Featured Event Carousel */}
      <div className="relative h-[60vh] rounded-xl overflow-hidden shadow-lg" data-aos="fade-up">
        <Image
          src={events[activeIndex].images[0]}
          alt={events[activeIndex].title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-8">
          <h2 className="text-3xl text-white">{events[activeIndex].title}</h2>
          <p className="text-blue-400">{events[activeIndex].date}</p>
          <p className="text-gray-300 line-clamp-3">{events[activeIndex].description}</p>

          <div className="mt-4 flex space-x-4">
            <button
              className="bg-blue-500 px-4 py-2 rounded-lg text-white"
              onClick={() => setSelectedEvent(events[activeIndex])}
            >
              View Details
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white"
          onClick={() => navigateGallery("prev")}
        >
          ❮
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white"
          onClick={() => navigateGallery("next")}
        >
          ❯
        </button>
      </div>

      {/* Event Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
            data-aos="fade-up"
            onClick={() => setSelectedEvent(event)}
          >
            <div className="relative h-48">
              <Image
                src={event.images[0]}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl text-white">{event.title}</h3>
              <p className="text-blue-400">{event.date}</p>
              <p className="text-gray-300 line-clamp-3">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-[#1e293b] p-6 rounded-xl w-full max-w-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            data-aos="zoom-in"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl text-white">{selectedEvent.title}</h2>
              <button
                className="text-gray-400 hover:text-white"
                onClick={() => setSelectedEvent(null)}
              >
                ✖
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {selectedEvent.images.map((src, index) => (
                <div key={index} className="relative h-32 rounded-lg overflow-hidden">
                  <Image src={src} alt={selectedEvent.title} fill className="object-cover" />
                </div>
              ))}
            </div>

            <p className="text-gray-300 mt-4">{selectedEvent.description}</p>

            <div className="mt-4 text-right">
              <button
                className="bg-blue-500 px-4 py-2 rounded-lg text-white"
                onClick={() => setSelectedEvent(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fifth;
