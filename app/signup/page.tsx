'use client';
import React, { useState } from 'react';

const SignUpPage: React.FC = () => {
  const [userDetails, setUserDetails] = useState({email: '', password: '' });
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleUserDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async () => {
    if (!userDetails.email || !userDetails.password) {
      setValidated(true);
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userDetails),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || 'Failed to sign up');

      alert('Sign-up successful!');
      setUserDetails({email: '', password: '' }); // Reset form
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <form>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userDetails.email}
          onChange={handleUserDetailsChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userDetails.password}
          onChange={handleUserDetailsChange}
        />
        {validated && (!userDetails.email || !userDetails.password) && (
          <p>Please fill in all fields</p>
        )}
        <button type="button" onClick={handleSignUp} disabled={loading}>
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default SignUpPage;
