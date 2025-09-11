// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import Turmeric_Powder from "@/public/home/hero/product1/turmeric_powder.webp";
// import Subheading from "@/components/common/Subheading";

// const products = [
//     { id: 1, name: "Biryani Masala", img: Turmeric_Powder },
//     { id: 2, name: "Chicken Masala", img: Turmeric_Powder },
//     { id: 3, name: "Mutton Masala", img: Turmeric_Powder },
//     { id: 4, name: "Chhole Masala", img: Turmeric_Powder },
//     { id: 5, name: "Tandoori Masala", img: Turmeric_Powder },
//     { id: 6, name: "Paneer Masala", img: Turmeric_Powder },
//     { id: 7, name: "Sabzi Masala", img: Turmeric_Powder },
// ];

// // Reusable Card
// const ProductCard = ({ product }: { product: (typeof products)[0] }) => (
//     <div className="flex-shrink-0 w-40 sm:w-44 md:w-48 lg:w-56 xl:w-60 px-2">
//         <div className="w-full aspect-square relative">
//             <div
//                 className="w-24 h-20 sm:w-46 sm:h-46 rounded-full bg-gray-200 absolute sm:-bottom-[30%] sm:left-[10%] left-6 -bottom-[20%]"
//                 style={{
//                     transform: "perspective(600px) rotateX(60deg)", // tilt into 3D
//                     transformOrigin: "center center",
//                 }}
//             ></div>
//             <Image
//                 src={product.img}
//                 alt={product.name}
//                 fill
//                 className="object-contain"
//             />
//         </div>
//         <p className="text-center mt-10 font-medium text-gray-700 text-sm sm:text-base">
//             {product.name}
//         </p>
//     </div>
// );

// const ProductSlider: React.FC = () => {
//     const [isPaused, setIsPaused] = useState(false);
//     const containerRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const container = containerRef.current;
//         if (!container) return;

//         let animationId: number;
//         let scrollAmount = 0.8; // 🔥 smooth speed

//         const scroll = () => {
//             if (!isPaused) {
//                 container.scrollLeft += scrollAmount;

//                 // When reaching end, reset to start (loop effect)
//                 if (
//                     container.scrollLeft >=
//                     container.scrollWidth - container.clientWidth
//                 ) {
//                     container.scrollLeft = 0;
//                 }
//             }
//             animationId = requestAnimationFrame(scroll);
//         };

//         animationId = requestAnimationFrame(scroll);

//         return () => cancelAnimationFrame(animationId);
//     }, [isPaused]);

//     return (
//         <div
//             className="relative w-full max-w-7xl mx-auto py-8 overflow-hidden"
//             onMouseEnter={() => setIsPaused(true)}
//             onMouseLeave={() => setIsPaused(false)}
//         >
//             <div className="mb-8 w-full sm:w-fit mx-auto px-4">
//                 <Subheading text="Explore More Authentic Flavors, Just a Click Away" />
//             </div>
//             {/* Infinite Scroll Container */}
//             <div
//                 ref={containerRef}
//                 className="flex overflow-x-hidden"
//                 style={{ scrollBehavior: "auto" }}
//             >
//                 {/* Duplicate products array to fake infinity */}
//                 {[...products, ...products].map((product, i) => (
//                     <ProductCard key={i} product={product} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ProductSlider;

"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Turmeric_Powder from "@/public/home/hero/product1/turmeric_powder.webp";
import Subheading from "@/components/common/Subheading";

const products = [
    { id: 1, name: "Biryani Masala", img: Turmeric_Powder },
    { id: 2, name: "Chicken Masala", img: Turmeric_Powder },
    { id: 3, name: "Mutton Masala", img: Turmeric_Powder },
    { id: 4, name: "Chhole Masala", img: Turmeric_Powder },
    { id: 5, name: "Tandoori Masala", img: Turmeric_Powder },
    { id: 6, name: "Paneer Masala", img: Turmeric_Powder },
    { id: 7, name: "Sabzi Masala", img: Turmeric_Powder },
];

// Reusable Card
const ProductCard = ({ product }: { product: (typeof products)[0] }) => (
    <div className="flex-shrink-0 w-40 sm:w-44 md:w-48 lg:w-56 xl:w-60 px-2">
        <div className="w-full aspect-square relative">
            <div
                className="w-24 h-20 sm:w-46 sm:h-46 rounded-full bg-gray-200 absolute sm:-bottom-[30%] sm:left-[10%] left-6 -bottom-[20%]"
                style={{
                    transform: "perspective(600px) rotateX(60deg)", // tilt into 3D
                    transformOrigin: "center center",
                }}
            ></div>
            <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-contain"
            />
        </div>
        <p className="text-center mt-10 font-medium text-gray-700 text-sm sm:text-base">
            {product.name}
        </p>
    </div>
);

const ProductSlider: React.FC = () => {
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let animationId: number;
        let scrollAmount = 0.8; // 🔥 smooth speed

        const scroll = () => {
            if (!isPaused) {
                container.scrollLeft += scrollAmount;

                // When reaching end, reset to start (loop effect)
                if (
                    container.scrollLeft >=
                    container.scrollWidth - container.clientWidth
                ) {
                    container.scrollLeft = 0;
                }
            }
            animationId = requestAnimationFrame(scroll);
        };

        animationId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationId);
    }, [isPaused]);

    return (
        <div className="relative w-full max-w-7xl mx-auto py-8 overflow-hidden">
            <div className="mb-8 w-full sm:w-fit mx-auto px-4">
                <Subheading text="Explore More Authentic Flavors, Just a Click Away" />
            </div>

            {/* Infinite Scroll Container */}
            <div
                ref={containerRef}
                className="flex overflow-x-hidden"
                style={{ scrollBehavior: "auto" }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {[...products, ...products].map((product, i) => (
                    <ProductCard key={i} product={product} />
                ))}
            </div>

            {/* 🔥 Left Fade (outside of products) */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent"></div>

            {/* 🔥 Right Fade (outside of products) */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent"></div>
        </div>
    );
};

export default ProductSlider;
