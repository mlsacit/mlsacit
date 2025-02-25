"use client";

import React, { useEffect, useRef, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { debounce } from 'lodash';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const Internal1 = [
    "/fifth/zeitgist-1.jpg",
    "/fifth/zeitgist-2.jpg",
    // "/fifth/zeitgist3.svg"
  ];
  const Internal2 = [
    "/fifth/ui_ux-1.jpg",
    "/fifth/ui_ux-2.jpg",
    // "/fifth/zeitgist3.svg"
  ];
  const Internal3 = [
    "/fifth/genai-1.jpg",
    "/fifth/genai-2.jpg",
    // "/fifth/zeitgist3.svg"
  ];
  const External1 = [
    "/fifth/tech_summit-1.jpg", 
    "/fifth/tech_summit-2.jpg",
    // "/fifth/zeitgist3.svg"
  ];
  const External2 = [
    "/fifth/ai_hackathon-1.jpg",
    "/fifth/ai_hackathon-2.jpg",
    // "/fifth/zeitgist3.svg"
  ];
  const External3 = [
    "/fifth/visit-1.jpg",
    "/fifth/visit-2.jpg",
    // "/fifth/zeitgist3.svg"
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,  // Adjust speed as needed
    fade: true,           // Smooth fade transition
    arrows: false,
    accessibility: true,
  };

  // Keep all existing JSX structure and animations exactly the same below
  // Only the optimization hooks above were modified
  return (
    <div className="p-6 sm:p-10">
      <div className="flex flex-col sm:flex-row items-center w-full gap-4">
        <div className="w-full sm:w-auto p-[1vw]">
          <h1 className="text-[6vw] sm:text-[2.5vw] text-white" data-aos={isMobile ? "fade-right" : "slide-right"}>01</h1>
        </div>
        <div className="w-full sm:w-auto p-[1vw]" data-aos={isMobile ? "fade-left" : "zoom-in"}>
          <div className="box rounded-[12px] w-full sm:w-[27vw] h-[10vw] sm:h-[4vw] bg-[#4793F4] flex items-center justify-center" >
            <h1 className="font-[GMVF] text-[4vw] sm:text-[2vw]" data-aos="zoom-in">Internal Events</h1>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col sm:flex-row items-center w-full gap-6 mt-6 ">
        {/* Left Column */}
        <div className="w-full sm:w-1/3 mb-auto">
          <div className="p-[1vw]">
            <Slider {...settings}>
              {Internal1.map((src, index) => (
                <div key={index}>
            <Image
              src={src}
              alt={`Left ${index}`}
              width={403}
              height={553}
              className="w-full h-auto rounded-xl"
              data-aos={isMobile ? "fade-left" : "zoom-out-left"}
            />
            </div>
              ))}
            </Slider>
          </div>
          <div className="p-[1vw] font-[GMVF]" data-aos={isMobile ? "fade-right" : "zoom-in-down"}>
            <div className='flex justify-between items-center'>
              <h1 className="text-[4vw] sm:text-[1.5vw] text-white">The ZEITGEIST: AI and redefined engineering</h1>
              <p className="text-lg text-gray-400">28/06/2024</p>
            </div>
            <h2 className="text-[2.5vw] sm:text-[1vw] text-white">
            A globally recognized event with over 350 participants, it explored the impact of AI, Generative AI, and Copilot in modern engineering. Industry experts Mr. Lalit Rawat and Mr. Lakshit Pant discussed how students can leverage these technologies, accelerate learning, and enhance their professional growth.
            </h2>
          </div>
        </div>


        {/* Center Column */}
        <div className="w-full sm:w-1/3 mb-auto">
          {/* <div className="p-[1vw] ">
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
                  alt='arrow'
                  width={12}
                  height={12}
                  data-aos='zoom-out'
                />
              </div>
            </div>
          </div> */}
          <div className="p-[1vw]">
            <Slider {...settings}>
              {Internal2.map((src, index) => (
                <div key={index}>
            <Image
              src={src}
              alt={`Left ${index}`}
              width={403}
              height={553}
              className="w-full h-auto rounded-xl"
              data-aos={isMobile ? "fade-left" : "zoom-out-left"}
            />
            </div>
              ))}
            </Slider>
          </div>
          <div className="p-[1vw] font-[GMVF]" data-aos={isMobile ? "fade-right" : "zoom-in-down"}>
            <div className='flex justify-between items-center'>
              <h1 className="text-[4vw] sm:text-[1.5vw] text-white">Understanding UI/UX </h1>
              <p className="text-lg text-gray-400">03/06/2024</p>
            </div>
            <h2 className="text-[2.5vw] sm:text-[1vw] text-white">
            The UI/UX workshop, led by the exceptional Imthiyaz Ahmed, attracted over 100 participants. It provided deep insights into design principles, user experience strategies, and the latest industry trends, equipping attendees with valuable knowledge to enhance their design approach.
            </h2>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full sm:w-1/3 mb-auto">
          <div className="p-[1vw]">
            <Slider {...settings}>
              {Internal3.map((src, index) => (
                <div key={index}>
            <Image
              src={src}
              alt={`Left ${index}`}
              width={403}
              height={553}
              className="w-full h-auto rounded-xl"
              data-aos={isMobile ? "fade-left" : "zoom-out-left"}
            />
            </div>
              ))}
            </Slider>
          </div>
          <div className="p-[1vw] font-[GMVF]" data-aos={isMobile ? "fade-right" : "zoom-in-down"}>
            <div className='flex justify-between items-center'>
              <h1 className="text-[4vw] sm:text-[1.5vw] text-white">Building Intelligent Systems with GEN AI and RAG</h1>
              <p className="text-lg text-gray-400">11/11/2024</p>
            </div>
            <h2 className="text-[2.5vw] sm:text-[1vw] text-white">
            The GenAI and RAG workshop, led by expert Deepak Chawla, was an intensive 5-day program covering AI, RAG, LLMs, and memory optimization with LangChain. Students gained valuable insights into AI-driven innovation, mastering cutting-edge tools while exploring career opportunities in this evolving field.
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
            <h1 className="font-[GMVF] text-[4vw] sm:text-[2vw]" data-aos="zoom-in">External Events</h1>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col sm:flex-row items-center w-full gap-6 mt-6 ">
        {/* Left Column */}
        <div className="w-full sm:w-1/3  mb-auto">
          <div className="p-[1vw] ">
            <Slider {...settings}>
              {External1.map((src, index) => (
                <div key={index}>
            <Image
              src={src}
              alt={`Left ${index}`}
              width={403}
              height={553}
              className="w-full h-auto rounded-xl"
              data-aos={isMobile ? "fade-right" : "zoom-out-right"}
            />
            </div>
              ))}
            </Slider>
          </div>
          <div className="p-[1vw] font-[GMVF]" data-aos={isMobile ? "fade-left" : "zoom-in-down"}>
            <div className='flex justify-between items-center'>
            <h1 className="text-[4vw] sm:text-[1.5vw] text-white">Bangalore tech summit</h1>
            <p className="text-lg text-gray-400">21/11/2024</p>
            </div>
            <h2 className="text-[2.5vw] sm:text-[1vw] text-white">
            The MLSA CIT Chapter embarked on an enriching journey to the Bangalore Tech Summit at Palace Grounds. The group immersed themselves in the cutting-edge world of technology, networking with industry experts, and gaining insights into the future of innovation. 
            </h2>
          </div>
        </div>

        {/* Center Column */}
        <div className="w-full sm:w-1/3  mb-auto">
          <div className="p-[1vw] ">
            <Slider {...settings}>
              {External2.map((src, index) => (
                <div key={index}>
            <Image
              src={src}
              alt={`Left ${index}`}
              width={403}
              height={553}
              className="w-full h-auto rounded-xl"
              data-aos={isMobile ? "fade-right" : "zoom-out-right"}
            />
            </div>
              ))}
            </Slider>
          </div>
          <div className="p-[1vw] font-[GMVF]" data-aos={isMobile ? "fade-left" : "zoom-in-down"}>
            <div className='flex justify-between items-center'>
            <h1 className="text-[4vw] sm:text-[1.5vw] text-white">AI Hackathon with meta llama</h1>
            <p className="text-lg text-gray-400">19/10/2024</p>
            </div>
            <h2 className="text-[2.5vw] sm:text-[1vw] text-white">
            AI Hackathon with Meta Llama brought together top talent for an intense problem-solving challenge. Representing MLSA CIT, President Dilip and Technical Lead Nikhil helped leverage cutting-edge AI to tackle real-world problems, pushing the boundaries of innovation and hands-on learning.
            </h2>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full sm:w-1/3  mb-auto">
          <div className="p-[1vw] ">
            <Slider {...settings}>
              {External3.map((src, index) => (
                <div key={index}>
            <Image
              src={src}
              alt={`Left ${index}`}
              width={403}
              height={553}
              className="w-full h-auto rounded-xl"
              data-aos={isMobile ? "fade-right" : "zoom-out-right"}
            />
            </div>
              ))}
            </Slider>
          </div>
          <div className="p-[1vw] font-[GMVF]" data-aos={isMobile ? "fade-left" : "zoom-in-down"}>
            <div className='flex justify-between items-center'>
            <h1 className="text-[4vw] sm:text-[1.5vw] text-white">AI applications and Co-pilot technology workshop</h1>
            <p className="text-lg text-gray-400">01/02/2025</p>
            </div>
            <h2 className="text-[2.5vw] sm:text-[1vw] text-white">
            The Microsoft Luxor Office buzzed with innovation as a workshop on AI applications and Copilot technology drew an incredible turnout. Key contributors, Tejas R Mutalik and Marketing Lead Bharath Kumar S, played a crucial role in organizing the event, leading hands-on sessions on AI-powered productivity tools.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fifth;
