import React, { useEffect, useState } from "react";

const AnimatedText = ({ className = "" }) => {
  const words = ["IIT Experts", "Industry Leaders", "Tech Pioneers"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`inline-block transition-all duration-500 ${className}`}
      key={words[index]}
    >
      {words[index]}
    </span>
  );
};

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
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br via-white to-orange-50 bg-teal-light" />

      {/* Glass overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      <div className="relative container-custom">
        {/* Glass Box */}
        <div className="glass-panel mx-auto max-w-5xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Minds Behind The Curriculum
          </h2>

          <p className="text-3xl md:text-5xl font-extrabold text-accent my-12 gradient-text">
            <AnimatedText />
          </p>

          {/* Partner chips */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {partners.map((partner, index) => (
              <div key={index} className="glass-chip">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringPartners;
