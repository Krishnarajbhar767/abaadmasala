"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import MegaMenu from "../common/MegaMenu";
import MobileMenu from "../common/MobileMenu";
import OffCanvas from "../common/OffCanvas";
import { INavLink } from "@/Types/common.types";
import { motion, Variants } from "framer-motion";

const navLinks: INavLink[] = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    {
        title: "Products",
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
];

// Container for stagger effect
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25, // delay between children
        },
    },
};

// Child animation (smooth from top)
const topItem: Variants = {
    hidden: { opacity: 0, y: -40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" },
    },
};

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [offCanvasOpen, setOffCanvasOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={` fixed top-0 left-0 w-full transition-colors duration-300 z-50 
                    ${
                        scrolled || mobileOpen
                            ? "bg-white/20 backdrop-blur-md  border-white/30"
                            : "bg-transparent"
                    }
                `}
            >
                <motion.nav
                    className="container mx-auto flex items-center justify-between px-4 py-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {/* Logo */}
                    <motion.div variants={topItem}>
                        <Link href="/">
                            <Image
                                src="/logo.webp"
                                alt="Logo"
                                width={120}
                                height={50}
                                className="object-contain cursor-pointer"
                            />
                        </Link>
                    </motion.div>

                    {/* Desktop Nav */}
                    <motion.ul
                        className={`hidden md:flex items-center gap-8 transition-colors ${
                            scrolled || mobileOpen ? "text-black" : "text-black"
                        }`}
                        variants={containerVariants}
                    >
                        {navLinks.map((item) => (
                            <motion.li
                                key={item.title}
                                className="relative group cursor-pointer font-bernhc font-extralight tracking-widest"
                                variants={topItem}
                            >
                                {item.link ? (
                                    <Link
                                        href={item.link}
                                        className="hover:text-red-500 transition"
                                    >
                                        {item.title}
                                    </Link>
                                ) : (
                                    <span className="hover:text-red-500 transition">
                                        {item.title}
                                    </span>
                                )}
                                {item.subLinks && (
                                    <MegaMenu subLinks={item.subLinks} />
                                )}
                            </motion.li>
                        ))}
                    </motion.ul>

                    {/* Right Actions */}
                    <motion.div
                        className={`flex items-center gap-4 ${
                            scrolled || mobileOpen ? "text-black" : "text-black"
                        }`}
                        variants={topItem}
                    >
                        {/* Offcanvas (desktop) */}
                        <button
                            className="hidden md:block cursor-pointer"
                            onClick={() => setOffCanvasOpen(true)}
                        >
                            <FiMenu size={24} />
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden cursor-pointer"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? (
                                <FiX size={28} />
                            ) : (
                                <FiMenu size={28} />
                            )}
                        </button>
                    </motion.div>
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
