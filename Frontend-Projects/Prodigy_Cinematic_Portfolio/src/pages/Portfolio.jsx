import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { projects } from "../data/portfolioProjects";
import FilterBar from "../components/portfolio/FilterBar";
import MasonryGrid from "../components/portfolio/MasonryGrid";
import LightBox from "../components/portfolio/LightBox";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa6";
import { href } from "react-router-dom";

export default function Portfolio() {

    const [activeCategory, setActiveCategory] = useState('all');
    const [lightBoxIndex, setLightBoxIndex] = useState(null);

    const filteredProjects = projects.filter(project => (
        activeCategory === 'all' || project.category === activeCategory
    ));

    const handleOpen = (index) => (
        setLightBoxIndex(index)
    )

    const handleClose = () => (
        setLightBoxIndex(null)
    )

    const handleNext = () => (
        setLightBoxIndex(i => Math.min(i + 1, filteredProjects.length - 1))
    )

    const handlePrev = () => {
        if (lightBoxIndex > 0) {
            setLightBoxIndex(i => i - 1)
        }
    }

    const socials = [
        { handle: '@prodigyvisuals.studios', href: 'https://www.instagram.com/prodigyvisuals.studios?igsh=ZDNyeXNubHRweDNz'},
        { handle: '@prodigyvisuals.weddings', href: 'https://www.instagram.com/prodigyvisuals.weddings?igsh=MXYybnhsOG9yY2Fn'},
        { handle: '@prodigyvisuals', href: 'https://www.instagram.com/prodigyvisuals?igsh=cGlvaXptaWNmemx0'}
    ]

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.4}}
        >
            <>
                <Helmet>
                    <title>Our Work | Prodigy Visuals</title>
                    <meta name="description" content="Explore our portfolio of cinmeatic wedding, portrait, and commercial photography and videography projects." />
                    <meta name="keywords" content="photography portfolio, videography portfolio, West Yorkshire photography, wedding photos, portrait photos, commercial shoot, Prodigy Visuals work" />
                    <meta property="og:title" content="Our Work | Prodigy Visuals" />
                    <meta property="og:description" content="Explore our portfolio of cinmeatic wedding, portrait, and commercial photography projects." />
                    <meta property="og:image" content="/og-image.jpg" />
                    <meta property="og:type" content="website" />
                    <meta name="geo.region" content="GB-West Yorkshire" />
                    <meta name="geo.placename" content="West Yorkshire, UK" />
                </Helmet>
                <section className="bg-[#111111] px-6 md:px-12 lg:px-20 pt-28 pb-6">
                    <motion.p 
                        className="text-[#C9A84C] font-mono text-sm uppercase"
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        ✦ Our Work
                    </motion.p>
                    <motion.h1 
                        className="font-display text-4xl md:text-5xl text-[#F5F0EA] mt-4 mb-10"
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        The Portfolio
                    </motion.h1>
                    <motion.p
                        className="text-[#888888] font-display text-xl uppercase italic border-l-2 border-[#C9A84C] pl-4 mt-6"
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        Every frame tells a story. Explore our visual universe.
                    </motion.p>
                    <FilterBar 
                        activeCategory={activeCategory}
                        onCategoryChange={setActiveCategory}
                    />
                    <MasonryGrid 
                        projects={filteredProjects}
                        onOpen={handleOpen}
                    />
                    {
                        lightBoxIndex !== null && 
                        <LightBox 
                            project={filteredProjects[lightBoxIndex]}
                            onClose={handleClose}
                            onNext={handleNext}
                            onPrev={handlePrev}
                        />
                    }
                </section>
                <section className="px-6 md:px-12 lg:px-20 py-16 bg-[#080808] flex flex-col items-center gap-4 border-t border-white/10 ">
                    <p className="font-mono text-xs text-[#888888] uppercase tracking-widest">
                        Want to see more?
                    </p>
                    <h2 className="font-display text-xl md:text-2xl text-[#F5F0EA]">
                        Check Out More Work On Instagram
                    </h2>
                    <div className="flex flex-col md:flex-row gap-4 mt-2">
                        {socials.map((social) => (
                            <a
                                key={social.handle}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                className="w-82 flex items-center justify-center gap-3 border border-[#C9A84C] text-[#C9A84C] px-8 py-3 font-mono text-sm tracking-widest uppercase hover:bg-[#C9A84C] hover:text-[#080808] transition-all duration-300"
                            >
                                <FaInstagram />
                                {social.handle}
                            </a>
                        ))}
                    </div>
                </section>
            </>
        </motion.div>
    )
}