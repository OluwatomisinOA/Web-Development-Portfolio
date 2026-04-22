import { motion } from "framer-motion";


export default function Stats() {
    
    const stats = [
        {
            number: 150,
            label: "Projects Completed",
            suffix: "+",
        },
        {
            number: 5,
            label: "Years of Experience",
            suffix: "+",
        },
        {
            number: 98,
            label: "Client Satisfaction",
            suffix: "%",
        },
        {
            number: 50,
            label: "Happy Clients",
            suffix: "+",
        }
    ]

    return (
        <section className="px-6 md:px-12 lg:px-20 py-18 bg-[#080808]">
            <div className="grid grid-cols-4 gap-10">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8, delay: 0.5 + index * 0.1}}
                        className="flex flex-col"
                    >
                        <div className="text-5xl font-display flex">
                            <p className="text-[#F5F0EA]">{stat.number}</p>
                            <p className="text-[#C9A84C]">{stat.suffix}</p>
                        </div>
                        <p className="text-sm text-[#888888] font-mono uppercase tracking-widest mt-4">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}