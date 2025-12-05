import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Users, Award, Briefcase, Code, Cpu, Shield, Bot, Settings, Zap, Rocket, Lightbulb, Heart, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "./Footer";
import ContactModal from "@/components/ui/ContactModal";
import HiringPartners from "./HiringPartners";
import TextReveal from "../components/ui/TextReveal";
import heroTechObject from "../assets/hero-tech-object.png";
import { motion } from "framer-motion";
const Index = () => {
  const [visibleSection, setVisibleSection] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-animation");
          setVisibleSection(entry.target.id);
        }
      });
    }, {
      threshold: 0.1
    });
    const sections = document.querySelectorAll("section[id]");
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  const activeCourses = [{
    title: " outklass IoT Program",
    description: "Build smart devices with ESP32,Arduino, sensors, MQTT, and cloud. Perfect for ECE/EEE students.",
    duration: "2.5 Months",
    level: "Beginner to Advanced",
    tools: ["ESP32", "Arduino", "MQTT", "Cloud IoT", "Sensors"],
    price: "₹19,999",
    originalPrice: "₹39,999",
    status: "active",
    link: "/course/iot",
    icon: <Cpu className="w-8 h-8" />
  }];
  const values = [{
    icon: <Target className="w-8 h-8" />,
    title: "Mission-Driven",
    description: "Bridging the gap between classroom learning and industry requirements for Tier-2/3 students."
  }, {
    icon: <Heart className="w-8 h-8" />,
    title: "Student-First",
    description: "Every decision we make prioritizes student success and career transformation."
  }, {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation",
    description: "Constantly evolving our curriculum to match the latest industry demands and technologies."
  }, {
    icon: <Rocket className="w-8 h-8" />,
    title: "Excellence",
    description: "Committed to delivering world-class training that produces industry-ready professionals."
  }];

  // const comingSoonCourses = [
  //   {
  //     title: " outklass Embedded Systems with C",
  //     description:
  //       "C programming, microcontrollers, UART/SPI protocols – foundation for Embedded roles",
  //     duration: "3 Months",
  //     icon: <Code className="w-8 h-8" />,
  //     waitlist: true,
  //   },
  //   {
  //     title: " outklass DevSecOps Engineer Program",
  //     description:
  //       "Secure your pipelines. Learn to integrate security at every stage of your CI/CD process.",
  //     duration: "2 Months",
  //     icon: <Shield className="w-8 h-8" />,
  //     waitlist: true,
  //   },
  //   {
  //     title: " outklass AI/ML Ops Bootcamp",
  //     description:
  //       "Deploy, monitor, and scale ML models in production. The future of AI operations.",
  //     duration: "2.5 Months",
  //     icon: <Bot className="w-8 h-8" />,
  //     waitlist: true,
  //   },
  //   {
  //     title: " outklass System Engineering Foundations",
  //     description:
  //       "Design, analyze, and build scalable systems from scratch – hardware and software.",
  //     duration: "1 Month",
  //     icon: <Zap className="w-8 h-8" />,
  //     waitlist: true,
  //   },
  //   {
  //     title: " outklass Anatomy of Microcontroller",
  //     description:
  //       "Deep dive into microcontroller architecture, registers, and embedded programming.",
  //     duration: "4 Weeks",
  //     icon: <Cpu className="w-8 h-8" />,
  //     waitlist: true,
  //   },
  // ];

  const benefits = [{
    icon: <Award className="w-6 h-6" />,
    text: "100% Placement Assistance"
  }, {
    icon: <Code className="w-6 h-6" />,
    text: "Real Industry Projects"
  }, {
    icon: <Users className="w-6 h-6" />,
    text: "Industry Expert Training"
  }, {
    icon: <Briefcase className="w-6 h-6" />,
    text: "Career-Tailored Curriculum"
  }];
  const isFilled = true;
  const supportSteps = [{
    step: "01",
    title: "Resume Building",
    description: "Professional resume creation with industry keywords and ATS optimization",
    icon: <Award className="w-8 h-8 text-orange-500" />,
    features: ["ATS-Optimized Format", "Industry Keywords", "Project Highlighting", "Skills Matrix"]
  }, {
    step: "02",
    title: "Mock Interviews",
    description: "1:1 mock interviews with industry experts and detailed feedback",
    icon: <Users className="w-8 h-8 text-orange-500" />,
    features: ["Technical Rounds", "HR Interviews", "Behavioral Questions", "Instant Feedback"]
  }, {
    step: "03",
    title: "Job Referrals",
    description: "Direct referrals to our 200+ hiring partners and exclusive job opportunities",
    icon: <Briefcase className="w-8 h-8 text-orange-500" />,
    features: ["Direct Referrals", "Hidden Job Market", "Exclusive Openings", "Priority Applications"]
  }, {
    step: "04",
    title: "Career Mentorship",
    description: "Ongoing career guidance and salary negotiation support",
    icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
    features: ["Salary Negotiation", "Career Planning", "Skill Development", "Industry Insights"]
  }];
  const testimonials = [{
    name: "Priya Sharma",
    role: "DevOps Engineer at TCS",
    content: " outklass transformed my career! From a CSE graduate with no practical skills to landing a DevOps role in 4 months.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  }, {
    name: "Amit Kumar",
    role: "IoT Developer at Wipro",
    content: "The IoT program gave me hands-on experience with real devices. Now I'm building smart city solutions!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }, {
    name: "Sneha Patel",
    role: "Cloud Engineer at Infosys",
    content: "Best decision ever! The placement support was incredible. Got 3 job offers within 2 weeks of graduation.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }];
  return <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen hero-digital-bg gap-0 flex-col flex items-center justify-center">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: "easeOut"
      }} className="w-full max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-poppins tracking-tight mb-6 leading-tight text-center font-semibold mx-0 my-0 px-0 py-0 md:mb-0 ml-0 lg:text-7xl text-primary-foreground">Building India's Next Gen Engineers
          <br />
            
          </h1>
          <p className="text-base mb-4 md:mb-6 italic font-poppins py-[10px] text-accent md:text-2xl">
            &quot;outlearn-outskill-outklass&quot;
          </p>
          <p className="text-lg md:text-xl mb-4 font-poppins text-primary-foreground">
            Go from{" "}
            <span className="font-bold text-teal-100">
              Zero to Industry-Ready
            </span>{" "}
            in Next-Gen Tech
          </p>
          <p className="text-base mb-8 font-poppins text-primary-foreground md:text-xl">Where tomorrow’s Industry 4.0 innovators get trained, mentored, and transformed. No shortcuts — just mastery, projects, and proof of skill.</p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 md:gap-6 justify-center">
            <Link to={"/events"}>
              <Button size="lg" className="btn-glow text-lg px-8 py-4">
                Join Free Workshop
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

            <Link to="/courses">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-white text-white bg-transparent hover:bg-white hover:text-teal-primary transition-all duration-300">
                Explore Programs
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
      <motion.section initial={{
      opacity: 0,
      y: 50
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: false,
      amount: 0.3
    }} transition={{
      duration: 0.6,
      ease: "easeOut"
    }} className="pt-20">
        {" "}
        <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-3 text-center">
          Why - <span className="gradient-text">Choose us</span>
        </h2>
        <p className="text-center text-xl text-muted-foreground">
          Trusted by Thousands, Backed by Results
        </p>
        <div className="section-padding container-custom relative z-10 px-[6px] py-[11px]">
          <div className="grid grid-cols-2 gap-6 mb-12 max-w-md mx-auto">
            {[{
            value: "4,500+",
            label: "Students Trained"
          }, {
            value: "4.8/5",
            label: "Star Rating",
            icon: <Star className="w-5 h-5 text-yellow-500 inline ml-1" fill="currentColor" />
          }].map((stat, index) => <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-teal-primary flex items-center justify-center border-solid rounded-sm opacity-100 bg-accent border-4 shadow-2xl border-accent text-primary">
                  {stat.value}
                  {stat.icon}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>)}
          </div>

          {/* Benefits Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: false
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="glassmorphic-card group bg-teal-primary/90 backdrop-blur-sm">
                <div className="text-blinkpath-orange mb-3 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <span className="text-sm font-medium text-white/90">
                  {benefit.text}
                </span>
              </motion.div>)}
          </div>
        </div>
      </motion.section>

      <motion.div initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} viewport={{
      once: false,
      amount: 0.5
    }} transition={{
      duration: 0.6
    }} className="pb-10">
        <HiringPartners />
      </motion.div>

      {/* Career Support Section */}
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
    }} className="section-padding bg-emerald-100">
        <div className="container-custom">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-6">
              We Don't Just Train —{" "}
              <span className="gradient-text">
                ​We make you deployment ready     
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive career support from resume building to
              salary negotiation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {supportSteps.map((step, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: false
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }}>
                <Card className="card-hover text-center relative overflow-hidden h-full">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-white/10">
                    {step.step}
                  </div>
                  <CardContent className="p-8 relative z-10 bg-inherit">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 text-white rounded-lg mb-6">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">
                      {step.title}
                    </h3>
                    
                    <div className="space-y-2">
                      {step.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center text-sm text-white/90 my-0 px-0">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                            {feature}
                          </div>)}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </motion.section>

      {/* Active Courses Section */}
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
    }} id="active-courses" className="section-padding bg-teal-light bg-teal-100">
        <div className="container-custom">
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
        }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-3">
              <span className="gradient-text">Live Programs</span> - Start
              Today!
            </h2>
            <p className="text-xl text-muted-foreground">
              Industry-ready training programs available now
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {activeCourses.map((course, index) => <motion.div key={index} initial={{
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
          }} className="my-0 px-[50px] py-0 mx-[50px] border-teal-300">
              <Card className="card-hover group h-full">
                <CardContent className="p-8 border-primary-foreground border-0">
                  <div className="flex items-start justify-between mb-6 relative p-3 overflow-hidden 
             border-b border-teal-primary/20">
                    {/* <div className="p-3 bg-primary/10 rounded-lg text-[#ff5f45] group-hover:scale-110 transition-transform duration-300">
                      {course.icon}
                     </div> */}
                    <p className="text-xl font-semibold mb-3 text-white leading-tight transition-colors duration-300">
                      {course.title}
                    </p>
                    <div className="text-right">
                      
                      
                      
                    </div>
                  </div>

                  <p className="text-white/90 mb-6">
                    {course.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Duration:</span>
                      <span className="font-medium text-white">{course.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Level:</span>
                      <span className="font-medium text-white">{course.level}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm text-white/80 mb-2">
                      Tools & Technologies:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {course.tools.map((tool, toolIndex) => <span key={toolIndex} className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
                          {tool}
                        </span>)}
                    </div>
                  </div>
                  <div className="flex  justify-between gap-4">
                    <div className="">
                      <ContactModal defaultCourse={course.title} />
                    </div>

                    <Link to={course.link}>
                      <Button className="w-100 btn-glow group-hover:scale-[1.02] transition-transform duration-300">
                        Know More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>)}
          </div>
        </div>
      </motion.section>
      <motion.section initial={{
      opacity: 0,
      scale: 0.95
    }} whileInView={{
      opacity: 1,
      scale: 1
    }} viewport={{
      once: false
    }} transition={{
      duration: 0.5
    }} className="section-padding pt-0 text-center bg-teal-light my-0">
        {" "}
        {/* <div className="animation-btn">
          <a href="#" className="neon-btn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Pick your super power
          </a>
         </div> */}
        <div className="fancy mb-3">
          <Link to="/courses">
            <button type="button" className="btn btn-outline-info border-transparent text-base rounded-none my-0">
              <span className="text-nowrap text-2xl mx-[10px] py-[10px] px-0">&quot;Pick your SUPERPOWER - Browse all courses &quot;</span>
            </button>
          </Link>
        </div>
      </motion.section>

      {/* Testimonials Section */}
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
    }} id="testimonials" className="section-padding bg-white">
        <div className="container-custom">
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
        }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Success Stories from{" "}
              <span className="gradient-text"> outklass Graduates</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real careers, real transformations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: false
          }} transition={{
            duration: 0.5,
            delay: index * 0.15
          }}>
              <Card className="card-hover group h-full">
                <CardContent className="p-6 bg-primary-foreground">
                  <div className="flex items-center mb-4">
                    
                    <div>
                      <div className="font-bold text-primary">{testimonial.name}</div>
                      <div className="text-sm text-blinkpath-orange">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>

                  <p className="italic text-accent bg-inherit">
                    "{testimonial.content}"
                  </p>
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
export default Index;