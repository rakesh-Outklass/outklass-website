import React from "react"
import {
    CheckCircle,
    Users,
    Briefcase,
    TrendingUp,
    Star,
    ArrowRight,
    Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/Navigation"
import Footer from "./Footer"
import Counseling from "./Counseling"
import { motion } from "framer-motion"

const CareerSupport = () => {
    const supportSteps = [
        {
            step: "01",
            title: "Resume Building",
            description:
                "Professional resume creation with industry keywords and ATS optimization",
            icon: <Award className="w-8 h-8" />,
            features: [
                "ATS-Optimized Format",
                "Industry Keywords",
                "Project Highlighting",
                "Skills Matrix",
            ],
        },
        {
            step: "02",
            title: "Mock Interviews",
            description:
                "1:1 mock interviews with industry experts and detailed feedback",
            icon: <Users className="w-8 h-8" />,
            features: [
                "Technical Rounds",
                "HR Interviews",
                "Behavioral Questions",
                "Instant Feedback",
            ],
        },
        {
            step: "03",
            title: "Job Referrals",
            description:
                "Direct referrals to our 200+ hiring partners and exclusive job opportunities",
            icon: <Briefcase className="w-8 h-8" />,
            features: [
                "Direct Referrals",
                "Hidden Job Market",
                "Exclusive Openings",
                "Priority Applications",
            ],
        },
        {
            step: "04",
            title: "Career Mentorship",
            description:
                "Ongoing career guidance and salary negotiation support",
            icon: <TrendingUp className="w-8 h-8" />,
            features: [
                "Salary Negotiation",
                "Career Planning",
                "Skill Development",
                "Industry Insights",
            ],
        },
    ]

    return (
        <div className="min-h-screen  from-background via-primary/5 to-accent/10">
            <motion.section 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="section-padding pt-10 md:pt-12"
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
                            We Don't Just Train —{" "}
                            <span className="gradient-text">
                                We Get You Hired
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Comprehensive career support from resume building to
                            salary negotiation
                        </p>
                        <div className="">
                            <Counseling />
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {supportSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="card-hover text-center relative overflow-hidden h-full">
                                    <div className="absolute top-4 right-4 text-6xl font-bold text-white/10">
                                        {step.step}
                                    </div>
                                    <CardContent className="p-8 relative z-10">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 text-white rounded-lg mb-6">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-4 text-white">
                                            {step.title}
                                        </h3>
                                        <p className="text-white/90 mb-6">
                                            {step.description}
                                        </p>
                                        <div className="space-y-2">
                                            {step.features.map(
                                                (feature, featureIndex) => (
                                                    <div
                                                        key={featureIndex}
                                                        className="flex items-center text-sm text-white/90">
                                                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                                                        {feature}
                                                    </div>
                                                )
                                            )}
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
    )
}

export default CareerSupport