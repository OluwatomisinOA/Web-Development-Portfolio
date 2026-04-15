import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Contact() {
    
    const [formData,  setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
    })

    const handlechange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    return (
        <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#080808] grid grid-cols-2 gap-12">
            <div>
                <motion.p 
                    className="text-[#C9A84C] font-mono text-sm uppercase tracking-widest"
                    whileInView={{opacity: 1, y: 0}}
                    initial={{opacity: 0, y: 30}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    ✦ Get In Touch
                </motion.p>
                <motion.h1 
                    className="font-display text-4xl md:text-5xl text-[#F5F0EA] mt-4 mb-4"
                    whileInView={{opacity: 1, y: 0}}
                    initial={{opacity: 0, y: 30}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    Let's Create Together
                </motion.h1>
                <div className="text-[#888888] text-sm">
                    <Link to="/contact"><p>opeyemeionaopepo@gmail.com</p></Link>
                    <Link to="/contact"><p>+234 812 810 5432</p></Link>
                    <p>Birmingham, UK</p>
                </div>
            </div>
            <div>
                <form>
                    <label htmlFor="name" className="">
                        Name:
                        <input id="name" type="text" name="name" value={formData.name} onChange={handlechange}/>
                    </label>
                    <label>
                        Eamil:
                        <input id="email" type="text" name="email" value={formData.email} onChange={handlechange}/>
                    </label>
                    <label htmlFor="service">
                        <select id="service" name="service" value={formData.service} onChange={handlechange}>
                            <option>Portrait</option>
                            <option>Wedding</option>
                            <option>Videography</option>
                            <option>Commercial</option>
                        </select>
                    </label>

                    <label htmlFor="message">
                        Message:
                        <textarea id="message" name="message" value={formData.message} onChange={handlechange}/>
                    </label>

                    <button className="px-4 py-4 ">Connnect</button>
                </form>
            </div>
        </section>
    )
}