"use client";
import React, { useRef, useEffect, useState, useMemo, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Teams = () => {
  const containerRef = useRef(null);
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 300,
      easing: "ease-out",
      once: true,
      mirror: false
    });
  }, []);

  // Optimize mouse tracking with useCallback to prevent recreation on each render
  const handleMouseMove = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  // Add event listener with cleanup
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Memoize scroll distance calculation
  const scrollDistance = useMemo(() => {
    return 0.5 * (containerRef.current?.offsetWidth || 210);
  }, [containerRef.current?.offsetWidth]);

  const scrollLeft = useCallback(() => {
    if (containerRef.current) containerRef.current.scrollLeft -= scrollDistance;
  }, [scrollDistance]);

  const scrollRight = useCallback(() => {
    if (containerRef.current) containerRef.current.scrollLeft += scrollDistance;
  }, [scrollDistance]);

  // Memoize 3D effect calculation to reduce calculations
  const calculate3DEffect = useCallback((index) => {
    if (hoveredIndex !== index) return {};

    const card = document.querySelectorAll('.team-card')[index];
    if (!card) return {};

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateY = (mousePosition.x - centerX) / 20;
    const rotateX = (centerY - mousePosition.y) / 20;

    return {
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
    };
  }, [hoveredIndex, mousePosition]);

  // Memoize team cards to prevent unnecessary re-renders
  const teamCards = useMemo(() => {
    return teamData.map((member, index) => (
      <div
        key={index}
        onClick={() => router.push(`/teams/${member.path}`)}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        className="team-card flex flex-shrink-0 flex-col justify-center items-center cursor-pointer w-[200px] h-[200px] max-sm:w-[150px] max-sm:h-[150px] transition-all duration-300 relative"
        style={{
          ...calculate3DEffect(index),
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}
        data-aos="zoom-out"
        data-aos-delay={index * 50}
      >
        {/* Enhanced Futuristic border */}
        <div 
          className={`absolute inset-0 rounded-full transition-all duration-500 ${
            hoveredIndex === index ? 'opacity-100' : 'opacity-40'
          }`}
          style={{
            background: `conic-gradient(from ${Date.now() / 20 % 360}deg at 50% 50%, #4793F4, #6366F1, #4793F4)`,
            padding: '2px',
            animation: hoveredIndex === index ? 'spin 4s linear infinite' : 'none'
          }}
        >
          <div className="w-full h-full rounded-full bg-[#0a0a1a]"></div>
        </div>

        {/* Enhanced Holographic circle */}
        <div 
          className={`absolute inset-2 rounded-full transition-all duration-300 ${
            hoveredIndex === index ? 'opacity-30' : 'opacity-0'
          }`}
          style={{
            background: 'radial-gradient(circle, rgba(71,147,244,0.2) 0%, rgba(17,24,39,0) 70%)',
            boxShadow: hoveredIndex === index ? '0 0 30px rgba(71,147,244,0.5)' : 'none'
          }}
        ></div>

        {/* Digital circuit pattern - only render when hovered */}
        {hoveredIndex === index && (
          <div className="absolute inset-4 rounded-full opacity-20 z-0">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-blue-400"></div>
            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-blue-400"></div>
            <div className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-blue-400 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          </div>
        )}

        {/* Enhanced Image container */}
        <div 
          className="relative z-10"
          style={{
            filter: hoveredIndex === index ? 'drop-shadow(0 0 15px rgba(71,147,244,0.7))' : 'none',
            transition: 'all 0.3s ease-out',
          }}
        >
          <Image
            src={member.image}
            alt={member.name}
            width={90}
            height={90}
            className="relative max-sm:w-[70px] transition-all duration-300"
          />

          {/* Enhanced Futuristic scan effect - only render when hovered */}
          {hoveredIndex === index && (
            <>
              <div 
                className="absolute inset-0 bg-gradient-to-b from-blue-500/0 via-blue-500/30 to-blue-500/0 opacity-70"
                style={{
                  animation: 'scanline 1.5s linear infinite',
                  height: '10px',
                  width: '100%',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              ></div>
              <div className="absolute inset-0 rounded-full border border-blue-500/50 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
            </>
          )}
        </div>

        {/* Enhanced Futuristic name display */}
        <div 
          className={`mt-4 transition-all duration-500 relative ${
            hoveredIndex === index ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
          }`}
        >
          <p className="text-sm font-bold text-white relative z-10 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-500/30">
            {member.name}
          </p>
          <div className="absolute inset-0 blur-sm bg-blue-500/20 rounded-full"></div>
        </div>
      </div>
    ));
  }, [hoveredIndex, calculate3DEffect, router]);

  return (
    <div className="relative w-full flex flex-col items-center justify-center h-auto py-8 gap-8 bg-[rgba(10,10,26,0.7)] backdrop-blur-lg border border-white/10 rounded-[2rem]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('/images/grid.svg')] bg-repeat opacity-5"></div>

        {/* Digital circuit lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-blue-400"></div>
          <div className="absolute top-2/4 left-0 w-full h-[1px] bg-blue-400"></div>
          <div className="absolute top-3/4 left-0 w-full h-[1px] bg-blue-400"></div>
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-blue-400"></div>
          <div className="absolute top-0 left-2/4 w-[1px] h-full bg-blue-400"></div>
          <div className="absolute top-0 left-3/4 w-[1px] h-full bg-blue-400"></div>
        </div>
      </div>

      {/* Enhanced Futuristic Heading */}
      <div className="text-center w-full relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-[300px] h-[300px] rounded-full bg-blue-500 blur-[100px] animate-pulse"></div>
        </div>
        <div className="relative inline-block">
          <h1 
            className="text-4xl font-[CB] sm:text-5xl lg:text-6xl font-bold mb-2 relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600" 
            data-aos="zoom-in"
          >
            Meet Our Team
          </h1>
          <div className="absolute -inset-1 blur-lg bg-gradient-to-r from-blue-400/20 via-indigo-500/20 to-blue-500/20 rounded-lg z-0"></div>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-4 rounded-full"></div>

        {/* Futuristic subtitle */}
        <p className="text-blue-300/80 max-w-md mx-auto mb-4 text-sm" data-aos="fade-up" data-aos-delay="100">
          <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
          The brilliant minds powering MLSA CIT
          <span className="inline-block w-2 h-2 bg-blue-400 rounded-full ml-2 animate-pulse"></span>
        </p>
      </div>

      {/* Enhanced Team Member Images Container */}
      <div
        ref={containerRef}
        className="space-x-6 w-full h-full flex scroll-smooth px-8 py-8 whitespace-nowrap overflow-x-auto no-scrollbar relative"
      >
        {/* Scanline effect */}
        <div 
          className="absolute inset-0 pointer-events-none z-20 opacity-10"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(71, 147, 244, 0.15) 50%, transparent)',
            backgroundSize: '100% 8px',
            backgroundRepeat: 'repeat',
            animation: 'scanEffect 8s linear infinite'
          }}
        ></div>

        {teamCards}
      </div>

      {/* Enhanced Futuristic scroll indicator */}
      <div className="text-blue-400/70 text-sm flex items-center gap-2 mt-2">
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-blue-400/70 animate-pulse"></div>
        <div className="relative px-3 py-1 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20">
          Scroll to explore
        </div>
        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-blue-400/70 animate-pulse"></div>
      </div>

      {/* Enhanced CSS for animations and effects */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes scanline {
          0% {
            top: 0%;
          }
          100% {
            top: 100%;
          }
        }
        @keyframes scanEffect {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 100%;
          }
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(20px);
          }
          75% {
            transform: translateY(20px) translateX(10px);
          }
        }
        @keyframes rainFall {
          0% {
            transform: translateY(-100px);
          }
          100% {
            transform: translateY(calc(100vh + 100px));
          }
        }
      `}</style>
    </div>
  );
};

const teamData = [
  { name: "Advisor", path: "advisor", image: "/images/teams/advisor.png" },
  { name: "President", path: "president", image: "/images/teams/president.png" },
  { name: "Vice President", path: "vp", image: "/images/teams/vice-president.png" },
  { name: "Social Media", path: "socmed", image: "/images/teams/social-media.png" },
  { name: "Technical", path: "technical", image: "/images/teams/technical.png" },
  { name: "Designers", path: "designers", image: "/images/teams/designers.png" },
  { name: "Marketing", path: "marketing", image: "/images/teams/marketing.png" },
  { name: "Curation", path: "curation", image: "/images/teams/curation.png" },
  { name: "Treasure", path: "treasure", image: "/images/teams/treasure.png" },
];

export default Teams;




// "use client";
// import React, { useRef, useEffect, useState, useMemo, useCallback } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import throttle from "lodash/throttle";  // Install lodash for throttling

// const Teams = () => {
//   const containerRef = useRef(null);
//   const router = useRouter();
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   // Initialize AOS for animations
//   useEffect(() => {
//     AOS.init({
//       offset: 200,
//       duration: 300,
//       easing: "ease-out",
//       once: true,
//       mirror: false,
//     });
//   }, []);

//   // Throttle mouse movement for better performance
//   // const handleMouseMove = (e) => {
//   //   setMousePosition({ x: e.clientX, y: e.clientY });
//   // };
//   // useEffect(() => {
//   //   window.addEventListener("mousemove", handleMouseMove);
//   //   return () => window.removeEventListener("mousemove", handleMouseMove);
//   // }, [handleMouseMove]);

//   useEffect(() => {
//   const handleMouseMove = (e) => {
//     setMousePosition({ x: e.clientX, y: e.clientY });
//   };

//   window.addEventListener("mousemove", handleMouseMove);

//   return () => {
//     window.removeEventListener("mousemove", handleMouseMove);
//   };
// }, []);  // ✅ Empty dependency array



//   // const handleMouseMove = useCallback(
//   //   throttle((e) => {
//   //     setMousePosition({ x: e.clientX, y: e.clientY });
//   //   }, 100),
//   //   [setMousePosition]
//   // );


//   // Memoize scroll distance
//   // const scrollDistance = useMemo(() => {
//   //   return 0.5 * (containerRef.current?.offsetWidth || 210);
//   // }, [containerRef.current?.offsetWidth]);

//   const [scrollDistance, setScrollDistance] = useState(210);  // Default value

//   useEffect(() => {
//     const updateScrollDistance = () => {
//       setScrollDistance(0.5 * (containerRef.current?.offsetWidth || 210));
//     };

//     updateScrollDistance();  // Set initial value
//     window.addEventListener("resize", updateScrollDistance);

//     return () => window.removeEventListener("resize", updateScrollDistance);
//   }, [containerRef]);


//   const scrollLeft = () => {
//     if (containerRef.current) containerRef.current.scrollLeft -= scrollDistance;
//   };

//   const scrollRight = () => {
//     if (containerRef.current) containerRef.current.scrollLeft += scrollDistance;
//   };

//   // Optimized 3D effect
//   const calculate3DEffect = (index) => {
//     if (hoveredIndex !== index) return {};

//     const card = containerRef.current?.children[index];
//     if (!card) return {};

//     const rect = card.getBoundingClientRect();
//     const centerX = rect.left + rect.width / 2;
//     const centerY = rect.top + rect.height / 2;

//     const rotateY = (mousePosition.x - centerX) / 20;
//     const rotateX = (centerY - mousePosition.y) / 20;

//     return {
//       transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
//     };
//   };

//   return (
//     <div className="relative w-full flex flex-col items-center justify-center h-auto py-8 gap-8 bg-[rgba(10,10,26,0.7)] backdrop-blur-lg border border-white/10 rounded-[2rem]">

//       {/* Background Grid */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute w-full h-full bg-[url('/images/grid.svg')] bg-repeat opacity-5"></div>
//       </div>

//       {/* Heading */}
//       <div className="text-center w-full relative">
//         <h1 className="text-4xl font-[CB] sm:text-5xl lg:text-6xl font-bold mb-2 text-white" data-aos="zoom-in">
//           Meet Our Team
//         </h1>
//         <p className="text-blue-300/80 max-w-md mx-auto mb-4 text-sm" data-aos="fade-up" data-aos-delay="100">
//           The brilliant minds powering MLSA CIT
//         </p>
//       </div>

//       {/* Team Cards */}
//       <div
//         ref={containerRef}
//         className="space-x-6 w-full h-full flex scroll-smooth px-8 py-8 whitespace-nowrap overflow-x-auto no-scrollbar relative"
//       >
//         {teamData.map((member, index) => (
//           <div
//             key={index}
//             onClick={() => router.push(`/teams/${member.path}`)}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//             className="team-card flex flex-shrink-0 flex-col justify-center items-center cursor-pointer w-[200px] h-[200px] max-sm:w-[150px] max-sm:h-[150px] transition-all duration-300 relative"
//             style={calculate3DEffect(index)}
//             data-aos="zoom-out"
//             data-aos-delay={index * 50}
//           >
//             <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-indigo-600"></div>

//             {/* Image */}
//             <div className="relative z-10">
//               <Image
//                 src={member.image}
//                 alt={member.name}
//                 width={90}
//                 height={90}
//                 className="transition-all duration-300"
//               />
//             </div>

//             {/* Name */}
//             <div className="mt-4">
//               <p className="text-sm font-bold text-white">{member.name}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const teamData = [
//   { name: "Advisor", path: "advisor", image: "/images/teams/advisor.png" },
//   { name: "President", path: "president", image: "/images/teams/president.png" },
//   { name: "Vice President", path: "vp", image: "/images/teams/vice-president.png" },
//   { name: "Social Media", path: "socmed", image: "/images/teams/social-media.png" },
//   { name: "Technical", path: "technical", image: "/images/teams/technical.png" },
//   { name: "Designers", path: "designers", image: "/images/teams/designers.png" },
//   { name: "Marketing", path: "marketing", image: "/images/teams/marketing.png" },
//   { name: "Curation", path: "curation", image: "/images/teams/curation.png" },
//   { name: "Treasure", path: "treasure", image: "/images/teams/treasure.png" },
// ];

// export default Teams;
