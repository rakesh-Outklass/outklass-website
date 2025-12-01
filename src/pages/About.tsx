import React from "react"
import { Users, Award, Target, Heart, Lightbulb, Rocket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/Navigation"
import Footer from "./Footer"
import HiringPartners from "./HiringPartners"
import { motion } from "framer-motion"

const About = () => {
    const values = [
        {
            icon: <Target className="w-8 h-8" />,
            title: "Mission-Driven",
            description:
                "Bridging the gap between classroom learning and industry requirements for Tier-2/3 students.",
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Student-First",
            description:
                "Every decision we make prioritizes student success and career transformation.",
        },
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "Innovation",
            description:
                "Constantly evolving our curriculum to match the latest industry demands and technologies.",
        },
        {
            icon: <Rocket className="w-8 h-8" />,
            title: "Excellence",
            description:
                "Committed to delivering world-class training that produces industry-ready professionals.",
        },
    ]

    const team = [
        {
            name: "Rajesh Kumar",
            role: "Founder & CEO",
            experience: "15+ Years",
            background: "Ex-Amazon DevOps Architect",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
            specialization: "DevOps, Cloud Architecture",
        },
        {
            name: "Priya Sharma",
            role: "Head of Curriculum",
            experience: "12+ Years",
            background: "Ex-Microsoft Senior Engineer",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
            specialization: "Software Engineering, IoT",
        },
        {
            name: "Amit Patel",
            role: "Lead IoT Instructor",
            experience: "10+ Years",
            background: "Ex-Samsung IoT Specialist",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
            specialization: "Embedded Systems, IoT",
        },
        {
            name: "Sneha Gupta",
            role: "Career Counselor",
            experience: "8+ Years",
            background: "Ex-TCS Talent Acquisition",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
            specialization: "Career Development, Placements",
        },
    ]

    const stats = [
        { number: "4,500+", label: "Students Trained" },
        { number: "85%", label: "Placement Rate" },
        { number: "50+", label: "Hiring Partners" },
        { number: "₹5.5 LPA", label: "Avg. Package" },
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <motion.section 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                id="hero" 
                className="section-padding pt-10 md:pt-12 "
            >
                <div className="container-custom">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-4xl mx-auto mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-bebasNue mb-6">
                            About{" "}
                            <span className="gradient-text"> outklass</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                            Bridging the gap between classroom and industry with
                            practical, career-focused training
                        </p>
                    </motion.div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 ">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glassmorphic-card group text-center p-6 bg-teal-primary/90 backdrop-blur-sm rounded-lg hover:bg-teal-primary transition-all duration-300 hover:scale-105"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-white/90">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Mission Section */}
            <motion.section 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="section-padding bg-teal-light"
            >
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                                Our{" "}
                                <span className="gradient-text">Mission</span>
                            </h2>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-light">
                                outklass was born from a simple observation:
                                talented students from Tier-2 and Tier-3
                                colleges often struggle to land high-paying tech
                                jobs, not because they lack potential, but
                                because they lack industry-relevant skills and
                                proper guidance.
                            </p>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-light">
                                We believe that your college tag shouldn't
                                determine your career prospects. With the right
                                training, mentorship, and opportunity, every
                                student can{" "}
                                <span className="font-bold text-blinkpath-orange">
                                    {" "}
                                    outklass
                                </span>{" "}
                                their limitations and achieve their dream career
                                in technology.
                            </p>
                            <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-teal-primary rounded-full mr-4"></div>
                                <span className="text-lg font-normal text-foreground">
                                        Industry-ready curriculum designed by
                                        experts
                                    </span>
                                </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-teal-primary rounded-full mr-4"></div>
                                <span className="text-lg font-normal text-foreground">
                                        Hands-on projects with real-world
                                        applications
                                    </span>
                                </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-teal-primary rounded-full mr-4"></div>
                                <span className="text-lg font-normal text-foreground">
                                        100% placement assistance and career
                                        support
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="  flex items-center justify-center">
                                <img
                                    src="/assets/our-mission.jpg"
                                    alt="our mission"
                                    className="rounded-2xl"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Values Section */}
            <motion.section 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="section-padding"
            >
                <div className="container-custom">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
                            Our{" "}
                            <span className="gradient-text">Core Values</span>
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="card-hover text-center h-full">
                                    <CardContent className="p-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 text-white rounded-lg mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">
                                    {value.title}
                                </h3>
                                <p className="text-white/90 leading-relaxed">
                                    {value.description}
                                </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Team Section */}
            <motion.section 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="section-padding bg-white"
            >
                <div className="container-custom">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
                            Meet Our{" "}
                            <span className="gradient-text">Expert Team</span>
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Industry veterans committed to your success
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="card-hover overflow-hidden h-full">
                                    <div className="aspect-square overflow-hidden">
                                        <img
                                            src={
                                                member.image?.trim()
                                                    ? member.image
                                                    : "/assets/about.jpg"
                                            }
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            onError={e => {
                                                e.currentTarget.onerror = null
                                                e.currentTarget.src =
                                                    "/assets/about.jpg"
                                            }}
                                        />
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="font-bold text-lg mb-1 text-white">
                                            {member.name}
                                        </h3>
                                        <div className="text-blinkpath-orange font-medium mb-2">
                                            {member.role}
                                        </div>
                                        <div className="text-sm text-white/80 mb-2">
                                            {member.background}
                                        </div>
                                        <div className="text-sm text-white/80 mb-3">
                                            {member.experience}
                                        </div>
                                        <div className="text-xs bg-white/20 text-white px-3 py-1 rounded-full inline-block font-medium">
                                            {member.specialization}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Hiring Partners */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="section-padding"
            >
                <HiringPartners />
            </motion.div>

            <div className="">
                <Footer />
            </div>
        </div>
    )
}

export default About