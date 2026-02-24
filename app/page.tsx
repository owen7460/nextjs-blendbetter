// "use client";

// import LiquidEther from "@/components/LiquidEther";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div
        className="min-h-screen bg-transparent bg-[url('/images/blendbetterBG.png')] bg-cover bg-center"
        style={{ width: "100%", height: 600, position: "relative" }}
      >
        <p className="text-gray-800 text-sm absolute z-100 bottom-0 left-0 translate-x-1/2 -translate-y-1/2">
          Version 1.0.1
        </p>
        <p className=" text-gray-800 text-sm max-w-2xl text-center absolute z-100 top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Do you know each year, Canadians waste over 500,000 tonnes of fruit,
          which is equivalent to more than 4,000 Olympic-sized swimming pools
        </p>
        <div className="absolute z-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-8">
          <h1 className="textFirst text-gray-800 text-8xl font-bold">
            Blendbetter
          </h1>
          <p className="textSecond text-gray-800 text-2xl max-w-4xl text-center">
            Build your perfect drinks — smoothies, bubble teas, cocktails — and
            see them come to life instantly.
          </p>
          <p className="textThird text-gray-800 text-lg max-w-2xl text-center">
            This app is an AI-powered tool that helps you turn the fruits you
            have at home into delicious smoothies, bubble teas, beverages, or
            cocktails. Even those fruit taste sour, but let's save them together
            and stop wasting fruit!
          </p>
          <div className="flex items-center justify-center gap-8">
            <span className="buttonFirst text-gray-800 bg-transparent border border-gray-800 px-6 py-2 rounded-full text-lg font-bold">
              <Link href="https://owen-ca.com" target="_blank">
                About Me
              </Link>
            </span>
            <Link
              href="/dashboard"
              className="buttonSecond text-white px-6 py-2 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-lg font-bold"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* <LiquidEther
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
        /> */}
      </div>
    </>
  );
}
