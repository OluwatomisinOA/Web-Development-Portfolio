import GalleryCard from "./GalleryCard";

export default function MasonryGrid({projects}) {
    return (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {projects.map((project) => (
                <div key={project.id} className="break-inside-avoid mb-4">
                    <GalleryCard project={project}/>
                </div>
            ))}
        </div>
    )
}