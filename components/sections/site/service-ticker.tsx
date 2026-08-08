"use client";
import { useRef } from "react";
import { anim, GSAP } from "@/lib/site/gsap";
import { useMarquee } from "@/lib/hooks/use-marquee";
import { marqueeWords } from "@/lib/site/constants";

export default function ServiceTicker() {
    const root = useRef<HTMLElement | null>(null);
    useMarquee(root);
    const row = [...marqueeWords, ...marqueeWords];

    return (
        <section
            ref={root}
            className="brutal-invert border-text overflow-hidden border-y-2 py-6"
        >
            <div {...anim(GSAP.marquee)} className="edge-fade">
                <div
                    {...anim(GSAP.marqueeTrack)}
                    className="flex w-max items-center whitespace-nowrap"
                >
                    {row.map((word, i) => (
                        <span
                            key={`${word}-${i}`}
                            className="font-display flex items-center gap-8 pr-8 text-4xl font-light lg:text-6xl"
                        >
                            {word}
                            <span className="text-accent">✳</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
