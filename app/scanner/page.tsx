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

    const handleScanSuccess = async (decodedText: string, decodedResult: any) => {
        setScannedContent(decodedText);
        setShowScanner(false);

        try {
            fetch('/api/addUSN', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ qrCodeData: decodedText }),
            })
            .then((response) => response.json())
            .then((result) => {
                if (result.alreadyScanned) {
                    setScanResult('warning');
                } else {
                    setScanResult('valid');
                }
            })
            .catch((error) => {
                console.error('Error sending QR code data to API:', error);
                setScanResult('invalid');  
            });

            setTimeout(() => {
                setShowScanner(true);
                setScanResult(null);  
            }, 2000);
        } catch (error) {
            console.error('Unexpected error during scanning:', error);
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black flex items-center justify-center">
            {!authorized ? (
                <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-lg p-8 w-full max-w-md text-center">
                    <h1 className="text-2xl font-bold text-white mb-4">Admin Access</h1>
                    <div className="flex flex-col gap-4">
                        <input
                            className="px-4 py-2 border rounded-md bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="password"
                            placeholder="Enter password"
                            value={enteredPassword}
                            onChange={(e) => setEnteredPassword(e.target.value)}
                        />
                        <button
                            className="bg-blue-800 text-white py-2 rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </div>
                    {error && <p className="text-red-400 mt-4">{error}</p>}
                </div>
            ) : (
                <div className="w-full max-w-2xl p-4 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg">
                    {showScanner && (
                        <>
                            <h1 className="text-2xl font-bold text-white mb-6">USN Scanner</h1>
                            <Html5QrcodePlugin
                                fps={10}
                                qrbox={250}
                                disableFlip={false}
                                qrCodeSuccessCallback={handleScanSuccess}
                            />
                        </>
                    )}

                    {scanResult === 'valid' && !showScanner && (
                        <div className="p-4 mt-4 bg-blue-100 text-blue-700 rounded-lg">
                            <span className="font-bold">Success! QR code added.</span>
                        </div>
                    )}

                    {scanResult === 'warning' && !showScanner && (
                        <div className="p-4 mt-4 bg-yellow-100 text-yellow-700 rounded-lg">
                            <span className="font-bold">Warning: QR code already scanned!</span>
                        </div>
                    )}

                    {scanResult === 'invalid' && !showScanner && (
                        <div className="p-4 mt-4 bg-red-100 text-red-700 rounded-lg">
                            <span className="font-bold">Failed to process the QR code!</span>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default USNScannerPage;
