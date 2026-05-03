import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Preloader() {

    const [showPreloader, setShowPreloader] = useState(!sessionStorage.getItem('visited'));
    useEffect(() => {
        const timer = setTimeout(() => {
            sessionStorage.setItem('visited', 'true');
            setShowPreloader(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, [])

    return (
        <AnimatePresence>
            {
                showPreloader && (
                    <motion.div
                        className="fixed inset-0 z-[99999] bg-[#080808] flex flex-col items-center justify-center gap-6"
                        exit={{opacity: 0}}
                        transition={{duration: 0.8}}
                    >
                        <motion.img 
                            src="/favicon.png"
                            alt="Prodigy Visuals Logo"
                            className="w-40"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8}}
                        />
                        <motion.div 
                            className="w-px h-12 bg-[#C9A84C] origin-top"
                            animate={{scaleY: [0, 1, 0]}}
                            transition={{duration: 1.5, repeat: Infinity, ease: 'easeInOut'}}
                        />
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}