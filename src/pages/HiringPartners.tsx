import React from "react";

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
    <>
      <section className="pt-15">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Our <span className="gradient-text">Hiring Partners</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Top companies trust outklass graduates
            </p>
          </div>
          <div className="overflow-hidden">
            <div className="flex animate-marquee space-x-8">
              {partners.concat(partners).map((partner, index) => (
                <div
                  key={index}
                  className="min-w-max px-5 py-1 bg-card/50 text-muted-foreground font-semibold text-lg rounded-md shadow-sm border border-orange-500 hover:bg-card/80 transition-all"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HiringPartners;
