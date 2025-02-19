'use client';

import { useState } from 'react';
import Html5QrcodePlugin from '../components/Html5QrcodePlugin';

const USNScannerPage: React.FC = () => {
    const [scannedContent, setScannedContent] = useState<string | null>(null);
    const [scanResult, setScanResult] = useState<'valid' | 'invalid' | 'warning' | null>(null);
    const [showScanner, setShowScanner] = useState(true);
    const [enteredPassword, setEnteredPassword] = useState('');
    const [authorized, setAuthorized] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [feedback, setFeedback] = useState('');
    const [attendanceMarked, setAttendanceMarked] = useState(false);
    
    const handleScanSuccess = async (decodedText: string) => {
        setScannedContent(decodedText);
        setShowScanner(false);

        try {
            const response = await fetch('/api/scanTicket', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ qrCodeData: decodedText }),
            });
            const result = await response.json();

            if (result.alreadyScanned) {
                setScanResult('warning');
            } else if (result.valid) {
                setScanResult('valid');
                setAttendanceMarked(true);
            } else {
                setScanResult('invalid');
            }

            setTimeout(() => {
                setShowScanner(true);
                setScanResult(null);
            }, 2000);
        } catch (error) {
            console.error('Error processing QR code:', error);
            setScanResult('invalid');
        }
    };

    const handleLogin = () => {
        const correctPassword = process.env.NEXT_PUBLIC_VIP_PASS;
        if (enteredPassword === correctPassword) {
            setAuthorized(true);
            setError(null);
        } else {
            setError('Invalid password');
        }
    };

    const submitFeedback = async () => {
        if (!feedback) return;
        try {
            await fetch('/api/submitFeedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ feedback }),
            });
            alert('Feedback submitted!');
            setFeedback('');
        } catch (error) {
            console.error('Error submitting feedback:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black flex items-center justify-center">
            {!authorized ? (
                <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-lg p-8 w-full max-w-md text-center">
                    <h1 className="text-2xl font-bold text-white mb-4">Admin Access</h1>
                    <input
                        className="px-4 py-2 border rounded-md bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="password"
                        placeholder="Enter password"
                        value={enteredPassword}
                        onChange={(e) => setEnteredPassword(e.target.value)}
                    />
                    <button
                        className="bg-blue-800 text-white py-2 rounded-md hover:bg-blue-700 transition"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                    {error && <p className="text-red-400 mt-4">{error}</p>}
                </div>
            ) : (
                <div className="w-full max-w-2xl p-4 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg">
                    {showScanner && (
                        <>
                            <h1 className="text-2xl font-bold text-white mb-6">USN Ticket Scanner</h1>
                            <Html5QrcodePlugin
                                fps={10}
                                qrbox={250}
                                disableFlip={false}
                                qrCodeSuccessCallback={handleScanSuccess}
                            />
                        </>
                    )}

                    {scanResult === 'valid' && (
                        <div className="p-4 mt-4 bg-blue-100 text-blue-700 rounded-lg">
                            <span className="font-bold">Success! Ticket scanned, attendance marked.</span>
                        </div>
                    )}
                    {scanResult === 'warning' && (
                        <div className="p-4 mt-4 bg-yellow-100 text-yellow-700 rounded-lg">
                            <span className="font-bold">Warning: Ticket already scanned!</span>
                        </div>
                    )}
                    {scanResult === 'invalid' && (
                        <div className="p-4 mt-4 bg-red-100 text-red-700 rounded-lg">
                            <span className="font-bold">Invalid QR Code!</span>
                        </div>
                    )}

                    {attendanceMarked && (
                        <div className="mt-6">
                            <h2 className="text-xl font-bold text-white mb-2">Feedback Form</h2>
                            <textarea
                                className="w-full p-2 rounded-md bg-white/20 text-white border"
                                rows={3}
                                placeholder="Enter your feedback..."
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                            />
                            <button
                                className="mt-2 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-500 transition"
                                onClick={submitFeedback}
                            >
                                Submit Feedback
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default USNScannerPage;
