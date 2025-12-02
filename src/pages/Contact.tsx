import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "./Footer";
import Counseling from "./Counseling";
import { motion } from "framer-motion";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [{
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    details: ["+91 98765 43210", "+91 87654 32109"],
    action: "Call Now"
  }, {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    details: ["hello@ outklass.com", "support@ outklass.com"],
    action: "Email Us"
  }, {
    icon: <MapPin className="w-6 h-6" />,
    title: "Address",
    details: ["Tech Hub, Sector 62", "Noida, UP 201309, India"],
    action: "Get Directions"
  }, {
    icon: <Clock className="w-6 h-6" />,
    title: "Office Hours",
    details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
    action: "Visit Us"
  }];
  const faqs = [{
    question: "What are the course fees and payment options?",
    answer: "Our DevOps Bootcamp costs ₹49,999 and IoT Program costs ₹39,999. We offer flexible payment plans including EMI options starting from ₹4,999/month. Scholarships are available for deserving candidates."
  }, {
    question: "Do you provide job placement assistance?",
    answer: "Yes, we provide 100% job placement assistance including resume building, mock interviews, and direct referrals to our 200+ hiring partners. Our placement rate is 89% with an average package of ₹12.5 LPA."
  }, {
    question: "What if I miss live classes?",
    answer: "All live sessions are recorded and available on our learning platform for lifetime access. We also conduct doubt clearing sessions twice a week for students who miss classes."
  }, {
    question: "Do I need any prior experience to join?",
    answer: "No prior experience is required for our courses. We start with fundamentals and gradually build up to advanced concepts. Our curriculum is designed for complete beginners."
  }, {
    question: "What kind of projects will I work on?",
    answer: "You'll work on real industry projects like CI/CD pipeline setup, containerized application deployment, IoT device development, and cloud infrastructure automation. All projects are guided by industry experts."
  }, {
    question: "Is there any certification provided?",
    answer: "Yes, you'll receive an industry-recognized certificate upon course completion. We also help you prepare for relevant industry certifications like AWS, Azure, and Google Cloud."
  }];
  const courses = ["DevOps Engineer Bootcamp", "IoT Developer Program", "Embedded Systems with C (Coming Soon)", "DevSecOps Program (Coming Soon)", "AI/ML Ops Bootcamp (Coming Soon)", "General Inquiry"];
  return <div className="min-h-screen  from-background via-primary/5 to-accent/10">
            {/* Hero Section */}
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
    }} className="section-padding pt-10 md:pt-12">
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
        }} className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-bebasNue mb-6">
                            Get In <span className="gradient-text">Touch</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Have questions about our courses? Ready to start
                            your tech career journey? We're here to help!
                        </p>
                    </motion.div>

                    {/* Contact Info Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {contactInfo.map((info, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: false
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }}>
                                <Card className="card-hover text-center h-full">
                                    <CardContent className="p-6">
                                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-[#ff5f45] rounded-lg mb-4">
                                            {info.icon}
                                        </div>
                                        <h3 className="font-bold text-lg mb-3">
                                            {info.title}
                                        </h3>
                                        <div className="space-y-1 mb-4">
                                            {info.details.map((detail, detailIndex) => <div key={detailIndex} className="text-sm text-accent">
                                                        {detail}
                                                    </div>)}
                                        </div>
                                        <Button variant="outline" size="sm" className="hover:scale-105 transition-transform duration-300 bg-accent">
                                            {info.action}
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>)}
                    </div>
                </div>
            </motion.section>

            {/* Contact Form & Map Section */}
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
    }} className="section-padding bg-muted/30">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: false
          }} transition={{
            duration: 0.6
          }}>
                            <Card className="border-2 hover:border-primary/50 transition-colors duration-300">
                                <CardContent className="p-8">
                                    <div className="mb-6">
                                        <h2 className="text-2xl font-bold font-poppins mb-4">
                                            Send us a Message
                                        </h2>
                                        <p className="text-teal-200">
                                            Fill out the form below and we'll get
                                            back to you within 24 hours.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="">
                                            <div>
                                                <label className="block text-sm font-medium mb-4">
                                                    Full Name *
                                                </label>
                                                <Input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required className="hover:border-primary/50 focus:border-primary transition-colors duration-300  mb-10 " />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-4">
                                                    Email Address *
                                                </label>
                                                <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required className="hover:border-primary/50 focus:border-primary transition-colors duration-300 mb-10" />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium mb-4">
                                                    Phone Number *
                                                </label>
                                                <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" required className="hover:border-primary/50 focus:border-primary transition-colors duration-300 mb-10" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-4">
                                                    Interested Course
                                                </label>
                                                <select name="course" value={formData.course} onChange={handleChange} className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:border-primary hover:border-primary/50 transition-colors duration-300 bg-background mb-10">
                                                    <option value="">
                                                        Select a course
                                                    </option>
                                                    {courses.map((course, index) => <option key={index} value={course}>
                                                                {course}
                                                            </option>)}
                                                </select>
                                            </div>

                                            <label className="block text-sm font-medium mb-4">
                                                Message
                                            </label>
                                            <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your goals and any questions you have..." rows={4} className="hover:border-primary/50 focus:border-primary transition-colors duration-300" />
                                        </div>

                                        <Button type="submit" className="w-full btn-glow hover:scale-[1.02] transition-transform duration-300">
                                            Send Message
                                            <Send className="ml-2 w-4 h-4" />
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Map & Additional Info */}
                        <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: false
          }} transition={{
            duration: 0.6
          }} className="space-y-6">
                            <Card>
                                <CardContent className="p-0">
                                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                        <div className="text-center">
                                            <MapPin className="w-12 h-12 mx-auto mb-4 text-[#ff5f45]" />
                                            <h3 className="text-xl font-bold mb-2">
                                                Visit Our Campus
                                            </h3>
                                            <p className="text-muted-foreground">
                                                Tech Hub, Sector 62, Noida
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-gradient-to-br from-primary to-accent text-white">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-4">
                                        Quick Response Guarantee
                                    </h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <MessageSquare className="w-5 h-5 mr-3" />
                                            <span>
                                                Response within 2 hours during
                                                business hours
                                            </span>
                                        </div>
                                        <div className="flex items-center">
                                            <Phone className="w-5 h-5 mr-3" />
                                            <span>
                                                Free career counseling call
                                            </span>
                                        </div>
                                        <div className="flex items-center">
                                            <Mail className="w-5 h-5 mr-3" />
                                            <span>
                                                Detailed course information via
                                                email
                                            </span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-4">
                                        Alternative Ways to Reach Us
                                    </h3>
                                    <div className="space-y-4">
                                        <Button variant="outline" className="w-full justify-start bg-inherit">
                                            <div className="w-6 h-6 mr-3 bg-green-500 rounded flex items-center justify-center text-white text-xs">
                                                W
                                            </div>
                                             Whatsapp : +91 8838194157
                                        </Button>
                                        <Button variant="outline" className="w-full justify-start bg-inherit">
                                            <div className="w-6 h-6 mr-3 bg-blue-500 rounded flex items-center justify-center text-white text-xs">
                                                T
                                            </div>
                                            Telegram: @ outklass_support
                                        </Button>
                                        <Button variant="outline" className="w-full justify-start bg-inherit">
                                            <div className="w-6 h-6 mr-3 bg-pink-500 rounded flex items-center justify-center text-white text-xs">
                                                I
                                            </div>
                                            Instagram: @ outklass_tech
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* FAQ Section */}
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
    }} className="section-padding">
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
                            Frequently Asked{" "}
                            <span className="gradient-text">Questions</span>
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Find answers to common questions about our programs
                        </p>
                    </motion.div>

                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.map((faq, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: false
            }} transition={{
              duration: 0.4,
              delay: index * 0.05
            }}>
                                    <AccordionItem value={`item-${index}`} className="border rounded-lg px-6">
                                        <AccordionTrigger className="text-left font-medium">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                </motion.div>)}
                        </Accordion>
                    </div>
                </div>
            </motion.section>

            {/* Counseling CTA */}
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
    }} className="section-padding bg-muted/30">
                <div className="container-custom text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                        Ready to Start Your{" "}
                        <span className="gradient-text">Tech Journey?</span>
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Book a free 1-on-1 career counseling session with our
                        experts
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Counseling />
                    </div>
                </div>
            </motion.section>

            <div className="">
                <Footer />
            </div>
        </div>;
};
export default Contact;