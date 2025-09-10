// "use client";
// import { HeroProduct } from "@/Types/common.types";
// import React, { useMemo, useState } from "react";
// import Image from "next/image";
// import {
//     motion,
//     LayoutGroup,
//     AnimatePresence,
//     Transition,
//     Variants,
// } from "framer-motion";

// // --- Static Image Imports ---
// import BaseImage from "@/public/home/hero/base.png";
// import BackgroundImage from "@/public/home/hero/background.webp";

// // Product 1 Images
// import p1_product from "@/public/home/hero/product1/turmeric_powder.webp";
// import p1_leftelem1 from "@/public/home/hero/product1/leftelem1.webp";
// import p1_leftelem2 from "@/public/home/hero/product1/leftelem2.webp";
// import p1_bowl from "@/public/home/hero/product1/bowl.webp";
// import p1_rightelem1 from "@/public/home/hero/product1/rightelem1.webp";
// import p1_rightelem2 from "@/public/home/hero/product1/rightelem2.webp";
// import p1_rightelem3 from "@/public/home/hero/product1/rightelem3.webp";
// import p1_rightelem4 from "@/public/home/hero/product1/rightelem4.webp";

// // Product 2 Images
// import p2_product from "@/public/home/hero/product2/premium_garam_masala.webp";
// import p2_leftelem1 from "@/public/home/hero/product2/leftelem1.webp";
// import p2_leftelem2 from "@/public/home/hero/product2/leftelem2.webp";
// import p2_bowl from "@/public/home/hero/product2/bowl.webp";
// import p2_rightelem1 from "@/public/home/hero/product2/rightelem1.webp";
// import p2_rightelem2 from "@/public/home/hero/product2/rightelem2.webp";
// import p2_rightelem3 from "@/public/home/hero/product2/rightelem3.webp";
// import p2_rightelem4 from "@/public/home/hero/product2/rightelem4.webp";

// // Product 3 Images
// import p3_product from "@/public/home/hero/product3/kashmiri_chilli_powder.webp";
// import p3_leftelem1 from "@/public/home/hero/product3/leftelem1.webp";
// import p3_leftelem2 from "@/public/home/hero/product3/leftelem2.webp";
// import p3_bowl from "@/public/home/hero/product3/bowl.webp";
// import p3_rightelem1 from "@/public/home/hero/product3/rightelem1.webp";
// import p3_rightelem2 from "@/public/home/hero/product3/rightelem2.webp";
// import p3_rightelem3 from "@/public/home/hero/product3/rightelem3.webp";
// import p3_rightelem4 from "@/public/home/hero/product3/rightelem4.webp";

// import HeroHeading from "./HeroHeading";
// import HeroSubheading from "./HeroSubheading";

// function Hero() {
//     const products: HeroProduct[] = [
//         {
//             product: p1_product,
//             productName: "Turmeric Powder",
//             supportingElement: {
//                 leftElem1: p1_leftelem1,
//                 leftElem2: p1_leftelem2,
//                 bowl: p1_bowl,
//                 rightElem1: p1_rightelem1,
//                 rightElem2: p1_rightelem2,
//                 rightElem3: p1_rightelem3,
//                 rightElem4: p1_rightelem4,
//                 heading: "Turmeric Powder",
//                 subheading: {
//                     text1: "The Golden Touch In Every",
//                     text2: "Perfect Blend",
//                 },
//                 headingColorCode: "#ef7f1a",
//             },
//         },
//         {
//             product: p2_product,
//             productName: "Premium Garam Masala",
//             supportingElement: {
//                 leftElem1: p2_leftelem1,
//                 leftElem2: p2_leftelem2,
//                 bowl: p2_bowl,
//                 rightElem1: p2_rightelem1,
//                 rightElem2: p2_rightelem2,
//                 rightElem3: p2_rightelem3,
//                 rightElem4: p2_rightelem4,
//                 heading: "Premium Garam Masala",
//                 subheading: {
//                     text1: "The heartbeat of every ",
//                     text2: "Indian kitchen",
//                 },
//                 headingColorCode: "#a56e0a",
//             },
//         },
//         {
//             product: p3_product,
//             productName: "Kashmiri Chili Powder",
//             supportingElement: {
//                 leftElem1: p3_leftelem1,
//                 leftElem2: p3_leftelem2,
//                 bowl: p3_bowl,
//                 rightElem1: p3_rightelem1,
//                 rightElem2: p3_rightelem2,
//                 rightElem3: p3_rightelem3,
//                 rightElem4: p3_rightelem4,
//                 heading: "Kashimiri Chilli Powder",
//                 subheading: {
//                     text1: "Spice up your recipes with",
//                     text2: "natural freshness",
//                 },
//                 headingColorCode: "#00000b",
//             },
//         },
//     ];

//     const [activeProduct, setActiveProduct] = useState(2);
//     const activeSupportingElements = products[activeProduct].supportingElement;

//     const ordered = useMemo(() => {
//         const left = (activeProduct + products.length - 1) % products.length;
//         const right = (activeProduct + 1) % products.length;
//         return { left, center: activeProduct, right };
//     }, [activeProduct, products.length]);

//     // Snappy product transition
//     const transition: Transition = {
//         type: "spring",
//         stiffness: 600,
//         damping: 30,
//         mass: 0.2,
//     };

//     const backStyle = "opacity-80 scale-90";
//     const centerStyle = "opacity-100 scale-100 drop-shadow-xl";

//     // Parent container controls stagger timing
//     const containerVariants: Variants = {
//         animate: {
//             transition: {
//                 staggerChildren: 0.12, // 🔥 fast but visible delay
//                 when: "beforeChildren",
//             },
//         },
//         exit: {
//             transition: {
//                 staggerChildren: 0.1,
//                 staggerDirection: -1,
//             },
//         },
//     };

//     // Left-side supporting elements
//     const leftVariants: Variants = {
//         initial: { x: -220, opacity: 0 },
//         animate: { x: 0, opacity: 1 },
//         exit: { x: -220, opacity: 0 },
//     };

//     // Right-side supporting elements
//     const rightVariants: Variants = {
//         initial: { x: 220, opacity: 0 },
//         animate: { x: 0, opacity: 1 },
//         exit: { x: 220, opacity: 0 },
//     };

//     return (
//         <div
//             style={{ backgroundImage: `url(${BackgroundImage.src})` }}
//             className="w-full h-screen relative max-w-[100vw] mx-auto bg-cover bg-bottom overflow-x-hidden"
//         >
//             <LayoutGroup>
//                 <AnimatePresence mode="wait">
//                     <motion.div
//                         key={activeProduct}
//                         className="pointer-events-none absolute inset-0 z-40"
//                         variants={containerVariants}
//                         initial="initial"
//                         animate="animate"
//                         exit="exit"
//                     >
//                         {/* LEFT SIDE ELEMENTS */}
//                         <motion.div
//                             variants={leftVariants}
//                             className="absolute top-70 left-0 z-30"
//                         >
//                             <motion.div animate={{ y: [0, -8, 0] }}>
//                                 <Image
//                                     src={activeSupportingElements.leftElem1}
//                                     width={100}
//                                     height={100}
//                                     alt="Left Elem1"
//                                     className="object-cover"
//                                 />
//                             </motion.div>
//                         </motion.div>

//                         <motion.div
//                             variants={leftVariants}
//                             className="absolute bottom-15 -left-5 z-30"
//                         >
//                             <motion.div animate={{ y: [0, -6, 0] }}>
//                                 <Image
//                                     src={activeSupportingElements.leftElem2}
//                                     width={200}
//                                     height={200}
//                                     alt="Left Elem2"
//                                     className="object-cover"
//                                 />
//                             </motion.div>
//                         </motion.div>

//                         <motion.div
//                             variants={leftVariants}
//                             className="absolute bottom-15 left-50 z-30"
//                         >
//                             <motion.div animate={{ y: [0, -10, 0] }}>
//                                 <div className="mb-18 -ml-[10vw]  w-[50vw] space-y-2 text-center">
//                                     <HeroHeading
//                                         headingColorCode={
//                                             activeSupportingElements.headingColorCode
//                                         }
//                                         text={activeSupportingElements.heading}
//                                     />
//                                     <div className="w-[80%] mx-auto">
//                                         <HeroSubheading
//                                             heading={
//                                                 activeSupportingElements
//                                                     .subheading.text1
//                                             }
//                                             subheading={
//                                                 activeSupportingElements
//                                                     .subheading.text2
//                                             }
//                                         />
//                                     </div>
//                                 </div>

//                                 <Image
//                                     src={activeSupportingElements.bowl}
//                                     height={420}
//                                     width={420}
//                                     alt="Bowl"
//                                     className="object-cover "
//                                 />
//                             </motion.div>
//                         </motion.div>

//                         {/* RIGHT SIDE ELEMENTS */}
//                         <motion.div
//                             variants={rightVariants}
//                             className="absolute top-22 right-[45vw] z-10"
//                         >
//                             <motion.div animate={{ y: [0, -6, 0] }}>
//                                 <Image
//                                     src={activeSupportingElements.rightElem1}
//                                     width={70}
//                                     height={70}
//                                     alt="Right Elem1"
//                                     className="object-cover"
//                                 />
//                             </motion.div>
//                         </motion.div>
//                         {/* RIght elem 2 */}
//                         <motion.div
//                             variants={rightVariants}
//                             className="absolute top-16 right-[30vw] z-10"
//                         >
//                             <motion.div animate={{ y: [0, -9, 0] }}>
//                                 <Image
//                                     src={activeSupportingElements.rightElem2}
//                                     width={70}
//                                     height={70}
//                                     alt="Right Elem2"
//                                     className="object-cover"
//                                 />
//                             </motion.div>
//                         </motion.div>
//                         {/* RIght ELEM 3 */}
//                         <motion.div
//                             variants={rightVariants}
//                             className="absolute top-60 right-[45vw] z-10"
//                         >
//                             <motion.div animate={{ y: [0, -5, 0] }}>
//                                 <Image
//                                     src={activeSupportingElements.rightElem3}
//                                     width={40}
//                                     height={40}
//                                     alt="Right Elem3"
//                                     className="object-cover"
//                                 />
//                             </motion.div>
//                         </motion.div>

//                         <motion.div
//                             variants={rightVariants}
//                             className="absolute top-[30%] right-0 z-10"
//                         >
//                             <motion.div animate={{ y: [0, -7, 0] }}>
//                                 <Image
//                                     src={activeSupportingElements.rightElem4}
//                                     width={120}
//                                     height={120}
//                                     alt="Right Elem4"
//                                     className="object-cover"
//                                 />
//                             </motion.div>
//                         </motion.div>
//                     </motion.div>
//                 </AnimatePresence>

//                 {/* MAIN PRODUCT TRIO */}
//                 <div className="absolute flex gap-6 right-[10vw] bottom-20 z-10 items-end">
//                     {[ordered.left, ordered.center, ordered.right].map(
//                         (idx, i) => {
//                             const isCenter = idx === ordered.center;
//                             const layoutId = `product-${idx}`;
//                             const depth = isCenter ? 1 : 0.9;
//                             const y = isCenter ? 0 : 12;
//                             const classes = isCenter ? centerStyle : backStyle;
//                             const z = isCenter ? 30 : 20 - (i === 0 ? 1 : 2);

//                             return (
//                                 <motion.button
//                                     key={idx}
//                                     onClick={() => setActiveProduct(idx)}
//                                     className="relative"
//                                     style={{ zIndex: z }}
//                                     initial={false}
//                                     whileHover={{
//                                         scale: isCenter ? 1.03 : 0.92,
//                                     }}
//                                     whileTap={{ scale: isCenter ? 0.98 : 0.9 }}
//                                     transition={{
//                                         type: "spring",
//                                         stiffness: 500,
//                                         damping: 30,
//                                     }}
//                                     aria-label={`Show ${products[idx].productName}`}
//                                 >
//                                     <motion.div
//                                         layoutId={layoutId}
//                                         style={{
//                                             transformOrigin: "50% 100%",
//                                         }}
//                                         animate={{ scale: depth, y }}
//                                         transition={transition}
//                                     >
//                                         <Image
//                                             src={products[idx].product}
//                                             alt={products[idx].productName}
//                                             width={isCenter ? 200 : 130}
//                                             height={isCenter ? 200 : 130}
//                                             className={`object-contain ${classes}`}
//                                             priority={isCenter}
//                                         />
//                                     </motion.div>
//                                 </motion.button>
//                             );
//                         }
//                     )}
//                 </div>
//             </LayoutGroup>

//             {/* BASE IMAGE */}
//             <Image
//                 src={BaseImage}
//                 className="object-cover absolute bottom-0"
//                 width={2600}
//                 height={100}
//                 alt="Hero Base Image"
//             />
//         </div>
//     );
// }

// export default Hero;

"use client";
import { HeroProduct } from "@/Types/common.types";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import {
    motion,
    LayoutGroup,
    AnimatePresence,
    Transition,
    Variants,
} from "framer-motion";

// --- Static Image Imports ---
import BaseImage from "@/public/home/hero/base.png";
import BackgroundImage from "@/public/home/hero/background.webp";

// Product 1 Images
import p1_product from "@/public/home/hero/product1/turmeric_powder.webp";
import p1_leftelem1 from "@/public/home/hero/product1/leftelem1.webp";
import p1_leftelem2 from "@/public/home/hero/product1/leftelem2.webp";
import p1_bowl from "@/public/home/hero/product1/bowl.webp";
import p1_rightelem1 from "@/public/home/hero/product1/rightelem1.webp";
import p1_rightelem2 from "@/public/home/hero/product1/rightelem2.webp";
import p1_rightelem3 from "@/public/home/hero/product1/rightelem3.webp";
import p1_rightelem4 from "@/public/home/hero/product1/rightelem4.webp";

// Product 2 Images
import p2_product from "@/public/home/hero/product2/premium_garam_masala.webp";
import p2_leftelem1 from "@/public/home/hero/product2/leftelem1.webp";
import p2_leftelem2 from "@/public/home/hero/product2/leftelem2.webp";
import p2_bowl from "@/public/home/hero/product2/bowl.webp";
import p2_rightelem1 from "@/public/home/hero/product2/rightelem1.webp";
import p2_rightelem2 from "@/public/home/hero/product2/rightelem2.webp";
import p2_rightelem3 from "@/public/home/hero/product2/rightelem3.webp";
import p2_rightelem4 from "@/public/home/hero/product2/rightelem4.webp";

// Product 3 Images
import p3_product from "@/public/home/hero/product3/kashmiri_chilli_powder.webp";
import p3_leftelem1 from "@/public/home/hero/product3/leftelem1.webp";
import p3_leftelem2 from "@/public/home/hero/product3/leftelem2.webp";
import p3_bowl from "@/public/home/hero/product3/bowl.webp";
import p3_rightelem1 from "@/public/home/hero/product3/rightelem1.webp";
import p3_rightelem2 from "@/public/home/hero/product3/rightelem2.webp";
import p3_rightelem3 from "@/public/home/hero/product3/rightelem3.webp";
import p3_rightelem4 from "@/public/home/hero/product3/rightelem4.webp";

import HeroHeading from "./HeroHeading";
import HeroSubheading from "./HeroSubheading";

function Hero() {
    const products: HeroProduct[] = [
        {
            product: p1_product,
            productName: "Turmeric Powder",
            supportingElement: {
                leftElem1: p1_leftelem1,
                leftElem2: p1_leftelem2,
                bowl: p1_bowl,
                rightElem1: p1_rightelem1,
                rightElem2: p1_rightelem2,
                rightElem3: p1_rightelem3,
                rightElem4: p1_rightelem4,
                heading: "Turmeric Powder",
                subheading: {
                    text1: "The Golden Touch In Every",
                    text2: "Perfect Blend",
                },
                headingColorCode: "#ef7f1a",
            },
        },
        {
            product: p2_product,
            productName: "Premium Garam Masala",
            supportingElement: {
                leftElem1: p2_leftelem1,
                leftElem2: p2_leftelem2,
                bowl: p2_bowl,
                rightElem1: p2_rightelem1,
                rightElem2: p2_rightelem2,
                rightElem3: p2_rightelem3,
                rightElem4: p2_rightelem4,
                heading: "Premium Garam Masala",
                subheading: {
                    text1: "The heartbeat of every ",
                    text2: "Indian kitchen",
                },
                headingColorCode: "#a56e0a",
            },
        },
        {
            product: p3_product,
            productName: "Kashmiri Chili Powder",
            supportingElement: {
                leftElem1: p3_leftelem1,
                leftElem2: p3_leftelem2,
                bowl: p3_bowl,
                rightElem1: p3_rightelem1,
                rightElem2: p3_rightelem2,
                rightElem3: p3_rightelem3,
                rightElem4: p3_rightelem4,
                heading: "Kashimiri Chilli Powder",
                subheading: {
                    text1: "Spice up your recipes with",
                    text2: "natural freshness",
                },
                headingColorCode: "#00000b",
            },
        },
    ];

    const [activeProduct, setActiveProduct] = useState(2);
    const activeSupportingElements = products[activeProduct].supportingElement;

    const ordered = useMemo(() => {
        const left = (activeProduct + products.length - 1) % products.length;
        const right = (activeProduct + 1) % products.length;
        return { left, center: activeProduct, right };
    }, [activeProduct, products.length]);

    // Snappy product transition
    const transition: Transition = {
        type: "spring",
        stiffness: 600,
        damping: 30,
        mass: 0.2,
    };

    const backStyle = "opacity-80 scale-90";
    const centerStyle = "opacity-100 scale-100 drop-shadow-xl";

    // Parent container controls stagger timing
    const containerVariants: Variants = {
        animate: {
            transition: {
                staggerChildren: 0.1,
                when: "beforeChildren",
            },
        },
        exit: {
            transition: {
                staggerChildren: 0.08,
                staggerDirection: -1,
            },
        },
    };

    // Left-side supporting elements
    const leftVariants: Variants = {
        initial: { x: -220, opacity: 0 },
        animate: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.42, ease: "easeInOut" },
        },
        exit: {
            x: -220,
            opacity: 0,
            transition: { duration: 0.38, ease: "easeInOut" },
        },
    };

    // Right-side supporting elements
    const rightVariants: Variants = {
        initial: { x: 220, opacity: 0 },
        animate: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.42, ease: "easeInOut" },
        },
        exit: {
            x: 220,
            opacity: 0,
            transition: { duration: 0.38, ease: "easeInOut" },
        },
    };

    return (
        <div
            style={{ backgroundImage: `url(${BackgroundImage.src})` }}
            className="w-full h-screen relative max-w-[100vw] mx-auto bg-cover bg-bottom overflow-x-hidden"
        >
            <LayoutGroup>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeProduct}
                        className="pointer-events-none absolute inset-0 z-40"
                        variants={containerVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        {/* LEFT SIDE ELEMENTS */}
                        <motion.div
                            variants={leftVariants}
                            className="absolute top-70 left-0 z-30"
                        >
                            <Image
                                src={activeSupportingElements.leftElem1}
                                width={100}
                                height={100}
                                alt="Left Elem1"
                                className="object-cover"
                            />
                        </motion.div>

                        <motion.div
                            variants={leftVariants}
                            className="absolute bottom-15 -left-5 z-30"
                        >
                            <Image
                                src={activeSupportingElements.leftElem2}
                                width={200}
                                height={200}
                                alt="Left Elem2"
                                className="object-cover"
                            />
                        </motion.div>

                        <motion.div
                            variants={leftVariants}
                            className="absolute bottom-15 left-50 z-30"
                        >
                            <div className="mb-18 -ml-[10vw]  w-[50vw] space-y-2 text-center">
                                <HeroHeading
                                    headingColorCode={
                                        activeSupportingElements.headingColorCode
                                    }
                                    text={activeSupportingElements.heading}
                                />
                                <div className="w-[80%] mx-auto">
                                    <HeroSubheading
                                        heading={
                                            activeSupportingElements.subheading
                                                .text1
                                        }
                                        subheading={
                                            activeSupportingElements.subheading
                                                .text2
                                        }
                                    />
                                </div>
                            </div>
                            <Image
                                src={activeSupportingElements.bowl}
                                height={420}
                                width={420}
                                alt="Bowl"
                                className="object-cover"
                            />
                        </motion.div>

                        {/* RIGHT SIDE ELEMENTS */}
                        <motion.div
                            variants={rightVariants}
                            className="absolute top-22 right-[45vw] z-10"
                        >
                            <Image
                                src={activeSupportingElements.rightElem1}
                                width={70}
                                height={70}
                                alt="Right Elem1"
                                className="object-cover"
                            />
                        </motion.div>

                        <motion.div
                            variants={rightVariants}
                            className="absolute top-16 right-[30vw] z-10"
                        >
                            <Image
                                src={activeSupportingElements.rightElem2}
                                width={70}
                                height={70}
                                alt="Right Elem2"
                                className="object-cover"
                            />
                        </motion.div>

                        <motion.div
                            variants={rightVariants}
                            className="absolute top-60 right-[45vw] z-10"
                        >
                            <Image
                                src={activeSupportingElements.rightElem3}
                                width={40}
                                height={40}
                                alt="Right Elem3"
                                className="object-cover"
                            />
                        </motion.div>

                        <motion.div
                            variants={rightVariants}
                            className="absolute top-[30%] right-0 z-10"
                        >
                            <Image
                                src={activeSupportingElements.rightElem4}
                                width={120}
                                height={120}
                                alt="Right Elem4"
                                className="object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

                {/* MAIN PRODUCT TRIO */}
                <div className="absolute flex gap-6 right-[10vw] bottom-20 z-10 items-end">
                    {[ordered.left, ordered.center, ordered.right].map(
                        (idx, i) => {
                            const isCenter = idx === ordered.center;
                            const layoutId = `product-${idx}`;
                            const depth = isCenter ? 1 : 0.9;
                            const y = isCenter ? 0 : 12;
                            const classes = isCenter ? centerStyle : backStyle;
                            const z = isCenter ? 30 : 20 - (i === 0 ? 1 : 2);

                            return (
                                <motion.button
                                    key={idx}
                                    onClick={() => setActiveProduct(idx)}
                                    className="relative"
                                    style={{ zIndex: z }}
                                    initial={false}
                                    whileHover={{
                                        scale: isCenter ? 1.03 : 0.92,
                                    }}
                                    whileTap={{ scale: isCenter ? 0.98 : 0.9 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 30,
                                    }}
                                    aria-label={`Show ${products[idx].productName}`}
                                >
                                    <motion.div
                                        layoutId={layoutId}
                                        style={{
                                            transformOrigin: "50% 100%",
                                        }}
                                        animate={{ scale: depth, y }}
                                        transition={transition}
                                    >
                                        <Image
                                            src={products[idx].product}
                                            alt={products[idx].productName}
                                            width={isCenter ? 200 : 130}
                                            height={isCenter ? 200 : 130}
                                            className={`object-contain ${classes}`}
                                            priority={isCenter}
                                        />
                                    </motion.div>
                                </motion.button>
                            );
                        }
                    )}
                </div>
            </LayoutGroup>

            {/* BASE IMAGE */}
            <Image
                src={BaseImage}
                className="object-cover absolute bottom-0"
                width={2600}
                height={100}
                alt="Hero Base Image"
            />
        </div>
    );
}

export default Hero;
