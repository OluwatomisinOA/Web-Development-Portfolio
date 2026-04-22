import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export default function Services() {

    const services = [
        {
            id: 1,
            icon: "",
            title: "Portrait Photography",
            description: "Intimate, editorial portraits that capture your true personality. Perfect for personal branding, artists, and professionals",
            features: ["2 hour session", "50+ edited photos", "Online gallery delivery", "Print-ready files"]
        },
        {
            id: 2,
            icon: "💍",
            title: "Wedding Coverage",
            description: "Cinematic wedding documentation that tells your love story beautifully. We capture every emotion, detail, and moment with intention.",
            features: ["Full day coverage", "1 photographers", "500+ edited photos", "Highlight video reel"]
        },
        {
            id: 3,
            icon: "🎬",
            title: "Videography",
            description: "High-end video production for brands, events, and personal projects. Every frame is crafted withcinematic precision and purpose.",
            features: ["4K resolution", "Professional audio", "Color grading", "2 minute highlight film"]
        },
        {
            id: 4,
            icon: "🏢",
            title: "Commercial Shoots",
            description: "Clean, compelling commercial phototgraphy for brands and products. We help businesses communicate their value visually.",
            features: ["Product photography", "Brand identity shots", "Same day previews", "Commmercial license"]
        }
    ]

    const steps = [
        {
            number: "01",
            title: "Initial Consultation",
            description: "We discuss your vision, goals, and requirements in detail."
        },
        {
            number: "02",
            title: "Planning & Preparation",
            description: "We scout locations, plan shots, and prepare all equipment."
        },
        {
            number: "03",
            title: "The Shoot",
            description: "We execute with precision, creativity, and professionalism."
        },
        {
            number: "04",
            title: "Delivery",
            description: "Edited files delivered to your online gallery within 7 days."
        }
    ]

    return (
        <>
            <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#080808]">
                <motion.p 
                    className="text-[#C9A84C] font-mono text-sm uppercase"
                    whileInView={{opacity: 1, y: 0}}
                    initial={{opacity: 0, y: 30}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    ✦ What We Offer
                </motion.p>
                <motion.h1 
                    className="font-display text-4xl md:text-5xl text-[#F5F0EA] mt-4 mb-10"
                    whileInView={{opacity: 1, y: 0}}
                    initial={{opacity: 0, y: 30}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    Our Services
                </motion.h1>
                <motion.div className="grid grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div 
                            className="flex flex-col gap-4 bg-[#111111] p-8 border border-white/5 hover:border-[#C9A84C]/30 transition-all duration-300"
                            key={service.id}
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.3 + index * 0.1}}
                        >
                            <div>{service.icon}</div>
                            <h1 className="text-xl text-[#F5F0EA] font-display">{service.title}</h1>
                            <p className="text-sm text-[#888888] font-body leading-relaxed">{service.description}</p>
                            <ul className="flex flex-col gap-2">
                                {service.features.map((feature, index) => (
                                    <motion.li 
                                        key={index}
                                        className="text-lg text-[#888888] font-mono"
                                        initial={{opacity: 0, y: 20}}
                                        whileInView={{opacity: 1, y: 0}}
                                        transition={{duration: 0.8, delay: 0.3}}
                                    >
                                        <span className="text-[#C9A84C] mr-3"> ✓</span>{feature}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div className="mt-24 mb-12">
                    <motion.p 
                        className="text-[#C9A84C] font-mono text-sm uppercase"
                        whileInView={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: 30}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        ✦ How We Work
                    </motion.p>
                    <motion.h1 
                        className="font-display text-4xl md:text-5xl text-[#F5F0EA] mt-4 mb-10"
                        whileInView={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: 30}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        Our Process
                    </motion.h1>
                </motion.div>
                <motion.div className="grid grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col gap-4 p-8 border-t border-[#C9A84C]/30 pt-6 transition-all duration-300"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.3}}
                        >
                            <h1 className="text-5xl font-display text-[#C9A84C]">{step.number}</h1>
                            <h2 className="text-xl text-[#F5F0EA] font-display">{step.title}</h2>
                            <p className="text-sm text-[#888888] font-body leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
            <section className="w-full px-6 md:px-12 lg:px-20 py-24 bg-[#C9A84C]">
                <motion.p 
                    className="text-[#080808] font-mono text-sm uppercase tracking-widest"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    ✦ Contact us today for a custom quote tailored to your needs
                </motion.p>
                <motion.h1 
                    className="font-display text-4xl md:text-5xl text-[#080808] mt-4 mb-4"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once:  true}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    Ready to Book Your Session?
                </motion.h1>
                <Link to="/contact">
                    <motion.button
                        className="bg-[#080808] text-[#F5F0EA] px-4 py-3 hover:bg-[#1a1a1a] hover:translate-y-2 hover:border-2 hover:border-[#080808] transition-all duration-500 active:scale-110"
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        Get In Touch
                    </motion.button>
                </Link>
            </section>
        </>
    )
}