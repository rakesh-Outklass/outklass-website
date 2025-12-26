import React, { useEffect, useState } from "react";
// import MindImage from "../assets/mind-image-final.png";
import MindImage from "../assets/blue_brain.png";

/* 🔥 UPDATED ANIMATED TEXT (BOTTOM → CENTER LOOP SAFE) */
const AnimatedText = ({ className = "" }) => {
  const words = ["IIT Experts", "Industry Leaders", "Tech Pioneers"];
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState("translate-y-0 opacity-100");

  useEffect(() => {
    const interval = setInterval(() => {
      // move current word up & fade
      setOffset("-translate-y-full opacity-0");

      setTimeout(() => {
        // update word
        setIndex((prev) => (prev + 1) % words.length);

        // place next word below
        setOffset("translate-y-full opacity-0");

        // animate into center
        requestAnimationFrame(() => {
          setOffset("translate-y-0 opacity-100");
        });
      }, 700);
    }, 2700);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`relative inline-block h-[1.3em] min-w-[14ch] overflow-hidden ${className}`}
    >
      <span
        className={`absolute inset-0 flex items-center
        gradient-text transition-all duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${offset}`}
      >
        {words[index]}
      </span>
    </span>
  );
};

/* 🔥 MAIN SECTION (UNCHANGED DESIGN) */
const HiringPartners = () => {
  const partners = [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Capgemini",
    "Amazon",
    "Microsoft",
    "Google",
    "IBM",
    "Oracle",
    "Flipkart",
    "Zomato",
    "PayTM",
    "Ola",
    "Swiggy",
  ];

  return (
    <section className="relative pt-12 pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br via-white to-orange-50" />

      {/* Glass overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      <div className="relative container-custom">
        {/* Glass Box */}
        <div className="relative glass-panel mx-auto max-w-5xl p-14 py-16 overflow-hidden">
          {/* Right side background image */}
          <div
            className="
    absolute
    right-12
    top-1/2
    -translate-y-1/2
    w-[240px]
    h-[240px]
    bg-teal-400/25
    blur-[120px]
    rounded-full
    z-0
  "
          />
          <div
            className="
    absolute
    right-[-70px]
    top-32
    -translate-y-1/2
    w-[260px]
    md:w-[320px]
    lg:w-[360px]
    h-[300px]
    bg-no-repeat
    bg-contain
    opacity-90
    pointer-events-none
    z-0
  "
            style={{
              backgroundImage: `url(${MindImage})`,
            }}
          />
          <div className="relative z-10 px-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Minds Behind The Curriculum
            </h2>

            {/* 🔥 Animated Heading */}
            {/* <p className="text-3xl md:text-5xl font-extrabold mt-8 mb-12"> */}
            <p className="text-3xl md:text-5xl font-extrabold mt-10">
              <AnimatedText />
            </p>

            {/* Partner chips */}
            {/* <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {partners.map((partner, index) => (
              <div key={index} className="glass-chip">
                {partner}
              </div>
            ))}
          </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringPartners;
