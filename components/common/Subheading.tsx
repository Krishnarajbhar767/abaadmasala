import React from "react";
import { motion } from "framer-motion";
export default function Subheading({ text }: { text: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }} // triggers when 50% visible
            className="w-fit text-gray-700   text-[1.7rem] font-semibold tracking-tighter capitalize leading-tight "
        >
            {text}
        </motion.div>
    );
}
