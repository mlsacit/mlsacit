"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { debounce } from "lodash";

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
    }
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
