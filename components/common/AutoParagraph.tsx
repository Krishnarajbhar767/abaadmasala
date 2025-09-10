import { motion } from "framer-motion";

type AutoParagraphProps = {
    items: string[];
};

const AutoParagraph = ({ items }: AutoParagraphProps) => {
    return (
        <div className="w-full max-w-4xl mx-auto">
            {items.map((line, i) => (
                <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.3 }}
                    viewport={{ once: true, amount: 0.5 }} // triggers when 30% visible
                    className="text-base sm:text-md md:text-lg leading-snug tracking-tighter text-gray-800 mb-4"
                >
                    {line}
                </motion.p>
            ))}
        </div>
    );
};

export default AutoParagraph;
