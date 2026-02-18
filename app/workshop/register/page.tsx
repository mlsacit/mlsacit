'use client';
import React, { useState, useEffect, FormEvent } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const WorkshopRegistration: React.FC = () => {
    const router = useRouter();
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
    const [errors, setErrors] = useState<{ officialMail?: string; phoneNumber?: string }>({});

    const branches = ['ISE', 'CSE', 'CSE IOT', 'AIML', 'ECE', 'MECH', 'CIVIL', 'EEE', 'MCA'];
    const years = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'MCA 1st Year', 'MCA 2nd Year'];

    // Check if already registered
    useEffect(() => {
        const cached = localStorage.getItem('linkedinWorkshopRegistration');
        if (cached) {
            router.push('/workshop');
        }
    }, [router]);

    // Simple validators
    const isValidPhoneNumber = (num: string) => {
        const trimmed = (num || '').trim();
        return trimmed.includes('@');
    };

    const isValidCambridgeEmail = (email: string) => {
        const trimmed = (email || '').trim();
        return /^[A-Za-z0-9._%+-]+@\.edu\.in$/i.test(trimmed);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name } = e.target;
        let { value } = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

        // Sanitize phone input to digits only and clamp to 10
        if (name === 'phoneNumber') {
            value = (value as string).replace(/\D/g, '').slice(0, 10);
        }

        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));

        // Update field-specific errors live (shown after first submit)
        if (name === 'officialMail') {
            setErrors(prev => ({
                ...prev,
                officialMail: value && !isValidCambridgeEmail(String(value))
                    ? 'Use your official @cambridge.edu.in email'
                    : undefined,
            }));
        }
        if (name === 'phoneNumber') {
            setErrors(prev => ({
                ...prev,
                phoneNumber: value && !isValidPhoneNumber(String(value))
                    ? 'Enter a valid 10-digit phone number'
                    : undefined,
            }));
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const requiredFields = ['name', 'usn', 'branch', 'year', 'officialMail', 'phoneNumber'];

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

        // Field-specific validation
        if (!isValidPhoneNumber(formData.phoneNumber) || !isValidCambridgeEmail(formData.officialMail)) {
            const newErrors: { officialMail?: string; phoneNumber?: string } = {};
            if (!isValidPhoneNumber(formData.phoneNumber)) {
                newErrors.phoneNumber = 'Enter a valid 10-digit phone number';
            }
            if (!isValidCambridgeEmail(formData.officialMail)) {
                newErrors.officialMail = 'Use your official @cambridge.edu.in email';
            }
            setErrors(prev => ({ ...prev, ...newErrors }));
            setValidated(true);
            setShowToast({ message: 'Please correct the highlighted fields', type: 'error' });
            setTimeout(() => setShowToast({ message: '', type: '' }), 3000);
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
            setErrors({});
            setShowToast({ message: 'Registration submitted successfully!', type: 'success' });

            // Redirect to workshop page after success
            setTimeout(() => {
                setShowToast({ message: '', type: '' });
                router.push('/workshop');
            }, 2000);
        } catch (err: any) {
            setShowToast({ message: err.message || 'Submission failed', type: 'error' });
            setTimeout(() => setShowToast({ message: '', type: '' }), 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

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
                onClick={() => router.push('/workshop')}
                className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 group shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300 text-sm sm:text-base" />
                <span className="font-semibold hidden sm:inline">Back to Workshop</span>
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
                        LinkedIn Mastery + Resume Building
                    </p>
                </div>

                <form noValidate onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                    {/* Personal Information Section */}
                    <div className="space-y-4 sm:space-y-6">
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
                                    placeholder="Enter your USN"
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
                                    placeholder="your.email@college.edu"
                                    className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
                                        validated && (!formData.officialMail || errors.officialMail) ? 'border-yellow-400' : 'border-slate-700'
                                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base`}
                                />
                                {validated && (!formData.officialMail || errors.officialMail) && (
                                    <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
                                        <span>⚠</span> {errors.officialMail || 'Official email is required'}
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
                                    placeholder="Enter your phone number"
                                    maxLength={10}
                                    minLength={10}
                                    className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
                                        validated && (!formData.phoneNumber || errors.phoneNumber) ? 'border-yellow-400' : 'border-slate-700'
                                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base`}
                                />
                                {validated && (!formData.phoneNumber || errors.phoneNumber) && (
                                    <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
                                        <span>⚠</span> {errors.phoneNumber || 'Phone number is required'}
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
                            className={`w-full px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold text-white rounded-xl transition-all duration-300 transform shadow-xl border-2 border-blue-400/30 ${
                                isSubmitting
                                    ? 'bg-slate-600 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 hover:scale-[1.02] hover:shadow-2xl'
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

export default WorkshopRegistration;
