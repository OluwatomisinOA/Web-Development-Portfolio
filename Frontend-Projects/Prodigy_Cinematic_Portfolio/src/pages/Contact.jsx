import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { useRef  } from "react";

export default function Contact() {
    
    const [formData,  setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    })

    const formRef = useRef();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            alert('Message sent successfully!')
            setFormData({name: '', email: '', service: '', message: ''})
        })
        .catch(() => {
            alert('Something went wrong. Please try again.')
        })
    }
    
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.4}}
        > 
            <>
                <Helmet>
                    <title>Book a Session | Prodigy Visuals</title>
                    <meta name="description" content="Get in touch with Prodigy Visuals to book your photography or videography session. Based in West Yorkshire, UK." />
                    <meta name="keywords" content="book photographer West Yorkshire, hire videographer UK, photography booking, contact Prodigy Visuals, West Yorkshire photography studio" />
                    <meta property="og:title" content="Book a Session | Prodigy Visuals" />
                    <meta property="og:description" content="Get in touch to book your photography or videography session with Prodigy Visuals, West Yorkshire UK" />
                    <meta property="og:image" content="/og-image.jpg" />
                    <meta property="og:type" content="website" />
                    <meta name="geo.region" content="GB-West Yorkshire" />
                    <meta name="geo.placename" content="West Yorkshire, UK" />
                </Helmet>  
                <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#080808] grid grid-cols-1 md:grid-cols-2 gap-12">
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
                            <a href="mailto:obaopeyemionaopepo@gmail.com"><p>obaopeyemeionaopepo@gmail.com</p></a>
                            <a href="tel:+447586789569"><p>+44 7586 789 569</p></a>
                            <p>West Yorkshire, UK</p>
                        </div>
                        <div className="border-t border-white/30 my-6"></div>
                        <ul className="flex justify-around items-center gap-6">
                            <li className="relative group flex flex-col items-center">
                                <a 
                                    href="https://www.instagram.com/prodigyvisuals.studios?igsh=ZDNyeXNubHRweDNz" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="text-[#888888] hover:text-[#F5F0EA] transition-colors duration-200"
                                >
                                    <FaInstagram size={20}/>
                                </a>
                                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#111111] border border-white/10 text-[#C9A84C] font-mono text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    @prodigyvisuals.studios
                                </span>
                            </li>
                            <li className="relative group flex flex-col items-center">
                                <a 
                                    href="https://www.instagram.com/prodigyvisuals.weddings?igsh=MXYybnhsOG9yY2Fn" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="text-[#888888] hover:text-[#F5F0EA] transition-colors duration-200"
                                >
                                    <FaInstagram size={20}/>
                                </a>
                                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#111111] border border-white/10 text-[#C9A84C] font-mono text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    @prodigyvisuals.weddings
                                </span>
                            </li>
                            <li className="relative group flex flex-col items-center">
                                <a 
                                    href="https://www.instagram.com/prodigyvisuals?igsh=cGlvaXptaWNmemx0" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="text-[#888888] hover:text-[#F5F0EA] transition-colors duration-200"
                                >
                                    <FaInstagram size={20}/>
                                </a>
                                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#111111] border border-white/10 text-[#C9A84C] font-mono text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    @prodigyvisuals
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-6">
                                <label htmlFor="name" 
                                    className="flex flex-col gap-2 text-[#888888] font-mono text-xs uppercase tracking-widest"
                                >
                                    Name:
                                    <input id="name" type="text" name="name" value={formData.name} onChange={handleChange}
                                        className="w-full bg-[#111111] border border-white/10 text-[#F5F0EA] px-4 py-3 font-body text-sm focus:outline-none focus:border-[#C9A84C] transition-colors duration-300"
                                        required
                                    />
                                </label>
                                <label htmlFor="email"
                                    className="flex flex-col gap-2 text-[#888888] font-mono text-xs uppercase tracking-widest"
                                >
                                    Email:
                                    <input id="email" type="text" name="email" value={formData.email} onChange={handleChange}
                                        className="w-full bg-[#111111] border border-white/10 text-[#F5F0EA] px-4 py-3 font-body text-sm focus:outline-none focus:border-[#C9A84C] transition-colors duration-300"
                                        required
                                    
                                    />
                                </label>
                                <label htmlFor="phone"
                                    className="flex flex-col gap-2 text-[#888888] font-mono text-xs uppercase tracking-widest"
                                >
                                    Phone Number:
                                    <input 
                                        id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} pattern="[+]?[0-9\s\-]{7,15}" title="Please enter a valid phone number" 
                                        className="w-full bg-[#111111] border border-white/10 text-[#F5F0EA] px-4 py-3 font-body text-sm focus:outline-none focus:border-[#C9A84C] transition-colors duration-300"
                                        required
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
                                        required
                                    />
                                </label>
                            </div>

                            <button className="bg-[#C9A84C] text-[#080808] px-8 py-3 font-mono text-sm tracking-widest uppercase hover:bg-[#b8963d] hover:scale-105 active:scale-90 transition-all duration-300 mt-4">Connect</button>
                        </form>
                    </div>
                </section>
            </>
        </motion.div>
    )
}