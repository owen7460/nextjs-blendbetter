"use client";

import { useRef, useState, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../public/animations/blendbetter.json";

export default function FullScreenLottieFade({ onFinish }) {
  const lottieRef = useRef(null);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(1.8);
    }
  }, []);

  const handleComplete = () => {
    setFadeOut(true);

    setTimeout(() => {
      if (onFinish) onFinish();
    }, 600);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-600 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={true}
        className="w-full h-full max-w-screen-lg max-h-screen-lg object-contain"
        onComplete={handleComplete}
      />
    </div>
  );
}
