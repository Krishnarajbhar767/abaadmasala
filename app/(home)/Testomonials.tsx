"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sample testimonial data matched to exactly the requested aesthetic
const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        role: "Home Cook",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=250&h=250&fit=crop&crop=face",
        text: "Abaad Masala has completely transformed my cooking. Truly Chef's First Choice!",
    },
    {
        id: 2,
        name: "Rajesh Kumar",
        role: "Professional Chef",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=250&h=250&fit=crop&crop=face",
        text: "Being a chef, I'm very particular about spices. Abaad Masala's quality is exceptional - the aroma, freshness, and perfect blend make every dish a masterpiece.",
    },
    {
        id: 3,
        name: "Sunita Devi",
        role: "Home Maker",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=250&h=250&fit=crop&crop=face",
        text: "I've been using Abaad Masala for over 2 years now. The consistency in quality and rich flavors make my everyday cooking special. My neighbors always ask for my secret!",
    }
];

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-advance
    useEffect(() => {
        if (!isAutoPlaying) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [isAutoPlaying]);

    const slideVariants = {
        enter: { opacity: 0, x: 50 },
        center: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 },
    };

    const current = testimonials[currentIndex];

    return (
        <section className="w-full bg-white py-16 px-4 md:py-24">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                
                {/* Section Headings */}
                <h4 className="text-[#E42521] text-2xl sm:text-3xl font-medium tracking-wide mb-2">
                    Testimonial
                </h4>
                <h2 className="text-[#1A1A1A] text-5xl sm:text-6xl md:text-[4rem] font-bold tracking-tight mb-16">
                    What People Say
                </h2>

                {/* Carousel Area */}
                <div 
                    className="relative w-full overflow-hidden min-h-[350px] flex items-center justify-center cursor-pointer"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current.id}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="flex flex-col items-center w-full absolute top-0"
                        >
                            {/* Avatar placeholder / image */}
                            <div className="w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] rounded-full overflow-hidden mb-12 bg-gray-500 shadow-[0_5px_15px_rgba(0,0,0,0.15)] ring-1 ring-gray-200">
                                <img
                                    src={current.image}
                                    alt={current.name}
                                    className="w-full h-full object-cover filter hover:brightness-110 transition-all duration-300"
                                />
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-[#1A1A1A] text-xl sm:text-2xl md:text-[1.4rem] leading-relaxed font-normal max-w-3xl px-4">
                                {current.text}
                            </p>
                            
                            {/* Author */}
                            <p className="text-[#333333] text-lg sm:text-xl mt-3 font-medium">
                                {current.name}, {current.role}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
                
                {/* Navigation Dots */}
                <div className="flex gap-4 mt-8">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setCurrentIndex(idx);
                                setIsAutoPlaying(false);
                            }}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                currentIndex === idx ? 'bg-[#1A1A1A] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TestimonialSection;
