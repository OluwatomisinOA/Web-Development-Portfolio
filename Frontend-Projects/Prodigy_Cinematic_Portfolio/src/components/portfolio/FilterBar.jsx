


export default function FilterBar({activeCategory, onCategoryChange}) {
    
    const categories = ['all', 'portrait', 'wedding', 'commercial'];
    
    return (
        <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#080808]">
            <div className="flex gap-8 border-b border-[#F5F0EA]/10 pb-4">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => onCategoryChange(category)}
                        className={`font-mono text-sm uppercase tracking-widest px-4 py-2 transition-all duration-300 ${activeCategory === category ? 'text-[#C9A84C] border-b border-[#C9A84C]' : 'text-[#888888] hover:text-[#F5F0EA]'} `}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </section>
    )
}