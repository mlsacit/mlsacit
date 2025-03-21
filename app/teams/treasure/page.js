"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaInstagram, FaLinkedin, FaWallet, FaHandshake, FaCoins, FaChartLine } from "react-icons/fa";
import { HiDocumentCurrencyRupee } from "react-icons/hi2";
import { GoGraph } from "react-icons/go";
import { IoArrowBackOutline } from "react-icons/io5";
import { GiTakeMyMoney, GiMoneyStack, GiCash } from "react-icons/gi";
import { useInView } from "react-intersection-observer";

const Page = () => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleBackButtonClick = () => {
    router.back();
  };

  // Intersection observer for animations
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#020084] to-[#000149] flex flex-col items-center py-16 px-4 overflow-hidden">
      {/* Floating finance-themed elements */}
      {/* <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 10}px`,
              animation: `float ${Math.random() * 20 + 10}s linear infinite`,
              color: ['#4361ee', '#3a86ff', '#4cc9f0', '#7209b7'][Math.floor(Math.random() * 4)]
            }}
          >
            {[<FaCoins />, <GiMoneyStack />, <GiCash />, <FaWallet />][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div> */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 10}px`,
              animation: `float ${Math.random() * 20 + 10}s linear infinite`,
              color: ['#4361ee', '#3a86ff', '#4cc9f0', '#7209b7'][Math.floor(Math.random() * 4)]
            }}
          >
            {
              [
                <FaCoins key={`coins-${i}`} />,
                <GiMoneyStack key={`money-${i}`} />,
                <GiCash key={`cash-${i}`} />,
                <FaWallet key={`wallet-${i}`} />,
              ][Math.floor(Math.random() * 4)]
            }
          </div>
        ))}
      </div>


      {/* Background Vector with enhanced opacity */}
      <div
        className="absolute inset-0 w-full h-full bg-center max-sm:bg-contain lg:bg-cover z-0 opacity-40"
        style={{ backgroundImage: "url('/Background.svg')" }}
      ></div>

      {/* Enhanced Back Button */}
      <button
        onClick={handleBackButtonClick}
        className="absolute top-8 left-8 z-10 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all font-[Excon] flex items-center gap-2"
        data-aos="flip-left"
      >
        <IoArrowBackOutline /> Go Back
      </button>

      {/* Page Title */}
      <div className="relative z-10 mb-12 mt-4" data-aos="fade-down">
        <h1 className="text-5xl font-bold text-center text-white font-[Excon]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            Treasury
          </span>
        </h1>
        <div className="flex items-center justify-center mt-3">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
          <div className="mx-2 text-blue-400">
            <FaWallet />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-blue-500"></div>
        </div>
      </div>

      {/* Treasurer Profile Section */}
      <div
        ref={sectionRef}
        className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-white/10 w-full max-w-6xl transition-all duration-500 mb-16"
        data-aos="fade-up"
      >
        {/* Decorative top bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500"></div>

        <h2
          className="text-3xl font-bold text-center bg-clip-text font-[Excon] text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 mb-12"
          data-aos="fade-up"
        >
          Meet Our Treasurer
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 flex justify-center" data-aos="fade-right">
            <div
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className={`absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full opacity-70 blur-md transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-50'}`}></div>
              <div className="relative rounded-full overflow-hidden border-4 border-white/10 w-64 h-64">
                <Image
                  src="/images/individual pics/prithvi.png"
                  alt="Prithviraj K P"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          <div className="md:w-2/3" data-aos="fade-left">
            <h3 className="text-3xl font-bold mb-2 text-white font-[Khand]">
              Prithviraj K P
            </h3>
            <p className="text-blue-300 mb-4 text-lg">Treasurer</p>

            <p className="text-gray-300 mb-6 text-lg leading-relaxed font-[GMVF]">
              As the treasurer of MLSA CIT, Prithviraj ensures efficient financial management of the club.
              With a keen eye for detail and strong analytical skills, he handles all monetary aspects
              with utmost transparency and accountability.
            </p>

            <div className="flex space-x-4 mb-8">
              <a
                href="https://www.linkedin.com/in/prithviraj-k-p-b3a9a3249/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 hover:from-blue-500/30 hover:to-indigo-500/30 rounded-full text-white transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/prithvi_kp_/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 rounded-full text-white transition-all duration-300 hover:scale-110"
              >
                <FaInstagram size={24} />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-blue-400 mb-3">
                  <FaWallet size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
                  Budget Management
                </h3>
                <p className="text-gray-400 font-[GMVF]">
                  Planning and allocating resources for club activities and events.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-indigo-400 mb-3">
                  <HiDocumentCurrencyRupee size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
                  Financial Records
                </h3>
                <p className="text-gray-400 font-[GMVF]">
                  Maintaining accurate documentation of all financial transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Treasury Responsibilities Section */}
      <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-white/10 w-full max-w-6xl transition-all duration-500"
        data-aos="fade-up"
      >
        {/* Decorative top bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500"></div>

        <h2 className="text-3xl font-bold text-center bg-clip-text font-[Excon] text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 mb-12"
          data-aos="fade-up"
        >
          Treasury Responsibilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-blue-500/20 hover:shadow-xl"
            data-aos="fade-up"
          >
            <div className="text-blue-400 mb-4 flex justify-center">
              <FaWallet size={36} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 font-[Khand] text-center">
              Budget Management
            </h3>
            <p className="text-gray-400 font-[GMVF] text-center">
              Planning and allocating resources for club activities and events with precision.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-indigo-500/20 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="text-indigo-400 mb-4 flex justify-center">
              <HiDocumentCurrencyRupee size={36} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 font-[Khand] text-center">
              Financial Records
            </h3>
            <p className="text-gray-400 font-[GMVF] text-center">
              Maintaining accurate documentation of all financial transactions and expenditures.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-blue-500/20 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-blue-400 mb-4 flex justify-center">
              <FaChartLine size={36} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 font-[Khand] text-center">
              Financial Planning
            </h3>
            <p className="text-gray-400 font-[GMVF] text-center">
              Strategic planning for long-term financial sustainability and growth of the club.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-indigo-500/20 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="text-indigo-400 mb-4 flex justify-center">
              <FaHandshake size={36} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 font-[Khand] text-center">
              Sponsorship Management
            </h3>
            <p className="text-gray-400 font-[GMVF] text-center">
              Handling sponsorships and financial partnerships effectively to support club initiatives.
            </p>
          </div>
        </div>
      </div>

      {/* Add floating animation */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(5deg); }
          50% { transform: translateY(0) rotate(0deg); }
          75% { transform: translateY(15px) rotate(-5deg); }
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
// import { FaWallet } from "react-icons/fa";
// import { HiDocumentCurrencyRupee } from "react-icons/hi2";
// import { GoGraph } from "react-icons/go";
// import { FaHandshake } from "react-icons/fa";

// const Page = () => {
//   const router = useRouter();

//   const handleBackButtonClick = () => {
//     console.log("Navigating to /");
//     router.back();
//   };

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   return (
//     <div className="relative min-h-screen w-full bg-gradient-to-b from-[#020084] to-[#000149] flex flex-col items-center py-16 px-4 overflow-hidden">
//       {/* Back Button */}
//       <button
//         onClick={handleBackButtonClick}
//         className="absolute top-8 left-8 z-10 px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-400 text-black font-semibold rounded-lg shadow-md hover:bg-gray-400 transition-all font-[Excon]"
//         data-aos="slide-right"
//       >
//         Go Back
//       </button>

//       {/* Background Vector */}
//       <div
//         className="absolute inset-0 w-full h-full bg-center  max-sm:bg-contain lg:bg-cover z-0"
//         style={{ backgroundImage: "url('/Background.svg')" }}
//       ></div>
//       <div className="mt-20 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 py-10 shadow-2xl" data-aos="flip-left">
//         <div className="container mx-auto px-4">
//           <h2
//             className="text-4xl font-bold text-center mb-10 text-white"
//             data-aos="fade-down"
//           >
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-[CB]">
//               Meet Our Treasurer
//             </span>
//           </h2>
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <div className="md:w-1/2" data-aos="fade-right">
//               <Image
//                 src="/images/individual pics/prithvi.png"
//                 alt="Group Picture"
//                 className="rounded-lg shadow-lg border border-blue-500/20"
//                 width={640}
//                 height={400} // You can adjust the width and height as per your requirement
//               />
//             </div>

//             <div className="md:w-1/2 md:pl-12" data-aos="fade-left">
//               <h3 className="text-3xl font-bold mb-6 text-white font-[Khand]">
//                 Managing Club Finances
//               </h3>
//               <p className="text-gray-300 mb-4 text-sm leading-relaxed font-[GMVF]">
//                 Our treasury team, led by Prithviraj K P, ensures efficient
//                 financial management of the club. We handle all monetary aspects
//                 with utmost transparency and accountability.
//               </p>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 <div
//                   className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
//                   data-aos="fade-up"
//                 >
//                   <div className="text-blue-400 mb-3">
//                     <FaWallet size={20} />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
//                     Budget Management
//                   </h3>
//                   <p className="text-gray-400 font-[GMVF]">
//                     Planning and allocating resources for club activities and
//                     events.
//                   </p>
//                 </div>

//                 <div
//                   className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
//                   data-aos="fade-up"
//                   data-aos-delay="100"
//                 >
//                   <div className="text-purple-400 mb-3">
//                     <HiDocumentCurrencyRupee size={20} />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
//                     Financial Records
//                   </h3>
//                   <p className="text-gray-400 font-[GMVF]">
//                     Maintaining accurate documentation of all financial
//                     transactions.
//                   </p>
//                 </div>

//                 <div
//                   className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
//                   data-aos="fade-up"
//                   data-aos-delay="200"
//                 >
//                   <div className="text-blue-400 mb-3">
//                     <GoGraph size={20} />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
//                     Financial Planning
//                   </h3>
//                   <p className="text-gray-400 font-[GMVF]">
//                     Strategic planning for long-term financial sustainability.
//                   </p>
//                 </div>

//                 <div
//                   className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
//                   data-aos="fade-up"
//                   data-aos-delay="300"
//                 >
//                   <div className="text-purple-400 mb-3">
//                     <FaHandshake size={20} />
//                   </div>
//                   <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
//                     Sponsorship Management
//                   </h3>
//                   <p className="text-gray-400 font-[GMVF]">
//                     Handling sponsorships and financial partnerships
//                     effectively.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
