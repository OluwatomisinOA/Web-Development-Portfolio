import { motion } from "framer-motion";

export default function GalleryCard({project, onOpen, index}) {
    
    return (
        <motion.div 
            className="relative overflow-hidden group cursor-pointer"
            onClick={() => onOpen(index)}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 20}}
            transition={{duration: 0.8, delay: 0.3}}
        >
            <img src={project.image} className="w-full h-80 object-cover" loading="lazy"/>
            <div className="opacity-0 group-hover:opacity-100 absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-[#080808]/90 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 flex flex-col gap-1">
                <p className="text-[#C9A84C] font-mono text-sm translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">{project.category}</p>
                <h2 className="font-display text-2xl text-[#F5F0EA] translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">{project.title}</h2>
            </div>
        </motion.div>
    )
}