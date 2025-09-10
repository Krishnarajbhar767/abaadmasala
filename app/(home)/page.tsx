"use client";

import Chefchoice from "./Chefchoice";
import CookWithAbaadMasala from "./CookWithAbaadMasala";
import GridLayout from "./GridLayout";
import Hero from "./Hero";
import MobileHero from "./MobileHero";
import OurJourney from "./OurJourney";
import ProductSlider from "./ProductSlider";
import TestimonialSection from "./Testomonials";

export default function HomePage() {
    return (
        <div className="w-full">
            {/*Hero Section  */}
            <div className="w-full">
                <div className="hidden sm:block">
                    <Hero />
                </div>
                <div className="block sm:hidden">
                    <MobileHero />
                </div>
            </div>
            {/* Our Journey */}
            <div>
                <OurJourney />
            </div>
            <div>
                <Chefchoice />
            </div>
            {/* Essential  Spices */}
            <div>
                <GridLayout
                    category="essential"
                    heading={{
                        text: "ESSENTIAL ",
                        text2: "SPICES",
                    }}
                    quotes={"Abaad Masala – The Essence of Everyday Cooking"}
                    paragraph="Our Essential Spices Range Brings You The Purity And
                        Freshness Needed To Elevate Daily Meals.
                        From The Golden Touch Of Turmeric To The Bold Punch
                        Of Black Pepper, Each Spice Is Finely Ground And Packed
                        With Natural Flavor. Trusted By Chefs, Loved By Homes
                        Abaad Masala Makes Every Dish Unforgettable."
                />
            </div>
            {/*GROUNDED    Spices */}
            <div>
                <GridLayout
                    category="grounded"
                    reverse={true}
                    heading={{
                        text: "Grounded ",
                        text2: "SPICES",
                    }}
                    quotes={"Abaad Masala – Pure Aroma. Perfect Taste"}
                    paragraph="Abaad Masala's Grounded Spices are finely milled to
                    preserve natural oils and rich flavors. From vibrant
                    turmeric to bold black pepper and aromatic coriander,
                    each spice is crafted to bring authentic taste to your kitchen."
                />
            </div>
            {/*Blended    Spices */}
            <div>
                <GridLayout
                    category="blended"
                    heading={{
                        text: "Blended ",
                        text2: "SPICES",
                    }}
                    quotes={"Abaad Masala – Flavors That Tell a Story"}
                    paragraph="Abaad Masala's Blended Spices are expertly crafted
                    combinations of premium ingredients, bringing the
                    perfect balance of taste and aroma to every dish.
                    From Garam Masala to Sambhar, Chaat to Mutton Masala
                    each blend delivers authentic, rich, and unforgettable flavors."
                />
            </div>

            {/*Whole    Spices */}
            <div>
                <GridLayout
                    reverse={true}
                    category="whole"
                    heading={{
                        text: "Whole ",
                        text2: "SPICES",
                    }}
                    quotes={"Abaad Masala – Pure. Natural. Unprocessed"}
                    paragraph="Abaad Masala's Whole Spices bring you the raw essence
                    of nature, handpicked for freshness and authenticity.
                    From cumin seeds to black peppercorns, cloves to
                    cardamom – every spice is selected to deliver rich aroma
                    and bold flavor to your kitchen"
                />
            </div>

            {/* ProductSliderSection */}
            <ProductSlider />

            {/* Cook With Abaad Masala  */}
            <CookWithAbaadMasala />

            {/* Testomonial */}
            <TestimonialSection />
        </div>
    );
}
