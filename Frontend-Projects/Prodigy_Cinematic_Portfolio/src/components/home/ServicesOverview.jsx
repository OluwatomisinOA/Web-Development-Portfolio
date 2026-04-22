import { motion } from "framer-motion";

export default function ServicesOverview() {
    
    const services = [
        {
            id: 1,
            icon: "📷",
            title: "Portrait Photography",
            description: "Intimate, editorial portraits that capture personality and emotion in every frame.",
        },
        {
            id: 2,
            icon: "💍",
            title: "Wedding Coverage",
            description: "Cinematic wedding documentation that tells your love story beautifully and authentically.",
        },
        {
            id: 3,
            icon: "🎬",
            title: "Videography",
            description: "High-end video production for brands, events, and personal projects that demand excellence.",
        },
        {
            id: 4,
            icon: "🏢",
            title: "Commercial Shoots",
            description: "Clean, compelling commercial photography for brands, products, and marketing campaigns.",
        }
    ]

    return (
        <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#080808]">
            <motion.p 
                className="text-[#C9A84C] font-mono text-sm uppercase"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.8, delay: 0.2}}
            >
                ✦ Services
            </motion.p>
            <motion.h1 
                className="font-display text-4xl md:text-5xl text-[#F5F0EA] mt-4 mb-4"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.8, delay: 0.2}}
            >
                What We Offer
            </motion.h1>
            <div className="grid grid-cols-2 gap-6">
                {services.map((service, index) => (
                    <motion.div 
                        className="flex flex-col gap-4 bg-[#111111] p-8 border border-white/5 hover:border-[#C9A84C]/30 transition-all duration-300"
                        key={service.id}
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8, delay: 0.3 + index * 0.1}}
                    >
                        <div>{service.icon}</div>
                        <h1 className="text-xl text-[#C9A84C] font-display">{service.title}</h1>
                        <p className="text-sm text-[#888888] font-body leading-relaxed">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}