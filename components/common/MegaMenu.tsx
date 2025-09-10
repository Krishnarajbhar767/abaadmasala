"use client";
import { INavLink } from "@/Types/common.types";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

interface MegaMenuProps {
    subLinks: INavLink[];
}

const menuVariants: Variants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.3,
            ease: "easeOut",
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        scale: 0.95,
        transition: { duration: 0.2, delay: 0.2 }, // Added delay to exit
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

const MegaMenu: React.FC<MegaMenuProps> = ({ subLinks }) => {
    return (
        <AnimatePresence>
            <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="absolute left-0 mt-0 hidden group-hover:block bg-white text-black rounded-xl shadow-2xl p-6 min-w-[320px] max-w-[500px] z-20 border border-gray-100"
                style={{ transition: "all 0.3s ease-out" }}
            >
                <div className="grid grid-cols-1 gap-3">
                    {subLinks.map((sub) => (
                        <motion.div
                            key={sub.title}
                            variants={itemVariants}
                            className="relative group/sub"
                        >
                            <div className="relative">
                                <Link
                                    href={sub.link || "#"}
                                    className="flex items-center justify-between py-2 px-3 text-gray-800 font-medium rounded-md hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                                >
                                    <span>{sub.title}</span>
                                    {sub.subLinks && (
                                        <FiChevronRight className="text-gray-500 group-hover/sub:text-red-600" />
                                    )}
                                </Link>
                                {sub.subLinks && (
                                    <motion.div
                                        variants={menuVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        className="absolute left-full top-0 mt-0 hidden group-hover/sub:block bg-gray-50 rounded-lg p-3 shadow-inner min-w-[200px]"
                                        style={{
                                            transition: "all 0.3s ease-out",
                                        }}
                                    >
                                        {sub.subLinks.map((nested) => (
                                            <motion.div
                                                key={nested.title}
                                                variants={itemVariants}
                                                className="relative group/nested"
                                            >
                                                <Link
                                                    href={nested.link || "#"}
                                                    className="flex items-center justify-between py-1.5 px-2 text-gray-700 text-sm rounded-md hover:bg-red-100 hover:text-red-600 transition-all duration-200"
                                                >
                                                    <span>{nested.title}</span>
                                                    {nested.subLinks && (
                                                        <FiChevronRight className="text-gray-500 group-hover/nested:text-red-600" />
                                                    )}
                                                </Link>
                                                {nested.subLinks && (
                                                    <motion.div
                                                        variants={menuVariants}
                                                        initial="hidden"
                                                        animate="visible"
                                                        exit="hidden"
                                                        className="absolute left-full top-0 mt-0 hidden group-hover/nested:block bg-gray-100 rounded-md p-2 min-w-[200px]"
                                                    >
                                                        {nested.subLinks.map(
                                                            (deepNested) => (
                                                                <Link
                                                                    key={
                                                                        deepNested.title
                                                                    }
                                                                    href={
                                                                        deepNested.link ||
                                                                        "#"
                                                                    }
                                                                    className="block py-1 px-2 text-gray-600 text-xs rounded-md hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                                                                >
                                                                    {
                                                                        deepNested.title
                                                                    }
                                                                </Link>
                                                            )
                                                        )}
                                                    </motion.div>
                                                )}
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default MegaMenu;
