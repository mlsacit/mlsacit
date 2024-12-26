"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

const AboutPage = () => {
  const logoRef = useRef(null); // Reference for the logo image
  const navbarRef = useRef(null); // Reference for the Navbar container
  const [isMobile, setIsMobile] = useState(false); // State to track if screen is mobile

  // Detect screen size on load and on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 642px)").matches);
    };

    handleResize(); // Check screen size on load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // GSAP animations for logo and Navbar
  useEffect(() => {
    const animateLogo = () => {
      const logoPosition = isMobile
        ? { x: "-47vw", y: "-5vh", scale: 0.75 } // Mobile position: top-left
        : { x: "0.5vw", y: "-1vh", scale: 1.2 }; // Desktop position: center

      gsap.to(logoRef.current, {
        ...logoPosition,
        duration: 0.75,
        ease: "power2.out",
      });
    };

    animateLogo();
  }, [isMobile]);

  return (
    <div className="bg-gradient-to-br from-gray-800 via-blue-700 to-black h-full overflow-hidden">
      {/* Navbar */}
      <div ref={navbarRef}>
        <Navbar />
      </div>

      {/* Logo */}
      <div className="flex absolute justify-center items-center z-10 top-[4vh] left-[47vw]">
        <img
          src="/msc_logo.png"
          alt="MSC Logo"
          width={80}
          height={80}
          ref={logoRef} // Reference for GSAP animation
        />
      </div>

      {/* Background Image with Glow Effect */}
      <img
        src="/vector.png"
        alt="Background"
        className="absolute top-1/2 left-1/2 w-full h-[80%] object-contain z-0 transform -translate-x-1/2 -translate-y-1/2 "
      />

      {/* Main Content */}
      <div className="relative z-10 p-4">
        {/* Centered Image */}
        <div className="flex justify-center items-center py-8">
          <img
            src="/group.png"
            alt="Group Image"
            className="w-full sm:max-w-xs md:max-w-md lg:max-w-4xl max-h-lg rounded-xl shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          />
        </div>

        <div className="h-full">
          <div className="container mx-auto p-4 text-white m-2">
            {/* Heading with border */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold pt-2 pb-2 text-center text-amber-100 font-[CB] border-2 border-[#fef3c769] px-4 py-2 inline-block">
              MLSA club - CIT
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-left font-[Excon] border-t-2  border-[#fef3c769]  mt-4  py-2 inline-block">
              Our club is a vibrant community of tech enthusiasts, innovators, and learners
              passionate about exploring and mastering cutting-edge technologies. As an official
              Microsoft-supported community, we are committed to fostering creativity,
              collaboration, and skill-building among students.
            </p>

            {/* Team Section */}
            <p className="text-4xl sm:text-5xl md:text-6xl mt-5 font-bold pt-2 pb-2 text-center text-amber-100 font-[CB] border-2 border-[#fef3c769] px-4 py-2 inline-block">
              The <span className="text-amber-300 font-[CB]">Team</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg text-left font-[Excon] border-t-2  border-[#fef3c769]  mt-4  py-2 inline-block">
              Meet the heart of our club, an enthusiastic group of innovators, creators, and
              leaders who bring their unique talents together to drive our mission forward. Whether
              it&apos;s coding, designing, strategizing, or inspiring, our team is all about
              collaboration and impact.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-center font-[Excon]  pt-4 mt-4  py-2 inline-block">
              Meet the -{" "}
              <Link
                className="text-red-100 hover:underline font-[Excon]"
                href="https://teams-page-msc.vercel.app/"
              >
                Team
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Content Grid with Glow Effect on Hover */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 m-4 z-10 relative">
        <div className="p-6 text-white bg-white bg-opacity-10 transition-colors duration-700 ease-in-out hover:shadow-[0_0_20px_4px_rgba(0,0,0,0.5)] rounded-lg">
          <h3 className="text-center text-lg sm:text-xl md:text-2xl p-2 font-bold font-[Array]">GOAL</h3>
          <p className="text-sm sm:text-base md:text-lg font-thin font-[Khand]">
            To build a strong, connected tech community that not only learns and innovates but
            excels in using technology as a Force for Good. We aim to empower people to leverage
            technology to create opportunities, spark change, and drive progress for the greater
            good.
          </p>
        </div>

        <div className="p-6 text-white bg-white bg-opacity-10 transition-colors duration-700 ease-in-out hover:shadow-[0_0_20px_4px_rgba(0,0,0,0.5)] rounded-lg">
          <h3 className="text-center text-lg sm:text-xl md:text-2xl p-2 font-bold font-[Array]">
            MISSION
          </h3>
          <p className="text-sm sm:text-base md:text-lg font-thin font-[Khand]">
            MLSA CIT is committed to going beyond textbooks by equipping individuals with the
            knowledge, skills, and resources to make an impact. We emphasize spreading the latest
            advancements in technology through hands-on learning opportunities such as workshops,
            webinars, and events. Empowering individuals to use technology for positive change and
            fostering collaboration to create meaningful solutions are at the heart of its mission.
          </p>
        </div>

        <div className="p-6 text-white bg-white bg-opacity-10 transition-colors duration-700 ease-in-out hover:shadow-[0_0_20px_4px_rgba(0,0,0,0.5)] rounded-lg">
          <h3 className="text-center text-lg sm:text-xl md:text-2xl p-2 font-bold font-[Array]">VISION</h3>
          <p className="text-sm sm:text-base md:text-lg font-thin font-[Khand]">
            At MLSA CIT, the vision is a world where technology is not just a tool, but a force for
            good—transforming ideas into impactful solutions and empowering individuals to shape a
            better future. It strives to foster a community that uses innovation to solve
            challenges and create lasting value.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;



