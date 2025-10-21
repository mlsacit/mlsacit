'use client';
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { FaStar, FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const FeedbackForm: React.FC = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        usn: "",
        branch: "",
        collegeMail: "",
        q1: 0,
        q2: 0,
        q3: '',
        q4: 0,
        q5: '',
        q6: 0,
        q7: '',
        q8: 0,
        q8comment: '',
    });

    const [validated, setValidated] = useState(false);
    const [showToast, setShowToast] = useState({ message: '', type: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const required = ["name", 'usn', 'branch', 'collegeMail', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8'];

        const missing = required.some((field) => {
            const val = formData[field as keyof typeof formData];
            return val === "" || val === 0;
        });

        if (missing) {
            setValidated(true);
            setShowToast({ message: 'Please fill in all required fields', type: 'error' });
            setTimeout(() => setShowToast({ message: '', type: '' }), 3000);
            return;
        }

        try {
            const res = await fetch('/api/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message);

            setFormData({
                name: '', usn: '', branch: '', collegeMail: '',
                q1: 0, q2: 0, q3: '', q4: 0, q5: '', q6: 0, q7: '', q8: 0, q8comment: ''
            });
            setValidated(false);
            setShowToast({ message: 'Feedback submitted successfully!', type: 'success' });
            setTimeout(() => setShowToast({ message: '', type: '' }), 3000);
        } catch (err: any) {
            setShowToast({ message: err.message || 'Submission failed', type: 'error' });
            setTimeout(() => setShowToast({ message: '', type: '' }), 3000);
        }
    };

    const StarRating = ({ question, name, outOf = 5 }: { question: string, name: string, outOf?: number }) => (
        <div className="space-y-3">
            <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
                {question}
                <span className="text-yellow-400 ml-1">*</span>
            </label>
            <div className="flex flex-wrap gap-2 sm:gap-3">
                {[...Array(outOf)].map((_, i) => {
                    const index = i + 1;
                    return (
                        <span
                            key={index}
                            onClick={() => setFormData(prev => ({ ...prev, [name]: index }))}
                            className={`text-2xl sm:text-3xl cursor-pointer transition-all duration-200 transform hover:scale-110 ${
                                index <= (formData[name as keyof typeof formData] as number)
                                    ? 'text-yellow-400 drop-shadow-[0_0_12px_rgba(250,204,21,0.6)]'
                                    : 'text-slate-600 hover:text-slate-500'
                            }`}
                        >
                            <FaStar />
                        </span>
                    );
                })}
                <span className="text-blue-300 ml-2 self-center text-sm font-medium">
                    {(formData[name as keyof typeof formData] as number) > 0 && `${formData[name as keyof typeof formData]}/${outOf}`}
                </span>
            </div>
            {validated && (formData[name as keyof typeof formData] as number) === 0 && (
                <p className="text-yellow-400 text-sm mt-1 flex items-center gap-1">
                    <span>⚠</span> This field is required
                </p>
            )}
        </div>
    );

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
                onClick={() => router.push('/')}
                className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 group shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300 text-sm sm:text-base" />
                <span className="font-semibold hidden sm:inline">Back to Home</span>
                <span className="font-semibold sm:hidden">Back</span>
            </button>

            <div className="w-full max-w-4xl bg-slate-900/40 backdrop-blur-xl shadow-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 space-y-6 sm:space-y-8 relative border border-white/10 z-10 my-20 sm:my-10">
                {/* Header */}
                <div className="text-center space-y-2 sm:space-y-3 pb-4 sm:pb-6 border-b border-white/20">
                    <div className="inline-block px-3 py-1 sm:px-4 sm:py-1 bg-blue-500/20 rounded-full border border-blue-400/30 mb-2">
                        <span className="text-blue-300 text-xs sm:text-sm font-medium">Event Feedback</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-2xl">
                        Content 101 Feedback
                    </h1>
                    <p className="text-blue-200 text-sm sm:text-base md:text-lg px-2">We&apos;d love to hear your thoughts and experiences!</p>
                </div>

                <form noValidate onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                    {/* Personal Information Section */}
                    <div className="space-y-4 sm:space-y-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-white border-l-4 border-blue-400 pl-3 sm:pl-4 flex items-center gap-2">
                            <span className="text-blue-400 text-lg sm:text-xl"></span>
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

                            {/* College Mail Input */}
                            <div className="space-y-2">
                                <label className="block text-xs sm:text-sm font-semibold text-blue-200">
                                    College Email <span className="text-yellow-400">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="collegeMail"
                                    value={formData.collegeMail}
                                    onChange={handleChange}
                                    required
                                    placeholder='your.email@college.edu'
                                    className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
                                        validated && !formData.collegeMail ? 'border-yellow-400' : 'border-slate-700'
                                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base`}
                                />
                                {validated && !formData.collegeMail && (
                                    <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
                                        <span>⚠</span> College email is required
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
                                    {['ISE', 'CSE', 'CSE IOT', 'AIML', 'ECE', 'MECH', 'CIVIL', 'EEE'].map(branch => (
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
                        </div>
                    </div>

                    {/* Feedback Section */}
                    <div className="space-y-6 sm:space-y-8 pt-4 sm:pt-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-white border-l-4 border-yellow-400 pl-3 sm:pl-4 flex items-center gap-2">
                            <span className="text-yellow-400 text-lg sm:text-xl"></span>
                            <span className="text-base sm:text-2xl">Your Feedback</span>
                        </h2>

                        {/* Rating Questions */}
                        <div className="bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50">
                            <StarRating name="q1" question="1. Overall, how satisfied were you with the Content 101 event?" />
                        </div>
                        
                        <div className="bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50">
                            <StarRating name="q2" question="2. How well did the sessions meet your expectations?" />
                        </div>
                        
                        <div className="space-y-3 bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50">
                            <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
                                3. Which topic or session did you find most valuable, and why?
                                <span className="text-yellow-400 ml-1">*</span>
                            </label>
                            <textarea
                                name="q3"
                                rows={4}
                                value={formData.q3}
                                onChange={handleChange}
                                placeholder="Share your thoughts here..."
                                className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
                                    validated && !formData.q3 ? 'border-yellow-400' : 'border-slate-700'
                                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm text-sm sm:text-base`}
                            />
                            {validated && !formData.q3 && (
                                <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
                                    <span>⚠</span> This field is required
                                </p>
                            )}
                        </div>
                        
                        <div className="bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50">
                            <StarRating name="q4" question="4. Rate the effectiveness and clarity of the speakers' presentations." />
                        </div>
                        
                        <div className="space-y-3 bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50">
                            <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
                                5. Did the event provide actionable insights that you can apply to your work or projects?
                                <span className="text-yellow-400 ml-1">*</span>
                            </label>
                            <select
                                name="q5"
                                value={formData.q5}
                                onChange={handleChange}
                                className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white border-2 ${
                                    validated && !formData.q5 ? 'border-yellow-400' : 'border-slate-700'
                                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base`}
                            >
                                <option disabled hidden className="bg-slate-800 text-white" value="">
                                    Choose an option
                                </option>
                                <option className="bg-slate-800 text-white" value="Fair">Fair</option>
                                <option className="bg-slate-800 text-white" value="Good">Good</option>
                                <option className="bg-slate-800 text-white" value="Excellent">Excellent</option>
                            </select>
                            {validated && !formData.q5 && (
                                <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
                                    <span>⚠</span> This field is required
                                </p>
                            )}
                        </div>
                        
                        <div className="bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50">
                            <StarRating name="q6" question="6. Rate the event's organization (scheduling, flow, logistics)." />
                        </div>
                        
                        <div className="space-y-3 bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50">
                            <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
                                7. Were the interactive elements (Q&A sessions, discussions, etc.) helpful in deepening your understanding of the topics?
                                <span className="text-yellow-400 ml-1">*</span>
                            </label>
                            <select
                                name="q7"
                                value={formData.q7}
                                onChange={handleChange}
                                className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white border-2 ${
                                    validated && !formData.q7 ? 'border-yellow-400' : 'border-slate-700'
                                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base`}
                            >
                                <option disabled hidden className="bg-slate-800 text-white" value="">
                                    Choose an option
                                </option>
                                <option className="bg-slate-800 text-white" value="Yes">Yes</option>
                                <option className="bg-slate-800 text-white" value="No">No</option>
                            </select>
                            {validated && !formData.q7 && (
                                <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
                                    <span>⚠</span> This field is required
                                </p>
                            )}
                        </div>
                        
                        <div className="bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50">
                            <StarRating name="q8" question="8. How likely are you to attend/recommend future events like Content 101?" outOf={10} />
                        </div>
                        
                        <div className="space-y-3 bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50">
                            <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
                                 Additional Comments (Optional)
                            </label>
                            <textarea
                                name="q8comment"
                                placeholder="Any other feedback you'd like to share..."
                                value={formData.q8comment}
                                onChange={handleChange}
                                rows={3}
                                className="w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm text-sm sm:text-base"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-col items-center gap-4 pt-4 sm:pt-6">
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl border-2 border-blue-400/30"
                        >
                             Submit Feedback
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
        </div>
    );
};

export default FeedbackForm;