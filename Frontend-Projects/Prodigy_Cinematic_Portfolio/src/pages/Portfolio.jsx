import { useState } from "react";
import { projects } from "../data/projects";
import FilterBar from "../components/portfolio/FilterBar";
import MasonryGrid from "../components/portfolio/MasonryGrid";

export default function Portfolio() {

    const [activeCategory, setActiveCategory] = useState('all');
    const filteredProjects = projects.filter(project => (
        activeCategory === 'all' || project.category === activeCategory
    ));

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