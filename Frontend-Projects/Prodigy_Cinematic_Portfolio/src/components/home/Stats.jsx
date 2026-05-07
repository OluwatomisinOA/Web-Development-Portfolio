import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useEffect } from "react";

function StatItem({ number, suffix, label}) {
    const [count, setCount] = useState(0);
    const {ref, inView} = useInView({once: true})
    useEffect(() => {
            if (inView) {
                let start = 0;
                const increment = Math.ceil(number / 50);
                const timer = setInterval(() => {
                    start += increment;
                    if (start >= number) {
                        setCount(number);
                        clearInterval(timer);
                    } else {
                        setCount(start);
                    }
                }, 100);
                return () => clearInterval(timer);
            }
        },[inView])

    return (
        <div ref={ref} className="flex flex-col">
            <div className="text-5xl font-display flex">
                <p className="text-[#F5F0EA]">{count}</p>
                <p className="text-[#C9A84C]">{suffix}</p>
            </div>
            <p className="text-sm text-[#888888] font-mono uppercase tracking-widest mt-4">{label}</p>
        </div>
    )
}

export default function Stats() {
    
    const stats = [
        {
            number: 150,
            label: "Projects Completed",
            suffix: "+",
        },
        {
            number: 5,
            label: "Years of Experience",
            suffix: "+",
        },
        {
            number: 98,
            label: "Client Satisfaction",
            suffix: "%",
        },
        {
            number: 50,
            label: "Happy Clients",
            suffix: "+",
        }
    ]

    return (
        <section className="px-6 md:px-12 lg:px-20 py-18 bg-[#080808]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                {stats.map((stat) => (
                    <StatItem 
                        key={stat.label}
                        number={stat.number}
                        suffix={stat.suffix}
                        label={stat.label}
                    />
                ))}
            </div>
        </section>
    )
}