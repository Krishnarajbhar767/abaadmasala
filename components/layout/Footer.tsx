"use client";
import Image from "next/image";
import Link from "next/link";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

interface INavLink {
    title: string;
    link?: string;
    subLinks?: { title: string; link: string; subLinks?: INavLink[] }[];
}

const navLinks: INavLink[] = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    {
        title: "Products",
        subLinks: [
            { title: "Blended Spices", link: "/product/blended-spices" },
            { title: "Whole Spices", link: "/product/whole-spices" },
            { title: "Essential Spices", link: "/product/essential-spices" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10 px-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and Company Info */}
                <div className="flex flex-col gap-4">
                    <Link href="/">
                        <Image
                            src="/logo.webp"
                            alt="Logo"
                            width={120}
                            height={50}
                            className="object-contain"
                        />
                    </Link>
                    <p className="text-sm text-gray-300">
                        Bringing the finest spices from Gujarat to your kitchen.
                        Quality and tradition in every blend.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="flex flex-col gap-2">
                        {navLinks.map((item) => (
                            <li key={item.title}>
                                {item.link ? (
                                    <Link
                                        href={item.link}
                                        className="text-gray-300 hover:text-red-500 transition duration-200"
                                    >
                                        {item.title}
                                    </Link>
                                ) : (
                                    <>
                                        <span className="text-gray-300">
                                            {item.title}
                                        </span>
                                        {item.subLinks && (
                                            <ul className="pl-4 mt-2 flex flex-col gap-1">
                                                {item.subLinks.map((sub) => (
                                                    <li key={sub.title}>
                                                        <Link
                                                            href={sub.link}
                                                            className="text-sm text-gray-400 hover:text-red-500 transition duration-200"
                                                        >
                                                            {sub.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <p className="text-sm text-gray-300 mb-2">
                        123 Spice Street,
                    </p>
                    <p className="text-sm text-gray-300 mb-2">Gujarat, India</p>
                    <p className="text-sm text-gray-300 mb-2">
                        Email: info@spices.com
                    </p>
                    <p className="text-sm text-gray-300">
                        Phone: +91 123 456 7890
                    </p>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                        <Link
                            href="https://facebook.com"
                            className="text-gray-300 hover:text-red-500 transition duration-200"
                            aria-label="Facebook"
                        >
                            <FiFacebook size={24} />
                        </Link>
                        <Link
                            href="https://instagram.com"
                            className="text-gray-300 hover:text-red-500 transition duration-200"
                            aria-label="Instagram"
                        >
                            <FiInstagram size={24} />
                        </Link>
                        <Link
                            href="https://x.com"
                            className="text-gray-300 hover:text-red-500 transition duration-200"
                            aria-label="Twitter"
                        >
                            <FiTwitter size={24} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="container mx-auto mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Spice Company. All rights
                reserved.
            </div>
        </footer>
    );
}
