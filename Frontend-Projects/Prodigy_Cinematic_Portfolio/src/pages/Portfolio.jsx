import { useState } from "react";
import { projects } from "../data/projects";
import FilterBar from "../components/portfolio/FilterBar";
import MasonryGrid from "../components/portfolio/MasonryGrid";

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
        setLightBoxIndex((lightBoxIndex) => lightBoxIndex + 1)
    )

    const handlePrev = () => (
        if (lightBoxIndex > 0) {
            setLightBoxIndex((lightBoxIndex) => lightBoxIndex - 1)
        } else {
            setLightBoxIndex(null)
        }
    )

    return (
        <>
            <FilterBar 
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
            />
            <MasonryGrid 
                projects={filteredProjects}
            />
        </>
    )
}