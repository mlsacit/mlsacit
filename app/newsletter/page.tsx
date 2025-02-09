'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NewsletterRegistration: React.FC = () => {
  const [email, setEmail] = useState('');
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState({ message: '', type: '' });
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (validated && e.target.value) {
      setValidated(false);
    }
  };

  const handleSubscribe = async () => {
    if (!email) {
      setValidated(true);
      return;
    }

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setShowToast({ message: 'Subscribed successfully!', type: 'success' });
      setEmail('');
    } catch {
      setShowToast({ message: 'Failed to subscribe. Try again.', type: 'error' });
    } finally {
      setLoading(false);
      setTimeout(() => setShowToast({ message: '', type: '' }), 3000);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#020084] to-[#000149] flex flex-col items-center py-16 px-4 overflow-hidden">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-8 left-8 z-10 px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-400 text-black font-semibold rounded-lg shadow-md hover:bg-gray-400 transition-all font-[Excon]"
        data-aos="flip-up"
      >
        Go Back
      </button>

      {/* Background Vector */}
      <div
        className="absolute inset-0 w-full h-full bg-center max-sm:bg-contain lg:bg-cover z-0"
        style={{ backgroundImage: "url('/Background.svg')" }}
      ></div>

      {/* Newsletter Content */}
      <div className="relative mt-16 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-white/10 p-7 shadow-2xl w-full max-w-5xl" data-aos="slide-up">
        <h2 className="text-4xl font-bold font-[Excon] text-center mb-10 text-white" data-aos="fade-down">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Monthly Newsletter
          </span>
        </h2>

        {/* Embedded Newsletter */}
        <div className="w-full overflow-hidden rounded-lg border border-white/20 shadow-lg h-[80vh]" data-aos="zoom-in">
          <iframe
            src="https://drive.google.com/file/d/1hpSAlt8Z-7i0a1ALkWSBRxc2iwLs6Ad9/preview?usp=sharing"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            seamless
          ></iframe>
        </div>
      </div>

      {/* Subscription Section */}
      <footer className="relative bg-gray-800 text-white p-4 mt-10 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0" data-aos="flip-left">
        <div className="flex flex-col md:flex-row items-center w-full md:space-x-4">
          <h2 className="text-xl font-semibold mb-2 md:mb-0">Stay Updated!</h2>
          <div className="flex flex-col w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className={`px-4 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 shadow-sm border ${
                validated && !email ? 'border-red-500' : 'border-transparent'
              } focus:ring-blue-500 focus:border-blue-500`}
            />
            {validated && !email && (
              <p className="text-red-400 text-sm mt-2">Please provide a valid email.</p>
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={handleSubscribe}
          disabled={loading}
          className="px-6 py-2 text-white bg-blue-800 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </footer>

      {/* Toast Notification */}
      {showToast.message && (
        <div
          className={`fixed bottom-4 right-4 text-white text-sm py-2 px-4 rounded-md shadow-md ${
            showToast.type === 'success' ? 'bg-blue-600' : 'bg-red-600'
          }`}
          role="alert"
          data-aos="fade-up"
        >
          {showToast.message}
        </div>
      )}
    </div>
  );
};

export default NewsletterRegistration;
