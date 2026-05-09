import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import pic from "/images/profile_pic.jpg"

export default function AboutTeaser() {
    return (
        <section className="bg-[#080808] px-6 md:px-12 lg:px-20 py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <img 
                    src={pic} 
                    alt="Prodigy Visuals"
                    className="w-[80%] md:w-full md:h-full object-cover"
                    loading="lazy"
                />
            </div>
            <div>
                <motion.p 
                    className="text-[#C9A84C] font-mono text-sm uppercase" 
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    ✦ ABOUT
                </motion.p>
                <motion.h1 
                    className="font-display text-4xl md:text-5xl text-[#F5F0EA] mt-4 mb-4"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    A Eye For The Extraordinary
                </motion.h1>
                <motion.p
                    className="text-[#888888] leading-relaxed"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    With over 5 years of experience capturing life's most precious moments, Prodigy Visuals brings a cinematic eye to every frame. Based in West Yorkshire, UK. I work with couples, brands, and artist who demand excellence.
                </motion.p>
                <Link to="/about">
                    <motion.button
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.8, delay: 0.2}}
                        className="self-start border border-[#C9A84C] mt-4 px-8 py-3 font-body text-sm md:text-xl tracking-wide text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#080808] active:translate-y-2 transition-all duration-300"
                    >
                        Learn More
                    </motion.button>
                </Link>
            </div>
        </section>
    )
}