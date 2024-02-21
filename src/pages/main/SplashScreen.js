import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../logo.svg';

const SplashScreen = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading process for 4 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
            navigate('/LoginPage'); // Navigate to LoginPage.js
        }, 4000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {isLoading ? (
                <img
                    src={logo}
                    alt="Splash Image"
                    className="w-64 h-64 animate-fade-in animate-spin"
                />
            ) : (
                <img
                    src={logo}
                    alt="Splash Image"
                    className="w-64 h-64 animate-fade-in"
                />
                
            )}
        </div>
    );
};

export default SplashScreen;