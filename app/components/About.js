"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { GoGoal } from "react-icons/go";

const About = () => {
  const [isInView, setIsInView] = useState(false);
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const goalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Set to true when the element comes into view
        } else {
          setIsInView(false); // Set back to false when it leaves the view
        }
      },
      { threshold: 0.5 } // The threshold at which the element is considered in view
    );

    if (visionRef.current) observer.observe(visionRef.current);
    if (missionRef.current) observer.observe(missionRef.current);
    if (goalRef.current) observer.observe(goalRef.current);

    return () => {
      if (visionRef.current) observer.unobserve(visionRef.current);
      if (missionRef.current) observer.unobserve(missionRef.current);
      if (goalRef.current) observer.unobserve(goalRef.current);
    };
  }, []);

  return (
    <div className="">
      <div className="text-center mb-20 m-4">
        <h1 className="text-4xl font-bold mb-4">
          About <span className="text-blue-500 shadow-lg">Microsoft Student Club!!</span>
        </h1>
        <p className="text-sm max-w-3xl mx-auto mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum corrupti aliquam tempore quas, ab,
          perspiciatis quaerat eum cum exercitationem et reiciendis sequi, adipisci culpa.
        </p>
      </div>

      <div className="cards flex flex-col lg:flex-row gap-6 justify-center items-start mx-4">
        {/* Vision Card */}
        <div
          ref={visionRef}
          className={`flex flex-col items-center bg-opacity-50 bg-gray-900 w-full lg:w-1/4 p-6 rounded-xl shadow-lg mb-4 transition-transform duration-1000 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="flex items-center justify-center w-24 h-24 mb-6 rounded-full border-4 border-white bg-gray-800">
            <FaEye className="text-5xl text-white" />
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold mb-4">Vision</p>
            <p className="text-sm mb-6">
              At MLSA CIT, the vision is a world where technology is not just a tool, but a force for good—transforming
              ideas into impactful solutions and empowering individuals to shape a better future. It strives to foster a
              community that uses innovation to solve challenges and create lasting value.
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div
          ref={missionRef}
          className={`flex flex-col items-center bg-opacity-50 bg-gray-700 w-full lg:w-1/4 p-6 rounded-xl shadow-lg relative -mt-12 transition-transform duration-1000 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="flex items-center justify-center w-24 h-24 mb-6 rounded-full border-4 border-white bg-gray-800">
            <IoIosRocket className="text-5xl text-white" />
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold mb-4">Mission</p>
            <p className="text-sm mb-6">
              MLSA CIT is committed to going beyond textbooks by equipping individuals with the knowledge, skills, and
              resources to make an impact. We emphasize spreading the latest advancements in technology through hands-on
              learning opportunities such as workshops, webinars, and events. Empowering individuals to use technology
              for positive change and fostering collaboration to create meaningful solutions are at the heart of its
              mission.
            </p>
          </div>
        </div>

        {/* Goal Card */}
        <div
          ref={goalRef}
          className={`flex flex-col items-center bg-opacity-50 bg-gray-900 w-full lg:w-1/4 p-6 rounded-xl shadow-lg transition-transform duration-1000 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="flex items-center justify-center w-24 h-24 mb-6 rounded-full border-4 border-white bg-gray-800">
            <GoGoal className="text-5xl text-white" />
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold mb-4">Goal</p>
            <p className="text-sm mb-6">
              To build a strong, connected tech community that not only learns and innovates but excels in using
              technology as a Force for Good. We aim to empower people to leverage technology to create opportunities,
              spark change, and drive progress for the greater good.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
