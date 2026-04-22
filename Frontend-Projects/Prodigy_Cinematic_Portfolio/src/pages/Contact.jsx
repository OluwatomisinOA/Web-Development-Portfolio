import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    
    const [formData,  setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    return (
        <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#080808] grid grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
                <motion.p 
                    className="text-[#C9A84C] font-mono text-sm uppercase tracking-widest"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    ✦ Get In Touch
                </motion.p>
                <motion.h1 
                    className="font-display text-4xl md:text-5xl text-[#F5F0EA] mt-4 mb-4"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    Let's Create Together
                </motion.h1>
                <div className="text-[#888888] text-sm">
                    <a href="mailto:opeyemionaopepo@gmail.com"><p>opeyemeionaopepo@gmail.com</p></a>
                    <a href="tel:+2348128105432"><p>+234 812 810 5432</p></a>
                    <p>Birmingham, UK</p>
                </div>
                <div className="border-t border-white/30 my-6"></div>
                <ul className="flex justify-around items-center gap-6">
                    <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#888888] hover:text-[#F5F0EA] transition-colors duration-200">Instagram</a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-[#888888] hover:text-[#F5F0EA] transition-colors duration-200">Twitter</a></li>
                    <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-[#888888] hover:text-[#F5F0EA] transition-colors duration-200">Youtube</a></li>
                </ul>
            </div>
            <div>
                <form>
                    <div className="flex flex-col gap-6">
                        <label htmlFor="name" 
                            className="flex flex-col gap-2 text-[#888888] font-mono text-xs uppercase tracking-widest"
                        >
                            Name:
                            <input id="name" type="text" name="name" value={formData.name} onChange={handleChange}
                                className="w-full bg-[#111111] border border-white/10 text-[#F5F0EA] px-4 py-3 font-body text-sm focus:outline-none focus:border-[#C9A84C] transition-colors duration-300"
                            />
                        </label>
                        <label htmlFor="email"
                            className="flex flex-col gap-2 text-[#888888] font-mono text-xs uppercase tracking-widest"
                        >
                            Email:
                            <input id="email" type="text" name="email" value={formData.email} onChange={handleChange}
                                className="w-full bg-[#111111] border border-white/10 text-[#F5F0EA] px-4 py-3 font-body text-sm focus:outline-none focus:border-[#C9A84C] transition-colors duration-300"
                            />
                        </label>
                        <label htmlFor="service"
                            className="flex flex-col gap-2 text-[#888888] font-mono text-xs uppercase tracking-widest"
                        >
                            Service
                            <select id="service" name="service" value={formData.service} onChange={handleChange}
                                className="w-full bg-[#111111] border border-white/10 text-[#F5F0EA] px-4 py-3 font-body text-sm focus:outline-none focus:border-[#C9A84C] transition-colors duration-300 appearance-none cursor-pointer"
                            >
                                <option value='portrait' className="bg-[#111111] text-[#F5F0EA]">Portrait</option>
                                <option value='wedding' className="bg-[#111111] text-[#F5F0EA]">Wedding</option>
                                <option value='videography' className="bg-[#111111] text-[#F5F0EA]">Videography</option>
                                <option value='commercial' className="bg-[#111111] text-[#F5F0EA]">Commercial</option>
                            </select>
                        </label>

                        <label htmlFor="message"
                            className="flex flex-col gap-2 text-[#888888] font-mono text-xs uppercase tracking-widest"
                        >
                            Message:
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange}
                                className="w-full bg-[#111111] border border-white/10 text-[#F5F0EA] px-4 py-3 font-body text-sm focus:outline-none focus:border-[#C9A84C] transition-colors duration-300 resize-none h-32"
                            />
                        </label>
                    </div>

                    <button className="bg-[#C9A84C] text-[#080808] px-8 py-3 font-mono text-sm tracking-widest uppercase hover:bg-[#b8963d] hover:scale-105 active:scale-90 transition-all duration-300 mt-4">Connect</button>
                </form>
            </div>
        </section>
    )
}