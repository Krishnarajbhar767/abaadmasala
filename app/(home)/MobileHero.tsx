"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// --- Import a few spice supporting elements (small decorative ones only) ---
import p1_rightelem1 from "@/public/home/hero/product1/rightelem1.webp";
import p1_rightelem2 from "@/public/home/hero/product1/rightelem2.webp";
import p2_rightelem3 from "@/public/home/hero/product2/rightelem3.webp";
import p3_leftelem1 from "@/public/home/hero/product3/leftelem1.webp";

export default function MobileHero() {
    const slides = [
        {
            id: 0,
            heading: "A Legacy of Flavor Since 1993",
            sub: "Crafting authentic Indian spices with care & excellence.",
            color: "#b91c1c",
            bg: "radial-gradient(120% 120% at 50% 90%, #fff 20%, #fca5a5 100%)",
        },
        {
            id: 1,
            heading: "32+ Years of Trust in Every Blend",
            sub: "From Vasai to nationwide kitchens, delivering purity & tradition.",
            color: "#065f46",
            bg: "radial-gradient(120% 120% at 50% 90%, #fff 20%, #6ee7b7 100%)",
        },
        {
            id: 2,
            heading: "50+ Unique Spice Blends",
            sub: "Elevating homes, restaurants & global cuisines with authenticity.",
            color: "#7c2d12",
            bg: "radial-gradient(120% 120% at 50% 90%, #fff 20%, #fbbf24 100%)",
        },
        {
            id: 3,
            heading: "Certified for Quality & Care",
            sub: "FSSAI, AGMARK & MSME certified for safety & trust.",
            color: "#1e3a8a",
            bg: "radial-gradient(120% 120% at 50% 90%, #fff 20%, #93c5fd 100%)",
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
            className="relative h-[90vh]  w-full flex flex-col justify-center items-start px-8 lg:hidden overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* Animated Gradient Background */}
            <motion.div
                key={activeItem.id}
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: activeItem.bg,
                    backgroundSize: "130% 130%",
                }}
                animate={{
                    backgroundPosition: ["0% 40%", "100% 60%", "0% 40%"],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Floating Decorative Spice Elements (right side) */}
            <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[20%] right-6 w-14 h-14 z-10"
            >
                <Image
                    src={p1_rightelem1}
                    alt="spice"
                    fill
                    className="object-contain"
                />
            </motion.div>

            <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[35%] right-16 w-16 h-16 z-10"
            >
                <Image
                    src={p1_rightelem2}
                    alt="spice"
                    fill
                    className="object-contain"
                />
            </motion.div>

            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[50%] right-8 w-10 h-10 z-10"
            >
                <Image
                    src={p2_rightelem3}
                    alt="spice"
                    fill
                    className="object-contain"
                />
            </motion.div>

            <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-[20%] right-12 w-20 h-20 z-10"
            >
                <Image
                    src={p3_leftelem1}
                    alt="spice"
                    fill
                    className="object-contain"
                />
            </motion.div>

            {/* Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeItem.id}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-20 max-w-xl"
                >
                    <h1
                        className="text-4xl sm:text-5xl font-extrabold mb-4 leading-snug tracking-tight"
                        style={{ color: activeItem.color }}
                    >
                        {activeItem.heading}
                    </h1>

                    <motion.p
                        key={`sub-${activeItem.id}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-800 text-lg sm:text-xl leading-relaxed font-medium mb-6"
                    >
                        {activeItem.sub}
                    </motion.p>

                    <motion.button
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-base font-semibold relative group"
                        style={{ color: activeItem.color }}
                    >
                        Learn More →
                        <span className="block h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-current mt-1" />
                    </motion.button>
                </motion.div>
            </AnimatePresence>

            {/* Indicators */}
            <div className="absolute bottom-10 left-8 flex gap-2 z-20">
                {slides.map((p, i) => (
                    <motion.div
                        key={p.id}
                        onClick={() => setActive(i)}
                        className={`h-1.5 rounded-full cursor-pointer transition-all ${
                            i === active ? "w-6 bg-black/80" : "w-2 bg-black/30"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}
