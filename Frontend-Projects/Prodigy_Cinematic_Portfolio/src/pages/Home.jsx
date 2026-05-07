import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Hero from "../components/home/Hero";
import SignatureWork from "../components/home/SignatureWork";
import AboutTeaser from "../components/home/AboutTeaser";
import ServicesOverview from "../components/home/ServicesOverview";
import Stats from "../components/home/Stats";
import CTABanner from "../components/home/CTABanner";

export default function Home() {
    return (
       <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.4}}
       >
            <>
                <Helmet>
                    <title>Prodigy Visuals — Photography & Videography | West Yorkshire, UK</title>
                    <meta name="description" content="Cinematic photography and videography for weddings, brands and portraits. Based in West Yorkshire, Uk. Prodigy or Nothing." />
                    <meta name="keywords" content="photography, videography, West Yorkshire photography, Leeds photographer, UK photographer, wedding photography, portrait photography, commercial photography, Prodigy Visuals" />
                    <meta property="og:title" content="Prodigy Visuals - Luxury Photography & Videography | West Yorkshire, UK" />
                    <meta property="og:description" content="Cinematic photography and videography for weddings, brands, and portraits. Based in West Yorkshire, UK." />
                    <meta property="og:image" content="/og-image.jpg" />
                    <meta property="og:type" content="website" />
                    <meta name="geo.region" content="GB-West Yorkshire" />
                    <meta name="geo.placename" content="West Yorkshire, UK" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Prodigy Visuals — Luxury Photography" />
                    <meta name="twitter:description" content="Cinematic photography and videography. West Yorkshire, UK." />
                </Helmet>  
                <Hero />
                <SignatureWork />
                <AboutTeaser />
                <ServicesOverview />
                <Stats />
                <CTABanner />
            </>
       </motion.div>
    )
}