import clsx from "clsx";
import { anim, animItem, GSAP } from "@/lib/site/gsap";
import {
    heroEyebrow,
    heroLede,
    heroLines,
    heroMeta,
    sectionId,
} from "@/lib/site/constants";

export default function Hero() {
    return (
        <section
            id={sectionId.hero}
            className="brutal-grid relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 pb-16 lg:px-10"
        >
            <div
                {...anim(GSAP.parallax)}
                className="border-text/10 pointer-events-none absolute top-24 -right-32 hidden aspect-square w-[46rem] rounded-full border-2 lg:block"
            />
            <div className="relative mx-auto w-full max-w-[1600px]">
                <p className="text-text-secondary mb-8 font-mono text-xs tracking-[0.22em] uppercase">
                    {heroEyebrow}
                </p>
                <h1
                    {...anim(GSAP.heroTitle)}
                    className="font-display text-[clamp(2.75rem,11vw,10rem)] leading-[0.92] font-light tracking-tight"
                >
                    {heroLines.map((line, i) => (
                        <span key={line} className="block overflow-hidden">
                            <span
                                {...animItem}
                                className={clsx(
                                    "block",
                                    i === 1 && "type-outline",
                                )}
                            >
                                {line}
                            </span>
                        </span>
                    ))}
                </h1>
                <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
                    <p className="text-text-secondary max-w-xl text-lg leading-relaxed">
                        {heroLede}
                    </p>
                    <dl
                        {...anim(GSAP.stagger)}
                        className="grid grid-cols-3 gap-6 lg:gap-10"
                    >
                        {heroMeta.map((meta) => (
                            <div
                                key={meta.label}
                                {...animItem}
                                className="border-text border-t-2 pt-3"
                            >
                                <dt className="text-text-muted font-mono text-[10px] tracking-widest uppercase">
                                    {meta.label}
                                </dt>
                                <dd className="mt-1 text-sm">{meta.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
            <div
                {...anim(GSAP.scrollCue)}
                className="text-text-muted absolute inset-x-0 bottom-6 mx-auto flex w-full max-w-[1600px] items-center gap-3 px-6 font-mono text-[10px] tracking-[0.3em] uppercase lg:px-10"
            >
                <span className="bg-text h-10 w-px" />
                Scroll to explore
            </div>
        </section>
    );
}
