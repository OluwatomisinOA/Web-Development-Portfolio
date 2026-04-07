import { Link } from "react-router-dom"

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
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#888888] hover:text-[#F5F0EA] transition-colors duration-200">Instagram</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-[#888888] hover:text-[#F5F0EA] transition-colors duration-200">Twitter</a></li>
                <li><a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-[#888888] hover:text-[#F5F0EA] transition-colors duration-200">Youtube</a></li>
            </ul>
            <p className="text-sm text-[#888888]">© {year} Prodigy Visuals. All rights reserved.</p>
        </footer>
    )
}