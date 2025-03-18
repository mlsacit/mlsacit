// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import "./eventpage.css";

// // Event data
// const events = [
//   {
//     id: 1,
//     title: "Tech Workshop 2023",
//     image: "/events/event1.jpg",
//     description: "An immersive workshop on the latest technologies and frameworks. Participants learned about AI, cloud computing, and modern web development techniques.",
//     date: "October 15, 2023",
//     fileName: "workshop.js",
//   },
//   {
//     id: 2,
//     title: "Hackathon Challenge",
//     image: "/events/event2.jpg",
//     description: "A 24-hour coding marathon where teams competed to build innovative solutions for real-world problems. Projects ranged from healthcare apps to sustainable tech.",
//     date: "November 5, 2023",
//     fileName: "hackathon.js",
//   },
//   {
//     id: 3,
//     title: "Developer Conference",
//     image: "/events/event3.jpg",
//     description: "Industry experts shared insights on software development best practices, career growth, and emerging technologies in this day-long conference.",
//     date: "December 10, 2023",
//     fileName: "conference.js",
//   },
//   {
//     id: 4,
//     title: "AI Summit",
//     image: "/events/event4.jpg",
//     description: "Exploring the frontiers of artificial intelligence with hands-on demonstrations, expert panels, and networking opportunities.",
//     date: "January 20, 2024",
//     fileName: "ai_summit.js",
//   },
//   {
//     id: 5,
//     title: "Web3 Workshop",
//     image: "/events/event5.jpg",
//     description: "Introduction to blockchain, cryptocurrencies, and decentralized applications. Participants built their first smart contract.",
//     date: "February 15, 2024",
//     fileName: "web3.js",
//   },
//   {
//     id: 6,
//     title: "Design Thinking Masterclass",
//     image: "/events/event6.jpg",
//     description: "A collaborative session on user-centered design approaches, prototyping techniques, and creating intuitive user experiences.",
//     date: "March 5, 2024",
//     fileName: "design.js",
//   },
//   {
//     id: 7,
//     title: "Cloud Computing Bootcamp",
//     image: "/events/event7.jpg",
//     description: "Intensive training on cloud platforms, serverless architecture, and deploying scalable applications in the cloud.",
//     date: "April 12, 2024",
//     fileName: "cloud.js",
//   },
// ];

// export default function EventsPage() {
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(true);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   useEffect(() => {
//     // Simulate loading time
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 800);

//     return () => clearTimeout(timer);
//   }, []);

//   const handleViewEvent = (event) => {
//     setSelectedEvent(event);
//   };

//   const handleBackToEvents = () => {
//     setSelectedEvent(null);
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[var(--bg-primary)]">
//       {isLoading ? (
//         <div className="loading-container">
//           <div className="loading-text">Loading<span className="cursor"></span></div>
//         </div>
//       ) : (
//         <div id="container">
//           <div className="terminal-header">
//             <div className="terminal-dots">
//               <div className="dot dot-red"></div>
//               <div className="dot dot-yellow"></div>
//               <div className="dot dot-green"></div>
//             </div>
//             <div className="terminal-title">mlsa-events.js - MLSA CIT</div>
//           </div>
          
//           <div className="title-container">
//             <h1>MLSA CIT Events</h1>
//             <p>// Browse our past and upcoming events</p>
//           </div>
          
//           {selectedEvent ? (
//             <motion.div 
//               className="event-detail"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="detail-header">
//                 <h2 className="detail-title">{selectedEvent.title}</h2>
//                 <div className="detail-date">{selectedEvent.date}</div>
//               </div>
              
//               <div className="detail-content">
//                 <div className="detail-description">
//                   {selectedEvent.description}
//                 </div>
                
//                 <div className="detail-actions">
//                   <button className="register-button">Register Now</button>
//                   <button className="back-to-events" onClick={handleBackToEvents}>
//                     Back to Events
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ) : (
//             <motion.div 
//               className="events-grid"
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               {events.map((event, index) => (
//                 <motion.div 
//                   key={event.id} 
//                   className="code-block"
//                   variants={itemVariants}
//                   style={{ "--index": index }}
//                   onClick={() => handleViewEvent(event)}
//                 >
//                   <div className="code-header">
//                     <div className="file-name">{event.fileName}</div>
//                     <div className="event-date">{event.date}</div>
//                   </div>
                  
//                   <div className="code-content">
//                     <div className="function-name">{event.title}</div>
//                     <div className="code-description">{event.description.substring(0, 80)}...</div>
//                     <div className="code-line">return <span>event</span>.<span className="string">"success"</span>;</div>
//                   </div>
                  
//                   <div className="code-footer">
//                     <button className="view-button">View Details</button>
//                     <div className="line-numbers">Lines: 1-24</div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           )}
          
//           <div className="back-container">
//             <button 
//               className="back-button"
//               onClick={() => router.push('/')}
//             >
//               cd ../home
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


