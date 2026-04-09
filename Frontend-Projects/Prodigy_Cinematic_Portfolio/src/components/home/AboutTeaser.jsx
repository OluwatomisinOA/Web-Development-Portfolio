import { motion } from "framer-motion";

export default function AboutTeaser() {
    return (
        <section className="bg-[#080808] px-6 md:px-12 lg:px-20 py-24 grid grid-cols-2 gap-12">
            <div>
                <img 
                    src="https://placehold.co/600x700/111111/888888" 
                    className="w-full h-full object-cover"
                />
            </div>
            <div>
                <motion.p 
                    className="text-[#C9A84C] font-mono text-sm uppercase"
                    whileInView={{opacity: 1, y: 0}}
                    initial={{opacity: 0, y: 30}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    ✦ ABOUT
                </motion.p>
                <motion.h1 
                    className="font-display text-4xl md:text-5xl text-[#F5F0EA] mt-4 mb-4"
                    whileInView={{opacity: 1, y: 0}}
                    initial={{opacity: 0, y: 30}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    A Eye For The Extraordinary
                </motion.h1>
                <motion.p
                    className="text-[#888888] leading-relaxed"
                    whileInView={{opacity: 1, y: 0}}
                    initial={{opacity: 0, y: 30}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    With over 5 years of experience capturing life's most precious moments, Prodigy Visuals brings a cinematic eye to every frame. Based in UK, I work with couples, brands, and artist who demand excellence.
                </motion.p>
                <motion.button
                    whileInView={{opacity: 1}}
                    initial={{opacity: 0}}
                    transition={{duration: 0.8, delay: 0.2}}
                    className="self-start border border-[#C9A84C] mt-4 px-8 py-3 font-body text-xl tracking-wide text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#080808] transition-all duration-300"
                >
                    Learn More
                </motion.button>
            </div>
        </section>
    )
}