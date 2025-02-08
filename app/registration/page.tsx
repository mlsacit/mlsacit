'use client';
import { useState, useEffect, useRef } from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from 'next/image';
import LoadingComponent from "../components/Loader";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const backgroundRef = useRef<HTMLDivElement | null>(null);
    const [eventData, setEventData] = useState(null);
    const [registrationData, setRegistrationData] = useState({
        name: '',
        email: '',
        usn: '',
        branch: '',
        semester: '',
        section: '',
        college: '',
    });
    const [showToast, setShowToast] = useState({ message: '', type: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setRegistrationData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (
            !registrationData.name ||
            !registrationData.usn ||
            !registrationData.branch ||
            !registrationData.semester ||
            !registrationData.section ||
            !registrationData.college
        ) {
            alert('Please fill in all fields');
            return;
        }

        try {
            const response = await fetch('/api/submitRegistrationForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registrationData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to submit registration');
            }

            setRegistrationData({
                name: '',
                email: '',
                usn: '',
                branch: '',
                semester: '',
                section: '',
                college: '',
            });
            setShowToast({ message: 'Registration submitted successfully!', type: 'success' });
        } catch (error) {
            setShowToast({ message: error.message || 'Error submitting Registration Form. Please try again later.', type: 'error' });
        }
    };

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            const width = window.innerWidth;
            const height = window.innerHeight;
            const xPercent = (clientX / width) * 100;
            const yPercent = (clientY / height) * 100;

            if (backgroundRef.current) {
                backgroundRef.current.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);


    useEffect(() => {
        fetch("/events/data/gen ai.json")
            .then((response) => response.json())
            .then((data) => setEventData(data))
            .catch((error) => console.error("Error fetching event data:", error));
    }, []);


    if (!eventData) {
        return <>
            <div className="flex items-center justify-center min-h-screen bg-blue-950 bg-opacity-95"> <LoadingComponent /></div>
        </>
    }

    return (
        <div className="relative w-full min-h-screen text-white overflow-hidden bg-black bg-opacity-50">
            {/* Background Animation */}
            <motion.div
                ref={backgroundRef}
                className="absolute inset-0"
                initial={{ backgroundPosition: "50% 50%" }}
                animate={{ backgroundPosition: "50% 50%" }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{
                    backgroundImage: `
              radial-gradient(circle, rgba(0, 34, 85, 0.8), transparent 60%),
              radial-gradient(circle, rgba(0, 51, 102, 0.6), transparent 70%),
              linear-gradient(to bottom, #000428, #00102a)
            `,
                    backgroundSize: "400% 400%",
                }}
            />

            {/* Header Section */}
            <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16">
                <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
                    {/* Left Section: Poster */}
                    <motion.div
                        className="md:w-1/2 flex flex-col items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="w-full max-w-xs rounded-lg overflow-hidden shadow-lg bg-white bg-opacity-30 backdrop-blur-lg">
                            <motion.img
                                src={eventData.posterImage}
                                alt="Event Poster"
                                className="w-full h-auto rounded-lg"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>

                        <div className="mt-4 flex items-center text-sm">
                            <Image
                                src={eventData.sponsorLogo}
                                alt="Microsoft Logo"
                                className="h-12 w-auto mr-2"
                            />
                            <span>Hosted by Microsoft Student Club</span>
                        </div>
                    </motion.div>

                    {/* Right Section: Details */}
                    <motion.div
                        className="md:w-1/2 text-center md:text-left"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4">
                            {eventData.title}
                        </h1>
                        <p className="text-lg font-medium text-indigo-400 mb-6">
                            {eventData.subtitle}
                        </p>
                        <div className="space-y-4 text-sm">
                            <p className="flex items-center">
                                <FaCalendarAlt className="mr-2 text-indigo-400" />
                                <span><strong>Date:</strong> {eventData.date}</span>
                            </p>
                            <p className="flex items-center">
                                <FaClock className="mr-2 text-indigo-400" />
                                <span><strong>Time:</strong> {eventData.time}</span>
                            </p>
                            <p className="flex items-center">
                                <FaMapMarkerAlt className="mr-2 text-indigo-400" />
                                <a
                                    href="https://www.google.com/maps/search/Lab+116,+First+Floor,Sir+MV+Block+CIT/@12.9227928,77.5022817,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-400 hover:underline"
                                >
                                    <strong>Venue:</strong> {eventData.venue}
                                </a>
                            </p>
                        </div>
                        <motion.button
                            className="mt-6 px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-full shadow-lg hover:from-indigo-500 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-300 ease-in-out transform hover:scale-105"
                            onClick={() => setIsModalOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            Register Now
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            {/* Event Details Section */}
            <motion.div
                id="details-section"
                className="relative z-20 py-16 px-6 bg-gray-900 bg-opacity-30 backdrop-blur-lg rounded-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-indigo-400">
                        Event Details
                    </h2>
                    <div className="space-y-8">
                        {eventData.description.map((day, index) => (
                            <div key={index}>
                                <h3 className="text-2xl font-semibold mb-3 text-indigo-300">
                                    {day.day}:
                                </h3>
                                <ul className="space-y-2 list-disc list-inside">
                                    {day.topics.map((topic, idx) => (
                                        <li key={idx}>{topic}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Modal (Floating Window) */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-40">
                    <motion.div
                        className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-xl max-w-lg w-full relative overflow-y-auto max-h-[80vh] custom-scrollbar"
                        initial={{ y: '100%' }}
                        animate={{ y: '0%' }}
                        exit={{ y: '100%' }}
                        transition={{ duration: 0.5 }}
                    >
                        <button
                            className="absolute top-4 right-4 text-xl text-white"
                            onClick={() => setIsModalOpen(false)}
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Register for {eventData.title}</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-white">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    onChange={handleInputChange}
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg bg-transparent text-white"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    onChange={handleInputChange}
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg bg-transparent text-white"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* USN */}
                            <div>
                                <label htmlFor="usn" className="block text-sm font-medium text-white">USN</label>
                                <input
                                    type="text"
                                    id="usn"
                                    name="usn"
                                    onChange={handleInputChange}
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg bg-transparent text-white"
                                    placeholder="Enter your USN"
                                />
                            </div>

                            {/* Branch Selection (Dropdown) */}
                            <div>
                                <label htmlFor="branch" className="block text-sm font-medium text-white">Branch</label>
                                <select
                                    id="branch"
                                    name="branch"
                                    onChange={handleInputChange}
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                >
                                    <option value="">Select your branch</option>
                                    <option value="ise">ISE</option>
                                    <option value="cse">CSE</option>
                                    <option value="cse-iot">CSE IOT</option>
                                    <option value="aiml">AIML</option>
                                    <option value="ece">ECE</option>
                                    <option value="eee">EEE</option>
                                    <option value="mech">Mech</option>
                                    <option value="civil">Civil</option>
                                </select>
                            </div>

                            {/* Semester */}
                            <div>
                                <label htmlFor="semester" className="block text-sm font-medium text-white">Semester</label>
                                <select
                                    id="semester"
                                    name="semester"
                                    onChange={handleInputChange}
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                >
                                    <option value="">Select your semester</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                </select>
                            </div>

                            {/* Section */}
                            <div>
                                <label htmlFor="section" className="block text-sm font-medium text-white">Section</label>
                                <select
                                    id="section"
                                    name="section"
                                    onChange={handleInputChange}
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                >
                                    <option value="">Select your section</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                </select>
                            </div>

                            {/* College */}
                            <div>
                                <label htmlFor="college" className="block text-sm font-medium text-white">College</label>
                                <input
                                    type="text"
                                    id="college"
                                    name="college"
                                    onChange={handleInputChange}
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg bg-transparent text-white"
                                    placeholder="Enter your college name"
                                />
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-indigo-600 text-white rounded-lg mt-4"
                                >
                                    Submit Registration
                                </button>
                            </div>
                        </form>
                    </motion.div>
                    {showToast.message && (
                        <div
                            className={`fixed bottom-4 right-4 text-white text-sm py-2 px-4 rounded-md shadow-md ${showToast.type === 'success' ? 'bg-blue-600' : 'bg-red-600'}`}
                            role="alert"
                        >
                            {showToast.message}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
