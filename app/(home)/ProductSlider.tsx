"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Turmeric_Powder from "@/public/home/hero/product1/turmeric_powder.webp";
import Subheading from "@/components/common/Subheading";

// --- Product Data ---
const products = [
    { id: 1, name: "Biryani Masala", img: Turmeric_Powder.src },
    { id: 2, name: "Chicken Masala", img: Turmeric_Powder.src },
    { id: 3, name: "Mutton Masala", img: Turmeric_Powder.src },
    { id: 4, name: "Chhole Masala", img: Turmeric_Powder.src },
    { id: 5, name: "Tandoori Masala", img: Turmeric_Powder.src },
    { id: 6, name: "Paneer Masala", img: Turmeric_Powder.src },
    { id: 7, name: "Sabzi Masala", img: Turmeric_Powder.src },
];

const ProductSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(5);

    // --- Responsive item count ---
    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth < 640) setItemsPerView(1);
            else if (window.innerWidth < 768) setItemsPerView(2);
            else if (window.innerWidth < 1024) setItemsPerView(3);
            else setItemsPerView(5);
        };

        updateItemsPerView();
        window.addEventListener("resize", updateItemsPerView);
        return () => window.removeEventListener("resize", updateItemsPerView);
    }, []);

    // Calculate maximum slides (prevent showing more than available items)
    const maxSlides = Math.max(0, products.length - itemsPerView);

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxSlides));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    // Get currently visible products
    const getVisibleProducts = () => {
        return products.slice(currentIndex, currentIndex + itemsPerView);
    };

    // Calculate center index within visible items
    const centerIndex = Math.floor(itemsPerView / 2);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
            <div className="mb-8 w-full sm:w-fit mx-auto">
                <Subheading text="Explore More Authentic Flavors, Just a Click Away" />
            </div>

            {/* Slider Container */}
            <div className="relative px-12">
                {/* Fixed Height Container - Prevents Layout Shift */}
                <div className="h-64 sm:h-72 md:h-80 lg:h-84 overflow-hidden">
                    {/* Products Container - Fixed Width Grid */}
                    <motion.div
                        className="grid h-full gap-4"
                        style={{
                            gridTemplateColumns: `repeat(${itemsPerView}, 1fr)`,
                        }}
                        key={`${currentIndex}-${itemsPerView}`} // Force re-render on change
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                    >
                        {getVisibleProducts().map((product, index) => {
                            const isCenter = index === centerIndex;
                            const distanceFromCenter = Math.abs(
                                index - centerIndex
                            );

                            return (
                                <motion.div
                                    key={`${product.id}-${currentIndex}`}
                                    className="flex flex-col items-center justify-center"
                                    initial={{ scale: 0.8, opacity: 0.6 }}
                                    animate={{
                                        scale: isCenter
                                            ? 1.1
                                            : distanceFromCenter <= 1
                                              ? 0.95
                                              : 0.85,
                                        opacity: isCenter
                                            ? 1
                                            : distanceFromCenter <= 1
                                              ? 0.8
                                              : 0.6,
                                        y: isCenter ? -8 : 0,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeOut",
                                        delay: index * 0.1,
                                    }}
                                    whileHover={{
                                        scale: isCenter ? 1.15 : 1.0,
                                        y: isCenter ? -12 : -4,
                                        transition: { duration: 0.3 },
                                    }}
                                >
                                    {/* Product Image Container */}
                                    <div className="relative mb-3 flex-shrink-0">
                                        <div className="w-[9.8rem] h-[9.8rem] sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 relative mx-auto">
                                            <Image
                                                src={product.img}
                                                alt={product.name}
                                                fill
                                                className="object-contain"
                                                sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, (max-width: 1280px) 128px, 144px"
                                                priority={index <= 2}
                                            />
                                        </div>
                                    </div>

                                    {/* Product Name */}
                                    <div className="h-12 flex items-center justify-center px-1">
                                        <motion.p
                                            className="text-xs sm:text-sm md:text-base font-medium text-center leading-tight"
                                            animate={{
                                                fontSize: isCenter
                                                    ? itemsPerView === 1
                                                        ? "1.125rem"
                                                        : "1rem"
                                                    : itemsPerView === 1
                                                      ? "1rem"
                                                      : "0.875rem",
                                                fontWeight: isCenter
                                                    ? 600
                                                    : 500,
                                            }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {product.name}
                                        </motion.p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Navigation Buttons */}
                {products.length > itemsPerView && (
                    <>
                        <button
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-white hover:shadow-xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/90 z-10"
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                            >
                                <polyline points="15,18 9,12 15,6"></polyline>
                            </svg>
                        </button>

                        <button
                            onClick={nextSlide}
                            disabled={currentIndex === maxSlides}
                            className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-white hover:shadow-xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/90 z-10"
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                            >
                                <polyline points="9,18 15,12 9,6"></polyline>
                            </svg>
                        </button>
                    </>
                )}
            </div>

            {/* Progress Dots */}
            {products.length > itemsPerView && maxSlides > 0 && (
                <div className="flex justify-center mt-6 gap-2">
                    {Array.from({ length: maxSlides + 1 }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all cursor-pointer duration-300 ${
                                index === currentIndex
                                    ? "bg-orange-500 w-8"
                                    : "bg-gray-300 hover:bg-gray-400 w-2"
                            }`}
                        />
                    ))}
                </div>
            )}

            {/* Debug Info - Remove in production */}
            {process.env.NODE_ENV === "development" && (
                <div className="text-xs text-gray-500 text-center mt-4">
                    Items per view: {itemsPerView} | Current: {currentIndex} |
                    Max slides: {maxSlides}
                </div>
            )}
        </div>
    );
};

export default ProductSlider;
