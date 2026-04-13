import { motion } from "framer-motion";

export default function Bio() {
    return (
        <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#080808] grid grid-cols-2 gap-12">
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
                    ✦ The Photographer
                </motion.p>
                <motion.h1 
                    className="font-display text-4xl md:text-5xl text-[#F5F0EA] mt-4 mb-4"
                    whileInView={{opacity: 1, y: 0}}
                    initial={{opacity: 0, y: 30}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    Every Frame Tells A Story
                </motion.h1>
                <motion.p
                    className="text-[#888888] leading-relaxed"
                    whileInView={{opacity: 1, y: 0}}
                    initial={{opacity: 0, y: 30}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    Based in the UK, Prodigy Visuals is a photography and videography studio built on one belief, that every moment deserves to be preserved with intention and artistry.
                </motion.p>
                <motion.p
                    className="text-[#888888] leading-relaxed"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    With over 5 years behind the lens, we've documented weddings, built brand identities, and told deeply personal stories for clients across the globe.
                </motion.p>
                <motion.p
                    className="text-[#F5F0EA] font-display text-xl uppercase italic border-l-2 border-[#C9A84C] pl-4 mt-6"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    I don't take photos. I build visual legacies.
                </motion.p>
            </div>
        </section>
    )
}