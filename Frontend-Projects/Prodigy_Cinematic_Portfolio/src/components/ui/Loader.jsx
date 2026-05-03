import { motion } from "framer-motion";
import logo from "../../assets/images/prodigy_logo.png";

export default function Loader() {
    return (
        <section className="fixed inset-0 bg-[#080808] z-50 flex flex-col items-center justify-center">
           <img src={logo} alt="Prodigy Visuals Logo" className="w-80 mb-2"/>
            <motion.div 
                className="w-px h-12 bg-[#C9A84C] origin-top"
                animate={{scaleY: [0, 1, 0]}}
                transition={{duration: 1.5, repeat: Infinity, ease: 'easeInOut'}}
            >
            </motion.div>
        </section>
    )
}