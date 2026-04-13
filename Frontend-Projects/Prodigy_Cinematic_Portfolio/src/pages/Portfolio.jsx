import { useState } from "react";
import { projects } from "../data/projects";
import FilterBar from "../components/portfolio/FilterBar";
import MasonryGrid from "../components/portfolio/MasonryGrid";
import LightBox from "../components/portfolio/LightBox";
import { AnimatePresence } from "framer-motion";

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

    return (
        <>
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
        </>
    )
}