import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="bg-[#080808] fixed inset-0 z-80 w-screen h-screen flex flex-col items-center justify-center gap-4">
            <h1 className="font-display text-[#C9A84C] text-7xl">404</h1>
            <h2 className="font-display text-[#F5F0EA]">Page Not Found</h2>
            <p>Looks like this frame doesn't exist</p>
            <Link to="/" className="text-[#888888]border border-[#C9A84C] text-[#C9A84C] px-8 py-3 font-mono text-sm tracking-widest uppercase hover:bg-[#C9A84C] hover:text-[#080808] transition-all duration-300 mt-4">Back to Home</Link>
        </section>
    )
}