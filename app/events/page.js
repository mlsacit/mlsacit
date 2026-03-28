"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import "./eventpage.css";

const events = [
  {
    id: 1,
    title: "Tech Workshop 2023",
    image: "/events/event1.jpg",
    description: "An immersive workshop on the latest technologies and frameworks. Participants learned about AI, cloud computing, and modern web development techniques.",
    date: "October 15, 2023",
    fileName: "workshop.js",
  },
  {
    id: 2,
    title: "Hackathon Challenge",
    image: "/events/event2.jpg",
    description: "A 24-hour coding marathon where teams competed to build innovative solutions for real-world problems. Projects ranged from healthcare apps to sustainable tech.",
    date: "November 5, 2023",
    fileName: "hackathon.js",
  },
  {
    id: 3,
    title: "Developer Conference",
    image: "/events/event3.jpg",
    description: "Industry experts shared insights on software development best practices, career growth, and emerging technologies in this day-long conference.",
    date: "December 10, 2023",
    fileName: "conference.js",
  },
  {
    id: 4,
    title: "AI Summit",
    image: "/events/event4.jpg",
    description: "Exploring the frontiers of artificial intelligence with hands-on demonstrations, expert panels, and networking opportunities.",
    date: "January 20, 2024",
    fileName: "ai_summit.js",
  },
  {
    id: 5,
    title: "Web3 Workshop",
    image: "/events/event5.jpg",
    description: "Introduction to blockchain, cryptocurrencies, and decentralized applications. Participants built their first smart contract.",
    date: "February 15, 2024",
    fileName: "web3.js",
  },
];

export default function EventsPage() {
  const router = useRouter();
  const [selectedEvent, setSelectedEvent] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const handleViewEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleBackToEvents = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020084] to-[#000149] text-white">
      <Navbar />
      <div id="container" className="relative z-10 p-6">
        <div className="flex justify-center items-center mt-8 mb-12">
          <h1 className="text-4xl font-extrabold text-white">MLSA CIT EVENTS</h1>
        </div>
        
        {selectedEvent ? (
          <div className="flex justify-center items-center px-4 py-6">
            <div className="w-full max-w-2xl bg-white/10 backdrop-blur p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-blue-400 mb-2">{selectedEvent.title}</h2>
              <p className="text-gray-300 mb-4">{selectedEvent.date}</p>
              <p className="text-white text-lg mb-6">{selectedEvent.description}</p>
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium"
                onClick={handleBackToEvents}
              >
                Back to Events
              </button>
            </div>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {events.map((event, index) => (
              <motion.div 
                key={event.id} 
                className="bg-white/10 backdrop-blur p-4 rounded-lg shadow-lg border border-white/20 cursor-pointer hover:shadow-xl hover:scale-105 transition"
                variants={itemVariants}
                onClick={() => handleViewEvent(event)}
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-2">{event.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{event.date}</p>
                <p className="text-white text-sm line-clamp-3 mb-4">{event.description}</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium">
                  View Details
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}

        <div className="flex justify-center items-center mt-12 mb-6">
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium"
            onClick={() => router.push('/')}
          >
            Back to Home
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
