"use client";
import AutoParagraph from "@/components/common/AutoParagraph";
import AdvancedHeading from "@/components/ui/AdvancedHeading";
import Image from "next/image";
import React from "react";
import Chef from "@/public/home/elements/chef.webp";

import Sambhar_Masala from "@/public/home/elements/sambhar_masala.png";
import Kashmiri_Chilli_powder from "@/public/home/elements/kashimiri_chilli_powder.webp";
import Mutton_Masala from "@/public/home/elements/mutton_masala.png";
import Leaf_Image from "@/public/home/elements/leaf.webp";
import BackgroundImage from "@/public/home/elements/backgroundImage.png";
import Chef_Leaf from "@/public/home/elements/chef_leaf.webp";
import { motion } from "motion/react";
const Chefchoice = () => {
    return (
        <section
            className=" h-auto w-full container mx-auto px-4 pt-8 pb-8 sm:pt-46 sm:pb-32 relative flex flex-col-reverse
        sm:flex-row gap-4  overflow-hidden"
        >
            {/* Left Absolute Image */}
            <Leaf />
            {/* Content section */}
            <ContentSection />
            {/* Images Section */}
            <ImageSection />
        </section>
    );
};

export default Chefchoice;

function ContentSection() {
    const content = [
        "At Abaad Masala, we blend tradition, taste, and trust to deliver premium-quality spices.That’s why Abaad Masala is truly Chef’s First Choice – the secret to culinary perfection.Crafted with care and rich in aroma, our spices bring out the authentic flavors in every dish.",
    ];
    return (
        <motion.div
            initial="initial"
            whileHover="hover"
            animate="animate"
            className="w-full sm:w-[50%] space-y-4  relative group"
        >
            <h1 className="w-fit sm:w-[70%]  text-2xl sm:text-[2rem] leading-snug tracking-widest font-kyoto font-thin  text-left sm:text-center ">
                The Spice Behind Every <br />
                <span className="text-primary">Masterpiece</span>
            </h1>
            <AdvancedHeading
                heading="Chef's "
                subheading="First Choice"
                reverse={true}
            />
            <AutoParagraph items={content} />
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width={320}
                height={100}
                version="1.1"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 3439 1070"
                className="hidden sm:block object-contain absolute top-[14%] -right-60 z-20"
                variants={{
                    initial: { x: -40, opacity: 0 },
                    animate: { x: 0, opacity: 1 },
                }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    x: { type: "spring", stiffness: 100, damping: 10 },
                }}
            >
                <defs>
                    <linearGradient
                        id="arrowGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                    >
                        <motion.stop
                            offset="0%"
                            variants={{
                                initial: { stopColor: "#E31E24" },
                                hover: { stopColor: "#ffc107" },
                            }}
                            transition={{ duration: 0.5 }}
                        />
                        <motion.stop
                            offset="100%"
                            variants={{
                                initial: { stopColor: "#E31E24" },
                                hover: { stopColor: "#ffc107" },
                            }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        />
                    </linearGradient>
                </defs>
                <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <g>
                        <motion.path
                            fill="url(#arrowGradient)"
                            fillRule="nonzero"
                            d="M39 726l-5 34 -34 -3 5 -33 34 2zm64 -1l0 33 -33 3 0 -34 33 -2zm64 -13l5 33 -33 8 -5 -34 33 -7zm60 -21l13 32 -3 1 -31 10 -9 -32 27 -10 3 -1zm59 -28l16 30 -7 4 -25 11 -13 -31 22 -10 7 -4zm57 -34l18 29 -10 6 -20 12 -16 -30 19 -10 9 -7zm55 -37l20 28 -10 7 -19 13 -18 -29 17 -11 10 -8zm53 -40l21 27 -9 7 -18 14 -20 -28 18 -13 8 -7zm52 -42l22 26 -7 6 -20 16 -20 -27 19 -15 6 -6zm51 -43l22 25 -3 3 -23 19 -21 -26 21 -18 4 -3zm50 -45l23 25 0 0 -26 22 -22 -25 25 -22 0 0zm50 -46l22 25 -25 23 -22 -25 25 -23zm49 -46l23 25 -25 23 -23 -25 25 -23zm49 -45l23 24 -25 23 -23 -25 25 -22zm50 -46l23 25 -25 23 -23 -25 25 -23zm51 -45l22 26 -25 22 -23 -25 26 -23zm52 -43l22 26 -26 21 -22 -26 26 -21zm54 -41l21 26 -27 21 -21 -27 27 -20zm56 -38l20 27 -28 19 -20 -28 28 -18zm62 -34l15 30 -9 4 -20 11 -17 -29 22 -12 9 -4zm64 -25l12 32 -24 7 -6 3 -15 -30 10 -5 23 -7zm69 -13l7 33 -34 4 -7 -33 34 -4zm73 6l-6 33 -15 -4 -15 -1 -1 -33 21 1 16 4zm65 25l-11 31 -31 -15 12 -31 30 15zm59 39l-18 29 -27 -20 18 -29 27 20zm50 52l-25 22 -3 -3 -19 -20 23 -25 22 24 2 2zm40 54l-25 22 -20 -27 25 -22 20 27zm36 60l-28 19 -17 -29 28 -19 17 29zm31 61l-29 16 -15 -30 30 -16 14 30zm29 63l-31 13 -9 -22 -4 -7 30 -16 5 10 9 22zm25 62l-31 14 -13 -31 31 -14 13 31zm23 65l-32 11 -11 -31 32 -12 11 32zm19 65l-32 10 -9 -32 32 -10 9 32zm14 68l-33 6 -1 -10 -5 -22 33 -8 5 24 1 10zm9 68l-34 4 -2 -27 -1 -5 33 -7 2 8 2 27zm1 70l-34 -1 1 -4 0 -29 33 -1 0 31 0 4zm-8 68l-34 -4 6 -30 0 -2 33 2 0 4 -5 30zm-21 68l-32 -11 9 -22 2 -8 33 7 -3 12 -9 22zm-34 62l-29 -18 14 -19 3 -7 31 14 -5 10 -14 20zm-49 52l-24 -24 22 -20 2 -1 26 20 -4 5 -22 20zm-62 37l-15 -30 8 -4 21 -11 17 29 -23 13 -8 3zm-68 20l-8 -33 17 -3 14 -4 11 32 -18 5 -16 3zm-71 4l-1 -33 23 0 9 0 4 33 -12 1 -23 -1zm-70 -9l6 -33 26 5 5 1 -2 33 -8 -1 -27 -5zm-66 -20l10 -32 25 9 6 1 -8 33 -8 -2 -25 -9zm-63 -31l15 -30 21 12 8 3 -13 31 -11 -4 -20 -12zm-59 -38l20 -28 13 10 13 9 -17 29 -15 -10 -14 -10zm-53 -46l24 -24 4 4 20 18 -22 26 -22 -20 -4 -4zm-46 -50l25 -23 21 24 0 1 -23 24 -2 -2 -21 -24zm-39 -56l26 -21 19 28 -26 21 -19 -28zm-31 -63l30 -16 13 31 -29 16 -14 -31zm-17 -69l32 -10 7 33 -32 11 -7 -34zm1 -74l33 5 -1 3 -1 26 -33 3 1 -34 1 -3zm20 -68l31 12 -5 11 -5 17 -33 -5 6 -24 6 -11zm33 -62l29 18 -12 16 -4 9 -32 -11 8 -15 11 -17zm44 -54l26 21 -17 17 -4 6 -29 -17 7 -10 17 -17zm50 -48l23 25 -18 14 -6 6 -26 -21 10 -10 17 -14zm55 -42l20 27 -14 10 -12 9 -22 -25 14 -12 14 -9zm59 -37l17 29 -5 3 -23 14 -19 -27 25 -16 5 -3zm60 -31l16 29 -29 16 -17 -29 30 -16zm62 -28l15 31 -31 13 -15 -31 31 -13zm65 -24l12 31 -32 11 -12 -31 32 -11zm65 -22l9 32 -9 3 -22 7 -12 -31 25 -8 9 -3zm65 -17l9 32 -32 9 -10 -33 33 -8zm66 -15l8 32 -33 7 -8 -33 33 -6zm68 -13l5 33 -12 2 -20 4 -8 -33 22 -5 13 -1zm66 -10l6 33 -33 5 -6 -33 33 -5zm68 -7l4 33 -34 3 -3 -33 33 -3zm68 -6l2 34 -2 0 -30 3 -4 -34 32 -3 2 0zm68 -2l2 34 -34 1 -2 -34 34 -1zm68 0l0 34 -27 -1 -6 0 -2 -33 8 -1 27 1zm67 2l0 34 -33 -1 0 -34 33 1zm69 5l-3 34 -33 -3 2 -34 34 3zm68 7l-4 33 -2 0 -31 -3 2 -34 33 3 2 1zm66 10l-4 33 -33 -5 4 -33 33 5zm68 12l-7 33 -20 -5 -12 -1 5 -34 13 2 21 5zm65 14l-6 33 -33 -7 7 -33 32 7zm67 17l-9 33 -32 -9 8 -33 33 9zm64 19l-8 33 -32 -10 8 -32 32 9zm65 23l-10 32 -32 -12 10 -32 32 12zm64 24l-12 31 -3 -1 -28 -11 11 -32 30 11 2 2zm62 28l-13 31 -31 -14 13 -31 31 14zm62 29l-15 30 -16 -8 -13 -6 12 -32 16 8 16 8zm59 32l-15 31 -30 -17 15 -30 30 16zm59 36l-18 29 -25 -17 -2 -1 15 -30 4 2 26 17zm56 37l-18 29 -28 -19 18 -29 28 19zm55 41l-20 27 -26 -21 20 -27 26 21zm53 41l-20 28 -26 -21 20 -28 26 21zm51 46l-22 26 -24 -23 22 -26 24 23zm49 46l-22 26 -24 -23 22 -26 24 23zm47 51l-24 24 -23 -25 24 -24 23 25zm45 51l-25 23 -22 -25 24 -24 23 26zm41 55l-26 21 -20 -27 26 -21 20 27zm40 54l-26 21 -20 -27 26 -21 20 27zm36 58l-28 19 -17 -29 28 -18 17 28zm35 58l-28 19 -17 -29 28 -19 17 29zm48 121l-202 -158 7 -1 7 0 7 -1 6 -1 7 -1 7 -1 6 -1 6 -2 7 -2 6 -2 6 -2 6 -2 6 -2 5 -3 6 -3 6 -3 5 -3 6 -3 5 -4 5 -3 5 -4 5 -4 5 -4 5 -5 5 -4 4 -5 5 -5 4 -5 5 -5 4 -5 4 -6 4 -6 0 0 25 256z"
                        />
                    </g>
                </g>
            </motion.svg>
        </motion.div>
    );
}
function ImageSection() {
    return (
        <div className="w-full sm:w-[50%]   h-68 relative ">
            <Image
                src={Chef.src}
                fill
                alt="Chef Image"
                className="object-contain object-center transition-transform duration-700 hover:scale-105 hover:-rotate-1 cursor-pointer"
                loading="lazy"
            />
            {/* Absolutes Element */}
            {/* Product  */}
            <div className="hidden sm:block absolute -top-36 left-0 w-[300px] h-[200px] group cursor-pointer">
                {/* Background polygon  Not Dynamic Its Fixed*/}

                <Image
                    src={BackgroundImage.src}
                    fill
                    className="object-cover z-10 polygon ml-10 transition-transform duration-500 group-hover:scale-105"
                    alt="polygon background"
                    loading="lazy"
                />

                {/* Product Image It SHould CHange Dyanamically */}
                <Image
                    src={Sambhar_Masala.src}
                    height={50}
                    width={50}
                    alt="Sambhar Masala"
                    className="relative z-20 top-15 -left-5 object-contain w-1/2 h-1/2 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:-translate-y-2"
                    loading="lazy"
                />
                {/* Prodcut  Name Dynamic */}
                <h1 className="ml-22 mt-4  font-semibold uppercase text-[10px] relative z-30 transition-transform duration-500 group-hover:-translate-y-1">
                    <span className="text-primary">Sambhar</span> Masala
                </h1>
                {/* Product Tagline Dyanmic */}
                <h1 className="ml-22 mt-1 leading-0 font-semibold uppercase  relative z-30 text-[10px] transition-transform duration-500 group-hover:-translate-y-1">
                    Aroma Of Real Sambhar
                </h1>
            </div>
            {/* Leaf  */}
            <div className="hidden sm:block absolute -top-36 right-0 w-[300px] h-[200px] ">
                <Image
                    alt="chef leaf"
                    height={150}
                    width={150}
                    src={Chef_Leaf.src}
                    className="z-20 object-contain relative left-1/2 transition-transform duration-500 hover:scale-110 hover:-rotate-12 hover:-translate-y-2 cursor-pointer"
                />
            </div>

            {/* Bottom Absolute products  */}
            <div className="hidden sm:block absolute -bottom-30 left-0 w-[300px] h-[200px] group cursor-pointer">
                {/* Background polygon  Not Dynamic Its Fixed*/}

                <Image
                    src={BackgroundImage.src}
                    fill
                    className="object-cover z-10 polygon ml-10 transition-transform duration-500 group-hover:scale-105"
                    alt="polygon background"
                    loading="lazy"
                />

                {/* Product Image It SHould CHange Dyanamically */}
                <Image
                    src={Kashmiri_Chilli_powder.src}
                    height={75}
                    width={75}
                    alt="Kashmiri_Chilli_powder"
                    className="relative z-20 bottom-0 -left-1.5 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:-translate-y-2"
                    loading="lazy"
                />
                {/* Prodcut  Name Dynamic */}
                <h1 className="ml-22 -mt-12  font-semibold uppercase text-[10px] relative z-30 transition-transform duration-500 group-hover:-translate-y-1">
                    <span className="text-primary">Kashmiri</span> Chilli Powder
                </h1>
                {/* Product Tagline Dyanmic */}
                <h1 className="ml-22 mt-1 leading-0 font-semibold uppercase  relative z-30 text-[10px] transition-transform duration-500 group-hover:-translate-y-1">
                    Essential Spices
                </h1>
            </div>

            {/* Mutton Spices */}
            <div className="hidden sm:block absolute -bottom-30 right-0 w-[300px] h-[200px] group cursor-pointer">
                {/* Background polygon  Not Dynamic Its Fixed*/}

                <Image
                    src={BackgroundImage.src}
                    fill
                    className="object-cover z-10 polygon ml-10 transition-transform duration-500 group-hover:scale-105"
                    alt="polygon background"
                    loading="lazy"
                />

                {/* Product Image It SHould CHange Dyanamically */}
                <Image
                    src={Mutton_Masala.src}
                    height={150}
                    width={75}
                    alt="Mutton Masala"
                    className="relative z-20 -bottom-15 left-[70%] object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:-translate-y-2"
                    loading="lazy"
                />
                {/* Prodcut  Name Dynamic */}
                <h1 className="ml-15 mt-5  font-semibold uppercase text-[10px] relative z-30 transition-transform duration-500 group-hover:-translate-y-1">
                    <span className="text-primary">Mutton</span> Masala
                </h1>
                {/* Product Tagline Dyanmic */}
                <h1 className="ml-15 mt-1 leading-0 font-semibold uppercase  relative z-30 text-[10px] transition-transform duration-500 group-hover:-translate-y-1">
                    Blended Spices
                </h1>
            </div>
        </div>
    );
}

function Leaf() {
    return (
        <div>
            <Image
                src={Leaf_Image.src}
                height={100}
                width={100}
                className="z-10 ab left-0 top-0 object absolute transition-transform duration-500 hover:scale-110 hover:rotate-12 cursor-pointer"
                alt="Leaf Images "
            />
        </div>
    );
}
