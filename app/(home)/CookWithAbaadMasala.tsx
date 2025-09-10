import AutoParagraph from "@/components/common/AutoParagraph";
import Heading from "@/components/common/Heading";
import Button from "@/components/ui/Button";
import React from "react";
import { BiSearch } from "react-icons/bi";
import BackgroundImage from "@/public/home/cookwithabaadmasala/sabji.webp";
import Image from "next/image";
export default function CookWithAbaadMasala() {
    return (
        <div className=" w-full relative bg-white">
            {/* Purple Glow Right */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "#ffffff",
                    backgroundImage: `
        radial-gradient(
          circle at top right,
          rgba(173, 109, 244, 0.5),
          transparent 70%
        )
      `,
                    filter: "blur(80px)",
                    backgroundRepeat: "no-repeat",
                }}
            />
            <div className="h-auto w-full  px-4 py-16  relative overflow-hidden pl-0 sm:pl-14">
                <div className="w-full sm:w-[50%] space-y-4 px-4 sm:px-0">
                    <Heading text="Cook with Abaad Masala" />
                    <AutoParagraph
                        items={[
                            `Discover more delicious creations with Abaad Masala – from quick
                        everyday meals to rich traditional feasts. Explore a world of authentic
                        recipes and bring new flavors to your kitchen`,
                        ]}
                    />
                    <Button>
                        <div className="flex items-center justify-between gap-2">
                            {" "}
                            Explore More <BiSearch size={18} />
                        </div>
                    </Button>
                </div>
                {/* Absolute IMage */}
                <Image
                    height={500}
                    width={500}
                    className="hidden sm:block object-cover absolute -right-30 -top-30  -2 -blue-500"
                    src={BackgroundImage.src}
                    alt="Cook With CookWithAbaadMasala BackgroundImage"
                />
            </div>
        </div>
    );
}
