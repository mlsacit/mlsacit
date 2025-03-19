"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaInstagram, FaLinkedin, FaArrowLeft, FaQuoteLeft, FaQuoteRight, FaHandshake } from "react-icons/fa";

const Page = () => {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#1a1a4a] to-[#000149] flex flex-col items-center py-16 px-4 overflow-hidden">
      {/* Back Button */}
      <button
        onClick={() => {
          console.log("Navigating to /");
          router.back();
        }}
        className="absolute top-8 left-8 z-10 px-4 py-2 bg-gradient-to-r from-indigo-400 to-purple-400 text-black font-semibold rounded-lg shadow-md hover:bg-gray-400 transition-all font-[Excon] flex items-center"
        data-aos="fade-left"
      >
        <FaArrowLeft className="mr-2" /> Go Back
      </button>

      {/* Background Vector */}
      <div
        className="absolute inset-0 w-full h-full bg-center max-sm:bg-contain lg:bg-cover z-0"
        style={{ backgroundImage: "url('/Background.svg')" }}
      ></div>
      
      {/* VP-specific background elements */}
      <div className="absolute inset-0 z-0">
        {/* Diagonal lines representing support structure */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-indigo-400 transform rotate-12"></div>
          <div className="absolute top-0 left-2/4 w-[1px] h-full bg-indigo-400 transform -rotate-12"></div>
          <div className="absolute top-0 left-3/4 w-[1px] h-full bg-indigo-400 transform rotate-12"></div>
        </div>
        
        {/* Subtle particles */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/30"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          ></div>
        ))}
      </div>

      {/* Title */}
      <div className="relative z-10 mb-8 mt-4" data-aos="fade-down">
        <h1 className="text-5xl font-bold text-center text-white font-[Excon]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Vice President
          </span>
        </h1>
        <p className="text-center text-white/70 mt-2 font-[Khand]">Supporting Leadership & Excellence</p>
        <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3"></div>
      </div>

      {/* Profile Section - Two columns for desktop */}
      <div className="relative z-10 w-full max-w-6xl rounded-xl bg-gray-800/30 backdrop-blur-sm border border-white/10 p-8 shadow-2xl overflow-hidden" data-aos="zoom-in">
        {/* Decorative top bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"></div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image and basic info */}
          <div className="flex flex-col items-center">
            {/* Profile Image with glow effect */}
            <div className="relative" data-aos="zoom-in">
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full opacity-70 blur-md"></div>
              <div className="relative rounded-full p-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20">
                <Image
                  src="/images/individual pics/aaron.png"
                  alt="Vice President Image"
                  width={280}
                  height={280}
                  className="rounded-full object-cover border-2 border-white/20"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-24 h-24 border border-indigo-500/30 rounded-full"></div>
              <div className="absolute -z-10 -top-4 -left-4 w-16 h-16 border border-purple-500/30 rounded-full"></div>
            </div>

            {/* Name and Title */}
            <div className="text-center mt-8" data-aos="fade-up">
              <h1 className="text-4xl font-bold text-white font-[Khand]">Aaron Rohan</h1>
              <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-indigo-300 text-lg font-medium mt-3">
                Vice-President & Beta MLSA
              </div>
            </div>

            {/* Quote */}
            <div className="mt-8 relative px-6" data-aos="fade-right">
              <FaQuoteLeft className="text-indigo-400/50 absolute top-0 left-0 text-2xl" />
              <p className="text-white/80 italic text-lg leading-relaxed px-8">
                Bridging vision with execution through collaboration and technical leadership.
              </p>
              <FaQuoteRight className="text-indigo-400/50 absolute bottom-0 right-0 text-2xl" />
            </div>

            {/* Social Links */}
            <div className="flex justify-center items-center gap-6 mt-8" data-aos="flip-left">
              <a
                href="https://in.linkedin.com/in/aaron31/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-indigo-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.instagram.com/aaronxrohan/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-pink-500/20 rounded-full text-white/70 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div>
            {/* Role & Responsibilities */}
            <div className="mb-8 bg-white/5 rounded-xl p-6 border border-white/10" data-aos="fade-left">
              <h2 className="text-2xl font-semibold text-indigo-400 mb-4 font-[Khand] flex items-center">
                <FaHandshake className="mr-3 text-indigo-300" />
                Role & Responsibilities
              </h2>
              <p className="text-white/80 leading-7 font-[GMVF]">
                As Vice President, Aaron works closely with the President to implement the club&apos;s vision and strategic initiatives. He excels in team management and community engagement, serving as the driving force that supports the team on their path toward impactful destinations. His leadership fosters collaboration and inclusivity at every step.
              </p>
            </div>

            {/* Biography */}
            <div className="mb-8 bg-white/5 rounded-xl p-6 border border-white/10" data-aos="fade-left" data-aos-delay="100">
              <h2 className="text-2xl font-semibold text-indigo-400 mb-4 font-[Khand]">Biography</h2>
              <p className="text-white/80 leading-7 font-[GMVF]">
                Aaron Rohan Raj, our esteemed vice president and a Beta MLSA, brings a wealth of technical expertise and leadership experience to his role. His passion for technology and education has been instrumental in shaping our club&apos;s direction and fostering a culture of continuous learning. As a key supporting leader, he ensures a cohesive and thriving community.
              </p>
            </div>

            {/* Contributions */}
            <div className="mb-6 bg-white/5 rounded-xl p-6 border border-white/10" data-aos="fade-left" data-aos-delay="200">
              <h2 className="text-2xl font-semibold text-indigo-400 mb-4 font-[Khand]">
                Contributions to the Club
              </h2>
              <ul className="space-y-4 text-white/80 font-[GMVF]">
                {['Guided the club to achieve its mission and vision through strategic planning.', 
                  'Organized successful events and mentorship programs that increased member engagement.', 
                  'Supported club members with professional advice and created networking opportunities.',
                  'Coordinated cross-functional teams to deliver successful technical workshops.'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Add keyframe animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-15px) translateX(10px); }
          50% { transform: translateY(0) translateX(15px); }
          75% { transform: translateY(15px) translateX(5px); }
        }
      `}</style>
    </div>
  );
};

export default Page;



// "use client";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import React from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { FaInstagram, FaLinkedin } from "react-icons/fa";

// const Page = () => {
//   const router = useRouter();

//   useEffect(() => {
//       AOS.init({
//         duration: 1000,
//         once: true,
//       });
//   }, []);

//   return (
//     <div className="relative min-h-screen w-full bg-gradient-to-b from-[#020084] to-[#000149] flex flex-col items-center py-16 px-4 overflow-hidden">
//       {/* Back Button */}
//       <button
//         onClick={() => {
//           console.log("Navigating to /");
//           router.back();
//         }}
//         className="absolute top-8 left-8 z-10 px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-400 text-black font-semibold rounded-lg shadow-md hover:bg-gray-400 transition-all font-[Excon]"
//         data-aos="fade-left"
//       >
//         Go Back
//       </button>

//       {/* Background Vector */}
//       <div
//         className="absolute inset-0 w-full h-full bg-center  max-sm:bg-contain lg:bg-cover z-0"
//         style={{ backgroundImage: "url('/Background.svg')" }}
//         data-aos="fade-up"
//       ></div>

//       {/* Profile Section */}
//       <div
//         className="relative mt-16 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 p-7 shadow-2xl"
//         data-aos="zoom-in"
//       >
//         <h2
//           className="text-4xl font-bold font-[Excon] text-center mb-10 text-white"
//           data-aos="fade-down"
//         >
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
//             Meet Our Vice President
//           </span>
//         </h2>

//         {/* Profile Image */}
//         <div
//           className="w-auto h-auto flex justify-center items-center mx-auto mb-6"
//           data-aos="flip-left"
//         >
//           <Image
//             src="/images/individual pics/aaron.png"
//             alt="Vice President Image"
//             width={228}
//             height={228}
//             className="rounded-full object-cover"
//           />
//         </div>

//         {/* Name and Title */}
//         <div className="text-center mb-6" data-aos="fade-up">
//           <h1 className="text-4xl font-bold text-white font-[Khand]">Aaron Rohan</h1>
//           <p className="text-white text-lg font-medium font-[Khand]">Vice-President of the Club</p>
//         </div>

//         {/* Biography */}
//         <div className="mb-6" data-aos="fade-left">
//           <h2 className="text-2xl font-semibold text-blue-400 mb-4 font-[Khand]">Biography</h2>
//           <p className="text-white leading-7 font-[GMVF]">
//             Aaron Rohan Raj, our esteemed vice president and a Beta MLSA, excels in team management and community engagement. As the driving force of our club, he supports the team on a dedicated path toward impactful destinations. His leadership fosters collaboration and inclusivity at every step, ensuring a cohesive and thriving community.
//           </p>
//         </div>

//         {/* Contributions */}
//         <div className="mb-6" data-aos="fade-right">
//           <h2 className="text-2xl font-semibold text-blue-400 mb-4 font-[Khand]">
//             Contributions to the Club
//           </h2>
//           <ul className="list-disc list-inside space-y-3 text-white font-[GMVF]">
//             <li>Guided the club to achieve its mission and vision.</li>
//             <li>Organized successful events and mentorship programs.</li>
//             <li>Supported club members with professional advice.</li>
//           </ul>
//         </div>

//         {/* Social Links */}
//         <div className="flex justify-center items-center gap-8 mt-8" data-aos="zoom-in-up">
//           <a
//             href="https://in.linkedin.com/in/aaron31/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-500 hover:text-blue-700 hover:scale-105 duration-300"
//           >
//             <FaLinkedin size={40} />
//           </a>
//           <a
//             href="https://www.instagram.com/aaronxrohan/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-500 hover:text-pink-700 hover:scale-105 duration-300"
//           >
//             <FaInstagram size={40} />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
