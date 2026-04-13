import { AnimatePresence } from "framer-motion";
import GalleryCard from "./GalleryCard";

export default function MasonryGrid({projects, onOpen}) {
    return (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            <AnimatePresence>
                {projects.map((project, index) => (
                    <div key={project.id} className="break-inside-avoid mb-4">
                        <GalleryCard project={project} onOpen={onOpen} index={index}/>
                    </div>
                ))}
            </AnimatePresence>
        </div>
    )
}