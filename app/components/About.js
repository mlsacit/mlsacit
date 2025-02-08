import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEye } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { GoGoal } from "react-icons/go";

const About = () => {

  const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 640);
      };
  
      handleResize(); // Check screen size initially
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  const [isInView, setIsInView] = useState({
    vision: false,
    mission: false,
    goal: false,
  });

  const sectionRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const goalRef = useRef(null);

  useEffect(() => {
      AOS.init({
        offset:120,
        duration: 1000,
        easing: "ease-out",
        once: true,
        mirror:false
      });
    }, []);

  // useEffect(() => {
  //   const visionElement = visionRef.current;
  //   const missionElement = missionRef.current;
  //   const goalElement = goalRef.current;
  
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           if (entry.target === visionElement) {
  //             setIsInView((prev) => ({ ...prev, vision: true }));
  //           }
  //           if (entry.target === missionElement) {
  //             setIsInView((prev) => ({ ...prev, mission: true }));
  //           }
  //           if (entry.target === goalElement) {
  //             setIsInView((prev) => ({ ...prev, goal: true }));
  //           }
  //         }
  //       });
  //     },
  //     { threshold: 0.5 }
  //   );
  
  //   if (visionElement) observer.observe(visionElement);
  //   if (missionElement) observer.observe(missionElement);
  //   if (goalElement) observer.observe(goalElement);
  
  //   return () => {
  //     if (visionElement) observer.unobserve(visionElement);
  //     if (missionElement) observer.unobserve(missionElement);
  //     if (goalElement) observer.unobserve(goalElement);
  //   };
  // }, []);
  

  return (
    <div ref={sectionRef} className=" mt-14 px-4 py-8 md:px-8 lg:px-16 h-auto relative">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-2xl font-[CB] sm:text-3xl lg:text-4xl font-bold mb-4" data-aos="flip-up">
          About  <span className="text-blue-500"> MLSA Club</span>
        </h1>
        <p className="text-sm sm:text-base max-w-3xl mx-auto font-[MB]" data-aos="flip-down">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum corrupti aliquam tempore quas, ab,
          perspiciatis quaerat eum cum exercitationem et reiciendis sequi, adipisci culpa.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch">
        {/* Vision Card */}
        <div
          ref={visionRef}
          className={`flex flex-col items-center bg-gray-900 bg-opacity-80 w-full lg:w-1/3 p-6 rounded-xl shadow-lg `}
          data-aos={isMobile ? "slide-right" : "zoom-in-right"}
        >
          <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mb-6 rounded-full border-4 border-white bg-gray-800" >
            <FaEye className="text-4xl sm:text-5xl text-white" />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center font-[Array] " >Vision</h2>
          <p className="text-xs sm:text-sm lg:text-base text-center font-[MB]" >
            At MLSA CIT, the vision is a world where technology is not just a tool, but a force for good—transforming
            ideas into impactful solutions and empowering individuals to shape a better future.
          </p>
        </div>

        {/* Mission Card */}
        <div
          ref={missionRef}
          className={`flex flex-col items-center bg-gray-700 bg-opacity-80 w-full lg:w-1/3 p-6 rounded-xl shadow-lg `}
          data-aos={isMobile ? "slide-left" : "zoom-in-up"}
        >
          <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mb-6 rounded-full border-4 border-white bg-gray-800" >
            <IoIosRocket className="text-4xl sm:text-5xl text-white" />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center font-[Array]" >Mission</h2>
          <p className="text-xs sm:text-sm lg:text-base text-center font-[MB]" >
            MLSA CIT is committed to going beyond textbooks by equipping individuals with the knowledge, skills, and
            resources to make an impact through hands-on learning opportunities such as workshops, webinars, and events.
          </p>
        </div>

        {/* Goal Card */}
        <div
          ref={goalRef}
          className={`flex flex-col items-center bg-gray-900 bg-opacity-80 w-full lg:w-1/3 p-6 rounded-xl shadow-lg`}
          data-aos={isMobile ? "slide-right" : "zoom-in-left"}
        >
          <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mb-6 rounded-full border-4 border-white bg-gray-800">
            <GoGoal className="text-4xl sm:text-5xl text-white" />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center font-[Array]">Goal</h2>
          <p className="text-xs sm:text-sm lg:text-base text-center font-[MB]">
            To build a strong, connected tech community that not only learns and innovates but excels in using
            technology to create opportunities, spark change, and drive progress for the greater good.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
