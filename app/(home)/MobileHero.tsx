"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Background
import BackgroundImage from "@/public/home/hero/background.webp";

// Decorative spices
import spice1 from "@/public/home/hero/product1/rightelem1.webp";
import spice2 from "@/public/home/hero/product1/rightelem2.webp";
import spice3 from "@/public/home/hero/product2/rightelem3.webp";

export default function MobileHero() {
    const slides = [
        {
            id: 0,
            heading: "The Golden Touch In Every Perfect Blend",
            sub: "Crafting authentic Turmeric Powder with purity and care.",
        },
        {
            id: 1,
            heading: "The Heartbeat of Every Indian Kitchen",
            sub: "Premium Garam Masala that brings tradition to your table.",
        },
        {
            id: 2,
            heading: "Spice Up Your Recipes With Natural Freshness",
            sub: "Authentic Kashmiri Chili Powder for vibrant flavors.",
        },
    ];

    const [active, setActive] = useState(0);
    const touchStartX = useRef<number | null>(null);

    // Auto-slide
    useEffect(() => {
        const timer = setInterval(() => {
            setActive((s) => (s + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    // Swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (diff > 50) setActive((prev) => (prev + 1) % slides.length);
        else if (diff < -50)
            setActive((prev) => (prev - 1 + slides.length) % slides.length);
        touchStartX.current = null;
    };

    const activeItem = slides[active];

    return (
        <section
            className="relative min-h-screen w-full flex items-center justify-center px-6 lg:hidden overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* Background */}
            <Image
                src={BackgroundImage}
                alt="Background"
                fill
                priority
                className="object-cover absolute inset-0 -z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent -z-10 overflow-hidden" />

            {/* Floating spices */}
            <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-24 left-6 w-14 h-14"
            >
                <Image
                    src={spice1}
                    alt="spice"
                    fill
                    className="object-contain"
                />
            </motion.div>
            <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-32 right-10 w-16 h-16"
            >
                <Image
                    src={spice2}
                    alt="spice"
                    fill
                    className="object-contain"
                />
            </motion.div>
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/2 right-4 w-10 h-10"
            >
                <Image
                    src={spice3}
                    alt="spice"
                    fill
                    className="object-contain"
                />
            </motion.div>

            {/* Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeItem.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative z-20 text-left  max-w-md px-2 "
                >
                    <h1 className="text-[5vh] font-bernhc font-thin text-white mb-4 leading-none drop-shadow-md ">
                        {activeItem.heading}
                    </h1>
                    <p className="text-white/90 font-glecb text-[3vh] mb-6 leading-none drop-shadow tracking-wider mt-8">
                        {activeItem.sub}
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-md hover:bg-primary/90 transition "
                    >
                        Explore
                    </motion.button>
                </motion.div>
            </AnimatePresence>

            {/* Indicators */}
            <div className="absolute bottom-8 flex gap-2 z-20">
                {slides.map((p, i) => (
                    <motion.div
                        key={p.id}
                        onClick={() => setActive(i)}
                        className={`h-2 rounded-full cursor-pointer transition-all ${
                            i === active ? "w-6 bg-white" : "w-2 bg-white/50"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}
