import { anim, GSAP } from "@/lib/site/gsap";
import { marqueeWords } from "@/lib/site/constants";

export default function ServiceTicker() {
    const row = [...marqueeWords, ...marqueeWords];
    return (
        <section className="brutal-invert border-text overflow-hidden border-y-2 py-6">
            <div {...anim(GSAP.marquee)} className="edge-fade">
                <div
                    {...anim(GSAP.marqueeTrack)}
                    className="flex w-max items-center gap-8 whitespace-nowrap"
                >
                    {row.map((word, i) => (
                        <span
                            key={`${word}-${i}`}
                            className="font-display flex items-center gap-8 text-4xl font-light lg:text-6xl"
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
