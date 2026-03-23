import AutoParagraph from "@/components/common/AutoParagraph";
import Heading from "@/components/common/Heading";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import BackgroundImage from "@/public/home/cookwithabaadmasala/sabji.webp";
import Image from "next/image";

export default function CookWithAbaadMasala() {
    return (
        <section className="w-full relative bg-[#F7F7F7] overflow-hidden my-10">
            <div className="container mx-auto px-4 relative min-h-[400px] sm:min-h-[480px] flex items-center">
                
                {/* Content Section - Placed with Left Padding */}
                <div className="w-full md:w-[60%] py-12 md:py-16 md:pl-10 lg:pl-16 space-y-6 relative z-10">
                    <Heading text="Cook with Abaad Masala" />
                    
                    <div className="text-gray-800 text-lg leading-relaxed max-w-[500px]">
                        <AutoParagraph
                            items={[
                                `Discover more delicious creations with Abaad Masala – from quick everyday meals to rich traditional feasts. Explore a world of authentic recipes and bring new flavors to your kitchen`,
                            ]}
                        />
                    </div>
                    
                    <div className="pt-4">
                        <button className="bg-[#E42521] text-white px-7 py-3 rounded-md flex items-center justify-center gap-3 font-semibold text-lg hover:bg-transparent hover:text-[#E42521] transition-colors duration-300 shadow-sm border-2 border-[#E42521]">
                            <span>Explore Recipes</span>
                            <FiArrowRight size={22} className="font-semibold" />
                        </button>
                    </div>
                </div>

                {/* Absolute Image - Touching Bottom & Right */}
                <Image
                    src={BackgroundImage.src}
                    alt="Cook With Abaad Masala"
                    width={850}
                    height={850}
                    className="hidden md:block absolute -bottom-[15%] -right-[15%] lg:-bottom-[20%] lg:-right-[10%] w-[70%] lg:w-[65%] h-auto object-contain object-right-bottom z-0 drop-shadow-xl pointer-events-none"
                    priority
                />
            </div>
        </section>
    );
}
