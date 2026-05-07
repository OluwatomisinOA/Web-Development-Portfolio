import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { cn } from "../../utils/cn";
import { FaBars, FaXmark } from "react-icons/fa6";

const links = [
    {label: 'Portfolio', href: '/portfolio'},
    {label: 'About', href: '/about'},
    {label: 'Services', href: '/services'},
    {label: 'Contact', href: '/contact'}
]

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const handler = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handler);

        return () => window.removeEventListener('scroll', handler);
    },[])
    
    return (
        <nav className={cn(
            'fixed top-0 left-0 right-0 z-50 flex justify-between items-center transition-all duration-500 px-6 md:px-12 lg:px-20', scrolled ? 'bg-[#080808]/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-7'
        )}>
            <Link to="/" className="font-display text-xl text-[#F5F0EA] tracking-widest">PRODIGY VISUALS</Link>
            <ul className="hidden md:flex items-center gap-5">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link to={link.href} className={`p-3 font-body text-sm tracking-widest uppercase text-[#888888] hover:text-[#F5F0EA] transition-colors duration-200 ${location.pathname === link.href ? 'text-[#F5F0EA]' : 'text-[#888888] hover:text-[#F5F0EA]'}`}>{link.label}</Link>
                    </li>
                ))}
            </ul>
            <div className="md:hidden">
                {isOpen ? <FaXmark className="text-[#C9A84C]" onClick={() => (setIsOpen(false))}/> :  <FaBars className="text-[#C9A84C]" onClick={() => (setIsOpen(true))}/>}
            </div>
            {
                isOpen && 
                <div className="fixed top-16 right-6 z-50 p-3 flex flex-col items-end justify-center gap-8 md:hidden">
                    {links.map((link) => (
                        <Link to={link.href} key={link.href} className="font-display text-xl text-[#F5F0EA] hover:text-[#C9A84C] transition-colors duration-200" onClick={() => (setIsOpen(false))}>{link.label}</Link>
                    ))}
                </div>
            }
        </nav>
    )
}