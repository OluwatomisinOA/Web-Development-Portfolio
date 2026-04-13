import { useEffect } from "react";

export default function LightBox({project, onClose, onNext, onPrev}) {

    useEffect(() => {
        const handler = (e) => {
            if (e.key === 'Escape') {
                onClose();
            } 
            if (e.key === 'ArrowRight') {
                onNext();
            }
            if (e.key === 'ArrowLeft') {
                onPrev();
            }
        };

        window.addEventListener('keydown', handler);

        return () => window.removeEventListener('keydown', handler);
    }, [onClose, onNext, onPrev])

    return (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
            <img className="max-h-[80vh] max-w-[80vw] object-contain" src={project.image} />
            <button 
                className="absolute top-6 right-6 text-lg text-[#C9A84C]"
                onClick={onClose}
            >
                ✕
            </button>
            <button 
                className="absolute left-6 top-1/2 -translate-y-1/2 text-lg text-[#C9A84C]"
                onClick={onPrev}
            >
                ←
            </button>
            <button 
                className="absolute right-6 top-1/2 -translate-y-1/2 text-lg text-[#C9A84C]"
                onClick={onNext}
            >
                →
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center flex flex-col gap-1 group">
                <p className="text-[#C9A84C] font-mono text-sm uppercase">{project.category}</p>
                <h1 className="font-display text-2xl text-[#F5F0EA]">{project.title}</h1>
            </div>
        </div> 
    )
}