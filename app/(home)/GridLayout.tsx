import Image, { StaticImageData } from "next/image";
// Essential Images Preloading
import Essential_Small1 from "@/public/home/essential/small1.png";
import Essential_Small2 from "@/public/home/essential/small2.png";
import Essential_Big1 from "@/public/home/essential/big1.png";
import Essential_Big2 from "@/public/home/essential/big2.png";
// Grounded Spices   Images Preloading
import Grounded_Small1 from "@/public/home/grounded/small1.png";
import Grounded_Small2 from "@/public/home/grounded/small2.png";
import Grounded_Big1 from "@/public/home/grounded/big1.png";
import Grounded_Big2 from "@/public/home/grounded/big2.png";

//Blended Spices Images Importing
import Blended_Small1 from "@/public/home/blended/small1.png";
import Blended_Small2 from "@/public/home/blended/small2.png";
import Blended_Big1 from "@/public/home/blended/big1.png";
import Blended_Big2 from "@/public/home/blended/big2.png";

// Whole Spices Images Importing
import Whole_Small1 from "@/public/home/whole/small1.png";
import Whole_Small2 from "@/public/home/whole/small2.png";
import Whole_Big1 from "@/public/home/whole/big1.png";
import Whole_Big2 from "@/public/home/whole/big2.png";
import AdvancedHeading from "@/components/ui/AdvancedHeading";
import AutoParagraph from "@/components/common/AutoParagraph";
import Essential_ELEM from "@/public/home/elements/elachi.webp";
import Grounded_ELEM from "@/public/home/elements/flower.webp";
import Blended_ELEM from "@/public/home/elements/chilli.webp";
import Whole_ELEM from "@/public/home/elements/roll.webp";
import Button from "@/components/ui/Button";

type Props = {
    category: Category;
    reverse?: boolean;
    heading: {
        text: string;
        text2: string;
    };
    quotes: string;
    paragraph: string;
};

type Category = "whole" | "essential" | "blended" | "grounded";
type ImageGalleryProp = {
    small1: string;
    small2: string;
    big1: string;
    big2: string;
};
export default function GridLayout({
    category,
    heading,
    quotes,
    paragraph,
    reverse = false,
}: Props) {
    const Images: Record<Category, ImageGalleryProp> = {
        essential: {
            small1: Essential_Small1.src,
            small2: Essential_Small2.src,
            big1: Essential_Big1.src,
            big2: Essential_Big2.src,
        },
        whole: {
            small1: Whole_Small1.src,
            small2: Whole_Small2.src,
            big1: Whole_Big1.src,
            big2: Whole_Big2.src,
        },
        blended: {
            small1: Whole_Small1.src,
            small2: Whole_Small2.src,
            big1: Whole_Big1.src,
            big2: Whole_Big2.src,
        },
        grounded: {
            small1: Grounded_Small1.src,
            small2: Grounded_Small2.src,
            big1: Grounded_Big1.src,
            big2: Grounded_Big2.src,
        },
    };

    return (
        <div className="container mx-auto h-auto py-8 px-4 gap-4  -red-400 overflow-hidden">
            <SpiceGrid
                images={Images[category]}
                heading={heading}
                quotes={quotes}
                paragraph={paragraph}
                category={category}
                reverse={reverse}
            />
        </div>
    );
}

function SpiceGrid({
    images,
    heading,
    paragraph,
    quotes,
    category,
    reverse,
}: {
    images: ImageGalleryProp;
    heading: { text: string; text2: string };
    quotes: string;
    paragraph: string;
    category: Category;
    reverse: boolean;
}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Left Masonry Grid (images) */}
            <div
                className={`flex gap-4 order-1 ${reverse ? "md:order-2" : "md:order-1"}`}
            >
                {/* Left Column */}
                <div className="flex flex-col gap-4 flex-1">
                    <div className="relative w-full h-[120px] sm:h-[150px]">
                        <Image
                            src={images.small1}
                            alt="spices_small_image1"
                            fill
                            className="object-cover "
                        />
                    </div>
                    <div className="relative w-full h-[240px] sm:h-[300px]">
                        <Image
                            src={images.big1}
                            alt="spices_big_image1"
                            fill
                            className="object-cover "
                        />
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-4 flex-1">
                    <div className="relative w-full h-[240px] sm:h-[300px]">
                        <Image
                            src={images.big2}
                            alt="spices_big_image2"
                            fill
                            className="object-cover "
                        />
                    </div>
                    <div className="relative w-full h-[120px] sm:h-[150px]">
                        <Image
                            src={images.small2}
                            alt="spices_small_image2"
                            fill
                            className="object-cover "
                        />
                    </div>
                </div>
            </div>

            {/* Right Side Content */}
            <div
                className={`flex flex-col justify-center h-full  gap-4 order-2 ${reverse ? "md:order-1" : "md:order-2"}`}
            >
                <div className="relative flex justify-between items-center">
                    <AdvancedHeading
                        heading={heading.text}
                        subheading={heading.text2}
                    />
                    <Image
                        height={80}
                        width={80}
                        alt="Spices Supporting Element"
                        className="object-contain hidden sm:block"
                        src={
                            (category === "blended" && Blended_ELEM.src) ||
                            (category === "essential" && Essential_ELEM.src) ||
                            (category === "grounded" && Grounded_ELEM.src) ||
                            (category === "whole" && Whole_ELEM.src) ||
                            ""
                        }
                    />
                </div>
                <q className="italic text-base sm:text-md md:text-lg leading-snug tracking-tighter text-gray-800">
                    {quotes}
                </q>
                <AutoParagraph items={[paragraph]} />
                <div>
                    <Button>Know More</Button>
                </div>
            </div>
        </div>
    );
}
