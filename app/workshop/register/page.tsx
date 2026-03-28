'use client';
import React from 'react';

const WorkshopRegistration: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center py-6 sm:py-10 px-3 sm:px-4 md:px-6 relative bg-gradient-to-br from-[#000428] via-[#001845] to-[#004e92] overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 sm:w-[600px] sm:h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <div className="w-full max-w-4xl bg-slate-900/40 backdrop-blur-xl shadow-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 space-y-6 sm:space-y-8 relative border border-white/10 z-10 my-20 sm:my-10 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-2xl">
                    Registrations Closed
                </h1>
                <p className="text-blue-200 text-sm sm:text-base md:text-lg px-2">
                    Thank you for your interest.
                </p>
            </div>
        </div>
    );
};

export default WorkshopRegistration;
