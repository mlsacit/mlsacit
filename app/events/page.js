"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import "./eventpage.css"

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
  {
    id: 6,
    title: "Design Thinking Masterclass",
    image: "/events/event6.jpg",
    description: "A collaborative session on user-centered design approaches, prototyping techniques, and creating intuitive user experiences.",
    date: "March 5, 2024",
    fileName: "design.js",
  },
  {
    id: 7,
    title: "Cloud Computing Bootcamp",
    image: "/events/event7.jpg",
    description: "Intensive training on cloud platforms, serverless architecture, and deploying scalable applications in the cloud.",
    date: "April 12, 2024",
    fileName: "cloud.js",
  },
  {
    id: 8,
    title: "Git & Github Worksop",
    image: "/events/event8.jpg",
    description: "An interactive, hands-on workshop on Git and GitHub essentials was conducted by team tech member Ayushman & Chetan KP.",
    date: "May 17, 2024",
    fileName: "git.js",
  },
  {
    id: 9,
    title: "LinkedIn Workshop",
    image: "/events/event9.jpg",
    description: "A LinkedIn workshop by team member Bharat Kumar S guided students on building a strong professional presence, optimizing profiles, and leveraging networking opportunities.",
    date: "December 16, 2024",
    fileName: "linkedin.js",
  },
  {
    id: 10,
    title: "Webcraft: Web Development Workshop",
    image: "/events/event10.jpg",
    description: "The Web Development workshop, conducted by tech team member Chintu Rai, covered HTML, CSS and JavaScript providing a strong foundation in programming and web technologies.",
    date: "September 25, 2024",
    fileName: "webdev.js",
  },
  {
    id: 11,
    title: "Gamedev Workshop",
    image: "/events/event11.jpg",
    description: "The Game Development Workshop, conducted by team member Sreejith S, guided participants in using Godot and Pygame to develop their own games.",
    date: "February 08, 2025",
    fileName: "gamedev.js",
  },
];

export default function EventsPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleViewEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleBackToEvents = () => {
    setSelectedEvent(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-white p-6">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen text-lg">Loading...</div>
      ) : (
          <div id="container" className="font-mono w-full max-w-5xl mx-auto bg-[var(--bg-secondary)] p-6 rounded-lg shadow-lg border border-[var(--border-color)] overflow-hidden">
           <div className="terminal-header flex items-center w-auto justify-between border-b border-[var(--border-color)] mb-6">
             <div className="terminal-dots flex pt-2 space-x-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <span className="text-[var(--text-primary)] pt-2 opacity-80">mlsa-events.js - MLSA CIT</span>
          </div>
          
          <h1 className="text-3xl font-bold text-center text-[var(--accent-1)] mb-4">MLSA CIT Events</h1>
          <p className="text-[var(--comment-color)] text-center mb-6">Browse our past and upcoming events</p>
          <hr className="m-4 text-[var(--comment-color)]"></hr>
          {selectedEvent ? (
            <motion.div className="flex justify-center items-center px-4 py-6">
            <motion.div 
              className="w-full max-w-xl event-detail bg-[var(--bg-primary)] p-4 sm:p-6 rounded-lg shadow-lg border border-[var(--border-color)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-[var(--border-color)] p-4 rounded-lg mb-4">
                <h2 className="text-2xl font-semibold text-[var(--accent-2)] mb-2">{selectedEvent.title}</h2>
                <p className="text-[var(--comment-color)] mb-2">{selectedEvent.date}</p>
              </div>
          
              <p className="text-[var(--comment-color)] italic text-sm mb-4 w-full sm:w-2/3">
                <span className="block">/ **</span>
                <span className="text-white text-lg">{selectedEvent.description}</span>
                <span className="block">*/</span>
              </p>
          
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                <button className="register-button bg-[var(--accent-2)] text-[var(--bg-primary)] px-4 py-2 rounded font-medium w-full sm:w-auto">
                  Register Now
                </button>
                <button 
                  className="back-to-events bg-transparent text-[var(--accent-1)] border border-[var(--accent-1)] px-4 py-2 rounded w-full sm:w-auto"
                  onClick={handleBackToEvents}
                >
                  Back to Events
                </button>
              </div>
            </motion.div>
          </motion.div>
          
          ) : (
            <motion.div 
              className="events-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {events.map((event, index) => (
                <motion.div 
                  key={event.id} 
                  className="code-block bg-[var(--bg-primary)] p-4 rounded-lg shadow-lg border border-[var(--border-color)] cursor-pointer hover:translate-y-[-5px] transition"
                  variants={itemVariants}
                  style={{ "--index": index }}
                  onClick={() => handleViewEvent(event)}
                >
                  <div className="code-header flex justify-between items-center border-b border-[var(--border-color)] pb-2 mb-3">
                    <span className="file-name text-[var(--accent-2)]">{event.fileName}</span>
                    <span className="event-date text-[var(--comment-color)]">{event.date}</span>
                  </div>
                  
                  <div className="code-content">
                    <h3 className="function-name text-[var(--accent-1)] text-lg ">{`function`} <span className="text-[var(--accent-3)]">{event.title}</span> <span className="text-white">{`() {`}</span></h3>
                    <p className="pt-2 code-description text-[var(--text-primary)] font-mono text-md">{event.description.substring(0, 80)}...</p>
                    <div className="code-line pt-2">return <span className="text-[var(--accent-1)]">event</span>.<span className="text-[var(--accent-2)]">&quot;success&quot;</span>;</div>
                  </div>
                  
                  <div className="code-footer flex justify-between items-center mt-3 border-t border-[var(--border-color)] pt-2">
                    <button className="view-button bg-transparent text-[var(--accent-1)] border border-[var(--accent-1)] px-3 py-1 rounded text-sm">View Details</button>
                    <span className="line-numbers text-[var(--comment-color)] text-sm">Lines: 1-24</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
          
          <div className="back-container mt-6 text-center">
            <button className="back-button bg-transparent text-[var(--accent-1)] border border-[var(--accent-1)] px-6 py-2 rounded text-sm" onClick={() => router.push('/')}>cd ../home</button>
          </div>
        </div>
      )}
    </div>
  );
}