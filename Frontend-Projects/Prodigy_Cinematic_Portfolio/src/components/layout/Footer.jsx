import { Link } from "react-router-dom";
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const links = [
    {label: 'Portfolio', href: '/portfolio'},
    {label: 'About', href: '/about'},
    {label: 'Services', href: '/services'},
    {label: 'Contact', href: '/contact'}
]

const year = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="bg-[#080808] px-6 md:px-12 lg:px-20 py-12 flex flex-col items-center gap-3 border-t border-white/10">
            <Link to="/" className="font-display text-xl text-[#F5F0EA] tracking-widest">PRODIGY VISUALS</Link>
            <ul className="flex justify-between items-center gap-6">
                {
                    links.map((link) => (
                        <li key={link.href}>
                            <Link to={link.href} className="text-[#888888] hover:text-[#F5F0EA] transition-colors duration-200">{link.label}</Link>
                        </li>
                    ))
                }
            </ul>
            <ul className="flex justify-between items-center gap-6">
                <li className="relative group flex flex-col items-center">
                    <a 
                        href="https://www.instagram.com/prodigyvisuals.studios?igsh=ZDNyeXNubHRweDNz" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-[#888888] hover:text-[#F5F0EA] transition-colors duration-200"
                    >
                        <FaInstagram size={20}/>
                    </a>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#111111] border border-white/10 text-[#C9A84C] font-mono text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        @prodigyvisuals.studios
                    </span>
                </li>
                <li className="relative group flex flex-col items-center">
                    <a 
                        href="https://www.instagram.com/prodigyvisuals.weddings?igsh=MXYybnhsOG9yY2Fn" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-[#888888] hover:text-[#F5F0EA] transition-colors duration-200"
                    >
                        <FaInstagram size={20}/>
                    </a>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#111111] border border-white/10 text-[#C9A84C] font-mono text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        @prodigyvisuals.weddings
                    </span>
                </li>
                <li className="relative group flex flex-col items-center">
                    <a 
                        href="https://www.instagram.com/prodigyvisuals?igsh=cGlvaXptaWNmemx0" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-[#888888] hover:text-[#F5F0EA] transition-colors duration-200"
                    >
                        <FaInstagram size={20}/>
                    </a>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#111111] border border-white/10 text-[#C9A84C] font-mono text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        @prodigyvisuals
                    </span>
                </li>
            </ul>
            <p className="text-sm text-[#888888]">© {year} Prodigy Visuals. All rights reserved.</p>
        </footer>
    )
}