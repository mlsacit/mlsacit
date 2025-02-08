"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { HiDocumentCurrencyRupee } from "react-icons/hi2";
import { GoGraph } from "react-icons/go";
import { FaHandshake } from "react-icons/fa";

const Page = () => {
  const router = useRouter();

  const handleBackButtonClick = () => {
    console.log("Navigating to /");
    router.back();
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#020084] to-[#000149] flex flex-col items-center py-16 px-4 overflow-hidden">
      {/* Back Button */}
      <button
        onClick={handleBackButtonClick}
        className="absolute top-8 left-8 z-10 px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-400 text-black font-semibold rounded-lg shadow-md hover:bg-gray-400 transition-all font-[Excon]"
        data-aos="slide-right"
      >
        Go Back
      </button>

      {/* Background Vector */}
      <div
        className="absolute inset-0 w-full h-full bg-center  max-sm:bg-contain lg:bg-cover z-0"
        style={{ backgroundImage: "url('/Background.svg')" }}
      ></div>
      <div className="mt-20 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 py-10 shadow-2xl" data-aos="flip-left">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold text-center mb-10 text-white"
            data-aos="fade-down"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-[CB]">
              Meet Our Treasurer
            </span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2" data-aos="fade-right">
              <Image
                src="/images/individual pics/prithvi.png"
                alt="Group Picture"
                className="rounded-lg shadow-lg border border-blue-500/20"
                width={640}
                height={400} // You can adjust the width and height as per your requirement
              />
            </div>

            <div className="md:w-1/2 md:pl-12" data-aos="fade-left">
              <h3 className="text-3xl font-bold mb-6 text-white font-[Khand]">
                Managing Club Finances
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed font-[GMVF]">
                Our treasury team, led by Prithviraj K P, ensures efficient
                financial management of the club. We handle all monetary aspects
                with utmost transparency and accountability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                  data-aos="fade-up"
                >
                  <div className="text-blue-400 mb-3">
                    <FaWallet size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
                    Budget Management
                  </h3>
                  <p className="text-gray-400 font-[GMVF]">
                    Planning and allocating resources for club activities and
                    events.
                  </p>
                </div>

                <div
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="text-purple-400 mb-3">
                    <HiDocumentCurrencyRupee size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
                    Financial Records
                  </h3>
                  <p className="text-gray-400 font-[GMVF]">
                    Maintaining accurate documentation of all financial
                    transactions.
                  </p>
                </div>

                <div
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="text-blue-400 mb-3">
                    <GoGraph size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
                    Financial Planning
                  </h3>
                  <p className="text-gray-400 font-[GMVF]">
                    Strategic planning for long-term financial sustainability.
                  </p>
                </div>

                <div
                  className="bg-gray-800/50 backdrop-blur p-6 rounded-xl shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="text-purple-400 mb-3">
                    <FaHandshake size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-[Khand]">
                    Sponsorship Management
                  </h3>
                  <p className="text-gray-400 font-[GMVF]">
                    Handling sponsorships and financial partnerships
                    effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
