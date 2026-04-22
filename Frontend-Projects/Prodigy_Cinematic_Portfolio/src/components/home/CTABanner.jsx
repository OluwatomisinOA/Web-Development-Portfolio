import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTABanner() {
    return (
        <section className="w-full px-6 md:px-12 lg:px-20 py-24 bg-[#C9A84C]">
            <motion.p 
                className="text-[#080808] font-mono text-sm uppercase"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.8, delay: 0.2}}
            >
                ✦ Let's work together to tell your story
            </motion.p>
            <motion.h1 
                className="font-display text-4xl md:text-5xl text-[#080808] mt-4 mb-4"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.8, delay: 0.2}}
            >
                Ready to Create Something Extraordinary?
            </motion.h1>
            <div className="flex gap-8 mt-8">
                <Link to="/contact">
                    <motion.button
                        className="bg-[#080808] text-[#F5F0EA] px-4 py-3 hover:bg-[#1a1a1a] hover:translate-y-2 hover:border-2 hover:border-[#080808] transition-all duration-500 active:scale-110"
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        Book a Session
                    </motion.button>
                </Link>
                <Link to="/portfolio">
                    <motion.button
                        className="bg-transparent border-2 border-[#080808] text-[#080808] hover:text-[#F5F0EA] px-4 py-3 hover:bg-[#080808] hover:scale-110 transition-all duration-500 active:translate-y-2"
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        View Portfolio
                    </motion.button>
                </Link>
            </div>
        </section>
    )
}