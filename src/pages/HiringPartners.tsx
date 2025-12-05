import React, { useEffect, useState } from "react";
const AnimatedText = () => {
  const words = ["IIT Experts", "Industry Leaders", "Tech Pioneers"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return <span className={`inline-block text-teal-primary font-bold transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
      {words[currentIndex]}
    </span>;
};
const HiringPartners = () => {
  const partners = ["TCS", "Infosys", "Wipro", "Accenture", "Capgemini", "Amazon", "Microsoft", "Google", "IBM", "Oracle", "Flipkart", "Zomato", "PayTM", "Ola", "Swiggy"];
  return <section className="pt-15">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Our <span className="gradient-text">Accreditions</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-2">Backed by</p>
          <p className="text-2xl bg-inherit text-accent md:text-5xl">
            <AnimatedText className="text-accent" />
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="flex animate-marquee space-x-8">
            {partners.concat(partners).map((partner, index) => {})}
          </div>
        </div>
      </div>
    </section>;
};
export default HiringPartners;