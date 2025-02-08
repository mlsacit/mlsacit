// "use client";
// import Image from "next/image";
// import { useState, useEffect, useRef } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { gsap } from "gsap";
// import Lenis from "lenis";
// import Navbar from "./components/Navbar";
// import About from "./components/About";
// import Events from "./components/Events";
// import Teams from "./components/Teams";
// import Footer from "./components/Footer";
// import Second from "./components/Second";
// import Fifth from "./components/Fifth";
// // Import the Scroll component

// export default function Home() {
//   const logoRef = useRef(null);
//   const navbarRef = useRef(null);
//   const textSectionRef = useRef(null); // Ref for the text section
//   const blobRef = useRef(null); // Ref for the blob.svg
//   const [isMobile, setIsMobile] = useState(false);
//   const [isFullscreen, setIsFullscreen] = useState(false); // Track fullscreen state

//   useEffect(() => {
//       AOS.init({
//         offset:120,
//         duration: 1000,
//         easing: "ease-out",
//         once: true,
//         mirror:false
//       });
//     }, []);

//   // Detect screen size on load and on resize
//   useEffect(() => {
//     const lenis = new Lenis();
//     function raf(time, any) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);
//   }, []);
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.matchMedia("(max-width: 767px)").matches);
//     };

//     handleResize(); // Run on initial load
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [isMobile]);

//   // Fullscreen change listener
//   useEffect(() => {
//     const handleFullscreenChange = () => {
//       setIsFullscreen(!!document.fullscreenElement);
//     };

//     document.addEventListener("fullscreenchange", handleFullscreenChange);

//     return () => {
//       document.removeEventListener("fullscreenchange", handleFullscreenChange);
//     };
//   }, []);

//   // GSAP Animation for Logo, Navbar, Text, and Blob
//   useEffect(() => {
//     const animateLogoAndText = () => {
//       const logoScale = isMobile ? 0.18 : 0.25;
//       const logoPosition = isMobile ? "-40vw" : "0";
//       const logoVerticalShift = isMobile ? "-30rem" : "-27rem";

//       const tl = gsap.timeline();

//       // Logo animation
//       tl.to(logoRef.current, {
//         scale: logoScale,
//         x: logoPosition,
//         y: logoVerticalShift,
//         duration: 0.5,
//         delay: 1,
//       });

//       // Left and right navbar animations
//       tl.fromTo(
//         navbarRef.current.querySelector(".left-nav"),
//         { x: 50 },
//         { x: 0, opacity: 1, duration: 0.5 },
//         "<"
//       ).fromTo(
//         navbarRef.current.querySelector(".right-nav"),
//         { x: -50 },
//         { x: 0, opacity: 1, duration: 0.5 },
//         "<"
//       );

//       // Text animation after logo animation
//       tl.fromTo(
//         textSectionRef.current,
//         { opacity: 0, y: 50 },
//         { opacity: 1, y: 0, duration: 1 },
//         "<+0.5" 
//       );

//       // Blob animation after text animation
//       tl.fromTo(
//         blobRef.current,
//         { opacity: 0, scale: 0.5 },
//         { opacity: 1, scale: 1, duration: 1 },
//         "<" // Add delay for blob animation
//       );
//     };

//     animateLogoAndText();
//   }, [isMobile]); // Trigger animation on mobile or fullscreen change

//   const getTopValues = () => {
//     if (isFullscreen) {
//       return { meme1: "100vh", meme2: "100vh" }; // Adjust values for fullscreen
//     } else {
//       return { meme1: "-40vh", meme2: "-55vh" }; // Default values
//     }
//   };

//   const topValues = getTopValues();

//   return (
//     <div id="home" className="min-h-full relative overflow-hidden bg-black">

//       {/* Background Vector Image */}
//       <div
//         className="absolute inset-0 w-full h-full bg-center  max-sm:bg-contain lg:bg-cover z-0"
//         style={{ backgroundImage: "url('/Background.svg')" }}
//       ></div>

//       {/* Main Content */}
//       <div className="relative z-10 h-full w-full">
//         {/* Navbar */}
//         <div ref={navbarRef}>
//           <Navbar />
//         </div>

//         <div className="logo-custom absolute mt-32 w-full  flex justify-center   max-custom:h-[36rem] max-custom:mt-[9.4rem] ">
//           <Image
//             ref={logoRef}
//             src="/logo.svg"
//             alt="MSC Logo"
//             width={450}
//             height={450}
//           />
//         </div>

//         {/* Main Page Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-auto px-4 lg:px-8 py-12 gap-8 bg-am">
//           <div className="relative flex flex-col col-span-3 lg:flex-row items-center justify-between w-full bg-red h-[80vh] md:justify-center sm:justify-center max-sm:justify-center  ">
//             {/* Text Section */}
//             <div
//               ref={textSectionRef}
//               className="text-white lg:w-auto text-center lg:text-left m-2 mb-8 lg:mb-0 bg-b z-10 lg:absolute lg:left-0 lg:ml-0 max-sm:p-3 lg:overflow-visible"
//             >
//               <h1 className="font-extrabold text-3xl md:text-5xl lg:text-6xl font-[CB] max-sm:mt-[2.5vh] bg-clip-text text-transparent bg-gradient-to-r from-[#8AAAE5] max-sm:-ml-[25vw] max-sm:text-[8vw]">
//                 Microsoft Learn
//               </h1>
//               <h1 className="font-extrabold text-3xl md:text-5xl lg:text-6xl whitespace-nowrap font-[CB] max-sm:text-[8vw] max-sm:ml-[1vw]  bg-clip-text text-transparent bg-gradient-to-r from-transparent  to-[#FFFFFF] max-sm:-mt-[1vh] ">
//                 Student Ambassadors
//               </h1>
//               <h2 className="font-extrabold  md:text-3xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#1E2761]  to-[#408EC6] font-[CB]  max-sm:text-[5vw] max-sm:-ml-[56vw]">
//                 CIT CHAPTER
//               </h2>
//               <p className="p-3 text-sm md:text-base mt-4 font-[CB] max-sm:mt-[42vh] max-sm:text-left bg-[#11182784] max-sm:p-3 rounded-2xl max-sm:text-[3.5vw]">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
//                 pariatur porro mollitia, necessitatibus tenetur optio fugiat aut
//                 molestiae ea, velit totam dolore quam ratione?
//               </p>
//             </div>

//             {/* Foreground Image */}
//             <div className="absolute right-0  flex justify-center lg:justify-end h-auto w-full pt-[3rem] md:h-auto sm:h-auto max-sm:pt-0 max-sm:h-auto lg:translate-x-[11rem] z-0  lg:w-[70vw]">
//               <Image
//                 ref={blobRef}
//                 src="/blob.svg"
//                 alt="MSC Logo"
//                 layout="responsive"
//                 width={500}
//                 height={500}
//                 className="rounded-sm bg-opacity-100 object-cover "
//               />
//             </div>
//           </div>
//         </div>

//         <div className="secpage w-full min-h-full ">
//           <Second />
//         </div>

//         {/* Section Divider */}
//         <div className="relative w-full h-full mt-10">
//           <Image
//             src="/Banner2.svg"
//             alt="banner"
//             className="absolute"
//             width={1920}
//             height={36}
//             layout="responsive"
//             objectFit="contain"
//             data-aos="slide-right"
//           />
//           <Image
//             src="/Banner1.svg"
//             alt="banner"
//             // className="absolute z-10 w-full h-full object-cover max-sm:object-fill md:object-cover"
//             width={1920}
//             height={36}
//             layout="responsive"
//             objectFit="contain"
//             data-aos="slide-left"
//           />
//         </div>

//         {/* About Section */}
//         <div
//           id="about"
//           className=" about w-full min-h-screen scroll-mt-20 text-white px-4 lg:px-8 py-12 max-sm:py-0 max-sm:-mt-20  "
//         >
//           <About />
//         </div>

//         {/* Events Section */}
//         <div
//           id="events"
//           className=" events w-full  text-white px-4 lg:px-8 py-12   relative"
//         >
//           <Events />
//         </div>

//         <div className="secpage w-full h-full  ">
//           <Fifth />
//         </div>

//         {/* Teams Section */}
//         <div
//           id="teams"
//           className=" teams w-full h-full text-white overflow-x-visible scroll-mt-10 px-4 lg:px-8 py-24   relative"
//         >
//           <Teams />
//         </div>
//       </div>

//       <div className="">
//         <Footer />
//       </div>
//     </div>
//   );
// }


"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Events from "./components/Events";
import Teams from "./components/Teams";
import Footer from "./components/Footer";
import Second from "./components/Second";
import Fifth from "./components/Fifth";

export default function Home() {
  const logoRef = useRef(null);
  const navbarRef = useRef(null);
  const textSectionRef = useRef(null);
  const blobRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1000,
      easing: "ease-out",
      once: true,
      mirror: false,
      debounceDelay: 50
    });

    // Lenis initialization with cleanup
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true
    });
    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const animationId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    // Debounced resize handler
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setIsMobile(window.matchMedia("(max-width: 767px)").matches);
      }, 100);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  useEffect(() => {
    // GSAP animations with cleanup
    const ctx = gsap.context(() => {
      const animateLogoAndText = () => {
        const logoScale = isMobile ? 0.18 : 0.25;
        const logoPosition = isMobile ? "-40vw" : "0";
        const logoVerticalShift = isMobile ? "-30rem" : "-27rem";

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.to(logoRef.current, {
          scale: logoScale,
          x: logoPosition,
          y: logoVerticalShift,
          duration: 0.5,
          delay: 1,
          force3D: true
        });

        tl.fromTo(
          navbarRef.current.querySelector(".left-nav"),
          { x: 50 },
          { x: 0, opacity: 1, duration: 0.5 },
          "<"
        ).fromTo(
          navbarRef.current.querySelector(".right-nav"),
          { x: -50 },
          { x: 0, opacity: 1, duration: 0.5 },
          "<"
        );

        tl.fromTo(
          textSectionRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 },
          "<+0.5"
        );

        tl.fromTo(
          blobRef.current,
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 1 },
          "<"
        );
      };

      animateLogoAndText();
    });

    return () => ctx.revert();
  }, [isMobile]);

  // Keep remaining logic the same
  const getTopValues = () => {
    if (isFullscreen) {
      return { meme1: "100vh", meme2: "100vh" };
    } else {
      return { meme1: "-40vh", meme2: "-55vh" };
    }
  };

  const topValues = getTopValues();

  return (
    <div id="home" className="min-h-full relative overflow-hidden bg-black">
      {/* Optimized Background Image */}
      <div className="absolute inset-0 w-full h-full bg-center max-sm:bg-contain lg:bg-cover z-0">
        <Image
          src="/Background.svg"
          alt="Background"
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full w-full">
        <div ref={navbarRef}>
          <Navbar />
        </div>

        <div className="logo-custom absolute mt-32 w-full flex justify-center max-custom:h-[36rem] max-custom:mt-[9.4rem]">
          <Image
            ref={logoRef}
            src="/logo.svg"
            alt="MSC Logo"
            width={450}
            height={450}
            priority
          />
        </div>

        {/* Rest of your components remain the same */}
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-auto px-4 lg:px-8 py-12 gap-8 bg-am">
        <div className="relative flex flex-col col-span-3 lg:flex-row items-center justify-between w-full bg-red h-[80vh] md:justify-center sm:justify-center max-sm:justify-center  ">
            {/* Text Section */}
            <div
              ref={textSectionRef}
              className="text-white lg:w-auto text-center lg:text-left m-2 mb-8 lg:mb-0 bg-b z-10 lg:absolute lg:left-0 lg:ml-0 max-sm:p-3 lg:overflow-visible"
            >
              <h1 className="font-extrabold text-3xl md:text-5xl lg:text-6xl font-[CB] max-sm:mt-[2.5vh] bg-clip-text text-transparent bg-gradient-to-r from-[#8AAAE5] max-sm:-ml-[25vw] max-sm:text-[8vw]">
                Microsoft Learn
              </h1>
              <h1 className="font-extrabold text-3xl md:text-5xl lg:text-6xl whitespace-nowrap font-[CB] max-sm:text-[8vw] max-sm:ml-[1vw]  bg-clip-text text-transparent bg-gradient-to-r from-transparent  to-[#FFFFFF] max-sm:-mt-[1vh] ">
                Student Ambassadors
              </h1>
              <h2 className="font-extrabold  md:text-3xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#1E2761]  to-[#408EC6] font-[CB]  max-sm:text-[5vw] max-sm:-ml-[56vw]">
                CIT CHAPTER
              </h2>
              <p className="p-3 text-sm md:text-base mt-4 font-[CB] max-sm:mt-[42vh] max-sm:text-left bg-[#11182784] max-sm:p-3 rounded-2xl max-sm:text-[3.5vw]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                pariatur porro mollitia, necessitatibus tenetur optio fugiat aut
                molestiae ea, velit totam dolore quam ratione?
              </p>
            </div>

            {/* Foreground Image */}
            <div className="absolute right-0  flex justify-center lg:justify-end h-auto w-full pt-[3rem] md:h-auto sm:h-auto max-sm:pt-0 max-sm:h-auto lg:translate-x-[11rem] z-0  lg:w-[70vw]">
              <Image
                ref={blobRef}
                src="/blob.svg"
                alt="MSC Logo"
                layout="responsive"
                width={500}
                height={500}
                className="rounded-sm bg-opacity-100 object-cover "
              />
            </div>
          </div>
        </div>

        <div className="secpage w-full min-h-full">
          <Second />
        </div>

        {/* Section Divider */}
        <div className="relative w-full h-full mt-10">
          <Image
            src="/Banner2.svg"
            alt="banner"
            width={1920}
            height={36}
            className="absolute"
            data-aos="slide-right"
          />
          <Image
            src="/Banner1.svg"
            alt="banner"
            width={1920}
            height={36}
            data-aos="slide-left"
          />
        </div>

        {/* About Section */}
        <div
          id="about"
          className="about w-full min-h-screen scroll-mt-20 text-white px-4 lg:px-8 py-12 max-sm:py-0 max-sm:-mt-20"
        >
          <About />
        </div>

        {/* Events Section */}
        <div
          id="events"
          className="events w-full text-white px-4 lg:px-8 py-12 relative"
        >
          <Events />
        </div>

        <div className="secpage w-full h-full">
          <Fifth />
        </div>

        {/* Teams Section */}
        <div
          id="teams"
          className="teams w-full h-full text-white overflow-x-visible scroll-mt-10 px-4 lg:px-8 py-24 relative"
        >
          <Teams />
        </div>
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
}