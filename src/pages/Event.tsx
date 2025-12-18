import React from "react";
import {
  Calendar,
  Clock,
  Users,
  ArrowRight,
  Zap,
  Cpu,
  Car,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "./Footer";
import EventWorkshop from "./EventWorkshop";
import { motion } from "framer-motion";
const Events = () => {
  const workshops = [
    {
      title: "Outklass IoT Project Building Bootcamp",
      description: "Build your first smart home automation system in 2 days",
      duration: "2 Days",
      date: "Jan 22-23, 2024",
      seats: "18 seats left",
      price: "₹2,999",
      type: "bootcamp",
      image: "/assets/iot.jpg",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Outklass EV Powertrain Sizing Workshop",
      description:
        "2-day intensive workshop on Electric Vehicle powertrain design, motor sizing, and battery system optimization",
      duration: "2 Days",
      date: "Feb 10-11, 2024",
      seats: "20 seats left",
      price: "₹3,499",
      type: "workshop",
      image: "/assets/iot.jpg",
      icon: <Car className="w-8 h-8" />,
    },
    {
      title: "Outklass VLSI RTL Design Workshop",
      description:
        "1-day hands-on workshop covering RTL coding, synthesis basics, and digital design fundamentals",
      duration: "1 Day",
      date: "Feb 15, 2024",
      seats: "15 seats left",
      price: "₹1,999",
      type: "workshop",
      image: "/assets/iot.jpg",
      icon: <Cpu className="w-8 h-8" />,
    },
  ];
  return (
    <div className="min-h-screen ">
      <motion.section
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: false,
          amount: 0.2,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="section-padding pt-10 md:pt-12 bg-primary-foreground"
      >
        <div className="container-custom bg-primary-foreground">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
            }}
            transition={{
              duration: 0.5,
            }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center justify-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-blinkpath-orange rounded-full animate-pulse"></div>
              <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Hands-On Experience
              </span>
              <div className="w-2 h-2 bg-gen-z-purple rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-4xl font-bold font-bebasNue mb-6 text-accent md:text-6xl">
              Workshops & <span className="gradient-text">Short Programs</span>
            </h1>
            <p className="text-xl text-slate-400">
              Get hands-on experience with our intensive workshops and bootcamps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: false,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
              >
                <Card className="card-3d overflow-hidden group h-full bg-teal-primary/90 hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]">
                  <CardContent className="p-0">
                    <div
                      className="relative p-7 text-white overflow-hidden bg-teal-primary/95
             border-b border-white/20"
                    >
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-7">
                          <div className="flex items-center space-x-2">
                            <div className="p-3 rounded-full bg-white/20 border border-white/40">
                              {workshop.icon}
                            </div>
                            <div className="px-2 py-2 bg-gradient-to-r from-white/30 to-white/20 border border-white/50 rounded-full text-[11px] font-semibold tracking-wider backdrop-blur-sm">
                              {workshop.type.toUpperCase()}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-semibold text-accent pt-3">
                              {workshop.price}
                            </div>
                          </div>
                        </div>
                        <h3 className="text-base text-lg font-semibold mb-3 text-white leading-tight group-hover:text-orange-400 transition-colors duration-300">
                          {workshop.title}
                        </h3>
                        <p className="text-white/90 text-sm leading-relaxed line-clamp-2">
                          {workshop.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-7 bg-teal-primary/95 backdrop-blur-md">
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center p-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                          <Clock className="w-4 h-4 mr-3 text-white" />
                          <span className="text-white text-sm font-medium">
                            {workshop.duration}
                          </span>
                        </div>
                        <div className="flex items-center p-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                          <Calendar className="w-4 h-4 mr-3 text-white" />
                          <span className="text-white text-sm font-medium">
                            {workshop.date}
                          </span>
                        </div>
                        <div className="flex items-center p-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                          <Users className="w-4 h-4 mr-3 text-white" />
                          <span className="text-white text-sm font-medium">
                            {workshop.seats}
                          </span>
                        </div>
                      </div>
                      <div className="w-full btn-glow group rounded-lg">
                        <EventWorkshop
                          defaultCourse={workshop.title}
                          defaultDate={workshop.date}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};
export default Events;
