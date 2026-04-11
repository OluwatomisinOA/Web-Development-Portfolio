import Hero from "../components/home/Hero";
import SignatureWork from "../components/home/SignatureWork";
import AboutTeaser from "../components/home/AboutTeaser";
import ServicesOverview from "../components/home/ServicesOverview";
import Stats from "../components/home/Stats";
import CTABanner from "../components/home/CTABanner";

export default function Home() {
    return (
       <>
        <Hero />
        <SignatureWork />
        <AboutTeaser />
        <ServicesOverview />
        <Stats />
        <CTABanner />
       </>
    )
}