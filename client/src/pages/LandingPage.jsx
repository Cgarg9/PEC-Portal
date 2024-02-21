import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';

const LandingPage = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);

    const handleGetStartedClick = () => {
        setShowLoginForm(true);
    };
    const navigate = useNavigate();
    return (
        <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white">
            <h1 className="text-6xl font-bold mb-8">Welcome to PEC-Connect</h1>
            <p className="text-xl text-center mb-8 font-semibold mt-4">
                This is a portal for college students to connect with their fellow classmates and to get information about courses. Click on the get started button to continue.
            </p>
            <button onClick={handleGetStartedClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg">
                Get Started
            </button>
            {showLoginForm && <LoginForm />}
        </div>
    );

};

export default LandingPage;
