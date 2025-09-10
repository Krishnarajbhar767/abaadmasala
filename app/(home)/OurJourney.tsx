"use client";

import AutoParagraph from "@/components/common/AutoParagraph";
import Image from "next/image";
import Map from "@/public/home/elements/maps.webp";
import Elachi from "@/public/home/elements/elachi.webp";
import Garlic from "@/public/home/elements/garlic.webp";
import AdvancedHeading from "@/components/ui/AdvancedHeading";
import Button from "@/components/ui/Button";
import Roll from "@/public/home/elements/roll.webp";
import Flower from "@/public/home/elements/flower.webp";
import Chilli from "@/public/home/elements/chilli.webp";
const OurJourney = () => {
    const journeyContent: string[] = [
        "The story of Abaad Masala & Co. began in 1993, with a small trading business built on trust, quality, and the love for authentic Indian spices. What started as a humble venture quickly earned a reputation for delivering fresh and genuine spice products across local markets.",

        "Driven by the overwhelming response and growing demand, we took a significant leap forward in 2016 by establishing our own manufacturing unit in Vasai, Palghar. This modern facility – equipped with a 10-ton per day production capacity and 40-ton cold storage – marked a new chapter in our mission to deliver premium spices on a national scale.",

        "Over the years, our dedication, hard work, and passion for purity helped us expand our reach. Today, under our trusted brand name Frize, we proudly serve customers across India, supplying spices that preserve tradition while meeting modern-day hygiene and quality standards.",

        "From a small trading desk to a full-fledged manufacturing hub – our journey has been one of commitment, consistency, and customer trust.",
    ];

    return (
        <section className="container mx-auto w-full  h-[77rem] sm:h-[40rem]  flex flex-col sm:flex-row px-4 py-16  gap-6 overflow-hidden">
            <div className="w-full sm:w-[40%] h-[40rem] sm:h-full  relative ">
                {/* Center Map */}
                <Image
                    src={Map.src}
                    alt="Our Journey Map"
                    className="w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] object-contain absolute top-[20%] left-[20%] "
                    height={250}
                    width={250}
                    loading="lazy"
                />
                {/* Lichi */}
                <Image
                    src={Elachi.src}
                    alt="Our Journey ELACHI"
                    className="w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] object-contain  absolute top-0 left-0"
                    height={150}
                    width={150}
                />
                {/* garlic */}
                <Image
                    src={Garlic.src}
                    alt="Our Journey ELACHI"
                    className="w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] object-contain  absolute bottom-0 right-0"
                    height={100}
                    width={100}
                />
            </div>

            <div className="w-full sm:w-[60%] h-full sm:px-4 space-y-4 relative">
                <AdvancedHeading heading="Our" subheading="Journey" />
                <AutoParagraph items={journeyContent} />
                <Button>Learn More</Button>
                {/* Absolute Element */}
                <Image
                    src={Roll.src}
                    alt="Our Journey Map"
                    className="w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] object-contain absolute top-[20%] left-[20%] "
                    height={250}
                    width={250}
                    loading="lazy"
                />
                <Image
                    src={Flower.src}
                    alt="Our Journey Map"
                    className="w-[140px] h-[140px] sm:w-[150px] sm:h-[150px] object-contain absolute   top-[50%] sm:top-[20%] -right-12 "
                    height={100}
                    width={100}
                    loading="lazy"
                />
                <Image
                    src={Chilli.src}
                    alt="Our Journey Map"
                    className="w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] object-contain absolute -bottom-16 sm:-bottom-26 right-0 "
                    height={100}
                    width={100}
                    loading="lazy"
                />
            </div>
        </section>
    );
};

export default OurJourney;
