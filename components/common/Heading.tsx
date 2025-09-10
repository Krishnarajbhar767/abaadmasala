import React from "react";
import { motion } from "framer-motion";
function Heading({ text }: { text: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }} // triggers when 50% visible
            className="w-fit text-gray-800 scroll-m-20  text-[2.5rem] font-extrabold tracking-tight text-balance capitalize leading-tight"
        >
            {text}
        </motion.div>
    );
}

export default Heading;
