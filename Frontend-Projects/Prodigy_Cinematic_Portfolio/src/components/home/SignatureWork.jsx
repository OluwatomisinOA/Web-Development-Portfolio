import { projects } from "../../data/projects";
import { motion } from "framer-motion";

export default function SignatureWork() {
    return (
        <section className="bg-[#080808] px-6 md:px-12 lg:px-20 py-24">
            <motion.div
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: 30}}
                transition={{duration: 0.8, delay: 0.3}}
            >
                <p className="text-[#C9A84C] font-mono text-sm uppercase">✦ SELECTED WORK</p>
                <h1 className="font-display text-4xl md:text-5xl text-[#F5F0EA] mt-4 mb-12">Signature Projects</h1>
            </motion.div>
            <div className="grid grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <motion.div key={project.id} className={`relative overflow-hidden group cursor-pointer ${index === 0 || index === 3 ? 'col-span-2' : 'col-span-1'}`}
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.3 + index * 0.1}}
                    >
                        <img src={project.image} className="w-full h-80 object-cover"/>
                        <div className="opacity-0 group-hover:opacity-100 absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-[#080808]/90 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 flex flex-col gap-1">
                            <p className="text-[#C9A84C] font-mono text-sm translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                {project.category}
                            </p>
                            <h2 className="font-display text-2xl text-[#F5F0EA] translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                {project.title}
                            </h2>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}