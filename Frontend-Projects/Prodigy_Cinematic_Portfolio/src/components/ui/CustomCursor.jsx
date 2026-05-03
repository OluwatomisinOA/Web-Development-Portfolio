import { useState, useEffect } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({x: 0, y: 0});
    useEffect(() => {
        const handler = (e) => {
            setPosition({x: e.clientX, y: e.clientY});
        };

        window.addEventListener('mousemove', handler);

        return () => window.removeEventListener('mousemove', handler);
    }, [])

    return (
        <>
            <div style={{left: position.x, top: position.y, mixBlendMode: 'difference'}} className="fixed pointer-events-none w-2 h-2 rounded-full bg-[#C9A84C] -translate-x-1/2 -translate-y-1/2 z-100" ></div>
            <div style={{left: position.x, top: position.y, mixBlendMode: 'difference'}} className="fixed pointer-events-none w-6 h-6 rounded-full border border-[#C9A84C] opacity-50 -translate-x-1/2 -translate-y-1/2 z-100"></div>
        </>
    )
}