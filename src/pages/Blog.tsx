import React from "react"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/Navigation"

const Blog = () => {
    const articles = [
        {
            title: "Top DevOps Jobs in 2025: Skills and Salary Guide",
            excerpt:
                "Explore the most in-demand DevOps roles, required skills, and salary expectations for 2025",
            date: "Dec 15, 2024",
            readTime: "5 min read",
            category: "Career",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
        },
        {
            title: "Why IoT is Booming: Industry Trends and Opportunities",
            excerpt:
                "Understanding the rapid growth of IoT industry and career opportunities for engineering graduates",
            date: "Dec 10, 2024",
            readTime: "7 min read",
            category: "IoT",
            image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop",
        },
        {
            title: "Embedded vs IoT: What to Choose for Your Career",
            excerpt:
                "A comprehensive comparison of Embedded Systems and IoT development career paths",
            date: "Dec 5, 2024",
            readTime: "6 min read",
            category: "Career",
            image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
        },
    ]

    return (
        <div className="min-h-screen  from-background via-primary/5 to-accent/10">
            <section className="section-padding pt-10 md:pt-12">
                <div className="container-custom">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold font-bebasNue mb-6">
                            Tech Career{" "}
                            <span className="gradient-text">Insights</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Stay updated with the latest trends, tips, and
                            insights in technology careers
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, index) => (
                            <Card
                                key={index}
                                className="card-hover overflow-hidden">
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="px-3 py-1 bg-primary/10 text-[#ff5f45] rounded-full text-sm">
                                            {article.category}
                                        </span>
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <Clock className="w-4 h-4 mr-1" />
                                            {article.readTime}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                                        {article.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-4 line-clamp-3">
                                        {article.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            {article.date}
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="hover:text-[#ff5f45]">
                                            Read More
                                            <ArrowRight className="ml-1 w-4 h-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog

