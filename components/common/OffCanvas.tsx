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
                        className="fixed top-0 right-0 w-96 h-full bg-gradient-to-b from-white to-gray-50 text-black z-50 shadow-xl flex flex-col rounded-l-2xl"
                    >
                        <div className="flex justify-between items-center p-6 border-b border-gray-200">
                            <Image
                                src="/logo.webp"
                                alt="logo"
                                width={120}
                                height={48}
                                className="object-contain"
                            />
                            <FiX
                                size={28}
                                className="cursor-pointer text-gray-600 hover:text-red-600 transition"
                                onClick={() => setOffCanvasOpen(false)}
                            />
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                Our Address
                            </h3>
                            <p className="text-gray-600 text-sm mb-8">
                                123 Spice Street, Gujarat, India
                            </p>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                Follow Us
                            </h3>
                            <div className="flex gap-6">
                                <Link
                                    href="#"
                                    className="text-gray-600 hover:text-red-600 transition"
                                >
                                    <FiFacebook size={24} />
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-600 hover:text-red-600 transition"
                                >
                                    <FiInstagram size={24} />
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-600 hover:text-red-600 transition"
                                >
                                    <FiTwitter size={24} />
                                </Link>
                            </div>
                        </div>
                        <div className="p-6 border-t border-gray-200 text-center">
                            <p className="text-xs text-gray-500">
                                © 2025 Spice Co. All rights reserved.
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default OffCanvas;
