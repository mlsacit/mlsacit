// "use client";
// import React, { useEffect, useRef, useState } from 'react';
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Image from "next/image";
// import { easeIn } from 'framer-motion';

// const Fifth = () => {

//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 640);
//     };

//     handleResize(); // Check screen size initially
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//       AOS.init({
//         offset:200,
//         duration: 300,
//         once: true,
//         mirror:false
//       });
//     }, []);

//   return (
//     <div className="p-6 sm:p-10">
//       {/* Header Section */}
//       <div className="flex flex-col sm:flex-row items-center w-full gap-4">
//         <div className="w-full sm:w-auto p-[1vw]">
//           <h1 className="text-[6vw] sm:text-[2.5vw] text-white" data-aos={isMobile ? "fade-right" : "slide-right"}>01</h1>
//         </div>
//         <div className="w-full sm:w-auto p-[1vw]" data-aos={isMobile ? "fade-left" : "zoom-in"}>
//           <div className="box rounded-[12px] w-full sm:w-[27vw] h-[10vw] sm:h-[4vw] bg-[#4793F4] flex items-center justify-center" >
//             <h1 className="font-[GMVF] text-[4vw] sm:text-[2vw]" data-aos="zoom-in">About MSC Events</h1>
//           </div>
//         </div>
//       </div>

//       {/* Main Content Section */}
//       <div className="flex flex-col sm:flex-row items-center w-full gap-6 mt-6 ">
//         {/* Left Column */}
//         <div className="w-full sm:w-1/3  mb-auto">
//           <div className="p-[1vw] ">
//             <Image
//               src="/fifth/left.svg"
//               alt="Left"
//               width={403}
//               height={553}
//               className="w-full h-auto"
//               data-aos={isMobile ? "fade-right" : "zoom-in-right"}
//             />
//           </div>
//           <div className="p-[1vw] font-[GMVF]" data-aos={isMobile ? "fade-left" : "zoom-in-down"}>
//             <h1 className="text-[4vw] sm:text-[2.5vw] text-white">AI based Cholera</h1>
//             <h2 className="text-[2.5vw] sm:text-[1.5vw] text-white">
//               On the sandy shore, an old journal lay open, its pages fluttering
//               as though eager to tell stories of adventures past.
//             </h2>
//           </div>
//         </div>

//         {/* Center Column */}
//         <div className="w-full sm:w-1/3 flex flex-col gap-4">
//           <div className="p-[1vw] ">
//             <button className="w-full">
//               <Image
//                 src="/fifth/topbutton.svg"
//                 alt="Button"
//                 width={453}
//                 height={148}
//                 className="w-full h-auto max-sm:h-[5rem] max-sm:hidden"
//                 data-aos="zoom-in-up"
//               />
//             </button>
//             <div className="w-full rounded-3xl bg-[#2E2E2E] -mt-[5vw] p-[5vw] text-white flex justify-between items-center sm:hidden" data-aos="fade-right">
//               <h1 className='font-[Technor] text-[4vw] ' data-aos='zoom-out'>SHARE IT</h1>
//               <div className="h-8 w-8 bg-black rounded-full flex items-center justify-center">
//                 <Image
//                 src="/fifth/arrow.svg"
//                 width={12}
//                 height={12}
//                 data-aos='zoom-out'
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="p-[1vw] ">
//             <Image
//               src="/fifth/left.svg"
//               alt="Center"
//               width={403}
//               height={553}
//               className="w-full  h-auto"
//               data-aos={isMobile ? "fade-left" : "zoom-in"}
//             />
//           </div>
//           <div className="p-[1vw] font-[GMVF]" data-aos={isMobile ? "fade-right" : "zoom-in-down"}>
//             <h1 className="text-[4vw] sm:text-[2.5vw] text-white">AI based Cholera</h1>
//             <h2 className="text-[2.5vw] sm:text-[1.5vw] text-white">
//               On the sandy shore, an old journal lay open, its pages fluttering
//               as though eager to tell stories of adventures past.
//             </h2>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="w-full sm:w-1/3 mb-auto">
//           <div className="p-[1vw]">
//             <Image
//               src="/fifth/left.svg"
//               alt="Right"
//               width={403}
//               height={553}
//               className="w-full h-auto"
//               data-aos={isMobile ? "fade-left" : "zoom-out-left"}
//             />
//           </div>
//           <div className="p-[1vw] font-[GMVF]" data-aos={isMobile ? "fade-right" : "zoom-in-down"}>
//             <h1 className="text-[4vw] sm:text-[2.5vw] text-white">AI based Cholera</h1>
//             <h2 className="text-[2.5vw] sm:text-[1.5vw] text-white">
//               On the sandy shore, an old journal lay open, its pages fluttering
//               as though eager to tell stories of adventures past.
//             </h2>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col sm:flex-row items-center w-full gap-4">
//         <div className="w-full sm:w-auto p-[1vw]">
//           <h1 className="text-[6vw] sm:text-[2.5vw] text-white" data-aos="fade-right">02</h1>
//         </div>
//         <div className="w-full sm:w-auto p-[1vw]" data-aos="zoom-in-right">
//           <div className="box rounded-[12px] w-full sm:w-[27vw] h-[10vw] sm:h-[4vw] bg-[#4793F4] flex items-center justify-center" data-aos={isMobile ? "fade-left" : "zoom-in"}>
//             <h1 className="font-[GMVF] text-[4vw] sm:text-[2vw]" data-aos="zoom-in">About MSC Events</h1>
//           </div>
//         </div>
//       </div>

//       {/* Main Content Section */}
//       <div className="flex flex-col sm:flex-row items-center w-full gap-6 mt-6 ">
//         {/* Left Column */}
//         <div className="w-full sm:w-1/3  mb-auto">
//           <div className="p-[1vw] ">
//             <Image
//               src="/fifth/left.svg"
//               alt="Left"
//               width={403}
//               height={553}
//               className="w-full h-auto"
//               data-aos={isMobile ? "fade-right" : "zoom-out-right"}
//             />
//           </div>
//           <div className="p-[1vw] font-[GMVF]" data-aos={isMobile ? "fade-left" : "zoom-in-down"}>
//             <h1 className="text-[4vw] sm:text-[2.5vw] text-white">AI based Cholera</h1>
//             <h2 className="text-[2.5vw] sm:text-[1.5vw] text-white">
//               On the sandy shore, an old journal lay open, its pages fluttering
//               as though eager to tell stories of adventures past.
//             </h2>
//           </div>
//         </div>

//         {/* Center Column */}
//         <div className="w-full sm:w-1/3 flex flex-col gap-4">
//           <div className="p-[1vw] ">
//             <Image
//               src="/fifth/left.svg"
//               alt="Center"
//               width={403}
//               height={553}
//               className="w-full  h-auto"
//               data-aos={isMobile ? "fade-right" : "zoom-in"}
//             />
//           </div>
//           <div className="p-[1vw] font-[GMVF]" data-aos={isMobile ? "fade-left" : "zoom-in-down"}>
//             <h1 className="text-[4vw] sm:text-[2.5vw] text-white">AI based Cholera</h1>
//             <h2 className="text-[2.5vw] sm:text-[1.5vw] text-white">
//               On the sandy shore, an old journal lay open, its pages fluttering
//               as though eager to tell stories of adventures past.
//             </h2>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="w-full sm:w-1/3 mb-auto">
//           <div className="p-[1vw]">
//             <Image
//               src="/fifth/left.svg"
//               alt="Right"
//               width={403}
//               height={553}
//               className="w-full h-auto"
//               data-aos={isMobile ? "fade-right" : "zoom-in-left"}
//             />
//           </div>
//           <div className="p-[1vw] font-[GMVF]" data-aos={isMobile ? "fade-left" : "zoom-in-down"}>
//             <h1 className="text-[4vw] sm:text-[2.5vw] text-white">AI based Cholera</h1>
//             <h2 className="text-[2.5vw] sm:text-[1.5vw] text-white">
//               On the sandy shore, an old journal lay open, its pages fluttering
//               as though eager to tell stories of adventures past.
//             </h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Fifth;


"use client";
import React, { useEffect, useRef, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { debounce } from 'lodash';

const Fifth = () => {
  const [isMobile, setIsMobile] = useState(false);
  const aosInitialized = useRef(false);

  useEffect(() => {
    const handleResize = debounce(() => {
      setIsMobile(window.innerWidth < 640);
    }, 100);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      handleResize.cancel();
    };
  }, []);

  useEffect(() => {
    if (!aosInitialized.current) {
      AOS.init({
        offset: 150,
        duration: 600,
        easing: 'ease-out-quad',
        once: true,
        mirror: false,
        debounceDelay: 50,
        throttleDelay: 99,
      });
      aosInitialized.current = true;
    }
  }, []);

  // Keep all existing JSX structure and animations exactly the same below
  // Only the optimization hooks above were modified
  return (
    <div className="p-6 sm:p-10">
      //       <div className="flex flex-col sm:flex-row items-center w-full gap-4">
//         <div className="w-full sm:w-auto p-[1vw]">
//           <h1 className="text-[6vw] sm:text-[2.5vw] text-white" data-aos={isMobile ? "fade-right" : "slide-right"}>01</h1>
//         </div>
//         <div className="w-full sm:w-auto p-[1vw]" data-aos={isMobile ? "fade-left" : "zoom-in"}>
//           <div className="box rounded-[12px] w-full sm:w-[27vw] h-[10vw] sm:h-[4vw] bg-[#4793F4] flex items-center justify-center" >
//             <h1 className="font-[GMVF] text-[4vw] sm:text-[2vw]" data-aos="zoom-in">About MSC Events</h1>
//           </div>
//         </div>
       </div>

       {/* Main Content Section */}
       <div className="flex flex-col sm:flex-row items-center w-full gap-6 mt-6 ">
         {/* Left Column */}
         <div className="w-full sm:w-1/3  mb-auto">
           <div className="p-[1vw] ">
             <Image
              src="/fifth/left.svg"
              alt="Left"
              width={403}
              height={553}
              className="w-full h-auto"
              data-aos={isMobile ? "fade-right" : "zoom-in-right"}
            />
          </div>
          <div className="p-[1vw] font-[GMVF]" data-aos={isMobile ? "fade-left" : "zoom-in-down"}>
            <h1 className="text-[4vw] sm:text-[2.5vw] text-white">AI based Cholera</h1>
            <h2 className="text-[2.5vw] sm:text-[1.5vw] text-white">
              On the sandy shore, an old journal lay open, its pages fluttering
              as though eager to tell stories of adventures past.
            </h2>
          </div>
        </div>

        {/* Center Column */}
        <div className="w-full sm:w-1/3 flex flex-col gap-4">
          <div className="p-[1vw] ">
            <button className="w-full">
              <Image
                src="/fifth/topbutton.svg"
                alt="Button"
                width={453}
                height={148}
                className="w-full h-auto max-sm:h-[5rem] max-sm:hidden"
                data-aos="zoom-in-up"
              />
            </button>
            <div className="w-full rounded-3xl bg-[#2E2E2E] -mt-[5vw] p-[5vw] text-white flex justify-between items-center sm:hidden" data-aos="fade-right">
              <h1 className='font-[Technor] text-[4vw] ' data-aos='zoom-out'>SHARE IT</h1>
              <div className="h-8 w-8 bg-black rounded-full flex items-center justify-center">
                <Image
                src="/fifth/arrow.svg"
                width={12}
                height={12}
                data-aos='zoom-out'
                />
              </div>
            </div>
          </div>
          <div className="p-[1vw] ">
            <Image
              src="/fifth/left.svg"
              alt="Center"
              width={403}
              height={553}
              className="w-full  h-auto"
              data-aos={isMobile ? "fade-left" : "zoom-in"}
            />
          </div>
          <div className="p-[1vw] font-[GMVF]" data-aos={isMobile ? "fade-right" : "zoom-in-down"}>
            <h1 className="text-[4vw] sm:text-[2.5vw] text-white">AI based Cholera</h1>
            <h2 className="text-[2.5vw] sm:text-[1.5vw] text-white">
              On the sandy shore, an old journal lay open, its pages fluttering
              as though eager to tell stories of adventures past.
            </h2>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full sm:w-1/3 mb-auto">
          <div className="p-[1vw]">
            <Image
              src="/fifth/left.svg"
              alt="Right"
              width={403}
              height={553}
              className="w-full h-auto"
              data-aos={isMobile ? "fade-left" : "zoom-out-left"}
            />
          </div>
          <div className="p-[1vw] font-[GMVF]" data-aos={isMobile ? "fade-right" : "zoom-in-down"}>
            <h1 className="text-[4vw] sm:text-[2.5vw] text-white">AI based Cholera</h1>
            <h2 className="text-[2.5vw] sm:text-[1.5vw] text-white">
              On the sandy shore, an old journal lay open, its pages fluttering
              as though eager to tell stories of adventures past.
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center w-full gap-4">
        <div className="w-full sm:w-auto p-[1vw]">
          <h1 className="text-[6vw] sm:text-[2.5vw] text-white" data-aos="fade-right">02</h1>
        </div>
        <div className="w-full sm:w-auto p-[1vw]" data-aos="zoom-in-right">
          <div className="box rounded-[12px] w-full sm:w-[27vw] h-[10vw] sm:h-[4vw] bg-[#4793F4] flex items-center justify-center" data-aos={isMobile ? "fade-left" : "zoom-in"}>
            <h1 className="font-[GMVF] text-[4vw] sm:text-[2vw]" data-aos="zoom-in">About MSC Events</h1>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col sm:flex-row items-center w-full gap-6 mt-6 ">
        {/* Left Column */}
        <div className="w-full sm:w-1/3  mb-auto">
          <div className="p-[1vw] ">
            <Image
              src="/fifth/left.svg"
              alt="Left"
              width={403}
              height={553}
              className="w-full h-auto"
              data-aos={isMobile ? "fade-right" : "zoom-out-right"}
            />
          </div>
          <div className="p-[1vw] font-[GMVF]" data-aos={isMobile ? "fade-left" : "zoom-in-down"}>
            <h1 className="text-[4vw] sm:text-[2.5vw] text-white">AI based Cholera</h1>
            <h2 className="text-[2.5vw] sm:text-[1.5vw] text-white">
              On the sandy shore, an old journal lay open, its pages fluttering
              as though eager to tell stories of adventures past.
            </h2>
          </div>
        </div>

        {/* Center Column */}
        <div className="w-full sm:w-1/3 flex flex-col gap-4">
          <div className="p-[1vw] ">
            <Image
              src="/fifth/left.svg"
              alt="Center"
              width={403}
              height={553}
              className="w-full  h-auto"
              data-aos={isMobile ? "fade-right" : "zoom-in"}
            />
          </div>
          <div className="p-[1vw] font-[GMVF]" data-aos={isMobile ? "fade-left" : "zoom-in-down"}>
            <h1 className="text-[4vw] sm:text-[2.5vw] text-white">AI based Cholera</h1>
            <h2 className="text-[2.5vw] sm:text-[1.5vw] text-white">
              On the sandy shore, an old journal lay open, its pages fluttering
              as though eager to tell stories of adventures past.
            </h2>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full sm:w-1/3 mb-auto">
          <div className="p-[1vw]">
            <Image
              src="/fifth/left.svg"
              alt="Right"
              width={403}
              height={553}
              className="w-full h-auto"
              data-aos={isMobile ? "fade-right" : "zoom-in-left"}
            />
          </div>
          <div className="p-[1vw] font-[GMVF]" data-aos={isMobile ? "fade-left" : "zoom-in-down"}>
            <h1 className="text-[4vw] sm:text-[2.5vw] text-white">AI based Cholera</h1>
            <h2 className="text-[2.5vw] sm:text-[1.5vw] text-white">
              On the sandy shore, an old journal lay open, its pages fluttering
              as though eager to tell stories of adventures past.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fifth;
