"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiX, FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

interface OffCanvasProps {
    offCanvasOpen: boolean;
    setOffCanvasOpen: (open: boolean) => void;
}

const OffCanvas: React.FC<OffCanvasProps> = ({
    offCanvasOpen,
    setOffCanvasOpen,
}) => {
    return (
        <AnimatePresence>
            {offCanvasOpen && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-black/70 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOffCanvasOpen(false)}
                    />
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween" }}
                        className="fixed top-0 right-0 w-80 sm:w-96 h-full bg-gradient-to-b from-white to-gray-50 text-black z-50 shadow-xl flex flex-col rounded-l-2xl overflow-y-auto"
                    >
                        <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white/90 backdrop-blur-sm z-10">
                            <Link href="/" onClick={() => setOffCanvasOpen(false)}>
                                <p className="text-xl sm:text-2xl font-black font-glecb uppercase tracking-tighter text-[#1C1C1C] drop-shadow-sm mt-1 sm:mt-2">
                                    ABAAD MASALA & CO.
                                </p>
                            </Link>
                            <FiX
                                size={28}
                                className="cursor-pointer text-gray-600 hover:text-red-600 transition"
                                onClick={() => setOffCanvasOpen(false)}
                            />
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                Contact Us :
                            </h3>
                            <div className="text-gray-600 text-[14px] sm:text-[15px] mb-6 leading-relaxed space-y-1">
                                <p>Manufacture & packed by: Abaad Masala & Co</p>
                                <p>Gala No 26 Royal Compound-II, Thambal Mal,</p>
                                <p>Post-Kaman, Tal-Vasai, Dist-Palghar, 401208</p>
                            </div>
                            
                            <div className="text-gray-600 text-[14px] sm:text-[15px] mb-6 leading-relaxed space-y-1">
                                <p>Customer Care No. +91 70584 11183</p>
                                <p>Time : 10:00 am to 5:00 pm</p>
                            </div>
                            
                            <div className="text-gray-600 text-[14px] sm:text-[15px] mb-8 leading-relaxed">
                                <p>Email : abaadmasala0@gmail.com</p>
                            </div>

                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                Follow Us
                            </h3>
                            <div className="flex gap-6 mb-8">
                                <Link
                                    href="#"
                                    className="text-gray-600 hover:text-red-600 transition"
                                    aria-label="Facebook"
                                >
                                    <FiFacebook size={24} />
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-600 hover:text-red-600 transition"
                                    aria-label="Instagram"
                                >
                                    <FiInstagram size={24} />
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-600 hover:text-red-600 transition"
                                    aria-label="X (Twitter)"
                                >
                                    <FiTwitter size={24} />
                                </Link>
                            </div>
                        </div>
                        <div className="p-6 border-t border-gray-200 text-center">
                            <p className="text-xs text-gray-500">
                                Copyright © 2025 Abaad Masala & co. All Rights Reserved.
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default OffCanvas;
