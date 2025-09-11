import "./globals.css";
import localFont from "next/font/local";

import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Abaad Masala - Pure & Authentic Indian Spices",
    description:
        "Abaad Masala brings you premium quality spices like coriander, turmeric, and chili powder, sourced and ground with care.",
    keywords: [
        "Abaad Masala",
        "buy spices online",
        "coriander powder",
        "turmeric powder",
        "red chili powder",
        "indian masala",
        "wholesale spices",
    ],
    // openGraph: {
    //     title: "Abaad Masala - Authentic Spices",
    //     description:
    //         "Premium spices with rich aroma and taste from Abaad Masala.",
    //     url: "https://abaadmasala.com",
    //     siteName: "Abaad Masala",
    //     images: [
    //         {
    //             url: "/og-abaad.jpg", // 🔹 add this image in public folder
    //             width: 1200,
    //             height: 630,
    //             alt: "Abaad Masala Packaging",
    //         },
    //     ],
    //     locale: "en_IN",
    //     type: "website",
    // },
    // twitter: {
    //     card: "summary_large_image",
    //     title: "Abaad Masala - Authentic Indian Spices",
    //     description:
    //         "Shop authentic Indian spices from Abaad Masala – fresh, aromatic, and pure.",
    //     images: ["/og-abaad.jpg"],
    // },
};

const bernhc = localFont({
    src: "../public/fonts/bernhc/bernhc.ttf",
    variable: "--font-bernhc",
    display: "swap",
});

const kyoto = localFont({
    src: "../public/fonts/kyoto/kyoto.ttf",
    variable: "--font-kyoto",
    display: "swap",
});

const glecb = localFont({
    src: "../public/fonts/glecb/glecb.ttf",
    variable: "--font-glecb",
    display: "swap",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${bernhc.variable} ${glecb.variable} ${kyoto.variable}`}
        >
            <body className="min-h-screen  flex flex-col ">
                <Header />

                {<main className="w-full   flex-1 ">{children}</main>}

                <Footer />
            </body>
        </html>
    );
}
