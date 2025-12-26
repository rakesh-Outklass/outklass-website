import React, { memo } from "react";
import { Calendar, Clock, Users, ArrowRight, Bell, Zap, Code, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import ContactModal from "@/components/ui/ContactModal";
import Footer from "./Footer";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

// Course card props interface
interface CourseCardProps {
  course: any;
  index: number;
  isComingSoon?: boolean;
}

// Memoized course card component for better performance
const CourseCard = memo(({
  course,
  index,
  isComingSoon = false
}: CourseCardProps) => {
  return (
    <motion.div
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
        delay: index * 0.1,
      }}
    >
      <Card
        className={`card-3d dec_wrp overflow-hidden group h-full ${
          isComingSoon ? "opacity-90" : ""
        }`}
      >
        <CardContent className="new_livp_crdman p-0 h-full ">
          {isComingSoon ? (
            // Coming Soon Card Layout
            <>
              <div className="bg-gradient-to-br from-teal-primary to-teal-dark py-5 px-4 text-white relative h-[120px]">
                <div className="flex items-center justify-between mb-5">
                  {course.icon}
                  <Badge className="bg-white/20 text-white border-0 text-xs py-2 px-3">
                    SOON
                  </Badge>
                </div>
                <h3 className="text-md font-semibold mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {course.title}
                </h3>
              </div>

              <div className="py-5 px-4 bg-teal-primary/95 h-[310px]">
                <p className="text-sm text-gray-200 mb-4">
                  {course.description}
                </p>

                <div className="grid grid-cols-2 gap-2 mb-5 text-center text-xs">
                  <div className="p-3 rounded-sm bg-gray-800/50">
                    <Clock className="w-4 h-4 mx-auto mb-2 text-blinkpath-orange" />
                    <div className="font-medium text-white">
                      {course.duration}
                    </div>
                  </div>
                  <div className="p-3 rounded-sm bg-gray-800/50">
                    <Calendar className="w-4 h-4 mx-auto mb-2 text-blinkpath-orange" />
                    <div className="font-medium text-white">{course.mode}</div>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="flex flex-wrap gap-1">
                    {course.features
                      .slice(0, 3)
                      .map((feature, featureIndex) => (
                        <Badge
                          key={featureIndex}
                          variant="outline"
                          className="px-3 py-2 text-xs border-gray-600 text-gray-400 bg-gray-800/30"
                        >
                          {feature}
                        </Badge>
                      ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-blinkpath-orange text-blinkpath-orange hover:bg-blinkpath-orange hover:text-white text-sm py-2"
                >
                  <Bell className="mr-2 w-4 h-4" />
                  Notify Me
                </Button>
              </div>
            </>
          ) : (
            // Active Course Card Layout
            <>
              <div className="relative p-6 text-white overflow-hidden border-b border-white/20 bg-gradient-to-br from-teal-primary to-teal-dark">
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-5">
                    <div className="flex items-center space-x-2">
                      <div className="p-4 rounded-full bg-white/20 border border-white/40">
                        {course.icon}
                      </div>
                      {/* <div className="px-2 py-0.5 bg-gradient-to-r from-white/30 to-white/20 border border-white/50 rounded-full text-[10px] font-bold tracking-wider backdrop-blur-sm bg-primary">
                          LIVE
                        </div> */}
                    </div>
                    <div className="text-right p-2">
                      <div className="text-xl font-black text-accent">
                        {course.price}
                      </div>
                      <div className="text-[10px] line-through opacity-60 text-white">
                        {course.originalPrice}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-white leading-tight group-hover:text-orange-400 transition-colors duration-300">
                    {course.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>

              <div className="p-6 bg-teal-primary/95 backdrop-blur-md">
                <div className="grid grid-cols-3 gap-2 mb-5">
                  <div className="py-3 rounded-lg bg-white/10 border border-white/20 text-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                    <Clock className="w-4 h-4 mx-auto mb-3 text-white" />
                    <div className="text-[11px] font-medium text-white">
                      {course.duration}
                    </div>
                  </div>
                  <div className="py-3 rounded-lg bg-white/10 border border-white/20 text-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                    <Calendar className="w-4 h-4 mx-auto mb-3 text-white" />
                    <div className="text-[11px] font-medium text-white text-nowrap">
                      {course.mode}
                    </div>
                  </div>
                  <div className="py-3 rounded-lg bg-white/10 border border-white/20 text-center backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                    <Users className="w-4 h-4 mx-auto mb-3 text-white" />
                    <div className="text-[11px] font-medium text-white">
                      {course.students}
                    </div>
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="font-medium mb-3 text-white text-sm tracking-wide">
                    TECH STACK:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {course.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="px-3 py-2 rounded-full bg-white/20 border border-white/30 text-[10px] font-medium text-white backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <Link to={course.link}>
                    <Button
                      size="sm"
                      className="btn-glow group-hover:scale-[1.02] transition-transform duration-300 text-sm"
                    >
                      Know More
                      <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <div className="">
                    <ContactModal defaultCourse={course.title} />
                  </div>
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
});
CourseCard.displayName = 'CourseCard';
const Courses = () => {
  const activeCourses = [{
    title: "outklass IoT  Program",
    description: "Build smart devices with ESP32, sensors, Mobile Apps, cloud integration. Perfect for ECE/EEE students.",
    duration: "2.5 Months",
    mode: "Live + Hardware",
    students: "300+ enrolled",
    price: "₹19,999",
    originalPrice: "₹39,999",
    link: "/course/iot",
    features: ["ESP32 Development", "Sensor Integration", "MQTT Protocol", "Cloud Connectivity", "Mobile Apps"],
    status: "live",
    icon: <Cpu className="w-7 h-7" />,
    image: "/assets/iot.jpg"
  }];
  const comingSoonCourses = [{
    title: "outklass Embedded Systems with C",
    description: "Master C programming, microcontrollers, UART/SPI protocols.",
    duration: "3 Months",
    mode: "Live + Lab",
    features: ["C Programming", "ARM Cortex-M", "Real-time Systems"],
    status: "coming-soon",
    icon: <Cpu className="w-7 h-7" />
  }, {
    title: "outklass DevSecOps Engineer Program",
    description: "Integrate security into DevOps pipelines. Learn vulnerability scanning.",
    duration: "2 Months",
    mode: "Live + Projects",
    features: ["Security Scanning", "Secure CI/CD", "Container Security"],
    status: "coming-soon",
    icon: <Zap className="w-7 h-7" />
  }, {
    title: "outklass AI/ML Ops Bootcamp",
    description: "Deploy and monitor ML models in production. Learn MLflow, Kubeflow.",
    duration: "2.5 Months",
    mode: "Live + Cloud",
    features: ["MLflow", "Model Deployment", "ML Pipelines"],
    status: "coming-soon",
    icon: <Code className="w-7 h-7" />
  }, {
    title: "outklass System Engineering",
    description: "Design scalable systems from ground-up. Master systems thinking.",
    duration: "1 Month",
    mode: "Theory + Case Studies",
    features: ["Systems Design", "Architecture", "Scalability"],
    status: "coming-soon",
    icon: <Cpu className="w-7 h-7" />
  }];
  return (
    <div className="min-h-screen cyber-bg">
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
        className="section-padding pt-10 md:pt-12 nomar-crse"
      >
        <div className="container-custom nomar-crse-cuscon">
          {/* Enhanced Header */}
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
            className="text-center max-w-4xl mx-auto mb-12"
          >
            {/* <div className="inline-flex items-center justify-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-blinkpath-orange rounded-full animate-pulse"></div>
              <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                FUTURE-READY ENGINEERING SKILLS
              </span>
              <div className="w-2 h-2 bg-gen-z-purple rounded-full animate-pulse"></div>
            </div> */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-bebasNue mb-4 text-accent">
              Master Tomorrow's{" "}
              <span className="gradient-text">ENGINEERING Skills</span>
            </h1>
            <p className="text-xl mb-6 leading-relaxed text-slate-500">
              Industry-focused programs designed to make you job-ready in IoT
              and Embedded Systems
            </p>
            {/* <div className="flex flex-wrap gap-3 justify-center mx-0 px-0">
              <Badge className="btn-glow group-hover:scale-[1.02] transition-transform duration-300 text-xs btn-glow-newinters-frgl">
                🔥 Hot Skills
              </Badge>
              <Badge className="btn-glow-newinters group-hover:scale-[1.02] transition-transform duration-300 text-xs btn-glow-newinters-frgl">
                💼 Industry Ready
              </Badge>
            </div> */}
          </motion.div>

          {/* Live Courses Section */}
          <motion.div
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
            className="mb-20"
          >
            <div className="flex items-center justify-between mb-12 live_head_son bg-teal-light">
              <Marquee
                direction="left"
                speed={25} // slow + premium
                gradient={false} // you already have gradient text
                pauseOnHover={false}
                className="overflow-hidden"
              >
                <div className="flex items-center space-x-4 mx-[11rem]">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>

                  <h2 className="text-3xl font-bold text-white gradient-text gradient-moving-text">
                    Live Programs
                  </h2>
                </div>
                <div className="flex items-center space-x-4 mx-[11rem]">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>

                  <h2 className="text-3xl font-bold text-white gradient-text gradient-moving-text">
                    Live Programs
                  </h2>
                </div>
                <div className="flex items-center space-x-4 mx-[11rem]">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>

                  <h2 className="text-3xl font-bold text-white gradient-text gradient-moving-text">
                    Live Programs
                  </h2>
                </div>
              </Marquee>

              {/* <Badge className="bg-green-500/20 text-green-400 px-6 py-3 text-sm font-medium border animate-neon-pulse border-primary shadow-sm rounded-md">
                ✅ Enrollment Open
              </Badge> */}
              {/* <p className="enrollment-animated-text font-medium text-sm md:text-base flex items-center gap-2">
                <span>✅</span>
                <span className="gradient-moving-text">Enrollment Open</span>
              </p> */}
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-4 max-w-md mx-auto px-4">
              {activeCourses.map((course, index) => (
                <CourseCard key={course.title} course={course} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Coming Soon Section */}
          <motion.div
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
          >
            <div className="flex items-center justify-between mb-12 live_head_son bg-teal-light">
              <Marquee
                direction="left"
                speed={25} // slow + premium
                gradient={false} // you already have gradient text
                pauseOnHover={false}
                className="overflow-hidden"
              >
                <div className="flex items-center space-x-4 mx-[11rem]">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>

                  <h2 className="text-3xl font-bold text-white gradient-text gradient-moving-text">
                    Coming Soon
                  </h2>
                </div>
                <div className="flex items-center space-x-4 mx-[11rem]">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>

                  <h2 className="text-3xl font-bold text-white gradient-text gradient-moving-text">
                    Coming Soon
                  </h2>
                </div>
                <div className="flex items-center space-x-4 mx-[11rem]">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>

                  <h2 className="text-3xl font-bold text-white gradient-text gradient-moving-text">
                    Coming Soon
                  </h2>
                </div>
              </Marquee>
              {/* <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-blinkpath-orange rounded-full animate-pulse"></div>

                <h2 className="text-3xl font-bold text-white gradient-text gradient-moving-text">
                  Coming Soon
                </h2>
              </div> */}
              {/* <Badge className="btn-glow hover:scale-105 transition-all duration-300 animate-neon-pulse bg-blinkpath-orange/20 text-white px-6 py-3 text-sm font-medium border border-blinkpath-orange/30">
                🚀 In Development
              </Badge> */}
              {/* <p className="enrollment-animated-text font-medium text-sm md:text-base flex items-center gap-2">
                <span> 🚀 </span>
                <span className="gradient-moving-text">In Development</span>
              </p> */}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 px-6">
              {comingSoonCourses.map((course, index) => (
                <CourseCard
                  key={course.title}
                  course={course}
                  index={index}
                  isComingSoon={true}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};
export default Courses;