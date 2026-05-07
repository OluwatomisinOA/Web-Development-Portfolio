import CustomCursor from "../ui/CustomCursor";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Preloader from "../ui/Preloader";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollToTop from "../ui/ScrollToTop";
import { useState, useEffect } from "react";

export default function Layout({children}) {
    const [showTop, setShowTop] = useState(false);
    useEffect(() => {
        const handler = () => setShowTop(window.scrollY > 500);
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, [])
    return (
        <>
            <Preloader />
            <CustomCursor />
            <div className="fixed inset-0 z-[9998] pointer-events-none opacity-[0.03]" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")'}}></div>
            <ScrollToTop />
            <Link to="/contact">
                <motion.div className="fixed bottom-8 right-8 z-40 bg-[#C9A84C] text-[#111111] text-sm md:text-xl font-display font-bold border-2 border-[#111111] p-4 px-3 rounded-full tracking-widest uppercase hover:bg-[#C9A84C]/90" animate={{scale: [1, 1.05, 1]}} transition={{duration: 1.5, repeat: Infinity}}>
                    Book Now
                </motion.div>
            </Link>
            {showTop && (
                <motion.button
                    className="fixed bottom-15 left-8 z-40 bg-[#111111] border border-[#C9A84C] text-[#C9A84C] p-3 rounded-full"
                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                >
                    ↑
                </motion.button>
            )}
            <Navbar />
            {children}
            <Footer />
        </>
    )
}