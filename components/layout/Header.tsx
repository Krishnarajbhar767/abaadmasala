"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import MegaMenu from "../common/MegaMenu";
import MobileMenu from "../common/MobileMenu";
import OffCanvas from "../common/OffCanvas";
import { INavLink } from "@/Types/common.types";
import { motion, Variants } from "framer-motion";

const navLinks: INavLink[] = [
    { title: "Home", link: "/" }, // Home is kept in array for mobile menu, but filtered out on desktop like the picture
    { title: "About", link: "/about" },
    {
        title: "Products",
        link: "/product/blended-spices",
        subLinks: [
            { title: "Blended Spices", link: "/product/blended-spices" },
            { title: "Whole Spices", link: "/product/whole-spices" },
            {
                title: "Essential Spices",
                link: "/product/essential-spices",
                subLinks: [
                    {
                        title: "Turmeric",
                        link: "/product/essential-spices/turmeric",
                    },
                    { title: "Cumin", link: "/product/essential-spices/cumin" },
                ],
            },
        ],
    },
    { title: "Export", link: "/export" },
    { title: "Recipes", link: "/recipes" },
    { title: "Contact Us", link: "/contact" },
];

// Container for stagger effect
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Faster stagger
        },
    },
};

// Child animation (smooth from top)
const topItem: Variants = {
    hidden: { opacity: 0, y: -20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [offCanvasOpen, setOffCanvasOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Filter out Home link for desktop to match screenshot layout perfectly
    const desktopLinks = navLinks.filter(item => item.title !== "Home");

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full transition-all duration-300 z-50  
                    ${
                        scrolled
                            ? "bg-white shadow-sm py-2"
                            : mobileOpen 
                            ? "bg-white" 
                            : "bg-transparent py-4"
                    }
                `}
            >
                <motion.nav
                    className="container mx-auto px-4 lg:px-8 flex items-center justify-between w-full"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {/* Logo Left */}
                    <motion.div variants={topItem} className="shrink-0 flex items-center h-full">
                        <Link 
                            href="/" 
                            className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-5xl font-black font-glecb uppercase tracking-tighter text-[#1C1C1C] drop-shadow-sm mt-1 sm:mt-2"
                        >
                            ABAAD MASALA & CO.
                        </Link>
                    </motion.div>

                    {/* Outer container for nav Links and Hamburger */}
                    <div className="flex items-center gap-6 xl:gap-20">
                        
                        {/* Desktop Nav Center/Right */}
                        <motion.ul
                            className="hidden lg:flex items-center gap-6 xl:gap-14 transition-colors text-[#1C1C1C]"
                            variants={containerVariants}
                        >
                            {desktopLinks.map((item) => (
                                <motion.li
                                    key={item.title}
                                    className="relative flex items-center group cursor-pointer text-[12px] xl:text-[13px] font-bold tracking-[0.08em] uppercase py-4"
                                    variants={topItem}
                                >
                                    {item.link ? (
                                        <Link
                                            href={item.link}
                                            className="hover:text-red-600 transition-colors duration-200 block w-full h-full"
                                        >
                                            {item.title}
                                        </Link>
                                    ) : (
                                        <span className="hover:text-red-600 transition-colors duration-200 block w-full h-full">
                                            {item.title}
                                        </span>
                                    )}
                                    {/* Dropdown area */}
                                    {item.subLinks && (
                                        <MegaMenu subLinks={item.subLinks} />
                                    )}
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* Hamburger Actions Right */}
                        <motion.div
                            className="flex items-center text-[#1C1C1C]"
                            variants={topItem}
                        >
                            {/* Desktop Offcanvas Trigger - Exact Match Thick Lines */}
                            <button
                                className="hidden lg:flex flex-col gap-[7px] cursor-pointer hover:opacity-75 transition-opacity p-2 ml-4"
                                onClick={() => setOffCanvasOpen(true)}
                                aria-label="Toggle Menu"
                            >
                                <span className="w-10 h-[4px] bg-[#1C1C1C] rounded-sm block"></span>
                                <span className="w-10 h-[4px] bg-[#1C1C1C] rounded-sm block"></span>
                                <span className="w-10 h-[4px] bg-[#1C1C1C] rounded-sm block"></span>
                            </button>

                            {/* Mobile Menu Toggle */}
                            <button
                                className="lg:hidden cursor-pointer p-2 flex flex-col gap-[6px]"
                                onClick={() => setMobileOpen(!mobileOpen)}
                                aria-label="Mobile Menu Toggle"
                            >
                                {mobileOpen ? (
                                    <FiX size={34} strokeWidth={2.5} />
                                ) : (
                                    <>
                                        <span className="w-8 h-[3px] bg-[#1C1C1C] rounded-sm block"></span>
                                        <span className="w-8 h-[3px] bg-[#1C1C1C] rounded-sm block"></span>
                                        <span className="w-8 h-[3px] bg-[#1C1C1C] rounded-sm block"></span>
                                    </>
                                )}
                            </button>
                        </motion.div>
                    </div>
                </motion.nav>

                {/* Mobile Menu */}
                <MobileMenu mobileOpen={mobileOpen} navLinks={navLinks} />
            </header>

            {/* Off-Canvas */}
            <OffCanvas
                offCanvasOpen={offCanvasOpen}
                setOffCanvasOpen={setOffCanvasOpen}
            />
        </>
    );
}
