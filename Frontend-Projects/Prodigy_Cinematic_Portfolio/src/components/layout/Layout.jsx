import CustomCursor from "../ui/CustomCursor";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Preloader from "../ui/Preloader";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollToTop from "../ui/ScrollToTop";

export default function Layout({children}) {
    return (
        <>
            <Preloader />
            <CustomCursor />
            <div className="fixed inset-0 z-[9998] pointer-events-none opacity-[0.03]" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise.png")'}}></div>
            <ScrollToTop />
            <Link to="/contact">
                <motion.div className="fixed bottom-8 right-8 z-40 bg-[#C9A84C] text-[#111111] text-sm md:text-xl font-mono border-2 border-[#111111] p-4 px-3 rounded-full tracking-widest uppercase" animate={{scale: [1, 1.05, 1]}} transition={{duration: 1.5, repeat: Infinity}}>
                    Book Now
                </motion.div>
            </Link>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}