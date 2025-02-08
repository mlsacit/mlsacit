'use client';
import React, { useState, useEffect, FormEvent } from 'react';
import LoadingComponent from "../components/Loader";
import { useAuth } from '../context/AuthContext';
import { usePathname, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

interface Question {
    id: string;
    question: string;
    options: string[];
}

const QuizPage: React.FC = () => {
    const { isAuthenticated, userEmail } = useAuth(); // Use email from AuthContext
    const [userDetails, setUserDetails] = useState({ usn: '', email: userEmail || 'Undefined' }); // Default email from AuthContext
    const [questions, setQuestions] = useState<Question[]>([]);
    const [answers, setAnswers] = useState<{ [key: string]: string }>({});
    const [quizStarted, setQuizStarted] = useState(false);
    const [validated, setValidated] = useState(false);
    const [showToast, setShowToast] = useState<{ message: string; type: string } | null>(null);
    const [timeRemaining, setTimeRemaining] = useState(100);   //fallback timeout
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null);
    const [isAutoSubmitted, setIsAutoSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const handleUserDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserDetails((prev) => ({ ...prev, [name]: value }));
    };

    const fetchQuestions = async () => {
        setLoading(true);
        try {
            
            const response = await fetch('/api/getQuizQuestions');
            const data = await response.json();

            if (!response.ok) throw new Error(data.message || 'Failed to fetch quiz questions');
            setQuestions(data.questions);
            setTimeRemaining(data.timer);
        } catch (error: any) {
            setShowToast({ message: error.message || 'Error fetching questions.', type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    const handleStartQuiz = () => {
        if (!userDetails.usn) {
            setValidated(true);
            return;
        }

        setQuizStarted(true);
        fetchQuestions();

        const newTimerInterval = setInterval(() => {
            setTimeRemaining((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(newTimerInterval);
                    if (!quizSubmitted) {
                        handleSubmit({ preventDefault: () => { }, target: {} } as FormEvent<HTMLFormElement>);
                    }
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        setTimerInterval(newTimerInterval);
    };

    const handleAnswerChange = (questionId: string, option: string) => {
        setAnswers((prev) => ({ ...prev, [questionId]: option }));
    };

    const handleSubmit = async (e: FormEvent, autoSubmit = false) => {
        e.preventDefault();

        if (quizSubmitted || isSubmitting) return;

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/submitQuizAnswers', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ usn: userDetails.usn, email: userDetails.email, answers }),
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.message || 'Failed to submit answers.');

            if (!autoSubmit) {
                setShowToast({
                    message: `Quiz submitted successfully! Your score: ${data.result}/${questions.length}`,
                    type: 'success',
                });
            }

            setQuizSubmitted(true);
            setAnswers({});
            setQuizStarted(false);
            if (timerInterval) clearInterval(timerInterval);
        } catch (error: any) {
            setShowToast({ message: error.message || 'Error submitting quiz answers.', type: 'error' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
    };

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'hidden' && quizStarted && !quizSubmitted) {
                setShowToast({ message: 'Quiz automatically submitted due to tab change.', type: 'info' });
                setIsAutoSubmitted(true);
                handleSubmit({ preventDefault: () => { }, target: {} } as FormEvent<HTMLFormElement>, true);
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [quizStarted, quizSubmitted, handleSubmit]);

    useEffect(() => {
        const storedAuth = Cookies.get('isAuthenticated');
        if (storedAuth !== 'true') {
            Cookies.set('redirectPath', pathname, { expires: 1 });
            router.push('/login');
        }
    }, [pathname, router]);

    if (!isAuthenticated) {
        return <div>Redirecting to login...</div>;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-black py-10">
            <div className="bg-white/10 backdrop-blur-lg shadow-lg rounded-lg p-6 w-full max-w-4xl">
                {loading ? (
                    <LoadingComponent />
                ) : !quizStarted ? (
                    <>
                        <div className="text-white p-4 mb-6">
                            <h1 className="text-2xl font-semibold mb-2 text-center">Welcome to the Quiz!</h1>
                            <p className="text-sm text-gray-300 mb-4 text-center">
                                Get ready to test your knowledge and have fun! Here&apos;s what you need to know before you start:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-gray-300">
                                <li>Ensure you provide your USN correctly before starting.</li>
                                <li>You can participate in the quiz only once per USN.</li>
                                <li>If you do not submit the quiz before the time ends, your score will be zero (0).</li>
                                <li>Switching tabs during the quiz will result in automatic submission (0).</li>
                            </ul>
                            <p className="text-sm text-gray-300 mt-4 text-center">
                                Click the **Start Quiz** button when you&apos;re ready. Good luck!
                            </p>
                        </div>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="usn" className="block text-sm font-medium text-white">
                                    USN
                                </label>
                                <input
                                    type="text"
                                    id="usn"
                                    name="usn"
                                    value={userDetails.usn}
                                    onChange={handleUserDetailsChange}
                                    className={`mt-1 py-2 block w-full rounded-lg bg-white/20 text-white placeholder-gray-300 shadow-sm border ${validated && !userDetails.usn ? 'border-red-500' : 'border-transparent'
                                        }`}
                                    required
                                />
                                {validated && !userDetails.usn && (
                                    <p className="text-red-400 text-sm mt-1">Please provide your USN.</p>
                                )}
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="button"
                                    onClick={handleStartQuiz}
                                    className="px-6 py-2 text-white bg-blue-800 rounded-lg shadow hover:bg-blue-700"
                                >
                                    Start Quiz
                                </button>
                            </div>
                        </form>
                    </>
                ) : (
                    <>
                        <h1 className="text-4xl font-bold text-white mb-6 text-center">Quiz</h1>
                        <p className="text-white text-xl mb-6 text-center">
                            Time Remaining: {formatTime(timeRemaining)}
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-6" onContextMenu={(e) => e.preventDefault()} style={{ userSelect: 'none' }}>
                            {questions.map((question, index) => (
                                <div key={question.id}>
                                    <h2 className="text-lg font-medium text-white mb-2">
                                        {index + 1}. {question.question}
                                    </h2>
                                    <div className="space-y-2">
                                        {question.options.map((option, i) => (
                                            <div key={i} className="flex items-center">
                                                <input
                                                    type="radio"
                                                    id={`${question.id}-${i}`}
                                                    name={question.id}
                                                    value={['A', 'B', 'C', 'D'][i]}
                                                    checked={answers[question.id] === ['A', 'B', 'C', 'D'][i]}
                                                    onChange={() => handleAnswerChange(question.id, ['A', 'B', 'C', 'D'][i])}
                                                    className="mr-2"
                                                />
                                                <label htmlFor={`${question.id}-${i}`} className="text-white">
                                                    {option}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                    {validated && !answers[question.id] && (
                                        <p className="text-red-400 text-sm mt-1">Please select an answer.</p>
                                    )}
                                </div>
                            ))}
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="px-6 py-2 text-white bg-blue-800 rounded-lg shadow hover:bg-blue-700"
                                >
                                    Submit Quiz
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
            {showToast && (
                <div
                    className={`fixed bottom-4 right-4 text-white text-sm py-2 px-4 rounded-md shadow-md ${showToast.type === 'success' ? 'bg-blue-600' : 'bg-red-600'
                        }`}
                    role="alert"
                >
                    {showToast.message}
                </div>
            )}
        </div>
    );
};

export default QuizPage;
