import { motion } from "framer-motion";


export default function ClientLogos() {

    const clients = ['Nike', 'Vogue', 'Sony Music', 'BBC', 'Gucci', 'MTV Africa'];

    return (
        <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#080808]">
            <motion.p 
                    className="text-[#C9A84C] font-mono text-sm uppercase"
                    whileInView={{opacity: 1, y: 0}}
                    initial={{opacity: 0, y: 30}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    ✦ The Trusted By
                </motion.p>
                <motion.h1 
                    className="font-display text-4xl md:text-5xl text-[#F5F0EA] mt-4 mb-4"
                    whileInView={{opacity: 1, y: 0}}
                    initial={{opacity: 0, y: 30}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    CLients & Collaborations
                </motion.h1>
                <motion.div
                    className="flex flex-wrap gap-4"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    {clients.map((client, index) => (
                        <motion.div 
                            key={index}
                            className="border border-white/10 px-6 py-3 hover:border-[#C9A84C]/50 transition-all duration-300"
                        >
                            {client}
                        </motion.div>
                    ))}
                </motion.div>
        </section>
    )
}