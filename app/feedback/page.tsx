'use client';
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { FaStar } from 'react-icons/fa';

const FeedbackForm: React.FC = () => {
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
            return;
        }

        try {
            const res = await fetch('/api/submitFeedbackForm', {
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
            setShowToast({ message: 'Feedback submitted successfully!', type: 'success' });
        } catch (err: any) {
            setShowToast({ message: err.message || 'Submission failed', type: 'error' });
        }
    };

    const StarRating = ({ question, name, outOf = 5 }: { question: string, name: string, outOf?: number }) => (
        <div>
            <label className="block text-white font-medium mb-2">{question}</label>
            <div className="flex space-x-2">
                {[...Array(outOf)].map((_, i) => {
                    const index = i + 1;
                    return (
                        <span
                            key={index}
                            onClick={() => setFormData(prev => ({ ...prev, [name]: index }))} 
                            className={`text-2xl cursor-pointer transition ${
                                index <= (formData[name as keyof typeof formData] as number)
                                    ? 'text-yellow-400' : 'text-gray-400'
                            } hover:text-yellow-500`}
                        >
                            <FaStar />
                        </span>
                    );
                })}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center py-10 px-4"
            style={{ backgroundImage: "url('/Feedback Bg.png')" }}
        >
            <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl shadow-xl rounded-xl p-8 space-y-6">
                <h1 className="text-4xl font-bold text-center text-white mb-4">Content 101 Feedback Form</h1>

                <form noValidate onSubmit={handleSubmit} className="space-y-6">
                    {/* Text Inputs */}
                    {/* Name Input */}
                    <label className="block text-sm font-medium text-white">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name*"
                        required
                        className={`w-full py-2 px-3 rounded-lg bg-white/20 text-white border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        maxLength={100}
                        />

                    {/* USN Input */}
                    <label className="block text-sm font-medium text-white">USN</label>
                        <input
                            type="text"
                            name="usn"
                            value={formData.usn}
                            onChange={handleChange}
                            required
                            placeholder='USN*'
                            className={`w-full py-2 px-3 rounded-lg bg-white/20 text-white border ${validated && !formData.usn ? 'border-red-500' : 'border-transparent'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />

                    {/* College Mail Input */}
                    <label className="block text-sm font-medium text-white ">College Mail</label>
                        <input
                            type="text"
                            name="collegeMail"
                            value={formData.collegeMail}
                            onChange={handleChange}
                            required
                            placeholder='College Mail*'
                            className={`w-full py-2 px-3 rounded-lg bg-white/20 text-white border ${validated && !formData.collegeMail ? 'border-red-500' : 'border-transparent'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />

                    {/* Branch Select */}
                    <label className="block text-sm font-medium text-white ">Branch</label>
                        <select
                            name="branch"
                            value={formData.branch}
                            onChange={handleChange}
                            className={`w-full py-2 px-3 rounded-lg bg-white/20 text-white border ${validated && !formData.branch ? 'border-red-500' : 'border-transparent'} focus:ring-blue-600`}
                        >
                            <option value="" disabled hidden>Select your branch</option>
                            {['ISE', 'CSE', 'CSE IOT', 'AIML', 'ECE', 'MECH', 'CIVIL', 'EEE'].map(branch => (
                                <option key={branch} value={branch} className="bg-slate-400 text-black">{branch}</option>
                            ))}
                        </select>

                    {/* Rating Questions */}
                    <StarRating name="q1" question="1. Overall, how satisfied were you with the Content 101 event?" />
                    <StarRating name="q2" question="2. How well did the sessions meet your expectations?" />
                    <label className="block text-white font-medium mb-2">3. Which topic or session did you find most valuable, and why?</label>
                        <textarea
                            name="q3"
                            rows={3}
                            value={formData.q3}
                            onChange={handleChange} // Changed here
                            className="w-full p-2 rounded-lg bg-white/20 text-white focus:outline-none"
                        />
                    <StarRating name="q4" question="4. Rate the effectiveness and clarity of the speakers' presentations." />
                    <label className="block text-white font-medium mb-2">5. Did the event provide actionable insights that you can apply to your work or projects?</label>
                        <select
                            name="q5"
                            value={formData.q5}
                            onChange={handleChange}
                            className="w-full p-2 rounded-lg bg-white/20 text-white"
                        >
                            <option disabled hidden className="bg-slate-400 text-black" value="">Select</option>
                            <option className="bg-slate-400 text-black" value="Fair">Fair</option>
                            <option className="bg-slate-400 text-black" value="Good">Good</option>
                            <option className="bg-slate-400 text-black" value="Excellent">Excellent</option>
                        </select>
                    <StarRating name="q6" question="6. Rate the event’s organization (scheduling, flow, logistics)." />
                    <label className="block text-white font-medium mb-2">7. Were the interactive elements (Q&A sessions, discussions, etc.) helpful in deepening your understanding of the topics?  </label>
                        <select
                            name="q7"
                            value={formData.q7}
                            onChange={handleChange}
                            className="w-full p-2 rounded-lg bg-white/20 text-white"
                        >
                            <option disabled hidden className="bg-slate-400 text-black" value="">Select</option>
                            <option className="bg-slate-400 text-black" value="Yes">Yes</option>
                            <option className="bg-slate-400 text-black" value="No">No</option>
                        </select>
                    <StarRating name="q8" question="8. How likely are you to attend/recommend future events like Content 101?" outOf={10} />
                    <textarea
                        name="q8comment"
                        placeholder="Optional comment"
                        value={formData.q8comment}
                        onChange={handleChange} // Changed here
                        rows={2}
                        className="w-full p-2 rounded-lg bg-white/20 text-white"
                    />

                    {/* Submit */}
                    <div className="flex flex-col items-center gap-4">
                        <button
                            type="submit"
                            className="px-6 py-2 text-white bg-blue-800 hover:bg-white hover:text-black rounded-lg transition"
                        >
                            Submit Feedback
                        </button>

                        {/* Toast Notification (below button) */}
                        {showToast.message && (
                            <div className={`w-fit px-4 py-2 text-center ${showToast.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
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
