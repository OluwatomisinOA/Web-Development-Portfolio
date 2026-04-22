import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {

    const words = ['CAPTURING', 'MOMENTS', 'THAT', 'OUTLIVE', 'TIME']
    return (
        <section className="h-screen relative overflow-hidden w-full bg-[#111111]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent"></div>
            <div className="z-10 absolute pl-3 pb-5 bottom-20 left-10 flex flex-col gap-6">
                <motion.p 
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}} 
                    transition={{duration: 0.8, delay: 0.3}}
                    className="text-[#C9A84C] uppercase text-sm tracking-wide"
                >
                    ✦ Visual Storyteller
                </motion.p>
                <motion.h1 className="font-display text-6xl text-[#F5F0EA] leading-tight">
                    {words.map((word, index) => (
                        <motion.span
                            key={index}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.5 + index * 0.1}}
                            className="inline-block mr-4"
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>
                <Link to="/portfolio">
                    <motion.button 
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.8, delay: 1.2}}
                        className="self-start border border-[#C9A84C] px-8 py-3 font-body text-xl tracking-wide text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#080808] hover:scale:105 active:translate-y-2 transition-all duration-300"
                    >
                        View Portfolio
                    </motion.button>
                </Link>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <p className="font-mono text-sm text-[#888888]">SCROLL</p>
                <motion.div 
                    className="w-px h-12 bg-[#C9A84C] origin-top"
                    animate={{scaleY: [0, 1, 0]}}
                    transition={{duration: 1.5, repeat: Infinity, ease: 'easeInOut'}}
                >
                </motion.div>
            </div>
        </section>
    )
}