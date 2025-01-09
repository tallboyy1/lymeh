"use client";

import { useState, useEffect } from "react";

const SplashScreen = () => {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Trigger enlargement after 2 seconds
    const timer = setTimeout(() => {
      setIsEnlarged(true);

      setTimeout(() => {
        setShowText(true);
      }, 1000); // Delay matches the transition duration in CSS
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
        <div className="flex flex-col items-center justify-center h-screen bg-yellow">
            <div
                className={`transition-all duration-1000 ease-in-out ${
                    isEnlarged ? "w-48 h-48" : "w-12 h-12"
                    } bg-black flex items-center justify-center`}
                    >
                {/* {isEnlarged && (
                <p className="text-white text-5xl font-bold">the <br/> lifeline</p>
                )} */}
                {showText && (
                    <p className="text-yellow text-5xl font-bold">
                    the <br /> lifeline
                </p>
                )}
            </div>
            <div className="max-w-2xl mt-8 text-center">
            {showText ? (
                    <small>Active listening to consumers has a strong capacity to grow brands. We are a team that understands how to use deep consumer insights to create compelling campaigns that grow brands.</small>
                ) : <div className="text-yellow"><small>Active listening to consumers has a strong capacity to grow brands. We are a team that understands how to use deep consumer insights to create compelling campaigns that grow brands.</small></div>}
            </div>
        </div>
    </>
  );
};

export default SplashScreen;