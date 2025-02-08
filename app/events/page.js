"use client"; 
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/gsap-core";
import React from "react"; 
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 
import "../events/eventpage.css";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

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
    <div className="relative w-full h-full bg-gradient-to-b from-[#020084] to-[#000149] z-0">
      
      <Navbar />
      
      <Image
        src="/Vector up.png"
        alt="vector 1"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 z-0 opacity-60"
      />
      
      <div className="flex justify-center items-center mt-8">
        <h1 className="text-4xl font-extrabold text-white">EVENTS</h1>
      </div>
      
      <div id="container" className="overflow-y-auto pb-16">
        <div className="row row1">
          <div className="content">
            <h3>Generative AI (GenAI) Workshop</h3>
          </div>
          <div className="overlay">
            <Image src="/events/images/GAI.jpg" alt="Image 1" />
            <p className="font-[MB]">Generative AI is revolutionizing how we interact with technology, enabling machines to create content from scratch—whether it&apos;s text, images, music, or code. In this workshop, we&apos;ll dive into the concepts behind GenAI and explore its applications in creative fields, business, and more. You&apos;ll learn about popular frameworks like GPT-3 and DALL·E, and how these AI models are trained to generate realistic and contextually appropriate outputs. Join us to uncover the immense potential of Generative AI, experiment with building your own AI models, and gain insights into the future of AI-driven creativity.</p>
          </div>
        </div>

        <div className="row row2">
          <div className="content">
            <h3>LinkedIn Workshop</h3>
          </div>
          <div className="overlay">
            <Image src="/events/images/link.jpg" alt="Image 2" />
            <p className="font-[MB]">LinkedIn has become the premier platform for professionals to network, showcase their skills, and advance their careers. In this workshop, we&apos;ll guide you through the essential steps to build a standout LinkedIn profile, from crafting an impactful headline to optimizing your work experience and skills. We will also cover strategies for expanding your professional network, engaging with thought leaders, and utilizing LinkedIn features to enhance your visibility in your industry. Whether you&apos;re looking to make connections, land a job, or grow your personal brand, this workshop will equip you with the tools to leverage LinkedIn effectively.</p>
          </div>
        </div>

        <div className="row row3">
          <div className="content">
            <h3>Web Development (WebDev) Workshop</h3>
          </div>
          <div className="overlay">
            <Image src="/events/images/Webdev.jpg" alt="Image 3" />
            <p className="font-[MB]">Web development is the backbone of the digital world, powering everything from personal blogs to complex enterprise applications. This workshop will introduce you to the fundamentals of web development, covering both front-end and back-end technologies. You&apos;ll learn about HTML, CSS, and JavaScript for building dynamic websites, along with an overview of popular frameworks like React and Node.js. With hands-on projects and practical tips, this workshop will help you start your journey as a web developer and give you the skills to build interactive, user-friendly websites that work seamlessly across devices.</p>
          </div>
        </div>

        <div className="flex justify-center items-center mt-8">
          <Link href="/">
            <button className="px-6 py-2 bg-blue-600 bg-opacity-60 flex gap-2 justify-between items-center text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 ease-in-out shadow-lg">
              <FaArrowLeft />
              Back to HomePage
            </button>
          </Link>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Page;
