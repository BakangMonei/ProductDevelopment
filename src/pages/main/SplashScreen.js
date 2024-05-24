import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => {
        setProgress((prevProgress) => prevProgress + 1);
      }, 40);
      return () => clearTimeout(timer);
    } else {
      navigate("/LandingPage");
    }
  }, [progress, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <div className="progress-text">{progress}%</div>
    </div>
  );
};

export default SplashScreen;
