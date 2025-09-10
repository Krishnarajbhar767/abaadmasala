"use client";
import AutoParagraph from "@/components/common/AutoParagraph";
import AdvancedHeading from "@/components/ui/AdvancedHeading";
import Image from "next/image";
import React from "react";
import Chef from "@/public/home/elements/chef.webp";
import Arrow from "@/public/home/elements/arrow.webp";

import Sambhar_Masala from "@/public/home/elements/sambhar_masala.webp";
import Kashmiri_Chilli_powder from "@/public/home/elements/kashimiri_chilli_powder.webp";
import Mutton_Masala from "@/public/home/elements/mutton_masala.webp";
import Leaf_Image from "@/public/home/elements/leaf.webp";
import BackgroundImage from "@/public/home/elements/backgroundImage.png";
import Chef_Leaf from "@/public/home/elements/chef_leaf.webp";
import { motion } from "motion/react";
type Props = {};

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
        <div className="w-full sm:w-[50%] space-y-4  relative">
            <h1 className="w-fit text-2xl leading-snug tracking-tighter font-thin italic text-left ">
                The Spice Behind Every <br />
                <span className="text-primary">Masterpiece</span>
            </h1>
            <AdvancedHeading
                heading="Chef's "
                subheading="First Choice"
                reverse={true}
            />
            <AutoParagraph items={content} />
            <Image
                src={Arrow.src}
                alt="arrow"
                height={100}
                width={320}
                className="hidden sm:block object-contain absolute top-[14%] -right-60  z-10"
                loading="lazy"
            />
        </div>
    );
}
function ImageSection() {
    return (
        <div className="w-full sm:w-[50%]   h-68 relative ">
            <Image
                src={Chef.src}
                fill
                alt="Chef Image"
                className="object-contain object-center"
                loading="lazy"
            />
            {/* Absolutes Element */}
            {/* Product  */}
            <div className="hidden sm:block absolute -top-36 left-0 w-[300px] h-[200px]">
                {/* Background polygon  Not Dynamic Its Fixed*/}

                <Image
                    src={BackgroundImage.src}
                    fill
                    className="object-cover z-10 polygon ml-10"
                    alt="polygon background"
                    loading="lazy"
                />

                {/* Product Image It SHould CHange Dyanamically */}
                <Image
                    src={Sambhar_Masala.src}
                    height={50}
                    width={50}
                    alt="Sambhar Masala"
                    className="relative z-20 top-12 left-2 object-contain"
                    loading="lazy"
                />
                {/* Prodcut  Name Dynamic */}
                <h1 className="ml-22 mt-1  font-semibold uppercase text-[10px] relative z-30">
                    <span className="text-primary">Sambhar</span> Masala
                </h1>
                {/* Product Tagline Dyanmic */}
                <h1 className="ml-22 mt-1 leading-0 font-semibold uppercase  relative z-30 text-[10px]">
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
                    className="z-20 object-contain relative left-1/2"
                />
            </div>

            {/* Bottom Absolute products  */}
            <div className="hidden sm:block absolute -bottom-30 left-0 w-[300px] h-[200px]">
                {/* Background polygon  Not Dynamic Its Fixed*/}

                <Image
                    src={BackgroundImage.src}
                    fill
                    className="object-cover z-10 polygon ml-10"
                    alt="polygon background"
                    loading="lazy"
                />

                {/* Product Image It SHould CHange Dyanamically */}
                <Image
                    src={Kashmiri_Chilli_powder.src}
                    height={75}
                    width={75}
                    alt="Kashmiri_Chilli_powder"
                    className="relative z-20 bottom-0 -left-1.5 object-contain"
                    loading="lazy"
                />
                {/* Prodcut  Name Dynamic */}
                <h1 className="ml-22 -mt-12  font-semibold uppercase text-[10px] relative z-30">
                    <span className="text-primary">Kashmiri</span> Chilli Powder
                </h1>
                {/* Product Tagline Dyanmic */}
                <h1 className="ml-22 mt-1 leading-0 font-semibold uppercase  relative z-30 text-[10px]">
                    Essential Spices
                </h1>
            </div>

            {/* Mutton Spices */}
            <div className="hidden sm:block absolute -bottom-30 right-0 w-[300px] h-[200px]">
                {/* Background polygon  Not Dynamic Its Fixed*/}

                <Image
                    src={BackgroundImage.src}
                    fill
                    className="object-cover z-10 polygon ml-10"
                    alt="polygon background"
                    loading="lazy"
                />

                {/* Product Image It SHould CHange Dyanamically */}
                <Image
                    src={Mutton_Masala.src}
                    height={75}
                    width={75}
                    alt="Mutton Masala"
                    className="relative z-20 bottom-0 left-[80%] object-contain"
                    loading="lazy"
                />
                {/* Prodcut  Name Dynamic */}
                <h1 className="ml-15 -mt-12  font-semibold uppercase text-[10px] relative z-30">
                    <span className="text-primary">Mutton</span> Masala
                </h1>
                {/* Product Tagline Dyanmic */}
                <h1 className="ml-15 mt-1 leading-0 font-semibold uppercase  relative z-30 text-[10px]">
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
                className="z-10 ab left-0 top-0 object absolute"
                alt="Leaf Images "
            />
        </div>
    );
}
