import React from "react";
import { ArrowRight, Clock, Users, Award, CheckCircle, Play, Download, Calendar, Star, Target, Rocket, Code, Zap, Wifi, Cpu, Cloud, Smartphone, Thermometer, Wrench, Server, Package, CircuitBoard } from "lucide-react";
import iotMinimal from "@/assets/iot-minimal.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import ContactModal from "@/components/ui/ContactModal";
import Footer from "./Footer";
const IoTCourse = () => {
  const phases = [{
    title: "Phase 1 – No-Fluff Foundations: IoT Like It Actually Works in the Real World",
    points: ["The real IoT and how it powers everything from Alexa to self-driving cars", "What companies are actually hiring for (and the roles that are already dead)", "From sketch to shipping: the actual IoT product lifecycle", "Agile for embedded systems (so you don’t get lost in “planning meetings”)", "Git & GitHub hands-on – because without version control, you’re a liability", "Networking basics your IoT device must know to survive", "IoT system architecture that won’t choke in production"]
  }, {
    title: "Phase 2 – Embedded & ESP32: Your Ticket to IoT Street Cred",
    points: ["Embedded systems that matter (and the ones you’ll never see in the wild)", "Why ESP32 dominates the market and why employers care", "Inside the ESP32 – SoC architecture for people who actually build stuff", "Quick start + coding hacks that save you hours", "GPIO, ADC, PWM, Timers – real hardware control, no simulation BS", "Real-time systems & interrupts with FreeRTOS (the part where timing can kill your project)", "Interfacing sensors & actuators without frying anything"]
  }, {
    title: "Phase 3 – Connect It, Cloud It, Show It",
    points: ["Wireless protocols decoded (and which one you actually need)", "Wi-Fi, BLE – the industry workhorses", "Zigbee, LoRa, LPWAN – niche, but career gold if you know them", "Security protocols so your device doesn’t end up in a hacker’s meme folder", "Cloud platforms that companies use (and pay for): ThingSpeak, AWS IoT Core, Firebase, Blynk", "Build dashboards that make managers go “wow” using Grafana"]
  }, {
    title: "Phase 4 – Advanced IoT: FreeRTOS, AI at the Edge & Industry Stuff",
    points: ["FreeRTOS deep dive – not just “what it is” but how to make it work for you", "OTA updates so you can fix bugs without touching the device", "TinyML & Edge Impulse – AI that runs on chips smaller than your thumb", "Industrial IoT (IIoT) – Modbus, Profibus, RTU & TCP like pros use in factories", "Data collection → training → deployment – full machine learning pipeline"]
  }, {
    title: "Phase 5 – Capstone: From Idea to Market-Ready Device",
    points: ["Pick a real-world problem (or make one cooler than your neighbor’s project)", "Draft 60+ requirements like an engineer, not a student", "Design the architecture that can actually be built", "Map every interface, code every module, integrate without crying", "Deploy & test in the real world, not just your laptop", "Get a brutally honest performance review (yes, we’ll tell you where you suck)"]
  }, {
    title: "Phase 6 – Career Mode: Sell Yourself Without Selling Out",
    points: ["Resume writing that makes recruiters stop scrolling", "LinkedIn branding so you look like an engineer, not a fresher begging for a job", "Mock interviews that mimic the brutal HR + tech panel combo", "GitHub portfolio that proves you actually code", "Profile visibility tricks so companies find you (instead of you chasing them)", "Industry-recognized Embedded IoT certification that matches market demand"]
  }];
  const projects = [{
    title: "Smart Home Automation",
    description: "Control lights, fans, and appliances remotely via mobile app",
    technologies: ["ESP32", "Relay Modules", "Mobile App", "WiFi"]
  }, {
    title: "Environmental Monitoring System",
    description: "Monitor air quality, temperature, and humidity with alerts",
    technologies: ["Sensors", "Cloud Dashboard", "Email Alerts", "Data Logging"]
  }, {
    title: "Smart Security System",
    description: "Motion detection with camera capture and notifications",
    technologies: ["PIR Sensor", "Camera Module", "Telegram Bot", "Cloud Storage"]
  }, {
    title: "IoT Weather Station",
    description: "Complete weather monitoring with web dashboard",
    technologies: ["Weather Sensors", "Web Dashboard", "API Integration", "Charts"]
  }, {
    title: "Smart Irrigation System",
    description: "Automated plant watering based on soil moisture",
    technologies: ["Soil Sensor", "Water Pump", "Scheduling", "Remote Control"]
  }];
  const aboutFeatures = [{
    icon: <Cpu className="w-8 h-8" />,
    title: "Flash, Code & Deploy ESP32",
    description: "Master embedded programming with real hardware"
  }, {
    icon: <Thermometer className="w-8 h-8" />,
    title: "Connect Sensors Like a Pro",
    description: "Temperature, motion, gas sensors integration"
  }, {
    icon: <Wifi className="w-8 h-8" />,
    title: "Stream Data via MQTT",
    description: "Real-time cloud communication protocols"
  }, {
    icon: <Cloud className="w-8 h-8" />,
    title: "Live Dashboard Visualization",
    description: "Build your own monitoring dashboards"
  }, {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Smart Home & Health Tech",
    description: "Industry-grade IoT use case simulations"
  }];
  const generalTools = [{
    name: "ClickUp",
    logo: "📋",
    description: "Sprint planning, task assignment, project management"
  }, {
    name: "GitHub",
    logo: "🐙",
    description: "Version control, collaboration, OTA code deployment"
  }, {
    name: "Draw.io",
    logo: "📐",
    description: "System architecture and interface diagrams"
  }, {
    name: "Lucidchart",
    logo: "🧩",
    description: "Alternative for architecture and flow diagrams"
  }];
  const softwareTools = [{
    name: "Arduino IDE",
    logo: "🛠️",
    description: "Development environment for ESP32 programming"
  }, {
    name: "PlatformIO",
    logo: "⚙️",
    description: "Advanced embedded development environment"
  }, {
    name: "Wokwi",
    logo: "🧪",
    description: "ESP32 virtual simulation for prototyping"
  }, {
    name: "MQTT (HiveMQ Cloud)",
    logo: "📡",
    description: "Publish/Subscribe broker for messaging"
  }, {
    name: "ThingSpeak",
    logo: "☁️",
    description: "Cloud platform for data logging & visualization"
  }, {
    name: "Grafana",
    logo: "📊",
    description: "Real-time dashboards and monitoring"
  }, {
    name: "Edge Impulse Studio",
    logo: "🧠",
    description: "Edge ML model training & deployment"
  }, {
    name: "OTA Server",
    logo: "🔄",
    description: "Local/remote OTA firmware deployment"
  }];
  const hardwareTools = [{
    name: "Core Controller: ESP32 Dev Kit (ESP32-WROOM)",
    logo: "🧠",
    description: "Main microcontroller for processing & connectivity"
  }, {
    name: "Environmental & Proximity Sensors",
    logo: "🌡️",
    description: "DHT22, HC-SR04, LDR, IR, Soil Moisture (extended projects)"
  }, {
    name: "Actuation Modules",
    logo: "⚙️",
    description: "Servo Motor, High-Power Relay Unit, Programmable LED Indicators"
  }, {
    name: "Prototyping & Connectivity Pack",
    logo: "🧱",
    description: "Breadboard, High-Density Jumper Set, Shielded USB Interface Cable"
  }, {
    name: "Power & Integration Accessories",
    logo: "🔋",
    description: "5V Regulated Power Supply, Mounting Components, Connectors"
  }];
  const faqs = [{
    question: "Is this course suitable for beginners?",
    answer: "Absolutely! This course is designed for complete beginners. We start with Linux basics and gradually build up to advanced DevOps concepts. No prior experience required."
  }, {
    question: "Will I get job placement assistance?",
    answer: "Yes, we provide 100% job placement assistance including resume building, mock interviews, and direct referrals to our 200+ hiring partners."
  }, {
    question: "What if I miss a live class?",
    answer: "All live sessions are recorded and available on our learning platform. You can catch up anytime. We also have doubt clearing sessions twice a week."
  }, {
    question: "Is there any certification provided?",
    answer: "Yes, you'll receive an industry-recognized certificate upon completion. We also help you prepare for AWS certifications with free practice tests."
  }, {
    question: "What is the refund policy?",
    answer: "We offer a 7-day money-back guarantee if you're not satisfied with the course quality. No questions asked."
  }];
  return <div className="min-h-screen  from-background via-primary/5 to-accent/10">
            {/* Sticky Header */}
            <div className="fixed top-16 md:top-20 w-full bg-background/80 backdrop-blur-lg border-b border-border/50 z-40">
                <div className="container-custom py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-xl font-bold">
                                IoT Developer Program
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                2.5 Months • Beginner to Advanced • Build 5 Real
                                Projects
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-right hidden md:block">
                                <div className="text-2xl font-bold text-[#ff5f45]">
                                    ₹19,999
                                </div>
                                <div className="text-sm text-muted-foreground line-through">
                                    ₹39,999
                                </div>
                            </div>
                            <div className="btn-glow rounded-md">
                                <ContactModal defaultCourse=" outklass IoT Developer Program" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="section-padding  md:pt-28">
                <div className="">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-600 rounded-full text-sm font-medium mb-6">
                                🌟 Perfect for ECE/EEE Students • 1,800+
                                Enrolled
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold font-bebasNue mb-6">
                                Become an{" "}
                                <span className="gradient-text">
                                    IoT Developer
                                </span>{" "}
                                in 2.5 Months
                            </h1>

                            <p className="text-xl text-muted-foreground mb-8">
                                Build smart devices with ESP32, sensors, MQTT,
                                and cloud. Perfect for electronics students
                                looking to enter the IoT industry.
                            </p>

                            <div className="grid grid-cols-3 gap-6 mb-8">
                                <div className="text-center">
                                    <Clock className="w-6 h-6 mx-auto mb-2 text-[#ff5f45]" />
                                    <div className="font-bold">60 Hours</div>
                                    <div className="text-sm text-muted-foreground">
                                        Duration
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Users className="w-6 h-6 mx-auto mb-2 text-[#ff5f45]" />
                                    <div className="font-bold">1,800+</div>
                                    <div className="text-sm text-muted-foreground">
                                        Students
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Award className="w-6 h-6 mx-auto mb-2 text-[#ff5f45]" />
                                    <div className="font-bold">4.9/5</div>
                                    <div className="text-sm text-muted-foreground">
                                        Rating
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <ContactModal defaultCourse=" outklass IoT Developer Program" triggerContent={<Button size="lg" className="btn-glow">
                                            Enroll Now - ₹19,999
                                        </Button>} />
                                <Button size="lg" variant="outline">
                                    Download Syllabus
                                    <Download className="ml-2 w-5 h-5" />
                                </Button>
                            </div>

                            <div className="flex items-center gap-6 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                                    Build 5 Real Projects
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                                    Hardware Provided
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                                    Job Assistance
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <Card className="overflow-hidden border-card">
                                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-b border-gray-600">
                                    <img src="/lovable-uploads/6f982b6f-6f56-43a4-b566-dc9af052cccb.png" alt="IoT Course" className="w-full h-full object-cover" loading="lazy" />
                                </div>
                                <CardContent className="p-6" style={{
                backgroundColor: '#003030'
              }}>
                                    <h3 className="font-bold mb-2 text-gen-z-purple">
                                        📊 Industry Insights
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        IoT market to reach $1.4 trillion by 2027. 8,500+ IoT jobs in India with 
                                        65% growth rate. Perfect for ECE/EEE graduates. Salary range: ₹6-20 LPA.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-padding">
                <div className="container-custom">
                    <Tabs defaultValue="about" className="w-full">
                        <TabsList className="grid w-full grid-cols-4 mb-8 border border-[#00ffff99]">
                            <TabsTrigger value="about">About</TabsTrigger>
                            <TabsTrigger value="curriculum">
                                Curriculum
                            </TabsTrigger>
                            <TabsTrigger value="tools">
                                Tools & Hardware
                            </TabsTrigger>
                            {/* <TabsTrigger value="career">Career Paths</TabsTrigger> */}
                            <TabsTrigger value="faq">FAQs</TabsTrigger>
                        </TabsList>
                        <TabsContent value="about" className="space-y-8">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold font-poppins mb-6">
                                    🌐{" "}
                                    <span className="gradient-text">
                                        IoT Developer Program
                                    </span>
                                </h2>
                                <div className="max-w-4xl mx-auto">
                                    <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-2 border-blue-500/30 mb-8">
                                        <CardContent className="p-8 text-primary-foreground bg-teal-700">
                                            <div className="text-2xl font-bold mb-4 flex items-center justify-center text-teal-300">
                                                <Zap className="w-8 h-8 mr-3" />
                                                You Won't Just Blink LEDs
                                            </div>
                                            <p className="text-lg leading-relaxed mb-6 text-primary-foreground">
                                                You'll build devices that{" "}
                                                <span className="font-bold text-accent">
                                                    talk, sense, decide, and go
                                                    cloud-native.
                                                </span>
                                            </p>
                                            <div className="text-xl font-bold text-center mb-4 text-accent">
                                                📝 A Course That Builds You —
                                                Not Just Circuits
                                            </div>
                                            <p className="leading-relaxed text-primary-foreground">
                                                We're done with "IoT" that ends
                                                at connecting a sensor. Here,
                                                you'll build and ship real
                                                systems — an ESP32 that posts to
                                                the cloud, sensors that send
                                                alerts, dashboards that stream
                                                live data.
                                            </p>
                                            <div className="mt-6 p-4 bg-background/50 rounded-lg border border-primary/30">
                                                <p className="text-[#ff5f45] font-bold text-center">
                                                    No filler. Just the raw
                                                    skill set top startups want
                                                    in IoT engineers.
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            <div className="mb-12">
                                <div className="text-center mb-8">
                                    <h3 className="text-3xl font-bold font-poppins mb-4 flex items-center justify-center">
                                        <Target className="w-8 h-8 mr-3 text-[#ff5f45]" />
                                        🎯 You Will{" "}
                                        <span className="gradient-text ml-2">
                                            Actually Do This
                                        </span>
                                    </h3>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {aboutFeatures.map((feature, index) => <Card key={index} className="card-hover bg-darkest-grey border-2 border-primary/20 hover:border-primary/50 transition-all duration-300">
                                            <CardContent className="p-6 text-center bg-teal-700">
                                                <div className="text-[#ff5f45] mb-4 flex justify-center">
                                                    {feature.icon}
                                                </div>
                                                <h4 className="font-bold text-lg mb-3 text-[#ff5f45]">
                                                    {feature.title}
                                                </h4>
                                                <p className="text-primary-foreground">
                                                    {feature.description}
                                                </p>
                                            </CardContent>
                                        </Card>)}
                                </div>
                            </div>

                            <div className="mb-12">
                                <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30">
                                    <CardContent className="p-8">
                                        <div className="text-center mb-8">
                                            <h3 className="text-3xl font-bold font-poppins mb-4 flex items-center justify-center">
                                                <Rocket className="w-8 h-8 mr-3 text-[#ff5f45]" />
                                                🚀 The Real{" "}
                                                <span className="gradient-text ml-2 text-accent">
                                                    Transformation
                                                </span>
                                            </h3>
                                            <p className="text-xl mb-8 text-secondary">
                                                This course breaks the myth that
                                                you need embedded experience to
                                                break into core tech.
                                            </p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-6">
                                                <div className="flex items-start space-x-4">
                                                    <div className="bg-primary/20 p-3 rounded-full">
                                                        <CheckCircle className="w-6 h-6 text-[#ff5f45]" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-lg mb-2">
                                                            Complete 5+ IoT
                                                            Projects
                                                        </h4>
                                                        <p className="text-teal-300">
                                                            Portfolio-worthy IoT
                                                            implementations
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex items-start space-x-4">
                                                    <div className="bg-primary/20 p-3 rounded-full">
                                                        <Code className="w-6 h-6 text-[#ff5f45]" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-lg mb-2">
                                                            Get Fluent with
                                                            Embedded
                                                        </h4>
                                                        <p className="text-teal-300">
                                                            Master networking +
                                                            embedded basics
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-6">
                                                <div className="flex items-start space-x-4">
                                                    <div className="bg-primary/20 p-3 rounded-full">
                                                        <Star className="w-6 h-6 text-[#ff5f45]" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-lg mb-2">
                                                            Stand Out in
                                                            Interviews
                                                        </h4>
                                                        <p className="text-teal-300">
                                                            Confidence backed by
                                                            real code
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex items-start space-x-4">
                                                    <div className="bg-primary/20 p-3 rounded-full">
                                                        <Award className="w-6 h-6 text-[#ff5f45]" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-lg mb-2">
                                                            Resume That Screams
                                                        </h4>
                                                        <p className="text-teal-300">
                                                            "Yes, I've built
                                                            things!"
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 p-6 rounded-lg border border-primary/30 text-center bg-teal-100">
                                            <p className="text-lg font-bold text-[#ff5f45] mb-2">
                                                In 30 days, you'll transform
                                                from circuit-curious to
                                                IoT-confident.
                                            </p>
                                            <p className="text-muted-foreground">
                                                This is where hardware meets
                                                software meets your career.
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                        <TabsContent value="curriculum" className="space-y-6">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
                                    Phase-Based{" "}
                                    <span className="gradient-text">
                                        Curriculum
                                    </span>
                                </h2>
                                <p className="text-xl text-muted-foreground">
                                    Structured into 6 phases from foundations to
                                    career outcomes
                                </p>
                            </div>

                            <Accordion type="single" collapsible defaultValue="phase-0" className="w-full space-y-4">
                                {phases.map((phase, index) => <AccordionItem key={index} value={`phase-${index}`} className="border-b-0">
                                        <Card className="hover:shadow-lg transition-shadow duration-300">
                                            <CardContent className="p-6">
                                                {/* Header */}
                                                <div className="flex items-start justify-between mb-4">
                                                    <div>
                                                        <h3 className="text-xl font-bold mb-2">
                                                            {phase.title}
                                                        </h3>
                                                        <div className="text-sm text-[#ff5f45] font-medium">
                                                            Phase {index + 1}
                                                        </div>
                                                    </div>
                                                    <div className="text-3xl font-bold text-muted-foreground/30">
                                                        {(index + 1).toString().padStart(2, "0")}
                                                    </div>
                                                </div>

                                                {/* Accordion Trigger */}
                                                <AccordionTrigger className="text-sm font-medium hover:no-underline px-0">
                                                    View Details
                                                </AccordionTrigger>

                                                {/* Accordion Content */}
                                                <AccordionContent>
                                                    <div className="space-y-2 mt-2">
                                                        {phase.points.map((point: string, pointIndex: number) => <div key={pointIndex} className="flex items-center text-muted-foreground">
                                                                    <CheckCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
                                                                    {point}
                                                                </div>)}
                                                    </div>
                                                </AccordionContent>
                                            </CardContent>
                                        </Card>
                                    </AccordionItem>)}
                            </Accordion>
                        </TabsContent>
                        <TabsContent value="tools" className="space-y-8">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
                                    Tools &{" "}
                                    <span className="gradient-text">
                                        Hardware
                                    </span>
                                </h2>
                                <p className="text-xl text-muted-foreground">
                                    Plan, develop, simulate, and deploy with
                                    this complete IoT stack
                                </p>
                            </div>

                            {/* General Tools */}
                            <div>
                                <div className="flex items-center mb-4">
                                    <Wrench className="w-6 h-6 text-[#ff5f45] mr-2" />
                                    <h3 className="text-xl font-bold">
                                        General Tools (Planning & Documentation)
                                    </h3>
                                </div>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {generalTools.map((tool, index) => <Card key={index} className="card-hover text-center">
                                            <CardContent className="p-6">
                                                <div className="text-4xl mb-4">
                                                    {tool.logo}
                                                </div>
                                                <h3 className="font-bold mb-2">
                                                    {tool.name}
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    {tool.description}
                                                </p>
                                            </CardContent>
                                        </Card>)}
                                </div>
                            </div>

                            {/* Software Stack */}
                            <div>
                                <div className="flex items-center mb-4 mt-8">
                                    <Server className="w-6 h-6 text-[#ff5f45] mr-2" />
                                    <h3 className="text-xl font-bold">
                                        Software Stack
                                    </h3>
                                </div>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {softwareTools.map((tool, index) => <Card key={index} className="card-hover text-center">
                                            <CardContent className="p-6">
                                                <div className="text-4xl mb-4">
                                                    {tool.logo}
                                                </div>
                                                <h3 className="font-bold mb-2">
                                                    {tool.name}
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    {tool.description}
                                                </p>
                                            </CardContent>
                                        </Card>)}
                                </div>
                            </div>

                            {/* Hardware */}
                            <div>
                                <div className="flex items-center mb-4 mt-8">
                                    <CircuitBoard className="w-6 h-6 text-[#ff5f45] mr-2" />
                                    <h3 className="text-xl font-bold">
                                        Hardware
                                    </h3>
                                </div>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {hardwareTools.map((tool, index) => <Card key={index} className="card-hover text-center">
                                            <CardContent className="p-6">
                                                <div className="text-4xl mb-4">
                                                    {tool.logo}
                                                </div>
                                                <h3 className="font-bold mb-2">
                                                    {tool.name}
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    {tool.description}
                                                </p>
                                            </CardContent>
                                        </Card>)}
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="faq" className="space-y-6">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold font-poppins mb-4">
                                    Frequently Asked{" "}
                                    <span className="gradient-text">
                                        Questions
                                    </span>
                                </h2>
                                <p className="text-xl text-muted-foreground">
                                    Got questions? We've got answers.
                                </p>
                            </div>

                            <div className="max-w-3xl mx-auto space-y-4">
                                {faqs.map((faq, index) => <Card key={index} className="hover:shadow-lg transition-shadow duration-300 card-hover">
                                        <CardContent className="p-6">
                                            <h3 className="font-bold mb-3 text-lg">
                                                {faq.question}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </CardContent>
                                    </Card>)}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
            {/* Projects Section */}
            <section className="section-padding bg-muted/30">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
                            Build{" "}
                            <span className="gradient-text">
                                5 Real-World Projects
                            </span>
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Hands-on projects that prepare you for the IoT
                            industry
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => <Card key={index} className="card-hover">
                                <CardContent className="p-6">
                                    <div className="text-3xl mb-4">🔧</div>
                                    <h3 className="text-xl font-bold mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="mb-4 text-teal-200">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => <span key={techIndex} className="px-3 py-1 bg-primary/10 text-[#ff5f45] rounded-full text-sm">
                                                    {tech}
                                                </span>)}
                                    </div>
                                </CardContent>
                            </Card>)}
                    </div>
                </div>
            </section>

            {/* Course Content */}

            <div className="">
                <Footer />
            </div>
        </div>;
};
export default IoTCourse;