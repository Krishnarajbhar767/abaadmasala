import React from "react";
import { motion } from "framer-motion";

type Props = {
    heading: string;
    subheading: string;
    reverse?: boolean;
};

function AdvancedHeading({ heading, subheading, reverse = false }: Props) {
    // Determine colors based on reverse prop
    const mainColor = reverse ? "text-primary" : "text-foreground-900";
    const subColor = reverse ? "text-foreground-900" : "text-primary";

    return (
        <motion.div
            className="w-fit"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }} // triggers when 50% visible
        >
            <h1
                className={`text-3xl sm:text-3xl md:text-4xl font-semibold uppercase font-sans tracking-wide ${mainColor}`}
            >
                {heading}
                <motion.span
                    className={`ml-2 ${subColor}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {subheading}
                </motion.span>
            </h1>

            {/* Optional underline accent */}
            <motion.div
                className="h-1 w-16 bg-primary mt-2 rounded"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
            />
        </motion.div>
    );
}

export default AdvancedHeading;
