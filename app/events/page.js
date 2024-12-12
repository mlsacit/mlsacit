"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const events = [
  {
    title: "Gen AI Workshop",
    date: "January 15, 2024",
    description: "Participate in our amazing Gen AI workshop and explore depths of AI!",
    imageUrl: "events/images/event 1.jpg" // Replace with actual image URL
  },
  {
    title: "LinkedIn Workshop",
    date: "February 10, 2024",
    description: "Join the most on-Demand workshop on LinkedIn & build connections.",
    imageUrl: "events/images/Slice Main 1.jpg" // Replace with actual image URL
  },
  {
    title: "Web Development Bootcamp",
    date: "March 5, 2024",
    description: "Learn the latest trends and tools in web development.",
    imageUrl: "events/images/webdev.jpg" // Replace with actual image URL
  },
];

const Page = () => {
  return (
    <div className="relative bg-gradient-radial from-[#0052A1] to-[#002863] h-full ">
      {/* Background Image with Glow Effect */}
      <Navbar/>
        <img
          src="/vector.png"
          alt="Background"
          className="absolute top-1/2 left-1/2 w-full h-[80%] object-contain z-0 transform -translate-x-1/2 -translate-y-1/2 "
        />

      {/* Header Section */}
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 className="text-white" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Events</h1>
        <p className="text-white" style={{ fontSize: "1.2rem" }}>Stay updated with the latest events hosted by the MS Club - CIT!</p>
      </header>

      {/* Events Section */}
      <section className="text-white"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",

        }}
      >
        {events.map((event, index) => (
          <div className="text-white"
            key={index}
            style={{
              marginBottom: "20px",
              padding: "20px",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* Event Image */}
            <img
              src={event.imageUrl}
              alt={event.title}
              style={{
                width: "200px",
                height: "120px",
                borderRadius: "8px",
                objectFit: "cover",
                marginRight: "20px",
              }}
            />
            {/* Event Content */}
            <div>
              <h2 className="text-white"style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px" }}>{event.title}</h2>
              <p className="text-white" style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "10px", color: "#FFD700" }}>
                {event.date}
              </p>
              <p style={{ lineHeight: "1.6" }}>{event.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Footer Section */}
      <footer
        style={{
          marginTop: "40px",
          textAlign: "center",
          fontSize: "0.9rem",
          color: "rgba(255, 255, 255, 0.7)",
        }}
      >
        
      </footer>
      <Footer/>
    </div>
  );
};

export default Page;
