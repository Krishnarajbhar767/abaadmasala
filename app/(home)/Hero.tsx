"use client";
import React, { useRef, useState, useEffect } from "react";

/**
 * SENIOR DEVELOPER OPTIMIZATION NOTES:
 * 1. BANDWIDTH: Current hero.mp4 is 57MB. This is UNSUSTAINABLE for mobile-first environments.
 *    CRITICAL: Compress video down to < 5MB using libx264/libx265 (MP4) or WebM.
 * 2. LCP (Largest Contentful Paint): We use a CSS background placeholder initially.
 *    Once the video buffers enough to play without stuttering (onCanPlayThrough), we cross-fade.
 * 3. AUTO-PLAY: autoPlay + muted + playsInline is the only reliable way to ensure auto-play on iOS/Android.
 * 4. PERFORMANCE: preload="auto" is the best for Hero LCP, but the file size MUST come down.
 */

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Attempt immediate playback for desktop environments
        if (videoRef.current) {
            videoRef.current.play().catch((err) => {
                // Browsers often block auto-play if interaction is required or power-saving is on
                console.warn("Video auto-play prevented or delayed:", err);
            });
        }
    }, []);

    return (
        <section className="relative w-full h-[85vh] sm:h-screen overflow-hidden bg-black flex items-center justify-center">
            {/* 1. INITIAL PLACEHOLDER (Immediate Paint)
                Prevents a "flash of black" and satisfies LCP before the video loads.
             */}
            <div
                className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 pointer-events-none ${
                    isLoaded ? "opacity-0" : "opacity-100"
                }`}
                style={{
                    backgroundImage: 'url("/home/hero/background.webp")',
                }}
            />

            {/* 2. OPTIMIZED VIDEO STREAMING */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onCanPlayThrough={() => setIsLoaded(true)}
                className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
                    isLoaded ? "opacity-100" : "opacity-0"
                }`}
            >
                <source src="/hero.mp4" type="video/mp4" />
                {/* Future Optimization: Add .webm source above .mp4 for 30%+ bandwidth savings */}
                {/* <source src="/hero.webm" type="video/webm" /> */}
                <p className="text-white">
                    Your browser does not support the video tag.
                </p>
            </video>

            {/* 3. SUBTLE GRADIENT OVERLAY
                Adds depth and prepares for any text overlays you might add later.
             */}
            <div className="absolute inset-0 bg-black/10 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
        </section>
    );
};

export default Hero;


