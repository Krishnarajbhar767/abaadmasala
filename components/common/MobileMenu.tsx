"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

interface INavLink {
    title: string;
    link?: string;
    subLinks?: INavLink[];
}

interface MobileMenuProps {
    mobileOpen: boolean;
    navLinks: INavLink[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ mobileOpen, navLinks }) => {
    return (
        <AnimatePresence>
            {mobileOpen && (
                <motion.ul
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="md:hidden bg-black text-white overflow-hidden px-4"
                >
                    {navLinks.map((item) => (
                        <li
                            key={item.title}
                            className="py-2 border-b border-gray-700"
                        >
                            {item.link ? (
                                <Link
                                    href={item.link}
                                    className="flex items-center justify-between py-2 px-3 hover:bg-gray-800 rounded-md transition-all duration-200"
                                >
                                    <span>{item.title}</span>
                                </Link>
                            ) : (
                                <details>
                                    <summary className="flex items-center justify-between py-2 px-3 cursor-pointer hover:bg-gray-800 rounded-md transition-all duration-200">
                                        <span>{item.title}</span>
                                        <FiChevronDown className="text-gray-400" />
                                    </summary>
                                    <ul className="pl-4">
                                        {item.subLinks?.map((sub) => (
                                            <li
                                                key={sub.title}
                                                className="py-1"
                                            >
                                                <div className="relative">
                                                    {sub.link &&
                                                    !sub.subLinks ? (
                                                        <Link
                                                            href={sub.link}
                                                            className="flex items-center justify-between py-1.5 px-2 text-gray-300 text-sm hover:bg-gray-700 rounded-md transition-all duration-200"
                                                        >
                                                            <span>
                                                                {sub.title}
                                                            </span>
                                                        </Link>
                                                    ) : (
                                                        <details>
                                                            <summary className="flex items-center justify-between py-1.5 px-2 text-gray-300 text-sm cursor-pointer hover:bg-gray-700 rounded-md transition-all duration-200">
                                                                <span>
                                                                    {sub.title}
                                                                </span>
                                                                <FiChevronDown className="text-gray-400" />
                                                            </summary>
                                                            <ul className="pl-4">
                                                                {sub.subLinks?.map(
                                                                    (
                                                                        nested
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                nested.title
                                                                            }
                                                                            className="py-1"
                                                                        >
                                                                            <Link
                                                                                href={
                                                                                    nested.link ||
                                                                                    "#"
                                                                                }
                                                                                className="block py-1 px-2 text-gray-400 text-xs hover:bg-gray-600 rounded-md transition-all duration-200"
                                                                            >
                                                                                {
                                                                                    nested.title
                                                                                }
                                                                            </Link>
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </details>
                                                    )}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            )}
                        </li>
                    ))}
                </motion.ul>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
