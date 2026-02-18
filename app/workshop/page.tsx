'use client';
import Image from 'next/image';
import React, { useState, useEffect, FormEvent } from 'react';
import { FaArrowLeft, FaCheckCircle, FaLinkedin, FaFileAlt, FaUserTie } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const WorkshopForm: React.FC = () => {
    const router = useRouter();
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        usn: "",
        branch: "",
        year: "",
        officialMail: "",
        phoneNumber: "",
    });

    const [validated, setValidated] = useState(false);
    const [showToast, setShowToast] = useState({ message: '', type: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [registrationDetails, setRegistrationDetails] = useState<any>(null);
    const [checkingRegistration, setCheckingRegistration] = useState(true);

    const branches = ['ISE', 'CSE', 'CSE IOT', 'AIML', 'ECE', 'MECH', 'CIVIL', 'EEE', 'MCA'];
    const years = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'MCA 1st Year', 'MCA 2nd Year'];

    // Check registration status from localStorage
    useEffect(() => {
        const checkRegistration = async () => {
            try {
                const cached = localStorage.getItem('linkedinWorkshopRegistration');
                if (cached) {
                    try {
                        const parsed = JSON.parse(cached);
                        setRegistrationDetails(parsed);
                        setIsRegistered(true);
                        setCheckingRegistration(false);
                        return;
                    } catch (err) {
                        localStorage.removeItem('linkedinWorkshopRegistration');
                    }
                }
            } finally {
                setCheckingRegistration(false);
            }
        };

        checkRegistration();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const getRequiredFields = () => {
        return ['name', 'usn', 'branch', 'year', 'officialMail', 'phoneNumber'];
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const requiredFields = getRequiredFields();

        const missing = requiredFields.some(field => {
            const val = formData[field as keyof typeof formData];
            return val === "" || val === null;
        });

        if (missing) {
            setValidated(true);
            setShowToast({ message: 'Please fill in all required fields', type: 'error' });
            setTimeout(() => setShowToast({ message: '', type: '' }), 3000);

            const firstError = document.querySelector('.border-yellow-400');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        setIsSubmitting(true);

        try {
            const res = await fetch('/api/submitWorkshopForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, workshopName: 'LinkedIn Mastery + Resume Building' }),
            });

            const data = await res.json().catch(() => ({}));
            if (!res.ok) throw new Error(data.message || 'Submission failed');

            // Cache registration locally
            const registrationRecord = { ...formData, submittedAt: new Date().toISOString() };
            try {
                localStorage.setItem('linkedinWorkshopRegistration', JSON.stringify(registrationRecord));
                localStorage.setItem('workshopRegistered', 'true');
                localStorage.setItem('workshopRegisteredEmail', formData.officialMail);
            } catch {}

            setFormData({
                name: "", usn: "", branch: "", year: "", officialMail: "", phoneNumber: ""
            });
            setValidated(false);
            setShowToast({ message: 'Registration submitted successfully!', type: 'success' });

            // Redirect home after success
            setTimeout(() => {
                setShowToast({ message: '', type: '' });
                router.push('/');
            }, 2000);
        } catch (err: any) {
            setShowToast({ message: err.message || 'Submission failed', type: 'error' });
            setTimeout(() => setShowToast({ message: '', type: '' }), 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Loading state
    if (checkingRegistration) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#001845]">
                <div className="text-white text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                    <p>Checking registration status...</p>
                </div>
            </div>
        );
    }

    // Already Registered View
    if (isRegistered && registrationDetails) {
        return (
            <div className="min-h-screen flex items-center justify-center py-10 px-4 relative bg-gradient-to-br from-[#000428] via-[#001845] to-[#004e92] overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Back Button */}
                <button
                    onClick={() => router.push('/')}
                    className="fixed top-6 left-6 z-50 flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 group shadow-lg"
                >
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
                    <span className="font-semibold">Back to Home</span>
                </button>

                <div className="w-full max-w-3xl bg-slate-900/40 backdrop-blur-xl shadow-2xl rounded-3xl p-12 space-y-8 relative border border-white/10 z-10">
                    {/* Success Icon */}
                    <div className="text-center space-y-4">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500/20 border-4 border-green-400/40 mb-4">
                            <FaCheckCircle className="text-green-400 text-5xl" />
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                            You&apos;re Already Registered!
                        </h1>

                        <p className="text-blue-200 text-lg">
                            We&apos;re excited to see you at the workshop! Here are your registration details:
                        </p>
                    </div>

                    {/* Registration Details Card */}
                    <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 space-y-4">
                        <h2 className="text-2xl font-bold text-white border-b border-white/20 pb-3 mb-4">
                            Registration Information
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <p className="text-blue-300 text-sm font-semibold">Name</p>
                                <p className="text-white text-lg">{registrationDetails.name}</p>
                            </div>

                            <div className="space-y-1">
                                <p className="text-blue-300 text-sm font-semibold">USN</p>
                                <p className="text-white text-lg">{registrationDetails.usn}</p>
                            </div>

                            <div className="space-y-1">
                                <p className="text-blue-300 text-sm font-semibold">Branch</p>
                                <p className="text-white text-lg">{registrationDetails.branch}</p>
                            </div>

                            <div className="space-y-1">
                                <p className="text-blue-300 text-sm font-semibold">Year</p>
                                <p className="text-white text-lg">{registrationDetails.year}</p>
                            </div>

                            <div className="space-y-1 md:col-span-2">
                                <p className="text-blue-300 text-sm font-semibold">Email</p>
                                <p className="text-white text-lg">{registrationDetails.officialMail}</p>
                            </div>
                        </div>
                    </div>

                    {/* Workshop Details */}
                    <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
                        <h3 className="text-xl font-bold text-white mb-4">Workshop Details</h3>
                        <div className="space-y-2 text-blue-100">
                            <p>📅 <strong>Date:</strong> 28th Feb, 2026</p>
                            <p>⏰ <strong>Time:</strong> 9 AM onwards</p>
                            <p>📍 <strong>Venue:</strong> 2nd Floor Seminar Hall</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button
                            onClick={() => router.push('/')}
                            className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg"
                        >
                            Back to Home
                        </button>

                        <button
                            onClick={() => {
                                localStorage.removeItem('linkedinWorkshopRegistration');
                                localStorage.removeItem('workshopRegisteredEmail');
                                localStorage.removeItem('workshopRegistered');
                                setIsRegistered(false);
                                setRegistrationDetails(null);
                            }}
                            className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-xl font-semibold transition-all duration-300 border border-white/20"
                        >
                            Register with Different Email
                        </button>
                    </div>

                    <p className="text-center text-sm text-blue-200/60">
                        If you have any questions, please contact the event organizers.
                    </p>
                </div>
            </div>
        );
    }

    // Landing Page - Workshop Information
    if (!showForm) {
        return (
            <div className="min-h-screen bg-[#001845] relative overflow-hidden">
                {/* Subtle background overlay */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20"></div>
                </div>

                {/* Back Button */}
                <button
                    onClick={() => router.push('/')}
                    className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 group shadow-lg text-sm sm:text-base"
                >
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
                    <span className="font-semibold hidden sm:inline">Back to Home</span>
                    <span className="font-semibold sm:hidden">Back</span>
                </button>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 py-20">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">

                        {/* Left Side - Poster Section */}
                        <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                            <div className="relative w-full max-w-md">
                                <div className="w-full h-[450px] sm:h-[600px] bg-slate-800/40 rounded-2xl shadow-2xl overflow-hidden">
                                    <Image
                                        src="/linkedin-workshop-poster.jpg"
                                        alt="LinkedIn Workshop Poster - Aaron Noel D'Souza"
                                        fill
                                        className="object-cover object-top"
                                        priority
                                    />
                                </div>

                                {/* Club Badge - Top Right */}
                                <div className="absolute top-4 right-4 bg-blue-600/80 backdrop-blur-sm px-3 py-1 rounded-full">
                                    <span className="text-white text-xs font-semibold tracking-wider">MLSA CLUB</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="text-white space-y-6 order-1 lg:order-2">
                            {/* Badge */}
                            <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30">
                                <span className="text-blue-300 text-sm font-medium">Interactive Workshop</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                                LinkedIn Mastery +<br />Resume Building
                            </h1>

                            <p className="text-lg sm:text-xl text-blue-200">
                                Stand out in a sea of profiles and resumes with a hands-on session led by <strong>Aaron Noel D&apos;Souza</strong>.
                            </p>

                            {/* Event Details */}
                            <div className="space-y-3 pt-4">
                                <div className="flex items-center gap-3 text-base sm:text-lg">
                                    <span className="text-blue-400 text-xl sm:text-2xl">📅</span>
                                    <span><strong>Date:</strong> 28 Feb 2026</span>
                                </div>

                                <div className="flex items-center gap-3 text-base sm:text-lg">
                                    <span className="text-blue-400 text-xl sm:text-2xl">🕐</span>
                                    <span><strong>Time:</strong> 9 AM onwards</span>
                                </div>

                                <div className="flex items-center gap-3 text-base sm:text-lg">
                                    <span className="text-blue-400 text-xl sm:text-2xl">📍</span>
                                    <span><strong>Venue:</strong> 2nd Floor Seminar Hall</span>
                                </div>
                            </div>

                            {/* Topics Grid */}
                            <div className="grid sm:grid-cols-2 gap-4 pt-4">
                                {/* LinkedIn Mastery Card */}
                                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-slate-700">
                                    <div className="flex items-center gap-2 mb-3">
                                        <FaLinkedin className="text-blue-400 text-xl" />
                                        <h3 className="text-lg font-bold text-white">LinkedIn Mastery</h3>
                                    </div>
                                    <ul className="space-y-2 text-sm text-blue-100">
                                        <li>• How LinkedIn works and connection levels</li>
                                        <li>• Six degrees of separation in action</li>
                                        <li>• Improve visibility and profile strength</li>
                                        <li>• Job alerts, followers vs. connections</li>
                                    </ul>
                                </div>

                                {/* Resume Building Card */}
                                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-slate-700">
                                    <div className="flex items-center gap-2 mb-3">
                                        <FaFileAlt className="text-purple-400 text-xl" />
                                        <h3 className="text-lg font-bold text-white">Resume Building</h3>
                                    </div>
                                    <ul className="space-y-2 text-sm text-blue-100">
                                        <li>• What recruiters actually look for</li>
                                        <li>• The CAO model for strong resumes</li>
                                        <li>• Common mistakes to avoid</li>
                                        <li>• Align LinkedIn and resume data</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Speaker Info */}
                            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-5 border border-blue-400/30">
                                <div className="flex items-center gap-2 mb-3">
                                    <FaUserTie className="text-blue-400 text-xl" />
                                    <h3 className="text-lg font-bold text-white">Speaker</h3>
                                </div>
                                <p className="text-blue-100 text-sm leading-relaxed">
                                    <strong>Aaron Noel D&apos;Souza</strong>, MBA, is a global professional with over a decade of experience spanning sustainability, alumni relations, communications, and financial markets. An alumnus of Nyenrode Business University in the Netherlands, he has worked with organizations such as Infosys, ING Bank, IISc, and Nuffic India. Currently serving as Alumni Relations Officer at Cambridge Institute of Technology.
                                </p>
                            </div>

                            {/* Register Button */}
                            <div className="pt-4">
                                <Link href="/workshop/register">
                                    <button
                                        className="px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white text-lg sm:text-xl font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
                                    >
                                        Register Now →
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

    return null;
};

export default WorkshopForm;
