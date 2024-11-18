'use client';
import React, { useState, FormEvent, ChangeEvent } from 'react';

const FeedbackForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        usn: '',
        branch: '',
        semester: '',
        section: '',
        collegeMail: '',
        feedback1: '',
        feedback2: '',
        feedback3: '',
    });

    const [validated, setValidated] = useState(false);
    const [showToast, setShowToast] = useState({ message: '', type: '' });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
    
        if (
            !formData.name ||
            !formData.usn ||
            !formData.branch ||
            !formData.semester ||
            !formData.section ||
            !formData.collegeMail || 
            !formData.feedback1 ||
            !formData.feedback2 ||
            !formData.feedback3
        ) {
            setValidated(true);
            return;
        }

        try {
            const response = await fetch('/api/submitFeedbackForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to submit feedback');
            }
    
            setFormData({
                name: '',
                usn: '',
                branch: '',
                semester: '',
                section: '',
                collegeMail: '',
                feedback1: '',
                feedback2: '',
                feedback3: '',
            });
            setValidated(false);
            setShowToast({ message: 'Feedback submitted successfully!', type: 'success' });
    
        } catch (error) {
            setShowToast({ message: error.message || 'Error submitting feedback. Please try again later.', type: 'error' });
        }
    };
    
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-black py-10">
            <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-lg p-6 w-full max-w-4xl">
                <h1 className="text-4xl font-bold text-white mb-6 text-center">Microsoft Club Feedback Form</h1>
                <form noValidate onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={`mt-1 py-2 block w-full rounded-lg bg-white/20 text-white placeholder-gray-300 shadow-sm border ${validated && !formData.name ? 'border-red-500' : 'border-transparent'
                                } focus:ring-blue-500 focus:border-blue-500`}
                        />
                        {validated && !formData.name && <p className="text-red-400 text-sm mt-1">Please provide your name.</p>}
                    </div>

                    {/* USN */}
                    <div>
                        <label htmlFor="usn" className="block text-sm font-medium text-white">
                            USN
                        </label>
                        <input
                            type="text"
                            id="usn"
                            name="usn"
                            value={formData.usn}
                            onChange={handleChange}
                            required
                            className={`mt-1 py-2 block w-full rounded-lg bg-white/20 text-white placeholder-gray-300 shadow-sm border ${validated && !formData.usn ? 'border-red-500' : 'border-transparent'
                                } focus:ring-blue-500 focus:border-blue-500`}
                        />
                        {validated && !formData.usn && <p className="text-red-400 text-sm mt-1">Please provide your USN.</p>}
                    </div>

                    {/* Branch Dropdown */}
                    <div>
                        <label htmlFor="branch" className="block text-sm font-medium text-white">
                            Branch
                        </label>
                        <select
                            id="branch"
                            name="branch"
                            value={formData.branch}
                            onChange={handleChange}
                            required
                            className={`mt-1 py-2  block w-full rounded-lg bg-black/20 text-white placeholder-gray-300 shadow-sm border ${validated && !formData.branch ? 'border-red-500' : 'border-transparent'
                                } focus:ring-blue-500 focus:border-blue-500`}
                        >
                            <option value="">Select your branch</option>
                            <option value="CSE">ISE</option>
                            <option value="CSE">CSE</option>
                            <option value="CSE">CSE IOT</option>
                            <option value="CSE">AIML</option>
                            <option value="ECE">ECE</option>
                            <option value="MECH">MECH</option>
                            <option value="CIVIL">CIVIL</option>
                            <option value="EEE">EEE</option>
                        </select>
                        {validated && !formData.branch && <p className="text-red-400 text-sm mt-1">Please select your branch.</p>}
                    </div>

                    {/* Semester Dropdown */}
                    <div>
                        <label htmlFor="semester" className="block text-sm font-medium text-white">
                            Semester
                        </label>
                        <select
                            id="semester"
                            name="semester"
                            value={formData.semester}
                            onChange={handleChange}
                            required
                            className={`mt-1 py-2  block w-full rounded-lg bg-black/20 text-white placeholder-gray-300 shadow-sm border ${validated && !formData.semester ? 'border-red-500' : 'border-transparent'
                                } focus:ring-blue-500 focus:border-blue-500`}
                        >
                            <option value="">Select your semester</option>
                            {[...Array(8)].map((_, index) => (
                                <option key={index + 1} value={index + 1}>
                                    Semester {index + 1}
                                </option>
                            ))}
                        </select>
                        {validated && !formData.semester && <p className="text-red-400 text-sm mt-1">Please select your semester.</p>}
                    </div>

                    {/* Section Dropdown */}
                    <div>
                        <label htmlFor="section" className="block text-sm font-medium text-white">
                            Section
                        </label>
                        <select
                            id="section"
                            name="section"
                            value={formData.section}
                            onChange={handleChange}
                            required
                            className={`mt-1 py-2  block w-full rounded-lg bg-black/20 text-white placeholder-gray-300 shadow-sm border ${validated && !formData.section ? 'border-red-500' : 'border-transparent'
                                } focus:ring-blue-500 focus:border-blue-500`}
                        >
                            <option value="">Select your section</option>
                            {['A', 'B', 'C'].map((section) => (
                                <option key={section} value={section}>
                                    Section {section}
                                </option>
                            ))}
                        </select>
                        {validated && !formData.section && <p className="text-red-400 text-sm mt-1">Please select your section.</p>}
                    </div>

                    <div>
                        <label htmlFor="collegeMail" className="block text-sm font-medium text-white">
                            College Mail ID
                        </label>
                        <div className="flex items-center">
                            <input
                                type="text"
                                id="collegeMail"
                                name="collegeMail"
                                value={formData.collegeMail}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/@cambridge\.edu\.in$/, ''); // Prevent duplicate domain
                                    setFormData((prevState) => ({
                                        ...prevState,
                                        collegeMail: value,
                                    }));
                                }}
                                required
                                className={`mt-1 py-2 block w-full rounded-l-lg bg-white/20 text-white placeholder-gray-300 shadow-sm border ${validated && !formData.collegeMail ? 'border-red-500' : 'border-transparent'
                                    } focus:ring-blue-500 focus:border-blue-500`}
                            />
                            <span className="inline-flex py-2 items-center px-3 bg-gray-800 text-gray-300 rounded-r-lg border-l border-gray-500">
                                @cambridge.edu.in
                            </span>
                        </div>
                        {validated && !formData.collegeMail && <p className="text-red-400 text-sm mt-1">Please provide your email ID.</p>}
                    </div>

                    {/* Feedback Questions */}
                    {[1, 2, 3].map((num) => (
                        <div key={num}>
                            <label htmlFor={`feedback${num}`} className="block text-sm font-medium text-white">
                                Feedback Question {num}
                            </label>
                            <textarea
                                id={`feedback${num}`}
                                name={`feedback${num}`}
                                value={formData[`feedback${num}` as keyof typeof formData]}
                                onChange={handleChange}
                                rows={3}
                                required
                                className={`mt-1 block w-full rounded-lg bg-white/20 text-white placeholder-gray-300 shadow-sm border ${validated && !formData[`feedback${num}` as keyof typeof formData]
                                    ? 'border-red-500'
                                    : 'border-transparent'
                                    } focus:ring-blue-500 focus:border-blue-500`}
                            ></textarea>
                            {validated && !formData[`feedback${num}` as keyof typeof formData] && (
                                <p className="text-red-400 text-sm mt-1">Please provide feedback for question {num}.</p>
                            )}
                        </div>
                    ))}

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-2 text-white bg-blue-800 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Submit Feedback
                        </button>
                    </div>
                </form>

                {showToast.message && (
                    <div
                        className={`fixed bottom-4 right-4 text-white text-sm py-2 px-4 rounded-md shadow-md ${showToast.type === 'success' ? 'bg-blue-600' : 'bg-red-600'}`}
                        role="alert"
                    >
                        {showToast.message}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FeedbackForm;
