import { Helmet } from "react-helmet-async";
import Bio from "../components/about/Bio";
import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.4}}
        >
            <>
                <Helmet>
                    <title>Our Story | Prodigy Visuals</title>
                    <meta name="description" content="The story behind the lens." />
                    <meta name="keywords" content="West Yorkshire photographer, UK videographer professional photographer, Prodigy Visuals, photography studio West Yorkshire" />
                    <meta property="og:title" content="Our Story | Prodigy Visuals" />
                    <meta property="og:description" content="Meet the person behind the lens. A luxury photography studio based in West Yorkshire, UK." />
                    <meta property="og:image" content="/og-image.jpg" />
                    <meta property="og:type" content="website" />
                    <meta name="geo.region" content="GB-West Yorkshire" />
                    <meta name="geo.placename" content="West Yorkshire, UK" />
                </Helmet>  
                <section className="bg-[#111111] px-6 md:px-12 lg:px-20 pt-28 pb-6">
                    <motion.p 
                        className="text-[#C9A84C] font-mono text-sm uppercase"
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        ✦ Our Story
                    </motion.p>
                    <motion.h1 
                        className="font-display text-4xl md:text-5xl text-[#F5F0EA] mt-4 mb-10"
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        The Person Behind The Lens
                    </motion.h1>
                    <motion.p
                        className="text-[#888888] font-display text-xl uppercase italic border-l-2 border-[#C9A84C] pl-4 mt-6"
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        Passion, precision, and a cinematic eye for every moment.
                    </motion.p>
                </section>  
                <Bio />
            </>
        </motion.div>
    )
}