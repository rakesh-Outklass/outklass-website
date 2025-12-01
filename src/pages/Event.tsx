import React from "react";
import { Calendar, Clock, Users, ArrowRight, Zap, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "./Footer";
import EventWorkshop from "./EventWorkshop";
import { motion } from "framer-motion";
const Events = () => {
  const workshops = [{
    title: " outklass DevOps Fundamentals Workshop",
    description: "3-day intensive workshop covering Docker, Jenkins, and AWS basics",
    duration: "3 Days",
    date: "Jan 15-17, 2024",
    seats: "25 seats left",
    price: "Free",
    type: "workshop",
    image: "/assets/devops.jpg",
    icon: <Code className="w-6 h-6" />
  }, {
    title: " outklass IoT Project Building Bootcamp",
    description: "Build your first smart home automation system in 2 days",
    duration: "2 Days",
    date: "Jan 22-23, 2024",
    seats: "18 seats left",
    price: "₹2,999",
    type: "bootcamp",
    image: "/assets/iot.jpg",
    icon: <Zap className="w-6 h-6" />
  }];
  return <div className="min-h-screen ">
            <motion.section initial={{
      opacity: 0,
      y: 50
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: false,
      amount: 0.2
    }} transition={{
      duration: 0.6,
      ease: "easeOut"
    }} className="section-padding pt-10 md:pt-12 bg-primary-foreground">
                <div className="container-custom bg-primary-foreground">
                    <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: false
        }} transition={{
          duration: 0.5
        }} className="text-center max-w-4xl mx-auto mb-16">
                        <div className="inline-flex items-center justify-center space-x-2 mb-6">
                            <div className="w-2 h-2 bg-blinkpath-orange rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                                Hands-On Experience
                            </span>
                            <div className="w-2 h-2 bg-gen-z-purple rounded-full animate-pulse"></div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold font-bebasNue mb-6 text-accent">
                            Workshops &{" "}
                            <span className="gradient-text">
                                Short Programs
                            </span>
                        </h1>
                        <p className="text-xl text-slate-400">
                            Get hands-on experience with our intensive workshops
                            and bootcamps
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {workshops.map((workshop, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: false
          }} transition={{
            duration: 0.5,
            delay: index * 0.15
          }}>
                                <Card className="card-3d overflow-hidden group h-full bg-teal-primary/90 hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]">
                                    <CardContent className="p-0">
                                        <div className="relative p-6 text-white overflow-hidden bg-teal-primary/95
             border-b border-white/20">
                                            <div className="relative z-10">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="p-2 rounded-full bg-white/20 border border-white/40">
                                                            {workshop.icon}
                                                        </div>
                                                        <div className="px-3 py-1 bg-gradient-to-r from-white/30 to-white/20 border border-white/50 rounded-full text-xs font-semibold tracking-wider backdrop-blur-sm">
                                                            {workshop.type.toUpperCase()}
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="text-2xl font-semibold text-accent">
                                                            {workshop.price}
                                                        </div>
                                                    </div>
                                                </div>
                                                <h3 className="text-2xl font-semibold mb-3 text-white leading-tight group-hover:text-orange-400 transition-colors duration-300">
                                                    {workshop.title}
                                                </h3>
                                                <p className="text-white/90 leading-relaxed">
                                                    {workshop.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="p-6 bg-teal-primary/95 backdrop-blur-md">
                                            <div className="space-y-3 mb-6">
                                                <div className="flex items-center p-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                                                    <Clock className="w-5 h-5 mr-4 text-white" />
                                                    <span className="text-white font-semibold">
                                                        {workshop.duration}
                                                    </span>
                                                </div>
                                                <div className="flex items-center p-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                                                    <Calendar className="w-5 h-5 mr-4 text-white" />
                                                    <span className="text-white font-semibold">
                                                        {workshop.date}
                                                    </span>
                                                </div>
                                                <div className="flex items-center p-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                                                    <Users className="w-5 h-5 mr-4 text-white" />
                                                    <span className="text-white font-semibold">
                                                        {workshop.seats}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="w-full btn-glow group rounded-lg">
                                                <EventWorkshop defaultCourse={workshop.title} defaultDate={workshop.date} />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>)}
                    </div>
                </div>
            </motion.section>
            <div className="">
                <Footer />
            </div>
        </div>;
};
export default Events;