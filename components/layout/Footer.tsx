"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-[#121212] text-white py-12 px-6 lg:px-12 border-t border-gray-800 font-sans">
            <div className="container mx-auto max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    
                    {/* Left Column: Contact Us */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-[1.7rem] font-bold tracking-wide mb-2 text-white/95 leading-none">Contact Us :</h3>
                        
                        <div className="text-[#E0E0E0] text-[15px] sm:text-[1.05rem] leading-relaxed space-y-1">
                            <p>Manufacture & packed by: Abaad Masala & Co</p>
                            <p>Gala No 26 Royal Compound-II, Thambal Mal,</p>
                            <p>Post-Kaman, Tal-Vasai, Dist-Palghar, 401208</p>
                        </div>
                        
                        <div className="text-[#E0E0E0] text-[15px] sm:text-[1.05rem] leading-relaxed space-y-1 mt-2">
                            <p>Customer Care No. +91 70584 11183</p>
                            <p>Time : 10:00 am to 5:00 pm</p>
                        </div>
                        
                        <div className="text-[#E0E0E0] text-[15px] sm:text-[1.05rem] leading-relaxed mt-2">
                            <p>Email : abaadmasala0@gmail.com</p>
                        </div>
                    </div>

                    {/* Right Column Group */}
                    <div className="flex flex-col">
                        
                        <div className="grid grid-cols-2 gap-8 mb-10">
                            {/* Useful Links */}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl sm:text-[1.4rem] font-medium tracking-wide mb-3 text-white/90">Useful Links</h3>
                                <ul className="flex flex-col gap-[0.6rem]">
                                    {['Home', 'About Us', 'Blogs', 'Term of Service', 'Privacy Policy'].map(link => (
                                        <li key={link}>
                                            <Link href="#" className="text-[#D1D1D1] hover:text-white transition-colors text-[15px] sm:text-[1.05rem]">
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Follow Us Now */}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl sm:text-[1.4rem] font-medium tracking-wide mb-3 text-white/90">Follow Us Now</h3>
                                <ul className="flex flex-col gap-[0.6rem]">
                                    {['Facebook', 'X', 'Instagram', 'Pinterest'].map(link => (
                                        <li key={link}>
                                            <Link href="#" className="text-[#D1D1D1] hover:text-white transition-colors text-[15px] sm:text-[1.05rem]">
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Logos Area */}
                        <div className="flex flex-col gap-5 mt-2">
                            <h2 className="text-[2rem] sm:text-4xl md:text-[2.6rem] font-black font-glecb uppercase tracking-tighter text-white/95">
                                ABAAD MASALA & CO.
                            </h2>
                            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                                <Image
                                    src="/abaad_logo.png"
                                    alt="Abaad Spices Logo"
                                    width={140}
                                    height={50}
                                    className="object-contain h-14 w-auto drop-shadow-md"
                                />
                                <Image
                                    src="/frize_logo.png"
                                    alt="Frize Logo"
                                    width={140}
                                    height={50}
                                    className="object-contain h-14 w-auto drop-shadow-md"
                                />
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>

            {/* Copyright */}
            <div className="container mx-auto max-w-[1400px] mt-16 pt-6 text-center text-sm md:text-[1rem] text-[#D1D1D1]">
                Copyright &copy; 2025 Abaad Masala & co. All Rights Reserved.
            </div>
        </footer>
    );
}
