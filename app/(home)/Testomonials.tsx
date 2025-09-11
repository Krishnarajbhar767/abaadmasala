import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { ImQuotesLeft } from "react-icons/im";
import AdvancedHeading from "@/components/ui/AdvancedHeading";
import AutoParagraph from "@/components/common/AutoParagraph";

// Sample testimonial data
const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        location: "Mumbai, Maharashtra",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        text: "Abaad Masala has completely transformed my cooking! The authentic flavors remind me of my grandmother's recipes. Every dish I make now has that perfect traditional taste.",
        dish: "Chicken Biryani",
    },
    {
        id: 2,
        name: "Rajesh Kumar",
        location: "Delhi, India",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        text: "Being a chef, I'm very particular about spices. Abaad Masala's quality is exceptional - the aroma, freshness, and perfect blend make every dish a masterpiece.",
        dish: "Mutton Curry",
    },
    {
        id: 3,
        name: "Sunita Devi",
        location: "Jaipur, Rajasthan",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        text: "I've been using Abaad Masala for over 2 years now. The consistency in quality and rich flavors make my everyday cooking special. My neighbors always ask for my secret!",
        dish: "Dal Tadka",
    },
    {
        id: 4,
        name: "Mohammed Ali",
        location: "Hyderabad, Telangana",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        text: "The authentic taste of Abaad Masala brings back memories of traditional home cooking. Perfect for making restaurant-quality biryanis at home.",
        dish: "Hyderabadi Biryani",
    },
    {
        id: 5,
        name: "Kavitha Reddy",
        location: "Bangalore, Karnataka",
        image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        text: "As a working mother, I need spices that are reliable and flavorful. Abaad Masala saves my time while ensuring my family gets authentic, delicious meals every day.",
        dish: "Sambar & Rice",
    },
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

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const prevTestimonial = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
        setIsAutoPlaying(false);
    };

    const goToTestimonial = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    const currentTestimonial = testimonials[currentIndex];

    const cardVariants: Variants = {
        enter: { x: 200, opacity: 0, scale: 0.95 },
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: "easeOut" },
        },
        exit: {
            x: -200,
            opacity: 0,
            scale: 0.95,
            transition: { duration: 0.4, ease: "easeIn" },
        },
    };

    return (
        <section className="w-full bg-gradient-to-br from-orange-50 via-white to-yellow-50 py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8 overflow-hidden">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-4    block sm:flex sm:items-center sm:flex-col space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <AdvancedHeading
                        heading="What Our"
                        subheading="Customers Says"
                    />

                    <AutoParagraph
                        items={[
                            `Discover why thousands of home cooks trust Abaad Masala
                        for authentic flavors`,
                        ]}
                    />
                </motion.div>

                {/* Card Container */}
                <div className="relative ">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentTestimonial.id}
                            variants={cardVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            layout
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 lg:p-10 relative"
                        >
                            {/* Quote Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-full">
                                    <ImQuotesLeft className="w-6 h-6 text-white" />
                                </div>
                            </div>

                            {/* Mobile Layout */}
                            <div className="block lg:hidden text-center">
                                {/* Avatar */}
                                <motion.div
                                    className="flex justify-center mb-4"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="relative">
                                        <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-orange-100 shadow-md">
                                            <img
                                                src={currentTestimonial.image}
                                                alt={currentTestimonial.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full ring-2 ring-white" />
                                    </div>
                                </motion.div>

                                <h3 className="font-bold text-lg sm:text-xl text-gray-900">
                                    {currentTestimonial.name}
                                </h3>
                                <p className="text-gray-500 text-sm sm:text-base mb-2">
                                    {currentTestimonial.location}
                                </p>

                                {/* Rating */}
                                <div className="flex justify-center gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className="w-5 h-5 text-yellow-400"
                                            fill="yellow"
                                        />
                                    ))}
                                </div>

                                {/* Text */}
                                <motion.blockquote
                                    className="text-gray-700 text-base leading-relaxed italic mb-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    "{currentTestimonial.text}"
                                </motion.blockquote>

                                <div className="inline-block bg-orange-100 px-3 py-1 rounded-full">
                                    <p className="text-orange-800 text-sm font-medium">
                                        ❤️ Loves: {currentTestimonial.dish}
                                    </p>
                                </div>
                            </div>

                            {/* Desktop Layout */}
                            <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
                                <div className="flex flex-col items-center text-center">
                                    <motion.div
                                        className="relative mb-4"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-orange-100 shadow-lg">
                                            <img
                                                src={currentTestimonial.image}
                                                alt={currentTestimonial.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full ring-2 ring-white" />
                                    </motion.div>
                                    <h3 className="font-bold text-xl text-gray-900">
                                        {currentTestimonial.name}
                                    </h3>
                                    <p className="text-gray-500 mb-2">
                                        {currentTestimonial.location}
                                    </p>
                                    <div className="flex gap-1 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className="w-6 h-6 text-yellow-400"
                                                fill="yellow"
                                            />
                                        ))}
                                    </div>
                                    <div className="bg-orange-100 px-4 py-2 rounded-full">
                                        <p className="text-orange-800 font-medium">
                                            ❤️ {currentTestimonial.dish}
                                        </p>
                                    </div>
                                </div>
                                <div className="lg:col-span-2 flex items-center">
                                    <motion.blockquote
                                        className="text-gray-700 text-lg xl:text-xl leading-relaxed italic"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        "{currentTestimonial.text}"
                                    </motion.blockquote>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white shadow-md hover:shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-105"
                        aria-label="Previous testimonial"
                    >
                        <MdChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white shadow-md hover:shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-105"
                        aria-label="Next testimonial"
                    >
                        <MdChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-4 gap-3">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToTestimonial(index)}
                            className={`transition-all duration-300 rounded-full ${
                                index === currentIndex
                                    ? "bg-gradient-to-r from-orange-500 to-red-500 w-8 h-2"
                                    : "bg-gray-300 hover:bg-gray-400 w-2 h-2"
                            }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
