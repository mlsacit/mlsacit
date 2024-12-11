'use client';
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const LoginPage: React.FC = () => {
  const { userEmail, login } = useAuth();
  const router = useRouter();

  const [userDetails, setUserDetails] = useState({ email: '', password: '' });
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showToast, setShowToast] = useState({ message: '', type: '' });

  useEffect(() => {
    if (userEmail) {
      setUserDetails((prevDetails) => ({
        ...prevDetails,
        email: userEmail,
      }));
    }
  }, [userEmail]);

  const handleUserDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    if (!userDetails.email || !userDetails.password) {
      setValidated(true);
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userDetails),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || 'Failed to log in');

      setShowToast({ message: 'Login successful!', type: 'success' });
      login(userDetails.email);
      const redirectPath = Cookies.get('redirectPath') || '/';
      router.push(redirectPath);
      Cookies.remove('redirectPath');
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-black py-10">
      <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Log In</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={userDetails.email}
              onChange={handleUserDetailsChange}
              className={`mt-1 py-2 block w-full rounded-lg bg-white/20 text-white placeholder-gray-300 shadow-sm border ${
                validated && !userDetails.email ? 'border-red-500' : 'border-transparent'
              } focus:ring-blue-500 focus:border-blue-500`}
            />
            {validated && !userDetails.email && (
              <p className="text-red-400 text-sm mt-1">Please provide your email.</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={userDetails.password}
              onChange={handleUserDetailsChange}
              className={`mt-1 py-2 block w-full rounded-lg bg-white/20 text-white placeholder-gray-300 shadow-sm border ${
                validated && !userDetails.password ? 'border-red-500' : 'border-transparent'
              } focus:ring-blue-500 focus:border-blue-500`}
            />
            {validated && !userDetails.password && (
              <p className="text-red-400 text-sm mt-1">Please provide your password.</p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleLogin}
              disabled={loading}
              className="px-6 py-2 text-white bg-blue-800 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>
          </div>
        </form>

        {errorMessage && (
          <div className="mt-4 text-sm text-red-400">
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
      {showToast.message && (
          <div
            className={`fixed bottom-4 right-4 text-white text-sm py-2 px-4 rounded-md shadow-md ${showToast.type === 'success' ? 'bg-blue-600' : 'bg-red-600'}`}
            role="alert"
          >
            {showToast.message}
          </div>
        )}
    </div>
  );
};

export default LoginPage;
