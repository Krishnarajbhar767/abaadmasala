"use client";
import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
    disabled?: boolean;
};

export default function Button({
    children,
    onClick,
    type = "button",
    className = "",
    disabled = false,
}: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
        px-6 py-3 rounded-sm font-medium transition-all duration-300
        bg-gray-900 text-white
        hover:bg-gray-800 active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed
        text-sm sm:text-base md:text-lg
        ${className}
      `}
        >
            {children}
        </button>
    );
}
