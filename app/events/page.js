
"use client"; 
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import React from "react"; 
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 
import "../events/eventpage.css";

const Page = () => {
  const logoRef = useRef(null);
  const navbarRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 642px)").matches);
    };

    handleResize(); // Check screen size on load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      
        <Navbar />
      <div className="flex absolute justify-center items-center z-20 top-[4vh] left-[47vw]">
          <img
            src="/msc_logo.png"
            alt="MSC Logo"
            width={80}
            height={80} 
            ref={logoRef} 
            />
        </div>
      <img
        src="/vector.png"
        alt="Background"
        className="absolute top-1/2 left-1/2 w-full h-[80%] object-contain z-0 transform -translate-x-1/2 -translate-y-1/2"
      />

      <div id="container">
        <div className="row row1">
          <div className="content">
            <h3>Generative AI (GenAI) Workshop</h3>
          </div>
          <div className="overlay">
            <img src="/events/images/GAI.jpg" alt="Image 1" />
            <p className="font-[MB]">Generative AI is revolutionizing how we interact with technology, enabling machines to create content from scratch—whether it's text, images, music, or code. In this workshop, we'll dive into the concepts behind GenAI and explore its applications in creative fields, business, and more. You'll learn about popular frameworks like GPT-3 and DALL·E, and how these AI models are trained to generate realistic and contextually appropriate outputs. Join us to uncover the immense potential of Generative AI, experiment with building your own AI models, and gain insights into the future of AI-driven creativity.</p>
          </div>
        </div>

        <div className="row row2">
          <div className="content">
            <h3>LinkedIn Workshop</h3>
          </div>
          <div className="overlay">
            <img src="/events/images/link.jpg" alt="Image 2" />
            <p className="font-[MB]">LinkedIn has become the premier platform for professionals to network, showcase their skills, and advance their careers. In this workshop, we'll guide you through the essential steps to build a standout LinkedIn profile, from crafting an impactful headline to optimizing your work experience and skills. We will also cover strategies for expanding your professional network, engaging with thought leaders, and utilizing LinkedIn features to enhance your visibility in your industry. Whether you're looking to make connections, land a job, or grow your personal brand, this workshop will equip you with the tools to leverage LinkedIn effectively.</p>
          </div>
        </div>

        <div className="row row3">
          <div className="content">
            <h3>Web Development (WebDev) Workshop</h3>
          </div>
          <div className="overlay">
            <img src="/events/images/Webdev.jpg" alt="Image 3" />
            <p className="font-[MB]">Web development is the backbone of the digital world, powering everything from personal blogs to complex enterprise applications. This workshop will introduce you to the fundamentals of web development, covering both front-end and back-end technologies. You'll learn about HTML, CSS, and JavaScript for building dynamic websites, along with an overview of popular frameworks like React and Node.js. With hands-on projects and practical tips, this workshop will help you start your journey as a web developer and give you the skills to build interactive, user-friendly websites that work seamlessly across devices.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;


















