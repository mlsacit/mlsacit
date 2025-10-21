// ...existing code...
'use client';

import React, { useState, useEffect, FormEvent } from 'react';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

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

    // Check registration: prefer localStorage cached registration, fallback to API by email
    useEffect(() => {
        const checkRegistration = async () => {
            try {
                const cached = localStorage.getItem('workshopRegistration');
                if (cached) {
                    try {
                        const parsed = JSON.parse(cached);
                        setRegistrationDetails(parsed);
                        setIsRegistered(true);
                        setCheckingRegistration(false);
                        return;
                    } catch (err) {
                        // invalid JSON - remove it and continue to API check
                        localStorage.removeItem('workshopRegistration');
                    }
                }

                const registeredEmail = localStorage.getItem('workshopRegisteredEmail') || '';
                if (registeredEmail) {
                    try {
                        const res = await fetch(`/api/checkWorkshopRegistration?email=${encodeURIComponent(registeredEmail)}`);
                        if (res.ok) {
                            const data = await res.json();
                            if (data.isRegistered) {
                                setIsRegistered(true);
                                setRegistrationDetails(data.registration || { officialMail: registeredEmail, ...data.registration });
                                // Cache registration locally for instant future loads
                                try {
                                    localStorage.setItem('workshopRegistration', JSON.stringify(data.registration || { officialMail: registeredEmail }));
                                    localStorage.setItem('workshopRegistered', 'true');
                                } catch {}
                            } else {
                                // ensure flags are clean if API says not registered
                                localStorage.removeItem('workshopRegistered');
                                localStorage.removeItem('workshopRegistration');
                                localStorage.removeItem('workshopRegisteredEmail');
                            }
                        }
                    } catch (err) {
                        console.error('Error checking registration via API:', err);
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
                body: JSON.stringify(formData),
            });

            const data = await res.json().catch(() => ({}));
            if (!res.ok) throw new Error(data.message || 'Submission failed');

            // Cache registration locally so banner + /workshop show "already registered" without extra API calls
            const registrationRecord = { ...formData, submittedAt: new Date().toISOString() };
            try {
                localStorage.setItem('workshopRegistration', JSON.stringify(registrationRecord));
                localStorage.setItem('workshopRegistered', 'true');
                localStorage.setItem('workshopRegisteredEmail', formData.officialMail);
            } catch {}

            setFormData({
                name: "", usn: "", branch: "", year: "", officialMail: "", phoneNumber: ""
            });
            setValidated(false);
            setShowToast({ message: 'Registration submitted successfully!', type: 'success' });

            // short delay then redirect home (banner will reflect registered state)
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
                            <p>📅 <strong>Date:</strong> October 25, 2025</p>
                            <p>⏰ <strong>Time:</strong> 1:30 PM - 3:30 PM</p>
                            <p>📍 <strong>Venue:</strong> 2nd floor Seminar Hall</p>
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
                                localStorage.removeItem('workshopRegisteredEmail');
                                localStorage.removeItem('workshopRegistration');
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

    // Landing Page - Matches the banner design exactly
    if (!showForm) {
        return (
            <div className="min-h-screen bg-[#001845] relative overflow-hidden flex items-center">
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

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 py-12">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">

                        {/* Left Side - Photo Section */}
                        <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                            <div className="relative w-full max-w-md">
                                <div className="w-full h-[400px] sm:h-[500px] bg-slate-800/40 rounded-2xl shadow-2xl flex items-center justify-center border-2 border-dashed border-slate-600">
                                    <p className="text-slate-400 text-center px-4">
                                        📸<br/>
                                        Add Workshop<br/>
                                        Instructor Photo Here
                                    </p>
                                </div>

                                {/* Club Badge - Top Right */}
                                <div className="absolute top-4 right-4 bg-blue-600/80 backdrop-blur-sm px-3 py-1 rounded-full">
                                    <span className="text-white text-xs font-semibold">MLSA CLUB</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="text-white space-y-6 order-1 lg:order-2">
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                                The Future of AI
                            </h1>

                            <p className="text-xl sm:text-2xl lg:text-3xl text-blue-300 font-medium">
                                GenAI & RAG Integration
                            </p>

                            {/* Event Details */}
                            <div className="space-y-4 pt-4">
                                <div className="flex items-center gap-3 text-base sm:text-lg">
                                    <span className="text-blue-400 text-xl sm:text-2xl">📅</span>
                                    <span><strong>Date:</strong> October 25, 2025</span>
                                </div>

                                <div className="flex items-center gap-3 text-base sm:text-lg">
                                    <span className="text-blue-400 text-xl sm:text-2xl">🕐</span>
                                    <span><strong>Time:</strong> 1:30 PM - 3:30 PM</span>
                                </div>

                                <div className="flex items-center gap-3 text-base sm:text-lg">
                                    <span className="text-blue-400 text-xl sm:text-2xl">📍</span>
                                    <span><strong>Venue:</strong> 2nd floor Seminar Hall</span>
                                </div>
                            </div>

                            {/* Register Button */}
                            <div className="pt-6">
                                <button
                                    onClick={() => setShowForm(true)}
                                    className="px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg sm:text-xl font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
                                >
                                    Register Now
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

    // Registration Form
    return (
        <div className="min-h-screen flex items-center justify-center py-6 sm:py-10 px-3 sm:px-4 md:px-6 relative bg-gradient-to-br from-[#000428] via-[#001845] to-[#004e92] overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 sm:w-[600px] sm:h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Back Button */}
            <button
                onClick={() => setShowForm(false)}
                className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 group shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300 text-sm sm:text-base" />
                <span className="font-semibold hidden sm:inline">Back</span>
                <span className="font-semibold sm:hidden">Back</span>
            </button>

            <div className="w-full max-w-4xl bg-slate-900/40 backdrop-blur-xl shadow-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 space-y-6 sm:space-y-8 relative border border-white/10 z-10 my-20 sm:my-10">
                {/* Header */}
                <div className="text-center space-y-2 sm:space-y-3 pb-4 sm:pb-6 border-b border-white/20">
                    <div className="inline-block px-3 py-1 sm:px-4 sm:py-1 bg-blue-500/20 rounded-full border border-blue-400/30 mb-2">
                        <span className="text-blue-300 text-xs sm:text-sm font-medium">Register Now</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-2xl">
                        Workshop Registration
                    </h1>
                    <p className="text-blue-200 text-sm sm:text-base md:text-lg px-2">
                        The Future of AI: GenAI & RAG Integration
                    </p>
                </div>

                <form noValidate onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                    {/* Personal Information Section */}
                    <div className="space-y-4 sm:space-y-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-white border-l-4 border-blue-400 pl-3 sm:pl-4 flex items-center gap-2">
                            <span className="text-blue-400 text-lg sm:text-xl">📋</span>
                            <span className="text-base sm:text-2xl">Personal Information</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            {/* Name Input */}
                            <div className="space-y-2">
                                <label className="block text-xs sm:text-sm font-semibold text-blue-200">
                                    Name <span className="text-yellow-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required
                                    className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
                                        validated && !formData.name ? 'border-yellow-400' : 'border-slate-700'
                                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base`}
                                    maxLength={100}
                                />
                                {validated && !formData.name && (
                                    <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
                                        <span>⚠</span> Name is required
                                    </p>
                                )}
                            </div>

                            {/* USN Input */}
                            <div className="space-y-2">
                                <label className="block text-xs sm:text-sm font-semibold text-blue-200">
                                    USN <span className="text-yellow-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="usn"
                                    value={formData.usn}
                                    onChange={handleChange}
                                    required
                                    placeholder='Enter your USN'
                                    className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
                                        validated && !formData.usn ? 'border-yellow-400' : 'border-slate-700'
                                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base`}
                                />
                                {validated && !formData.usn && (
                                    <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
                                        <span>⚠</span> USN is required
                                    </p>
                                )}
                            </div>

                            {/* Branch Select */}
                            <div className="space-y-2">
                                <label className="block text-xs sm:text-sm font-semibold text-blue-200">
                                    Branch <span className="text-yellow-400">*</span>
                                </label>
                                <select
                                    name="branch"
                                    value={formData.branch}
                                    onChange={handleChange}
                                    className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white border-2 ${
                                        validated && !formData.branch ? 'border-yellow-400' : 'border-slate-700'
                                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base`}
                                >
                                    <option value="" disabled hidden className="bg-slate-800 text-white">
                                        Select your branch
                                    </option>
                                    {branches.map(branch => (
                                        <option key={branch} value={branch} className="bg-slate-800 text-white">
                                            {branch}
                                        </option>
                                    ))}
                                </select>
                                {validated && !formData.branch && (
                                    <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
                                        <span>⚠</span> Branch is required
                                    </p>
                                )}
                            </div>

                            {/* Year Select */}
                            <div className="space-y-2">
                                <label className="block text-xs sm:text-sm font-semibold text-blue-200">
                                    Year <span className="text-yellow-400">*</span>
                                </label>
                                <select
                                    name="year"
                                    value={formData.year}
                                    onChange={handleChange}
                                    className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white border-2 ${
                                        validated && !formData.year ? 'border-yellow-400' : 'border-slate-700'
                                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base`}
                                >
                                    <option value="" disabled hidden className="bg-slate-800 text-white">
                                        Select your year
                                    </option>
                                    {years.map(year => (
                                        <option key={year} value={year} className="bg-slate-800 text-white">
                                            {year}
                                        </option>
                                    ))}
                                </select>
                                {validated && !formData.year && (
                                    <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
                                        <span>⚠</span> Year is required
                                    </p>
                                )}
                            </div>

                            {/* Official Mail Input */}
                            <div className="space-y-2">
                                <label className="block text-xs sm:text-sm font-semibold text-blue-200">
                                    Official Email <span className="text-yellow-400">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="officialMail"
                                    value={formData.officialMail}
                                    onChange={handleChange}
                                    required
                                    placeholder='your.email@college.edu'
                                    className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
                                        validated && !formData.officialMail ? 'border-yellow-400' : 'border-slate-700'
                                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base`}
                                />
                                {validated && !formData.officialMail && (
                                    <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
                                        <span>⚠</span> Official email is required
                                    </p>
                                )}
                            </div>

                            {/* Phone Number Input */}
                            <div className="space-y-2">
                                <label className="block text-xs sm:text-sm font-semibold text-blue-200">
                                    Phone Number <span className="text-yellow-400">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                    placeholder='XXXXX XXXXX'
                                    maxLength={10}
                                    minLength={10}
                                    className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
                                        validated && !formData.phoneNumber ? 'border-yellow-400' : 'border-slate-700'
                                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base`}
                                />
                                {validated && !formData.phoneNumber && (
                                    <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
                                        <span>⚠</span> Phone number is required
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */} 
                    <div className="flex flex-col items-center gap-4 pt-4 sm:pt-6">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold text-white rounded-xl transition-all duration-300 transform shadow-xl border-2 border-blue-400/30 ${
                                isSubmitting
                                    ? 'bg-slate-600 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 hover:scale-105 hover:shadow-2xl'
                            }`}
                        >
                            {isSubmitting ? (
                                <span className="flex items-center gap-2 justify-center">
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Submitting...
                                </span>
                            ) : (
                                'Register for Workshop'
                            )}
                        </button>

                        {/* Toast Notification */}
                        {showToast.message && (
                            <div className={`
                                w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-center backdrop-blur-md
                                transition-all duration-300 animate-fade-in shadow-xl border-2 text-sm sm:text-base
                                ${showToast.type === 'success' 
                                    ? 'bg-green-500/20 text-green-100 border-green-400/60' 
                                    : 'bg-yellow-500/20 text-yellow-100 border-yellow-400/60'
                                }
                            `}>
                                {showToast.message}
                            </div>
                        )}
                    </div>
                </form>
            </div>

            {/* Custom Styles for Animations */}
            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
            `}</style>
        </div>
    );
};

export default WorkshopForm;
// ...existing code...