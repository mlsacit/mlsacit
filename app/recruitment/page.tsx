// 'use client';
// import React, { useState, FormEvent } from 'react';
// import { FaArrowLeft } from 'react-icons/fa';
// import { useRouter } from 'next/navigation';

// interface TeamQuestions {
//     [key: string]: string;
// }

// const RecruitmentForm: React.FC = () => {
//     const router = useRouter();
//     const [formData, setFormData] = useState({
//         name: "",
//         usn: "",
//         branch: "",
//         studentType: "",
//         officialMail: "",
//         phoneNumber: "",
//         team: "",
//         // Technical questions
//         technicalContribution: "",
//         teamExperience: "",
//         deadlineHandling: "",
//         topSkills: "",
//         projectExperience: "",
//         // Curation & Documentation questions
//         writingStyle: "",
//         proudContent: "",
//         captionSample: "",
//         eventDocumentation: "",
//         learningGoals: "",
//         // Social Media questions
//         viralCampaign: "",
//         technicalSimplification: "",
//         socialMediaRole: "",
//         communityDifference: "",
//         inspiringCampaign: "",
//         // Design questions
//         whyDesign: "",
//         designSoftware: "",
//         conflictResolution: "",
//         designExperience: "",
//         instagramProcess: "",
//         portfolio: "",
//         // Common questions
//         otherClubs: "",
//         socialLinks: "",
//     });

//     const [validated, setValidated] = useState(false);
//     const [showToast, setShowToast] = useState({ message: '', type: '' });
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const teams = ["Technical", "Curation & Documentation", "Design", "Social Media"];
//     const branches = ['ISE', 'CSE', 'CSE IOT', 'AIML', 'ECE', 'MECH', 'CIVIL', 'EEE', 'MCA'];

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value, // Update for radio button
//         }));
//     };

//     // In the getRequiredFields function, update the Design team fields:
//     const getRequiredFields = () => {
//         const baseFields = ['name', 'usn', 'branch', 'officialMail', 'phoneNumber', 'otherClubs', 'socialLinks'];
//         const teamFields: string[] = [];

//         if (formData.team === "Technical") {
//             teamFields.push('technicalContribution', 'teamExperience', 'deadlineHandling', 'topSkills', 'projectExperience');
//         } else if (formData.team === "Curation & Documentation") {
//             teamFields.push('writingStyle', 'proudContent', 'captionSample', 'eventDocumentation', 'learningGoals');
//         } else if (formData.team === "Social Media") {
//             teamFields.push('viralCampaign', 'technicalSimplification', 'socialMediaRole', 'communityDifference', 'inspiringCampaign');
//         } else if (formData.team === "Design") {
//             // Removed 'portfolio' from required fields
//             teamFields.push('whyDesign', 'designSoftware', 'conflictResolution', 'designExperience', 'instagramProcess');
//         }

//         return [...baseFields, ...teamFields];
//     };

//     const handleSubmit = async (e: FormEvent) => {
//         e.preventDefault();
        
//         const requiredFields = getRequiredFields();

//         const missing = requiredFields.some(field => {
//             const val = formData[field as keyof typeof formData];
//             return val === "" || val === null;
//         }); 

//         if (missing || formData.studentType === "") { // Replace semester validation
//             setValidated(true);
//             setShowToast({ message: 'Please fill in all required fields', type: 'error' });
//             setTimeout(() => setShowToast({ message: '', type: '' }), 3000);
            
//             // Scroll to first error
//             const firstError = document.querySelector('.border-yellow-400');
//             if (firstError) {
//                 firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
//             }
//             return;
//         }

//         setIsSubmitting(true);

//         try {
//             const res = await fetch('/api/submitRecruitmentForm', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             const data = await res.json();
//             if (!res.ok) throw new Error(data.message);

//             setFormData({
//                 name: "", usn: "", branch: "", studentType: "", officialMail: "",
//                 phoneNumber: "", team: "",
//                 technicalContribution: "", teamExperience: "", deadlineHandling: "",
//                 topSkills: "", projectExperience: "",
//                 writingStyle: "", proudContent: "",
//                 captionSample: "", eventDocumentation: "", learningGoals: "",
//                 viralCampaign: "", technicalSimplification: "", socialMediaRole: "",
//                 communityDifference: "", inspiringCampaign: "",
//                 whyDesign: "", designSoftware: "", conflictResolution: "",
//                 designExperience: "", instagramProcess: "", portfolio: "",
//                 otherClubs: "", socialLinks: ""
//             });
//             setValidated(false);
//             setShowToast({ message: 'Application submitted successfully!', type: 'success' });
//             setTimeout(() => {
//                 setShowToast({ message: '', type: '' });
//                 router.push('/');
//             }, 3000);
//         } catch (err: any) {
//             setShowToast({ message: err.message || 'Submission failed', type: 'error' });
//             setTimeout(() => setShowToast({ message: '', type: '' }), 3000);
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     const renderTechnicalQuestions = () => {
//         if (formData.team !== "Technical") return null;

//         return (
//             <div className="space-y-6 sm:space-y-8">
//                 <h3 className="text-lg sm:text-xl font-bold text-blue-300 flex items-center gap-2">
//                     <span></span> Technical Team Questions
//                 </h3>

//                 <div className="space-y-3 bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
//                     <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
//                         1. What do you think you can contribute as a Technical Team member?
//                         <span className="text-yellow-400 ml-1">*</span>
//                     </label>
//                     <textarea
//                         name="technicalContribution"
//                         rows={5}
//                         value={formData.technicalContribution}
//                         onChange={handleChange}
//                         placeholder="Describe your potential contributions to the technical team..."
//                         className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
//                             validated && !formData.technicalContribution ? 'border-yellow-400' : 'border-slate-700'
//                         } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm text-sm sm:text-base`}
//                     />
//                     {validated && !formData.technicalContribution && (
//                         <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                             <span>⚠</span> This field is required
//                         </p>
//                     )}
//                 </div>

//                 <div className="space-y-3 bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
//                     <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
//                         2. Do you have experience collaborating and working in a team while building a project? What was it, and what role did you play in the team?
//                         <span className="text-yellow-400 ml-1">*</span>
//                     </label>
//                     <textarea
//                         name="teamExperience"
//                         rows={5}
//                         value={formData.teamExperience}
//                         onChange={handleChange}
//                         placeholder="Share your team collaboration experience and your role..."
//                         className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
//                             validated && !formData.teamExperience ? 'border-yellow-400' : 'border-slate-700'
//                         } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm text-sm sm:text-base`}
//                     />
//                     {validated && !formData.teamExperience && (
//                         <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                             <span>⚠</span> This field is required
//                         </p>
//                     )}
//                 </div>

//                 <div className="space-y-3 bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
//                     <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
//                         3. How do you handle deadlines and conflicts while working in a team project?
//                         <span className="text-yellow-400 ml-1">*</span>
//                     </label>
//                     <textarea
//                         name="deadlineHandling"
//                         rows={5}
//                         value={formData.deadlineHandling}
//                         onChange={handleChange}
//                         placeholder="Describe your approach to managing deadlines and resolving conflicts..."
//                         className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
//                             validated && !formData.deadlineHandling ? 'border-yellow-400' : 'border-slate-700'
//                         } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm text-sm sm:text-base`}
//                     />
//                     {validated && !formData.deadlineHandling && (
//                         <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                             <span>⚠</span> This field is required
//                         </p>
//                     )}
//                 </div>

//                 <div className="space-y-3 bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
//                     <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
//                         4. List your Top 5 Technical Skills.
//                         <span className="text-yellow-400 ml-1">*</span>
//                     </label>
//                     <input
//                         type="text"
//                         name="topSkills"
//                         value={formData.topSkills}
//                         onChange={handleChange}
//                         placeholder="e.g., React, Node.js, Python, Docker, AWS"
//                         className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
//                             validated && !formData.topSkills ? 'border-yellow-400' : 'border-slate-700'
//                         } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base`}
//                     />
//                     {validated && !formData.topSkills && (
//                         <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                             <span>⚠</span> This field is required
//                         </p>
//                     )}
//                 </div>

//                 <div className="space-y-3 bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
//                     <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
//                         5. Have you worked on any projects? If yes, briefly describe one or two. Mention the challenges you faced while completing the project.
//                         <span className="text-yellow-400 ml-1">*</span>
//                     </label>
//                     <textarea
//                         name="projectExperience"
//                         rows={6}
//                         value={formData.projectExperience}
//                         onChange={handleChange}
//                         placeholder="Describe your projects and the challenges you overcame..."
//                         className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
//                             validated && !formData.projectExperience ? 'border-yellow-400' : 'border-slate-700'
//                         } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm text-sm sm:text-base`}
//                     />
//                     {validated && !formData.projectExperience && (
//                         <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                             <span>⚠</span> This field is required
//                         </p>
//                     )}
//                 </div>
//             </div>
//         );
//     };

//     const renderCurationQuestions = () => {
//         if (formData.team !== "Curation & Documentation") return null;

//         return (
//             <div className="space-y-6 sm:space-y-8">
//                 <h3 className="text-lg sm:text-xl font-bold text-cyan-300 flex items-center gap-2">
//                     <span></span> Curation & Documentation Questions
//                 </h3>

//                 <div className="space-y-3 bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
//                     <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
//                         1. What kind of writing do you enjoy—storytelling, summarizing, captioning, or formal communication? Tell us why.
//                         <span className="text-yellow-400 ml-1">*</span>
//                     </label>
//                     <textarea
//                         name="writingStyle"
//                         rows={4}
//                         value={formData.writingStyle}
//                         onChange={handleChange}
//                         placeholder="Share your writing preferences and why you enjoy them..."
//                         className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
//                             validated && !formData.writingStyle ? 'border-yellow-400' : 'border-slate-700'
//                         } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm text-sm sm:text-base`}
//                     />
//                     {validated && !formData.writingStyle && (
//                         <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                             <span>⚠</span> This field is required
//                         </p>
//                     )}
//                 </div>

//                 <div className="space-y-3 bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
//                     <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
//                         2. What&apos;s one piece of content (a post, caption, or write-up) you&apos;ve created that you&apos;re proud of? Tell us why.
//                         <span className="text-yellow-400 ml-1">*</span>
//                     </label>
//                     <textarea
//                         name="proudContent"
//                         rows={5}
//                         value={formData.proudContent}
//                         onChange={handleChange}
//                         placeholder="Describe your proudest content creation and what makes it special..."
//                         className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
//                             validated && !formData.proudContent ? 'border-yellow-400' : 'border-slate-700'
//                         } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm text-sm sm:text-base`}
//                     />
//                     {validated && !formData.proudContent && (
//                         <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                             <span>⚠</span> This field is required
//                         </p>
//                     )}
//                 </div>

//                 <div className="space-y-3 bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
//                     <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
//                         3. Write a short caption (1–2 lines) for a reel celebrating a team member&apos;s achievements.
//                         <span className="text-yellow-400 ml-1">*</span>
//                     </label>
//                     <textarea
//                         name="captionSample"
//                         rows={3}
//                         value={formData.captionSample}
//                         onChange={handleChange}
//                         placeholder="Write your celebratory caption here..."
//                         className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
//                             validated && !formData.captionSample ? 'border-yellow-400' : 'border-slate-700'
//                         } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm text-sm sm:text-base`}
//                     />
//                     {validated && !formData.captionSample && (
//                         <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                             <span>⚠</span> This field is required
//                         </p>
//                     )}
//                 </div>

//                 <div className="space-y-3 bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
//                     <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
//                         4. While documenting an event, what details do you think are most important to include—and why?
//                         <span className="text-yellow-400 ml-1">*</span>
//                     </label>
//                     <textarea
//                         name="eventDocumentation"
//                         rows={4}
//                         value={formData.eventDocumentation}
//                         onChange={handleChange}
//                         placeholder="Describe your approach to event documentation..."
//                         className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
//                             validated && !formData.eventDocumentation ? 'border-yellow-400' : 'border-slate-700'
//                         } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm text-sm sm:text-base`}
//                     />
//                     {validated && !formData.eventDocumentation && (
//                         <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                             <span>⚠</span> This field is required
//                         </p>
//                     )}
//                 </div>

//                 <div className="space-y-3 bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
//                     <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
//                         5. What&apos;s one thing you&apos;d love to learn or improve this term—writing, organizing, designing, or something else?
//                         <span className="text-yellow-400 ml-1">*</span>
//                     </label>
//                     <textarea
//                         name="learningGoals"
//                         rows={3}
//                         value={formData.learningGoals}
//                         onChange={handleChange}
//                         placeholder="Share what you'd like to learn or improve..."
//                         className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
//                             validated && !formData.learningGoals ? 'border-yellow-400' : 'border-slate-700'
//                         } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm text-sm sm:text-base`}
//                     />
//                     {validated && !formData.learningGoals && (
//                         <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                             <span>⚠</span> This field is required
//                         </p>
//                     )}
//                 </div>
//             </div>
//         );
//     };

//     const renderSocialMediaQuestions = () => {
//         if (formData.team !== "Social Media") return null;

//         return (
//             <div className="space-y-6 sm:space-y-8">
//                 <h3 className="text-lg sm:text-xl font-bold text-pink-300 flex items-center gap-2">
//                     <span></span> Social Media Questions
//                 </h3>

//                 <div className="space-y-3 bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-pink-500/30 transition-all duration-300">
//                     <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
//                         1. Imagine MLSA had unlimited resources for one social media campaign—what would you create to make the community go viral?
//                         <span className="text-yellow-400 ml-1">*</span>
//                     </label>
                    
//                     <textarea
//                         name="viralCampaign"
//                         rows={5}
//                         value={formData.viralCampaign}
//                         onChange={handleChange}
//                         placeholder="Describe your viral campaign idea in detail..."
//                         className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
//                             validated && !formData.viralCampaign ? 'border-yellow-400' : 'border-slate-700'
//                         } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm text-sm sm:text-base`}
//                     />
//                     {validated && !formData.viralCampaign && (
//                         <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                             <span>⚠</span> This field is required
//                         </p>
//                     )}
//                 </div>

//                 <div className="space-y-3 bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-pink-500/30 transition-all duration-300">
//                     <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
//                         2. How would you turn a technical topic (like cloud computing or AI) into a fun, relatable post or reel for students?
//                         <span className="text-yellow-400 ml-1">*</span>
//                     </label>
                    
//                     <textarea
//                         name="technicalSimplification"
//                         rows={5}
//                         value={formData.technicalSimplification}
//                         onChange={handleChange}
//                         placeholder="Explain your approach to making technical content engaging..."
//                         className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
//                             validated && !formData.technicalSimplification ? 'border-yellow-400' : 'border-slate-700'
//                         } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm text-sm sm:text-base`}
//                     />
//                     {validated && !formData.technicalSimplification && (
//                         <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                             <span>⚠</span> This field is required
//                         </p>
//                     )}
//                 </div>

//                 <div className="space-y-3 bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-pink-500/30 transition-all duration-300">
//                     <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
//                         3. Which part of a social media role—content creation, analytics, engagement, or trend spotting—excites you the most and why?
//                         <span className="text-yellow-400 ml-1">*</span>
//                     </label>
                    
//                     <textarea
//                         name="socialMediaRole"
//                         rows={4}
//                         value={formData.socialMediaRole}
//                         onChange={handleChange}
//                         placeholder="Share which aspect excites you and why..."
//                         className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
//                             validated && !formData.socialMediaRole ? 'border-yellow-400' : 'border-slate-700'
//                         } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm text-sm sm:text-base`}
//                     />
//                     {validated && !formData.socialMediaRole && (
//                         <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                             <span>⚠</span> This field is required
//                         </p>
//                     )}
//                 </div>

//                 <div className="space-y-3 bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-pink-500/30 transition-all duration-300">
//                     <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
//                         4. In your opinion, what makes student-led communities like MLSA different from regular college clubs, and how should marketing reflect that?
//                         <span className="text-yellow-400 ml-1">*</span>
//                     </label>
                    
//                     <textarea
//                         name="communityDifference"
//                         rows={5}
//                         value={formData.communityDifference}
//                         onChange={handleChange}
//                         placeholder="Share your thoughts on what makes MLSA unique..."
//                         className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
//                             validated && !formData.communityDifference ? 'border-yellow-400' : 'border-slate-700'
//                         } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm text-sm sm:text-base`}
//                     />
//                     {validated && !formData.communityDifference && (
//                         <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                             <span>⚠</span> This field is required
//                         </p>
//                     )}
//                 </div>

//                 <div className="space-y-3 bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-pink-500/30 transition-all duration-300">
//                     <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
//                         5. Which recent marketing or promotional campaign (from any brand or community) inspired you the most, and what key idea would you bring from it to MLSA?
//                         <span className="text-yellow-400 ml-1">*</span>
//                     </label>
                    
//                     <textarea
//                         name="inspiringCampaign"
//                         rows={5}
//                         value={formData.inspiringCampaign}
//                         onChange={handleChange}
//                         placeholder="Describe the campaign and what you'd adapt from it..."
//                         className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
//                             validated && !formData.inspiringCampaign ? 'border-yellow-400' : 'border-slate-700'
//                         } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm text-sm sm:text-base`}
//                     />
//                     {validated && !formData.inspiringCampaign && (
//                         <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                             <span>⚠</span> This field is required
//                         </p>
//                     )}
//                 </div>
//             </div>
//         );
//     };

//     const renderDesignQuestions = () => {
//         if (formData.team !== "Design") return null;

//         return (
//             <div className="space-y-6 sm:space-y-8">
//                 <h3 className="text-lg sm:text-xl font-bold text-purple-300 flex items-center gap-2">
//                     <span></span> Design Questions
//                 </h3>

//                 <div className="space-y-3 bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
//                     <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
//                         1. Why did you choose design?
//                         <span className="text-yellow-400 ml-1">*</span>
//                     </label>
//                     <textarea
//                         name="whyDesign"
//                         rows={4}
//                         value={formData.whyDesign}
//                         onChange={handleChange}
//                         placeholder="Share what draws you to design..."
//                         className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
//                             validated && !formData.whyDesign ? 'border-yellow-400' : 'border-slate-700'
//                         } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm text-sm sm:text-base`}
//                     />
//                     {validated && !formData.whyDesign && (
//                         <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                             <span>⚠</span> This field is required
//                         </p>
//                     )}
//                 </div>

//                 <div className="space-y-3 bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
//                     <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
//                         2. How many design software are you familiar with?
//                         <span className="text-yellow-400 ml-1">*</span>
//                     </label>
//                     <textarea
//                         name="designSoftware"
//                         rows={3}
//                         value={formData.designSoftware}
//                         onChange={handleChange}
//                         placeholder="List the design software you know (e.g., Figma, Adobe Photoshop, Illustrator, Canva, etc.)..."
//                         className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
//                             validated && !formData.designSoftware ? 'border-yellow-400' : 'border-slate-700'
//                         } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm text-sm sm:text-base`}
//                     />
//                     {validated && !formData.designSoftware && (
//                         <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                             <span>⚠</span> This field is required
//                         </p>
//                     )}
//                 </div>

//                 <div className="space-y-3 bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
//                     <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
//                         3. If you face a conflict with a teammate due to differences in design ideas, how would you handle it?
//                         <span className="text-yellow-400 ml-1">*</span>
//                     </label>
//                     <textarea
//                         name="conflictResolution"
//                         rows={4}
//                         value={formData.conflictResolution}
//                         onChange={handleChange}
//                         placeholder="Describe your approach to resolving design conflicts..."
//                         className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
//                             validated && !formData.conflictResolution ? 'border-yellow-400' : 'border-slate-700'
//                         } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm text-sm sm:text-base`}
//                     />
//                     {validated && !formData.conflictResolution && (
//                         <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                             <span>⚠</span> This field is required
//                         </p>
//                     )}
//                 </div>

//                 <div className="space-y-3 bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
//                     <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
//                         4. How long have you been designing?
//                         <span className="text-yellow-400 ml-1">*</span>
//                     </label>
//                     <input
//                         type="text"
//                         name="designExperience"
//                         value={formData.designExperience}
//                         onChange={handleChange}
//                         placeholder="e.g., 2 years, 6 months, etc."
//                         className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
//                             validated && !formData.designExperience ? 'border-yellow-400' : 'border-slate-700'
//                         } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base`}
//                     />
//                     {validated && !formData.designExperience && (
//                         <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                             <span>⚠</span> This field is required
//                         </p>
//                     )}
//                 </div>

//                 <div className="space-y-3 bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
//                     <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
//                         5. Describe, in detail, your process for creating an Instagram post for an event, specify visual elements (like logos, text, and imagery etc), and anything you&apos;d like to add.
//                         <span className="text-yellow-400 ml-1">*</span>
//                     </label>
//                     <textarea
//                         name="instagramProcess"
//                         rows={6}
//                         value={formData.instagramProcess}
//                         onChange={handleChange}
//                         placeholder="Describe your complete design process step by step..."
//                         className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
//                             validated && !formData.instagramProcess ? 'border-yellow-400' : 'border-slate-700'
//                         } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm text-sm sm:text-base`}
//                     />
//                     {validated && !formData.instagramProcess && (
//                         <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                             <span>⚠</span> This field is required
//                         </p>
//                     )}
//                 </div>

//                 <div className="space-y-3 bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
//                     <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
//                         6. Please share your portfolio, if you have one.
//                         {/* Removed the asterisk - no longer required */}
//                     </label>
//                     <input
//                         type="url"
//                         name="portfolio"
//                         value={formData.portfolio}
//                         onChange={handleChange}
//                         placeholder="https://behance.net/yourname or https://dribbble.com/yourname"
//                         className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
//                             validated && !formData.portfolio ? 'border-slate-700' : 'border-slate-700'
//                         } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base`}
//                     />
//                     {/* Removed the validation error message */}
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center py-6 sm:py-10 px-3 sm:px-4 md:px-6 relative bg-gradient-to-br from-[#000428] via-[#001845] to-[#004e92] overflow-hidden">
//             {/* Animated Background Elements */}
//             <div className="absolute inset-0 overflow-hidden">
//                 <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
//                 <div className="absolute bottom-0 right-0 w-96 h-96 sm:w-[600px] sm:h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
//             </div>

//             {/* Back Button */}
//             <button
//                 onClick={() => router.push('/')}
//                 className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 group shadow-lg hover:shadow-xl text-sm sm:text-base"
//             >
//                 <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300 text-sm sm:text-base" />
//                 <span className="font-semibold hidden sm:inline">Back to Home</span>
//                 <span className="font-semibold sm:hidden">Back</span>
//             </button>

//             <div className="w-full max-w-4xl bg-slate-900/40 backdrop-blur-xl shadow-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 space-y-6 sm:space-y-8 relative border border-white/10 z-10 my-20 sm:my-10">
//                 {/* Header */}
//                 <div className="text-center space-y-2 sm:space-y-3 pb-4 sm:pb-6 border-b border-white/20">
//                     <div className="inline-block px-3 py-1 sm:px-4 sm:py-1 bg-blue-500/20 rounded-full border border-blue-400/30 mb-2">
//                         <span className="text-blue-300 text-xs sm:text-sm font-medium">Join Us</span>
//                     </div>
//                     <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-2xl">
//                         Recruitment Form
//                     </h1>
//                     <p className="text-blue-200 text-sm sm:text-base md:text-lg px-2">
//                         Join our team and make an impact!
//                     </p>
//                 </div>

//                 <form noValidate onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
//                     {/* Personal Information Section */}
//                     <div className="space-y-4 sm:space-y-6">
//                         <h2 className="text-xl sm:text-2xl font-bold text-white border-l-4 border-blue-400 pl-3 sm:pl-4 flex items-center gap-2">
//                             <span className="text-blue-400 text-lg sm:text-xl"></span>
//                             <span className="text-base sm:text-2xl">Personal Information</span>
//                         </h2>
                        
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
//                             {/* Name Input */}
//                             <div className="space-y-2">
//                                 <label className="block text-xs sm:text-sm font-semibold text-blue-200">
//                                     Name <span className="text-yellow-400">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     value={formData.name}
//                                     onChange={handleChange}
//                                     placeholder="Enter your full name"
//                                     required
//                                     className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
//                                         validated && !formData.name ? 'border-yellow-400' : 'border-slate-700'
//                                     } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base`}
//                                     maxLength={100}
//                                 />
//                                 {validated && !formData.name && (
//                                     <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                                         <span>⚠</span> Name is required
//                                     </p>
//                                 )}
//                             </div>

//                             {/* USN Input */}
//                             <div className="space-y-2">
//                                 <label className="block text-xs sm:text-sm font-semibold text-blue-200">
//                                     USN <span className="text-yellow-400">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="usn"
//                                     value={formData.usn}
//                                     onChange={handleChange}
//                                     required
//                                     placeholder='Enter your USN'
//                                     className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
//                                         validated && !formData.usn ? 'border-yellow-400' : 'border-slate-700'
//                                     } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base`}
//                                 />
//                                 {validated && !formData.usn && (
//                                     <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                                         <span>⚠</span> USN is required
//                                     </p>
//                                 )}
//                             </div>

//                             {/* Branch Select */}
//                             <div className="space-y-2">
//                                 <label className="block text-xs sm:text-sm font-semibold text-blue-200">
//                                     Branch <span className="text-yellow-400">*</span>
//                                 </label>
//                                 <select
//                                     name="branch"
//                                     value={formData.branch}
//                                     onChange={handleChange}
//                                     className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white border-2 ${
//                                         validated && !formData.branch ? 'border-yellow-400' : 'border-slate-700'
//                                     } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base`}
//                                 >
//                                     <option value="" disabled hidden className="bg-slate-800 text-white">
//                                         Select your branch
//                                     </option>
//                                     {branches.map(branch => (
//                                         <option key={branch} value={branch} className="bg-slate-800 text-white">
//                                             {branch}
//                                         </option>
//                                     ))}
//                                 </select>
//                                 {validated && !formData.branch && (
//                                     <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                                         <span>⚠</span> Branch is required
//                                     </p>
//                                 )}
//                             </div>

//                             {/* Semester Checkbox */}
//                             <div className="space-y-2">
//                                 <label className="block text-xs sm:text-sm font-semibold text-blue-200">
//                                     Are you a 3rd Semester or MCA student? <span className="text-yellow-400">*</span>
//                                 </label>
//                                 <div className="flex flex-col space-y-3"> 
//                                     <label className="flex items-center space-x-3 text-sm sm:text-base">
//                                         <input
//                                             type="radio"
//                                             name="studentType"
//                                             value="3rd Semester"
//                                             checked={formData.studentType === "3rd Semester"}
//                                             onChange={handleChange}
//                                             className="form-radio w-6 h-6" // Increase size
//                                         />
//                                         <span>3rd Semester</span>
//                                     </label>
//                                     <label className="flex items-center space-x-3 text-sm sm:text-base">
//                                         <input
//                                             type="radio"
//                                             name="studentType"
//                                             value="MCA student"
//                                             checked={formData.studentType === "MCA student"}
//                                             onChange={handleChange}
//                                             className="form-radio w-6 h-6" // Increase size
//                                         />
//                                         <span>MCA student</span>
//                                     </label>
//                                 </div>
//                                 {validated && !formData.studentType && (
//                                     <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                                         <span>⚠</span> Please select your student type
//                                     </p>
//                                 )}
//                             </div>

//                             {/* Official Mail Input */}
//                             <div className="space-y-2">
//                                 <label className="block text-xs sm:text-sm font-semibold text-blue-200">
//                                     Official Email <span className="text-yellow-400">*</span>
//                                 </label>
//                                 <input
//                                     type="email"
//                                     name="officialMail"
//                                     value={formData.officialMail}
//                                     onChange={handleChange}
//                                     required
//                                     placeholder='your.email@college.edu'
//                                     className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
//                                         validated && !formData.officialMail ? 'border-yellow-400' : 'border-slate-700'
//                                     } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base`}
//                                 />
//                                 {validated && !formData.officialMail && (
//                                     <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                                         <span>⚠</span> Official email is required
//                                     </p>
//                                 )}
//                             </div>

//                             {/* Phone Number Input */}
//                             <div className="space-y-2">
//                                 <label className="block text-xs sm:text-sm font-semibold text-blue-200">
//                                     Phone Number <span className="text-yellow-400">*</span>
//                                 </label>
//                                 <input
//                                     type="tel"
//                                     name="phoneNumber"
//                                     value={formData.phoneNumber}
//                                     onChange={handleChange}
//                                     required
//                                     placeholder='XXXXX XXXXX'
//                                     maxLength={10}
//                                     minLength={10}
//                                     className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
//                                         validated && !formData.phoneNumber ? 'border-yellow-400' : 'border-slate-700'
//                                     } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base`}
//                                 />
//                                 {validated && !formData.phoneNumber && (
//                                     <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                                         <span>⚠</span> Phone number is required
//                                     </p>
//                                 )}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Team Selection Section */}
//                     <div className="space-y-4 sm:space-y-6 pt-4 sm:pt-6">
//                         <h2 className="text-xl sm:text-2xl font-bold text-white border-l-4 border-yellow-400 pl-3 sm:pl-4 flex items-center gap-2">
//                             <span className="text-yellow-400 text-lg sm:text-xl"></span>
//                             <span className="text-base sm:text-2xl">Team Preference</span>
//                         </h2>

//                         {/* Team Selection - Radio Buttons */}
//                         <div className="space-y-3 bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50">
//                             <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
//                                 Which team would you like to be a part of? (Select one)
//                                 <span className="text-yellow-400 ml-1">*</span>
//                             </label>
//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//                                 {teams.map(team => (
//                                     <label 
//                                         key={team} 
//                                         className={`relative flex items-center space-x-3 py-3 px-4 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
//                                             formData.team === team 
//                                                 ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400 shadow-lg shadow-blue-500/20' 
//                                                 : 'bg-slate-800/30 border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/50'
//                                         }`}
//                                     >
//                                         <input
//                                             id={`team-${team}`}
//                                             type="radio"
//                                             name="team"
//                                             value={team}
//                                             checked={formData.team === team}
//                                             onChange={handleChange}
//                                             className="sr-only peer"
//                                             />
//                                         <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
//                                             formData.team === team 
//                                                 ? 'border-blue-400 bg-blue-500' 
//                                                 : 'border-slate-600 bg-slate-800/50'
//                                         }`}>
//                                             {formData.team === team && (
//                                                 <div className="w-2.5 h-2.5 bg-white rounded-full animate-scale-in"></div>
//                                             )}
//                                         </div>
//                                         <span className={`text-sm sm:text-base font-medium transition-colors duration-300 ${
//                                             formData.team === team ? 'text-blue-200' : 'text-white'
//                                         }`}>
//                                             {team}
//                                         </span>
//                                     </label>
//                                 ))}
//                             </div>
//                             {validated && formData.team === "" && (
//                                 <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                                     <span>⚠</span> Please select a team
//                                 </p>
//                             )}
//                         </div>
//                     </div>

//                     {/* Dynamic Questions Based on Team Selection */}
//                     {(formData.team !== "") && (
//                         <div className="space-y-6 sm:space-y-8 pt-4 sm:pt-6">
//                             <h2 className="text-xl sm:text-2xl font-bold text-white border-l-4 border-purple-400 pl-3 sm:pl-4 flex items-center gap-2">
//                                 <span className="text-purple-400 text-lg sm:text-xl"></span>
//                                 <span className="text-base sm:text-2xl">Team-Specific Questions</span>
//                             </h2>

//                             {renderTechnicalQuestions()}
//                             {renderCurationQuestions()}
//                             {renderSocialMediaQuestions()}
//                             {renderDesignQuestions()}
//                         </div>
//                     )}

//                     {/* Common Questions Section */}
//                     <div className="space-y-6 sm:space-y-8 pt-4 sm:pt-6">
//                         <h2 className="text-xl sm:text-2xl font-bold text-white border-l-4 border-green-400 pl-3 sm:pl-4 flex items-center gap-2">
//                             <span className="text-green-400 text-lg sm:text-xl"></span>
//                             <span className="text-base sm:text-2xl">Additional Information</span>
//                         </h2>

//                         {/* Other Clubs */}
//                         <div className="space-y-3 bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-green-500/30 transition-all duration-300">
//                             <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
//                                 Are you currently a member of any other club? If so, please specify the club and your role within it.
//                                 <span className="text-yellow-400 ml-1">*</span>
//                             </label>
//                             <textarea
//                                 name="otherClubs"
//                                 rows={3}
//                                 value={formData.otherClubs}
//                                 onChange={handleChange}
//                                 placeholder="List any clubs you're part of and your roles, or write 'None' if not applicable..."
//                                 className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
//                                     validated && !formData.otherClubs ? 'border-yellow-400' : 'border-slate-700'
//                                 } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm text-sm sm:text-base`}
//                             />
//                             {validated && !formData.otherClubs && (
//                                 <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                                     <span>⚠</span> This field is required
//                                 </p>
//                             )}
//                         </div>

//                         {/* Social Links */}
//                         <div className="space-y-3 bg-slate-800/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 hover:border-green-500/30 transition-all duration-300">
//                             <label className="block text-white font-medium text-base sm:text-lg leading-relaxed">
//                                 Please provide a Linktree with all your social handles, or links to your LinkedIn, social media, and portfolio.
//                                 <span className="text-yellow-400 ml-1">*</span>
//                             </label>
//                             <input
//                                 type="url"
//                                 name="socialLinks"
//                                 value={formData.socialLinks}
//                                 onChange={handleChange}
//                                 placeholder="https://linktr.ee/yourname or https://linkedin.com/in/yourname"
//                                 className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border-2 ${
//                                     validated && !formData.socialLinks ? 'border-yellow-400' : 'border-slate-700'
//                                 } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-sm sm:text-base`}
//                             />
//                             {validated && !formData.socialLinks && (
//                                 <p className="text-yellow-400 text-xs sm:text-sm flex items-center gap-1">
//                                     <span>⚠</span> Social links are required
//                                 </p>
//                             )}
//                         </div>
//                     </div>

//                     {/* Submit Button */}
//                     <div className="flex flex-col items-center gap-4 pt-4 sm:pt-6">
//                         <button
//                             type="submit"
//                             disabled={isSubmitting}
//                             className={`w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold text-white rounded-xl transition-all duration-300 transform shadow-xl border-2 border-blue-400/30 ${
//                                 isSubmitting
//                                     ? 'bg-slate-600 cursor-not-allowed'
//                                     : 'bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 hover:scale-105 hover:shadow-2xl'
//                             }`}
//                         >
//                             {isSubmitting ? (
//                                 <span className="flex items-center gap-2 justify-center">
//                                     <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                     </svg>
//                                     Submitting...
//                                 </span>
//                             ) : (
//                                 'Submit Application'
//                             )}
//                         </button>

//                         {/* Toast Notification */}
//                         {showToast.message && (
//                             <div className={`
//                                 w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-center backdrop-blur-md
//                                 transition-all duration-300 animate-fade-in shadow-xl border-2 text-sm sm:text-base
//                                 ${showToast.type === 'success' 
//                                     ? 'bg-green-500/20 text-green-100 border-green-400/60' 
//                                     : 'bg-yellow-500/20 text-yellow-100 border-yellow-400/60'
//                                 }
//                             `}>
//                                 {showToast.message}
//                             </div>
//                         )}
//                     </div>
//                 </form>
//             </div>

//             {/* Custom Styles for Animations */}
//             <style jsx>{`
//                 @keyframes scale-in {
//                     0% {
//                         transform: scale(0);
//                     }
//                     50% {
//                         transform: scale(1.2);
//                     }
//                     100% {
//                         transform: scale(1);
//                     }
//                 }
                
//                 .animate-scale-in {
//                     animation: scale-in 0.2s ease-out;
//                 }

//                 @keyframes fade-in {
//                     from {
//                         opacity: 0;
//                         transform: translateY(-10px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }

//                 .animate-fade-in {
//                     animation: fade-in 0.3s ease-out;
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default RecruitmentForm;



'use client';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const RecruitmentForm: React.FC = () => {
    const router = useRouter();

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

            {/* Recruitments Closed Card */}
            <div className="w-full max-w-4xl bg-slate-900/40 backdrop-blur-xl shadow-2xl rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 space-y-6 sm:space-y-8 relative border border-white/10 z-10 my-20 sm:my-10">
                {/* Icon */}
                <div className="flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                        <div className="relative bg-gradient-to-br from-red-500/20 to-orange-500/20 p-6 sm:p-8 rounded-full border-4 border-red-400/30">
                            <svg 
                                className="w-16 h-16 sm:w-24 sm:h-24 text-red-300" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Header */}
                <div className="text-center space-y-4 sm:space-y-6">
                    <div className="inline-block px-4 py-2 bg-red-500/20 rounded-full border border-red-400/30">
                        <span className="text-red-300 text-sm sm:text-base font-medium">Closed</span>
                    </div>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-2xl">
                        Recruitments Closed
                    </h1>
                    
                    <div className="space-y-3 sm:space-y-4 max-w-2xl mx-auto">
                        <p className="text-lg sm:text-xl md:text-2xl text-blue-200 font-medium">
                            Thank you for your interest!
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed px-4">
                            Our recruitment period has ended. We appreciate all the applications we received. 
                            Stay tuned for future opportunities to join our amazing team!
                        </p>
                    </div>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
                    <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="bg-blue-500/20 p-2 sm:p-3 rounded-lg">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Stay Updated</h3>
                                <p className="text-xs sm:text-sm text-slate-300">Follow our social media for announcements about future recruitment cycles.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="bg-purple-500/20 p-2 sm:p-3 rounded-lg">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Join Our Events</h3>
                                <p className="text-xs sm:text-sm text-slate-300">Participate in our workshops and events to stay connected with the community.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 sm:pt-8">
                    <button
                        onClick={() => router.push('/')}
                        className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-blue-400/30"
                    >
                        Return to Home
                    </button>
                    
                    <button
                        onClick={() => window.open('https://www.instagram.com/mlsacit', '_blank')}
                        className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-purple-400/30"
                    >
                        Follow Us
                    </button>
                </div>

                {/* Footer Note */}
                <div className="text-center pt-6 sm:pt-8 border-t border-white/10">
                    <p className="text-xs sm:text-sm text-slate-400">
                        Questions? Reach out to us at{' '}
                        <a 
                            href="mailto:mlsa@rvce.edu.in" 
                            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 underline"
                        >
                            msclub@cambridge.edu.in
                        </a>
                    </p>
                </div>
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

export default RecruitmentForm;