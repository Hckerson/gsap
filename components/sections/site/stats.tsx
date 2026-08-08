"use client";
import { useRef } from "react";
import { countTo } from "@/lib/site/gsap";
import { useCounters } from "@/lib/hooks/use-counters";
import { stats } from "@/lib/site/constants";

export default function Stats() {
    const root = useRef<HTMLElement | null>(null);
    useCounters(root);

    return (
        <section
            ref={root}
            className="brutal-invert border-text border-b-2 py-20 lg:py-28"
        >
            <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-x-6 gap-y-12 px-6 lg:grid-cols-4 lg:px-10">
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="border-text border-t-2 pt-5"
                    >
                        <p className="font-display text-[clamp(3rem,7vw,6rem)] leading-none font-light">
                            <span {...countTo(stat.value)}>{stat.value}</span>
                            {stat.suffix}
                        </p>
                        <p className="text-text-secondary mt-3 font-mono text-[11px] tracking-widest uppercase">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
