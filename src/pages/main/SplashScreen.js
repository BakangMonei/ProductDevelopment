import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process for 4 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      navigate("/LandingPage"); // Navigate to LoginPage.js
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const runningPersonSVG = (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      xmlSpace="preserve"
      width="100px"
      height="100px"
      className="animate-running"
    >
      <circle fill="none" stroke="#000000" strokeWidth="4" strokeMiterlimit="10" cx="50" cy="50" r="48" />
      <circle fill="#000000" cx="50" cy="50" r="4" />
      <path fill="#000000" d="M50,30c5.523,0,10,4.477,10,10s-4.477,10-10,10s-10-4.477-10-10S44.477,30,50,30 M50,28c-6.627,0-12,5.373-12,12 s5.373,12,12,12s12-5.373,12-12S56.627,28,50,28L50,28z" />
      <path fill="#000000" d="M66,72c-1.104,0-2-0.896-2-2c0-5.523-4.477-10-10-10h-8c-5.523,0-10,4.477-10,10c0,1.104-0.896,2-2,2 s-2-0.896-2-2c0-7.732,6.268-14,14-14h8c7.732,0,14,6.268,14,14C68,71.104,67.104,72,66,72z" />
    </svg>
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {isLoading && (
        <div className="w-32 h-32">
          {runningPersonSVG}
        </div>
      )}
    </div>
  );
};

export default SplashScreen;
