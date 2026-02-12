"use client";

import LiquidEther from "../components/LiquidEther";

export default function Home() {
  return (
    <>
      <div
        className="min-h-screen bg-black"
        style={{ width: "100%", height: 600, position: "relative" }}
      >
        <div className="absolute z-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-8">
          <h1 className="text-white text-8xl font-bold">Blendbetter</h1>
          <p className="text-white text-lg max-w-2xl text-center">
            An interactive smoothie builder that lets you customize ingredients
            and try your creation blend instantly.
          </p>
          <div className="flex items-center justify-center gap-8">
            <span className="text-white bg-transparent border border-white px-4 py-2 rounded-full text-lg font-bold">
              Learn More
            </span>
            <span className="text-white px-4 py-2 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-lg font-bold">
              Get Started
            </span>
          </div>
        </div>

        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          // color0="#5227FF"
          // color1="#FF9FFC"
          // color2="#B19EEF"
        />
      </div>
    </>
  );
}
