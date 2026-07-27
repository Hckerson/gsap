import SectionLabel from "@/components/sections/site/section-label";
import { anim, animItem, GSAP } from "@/lib/site/gsap";
import { sectionId, services } from "@/lib/site/constants";

export default function Services() {
    return (
        <section
            id={sectionId.services}
            className="border-text border-b-2 py-20 lg:py-28"
        >
            <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
                <div {...anim(GSAP.reveal)} className="max-w-3xl">
                    <SectionLabel index="02" label="Services" />
                    <h2 className="font-display text-h2 mt-6 leading-tight font-light">
                        Four ways we put ideas in motion.
                    </h2>
                </div>
                <div
                    {...anim(GSAP.stagger)}
                    className="border-text mt-14 border-t-2"
                >
                    {services.map((service) => (
                        <article
                            key={service.number}
                            {...animItem}
                            className="group border-text grid gap-6 border-b-2 py-8 md:grid-cols-[auto_1fr_1.2fr] md:items-baseline md:gap-10"
                        >
                            <span className="font-display text-h3 text-text-muted group-hover:text-accent font-light transition-colors">
                                {service.number}
                            </span>
                            <h3 className="font-display text-h4 font-light">
                                {service.title}
                            </h3>
                            <div>
                                <p className="text-text-secondary max-w-xl text-base">
                                    {service.blurb}
                                </p>
                                <ul className="mt-4 flex flex-wrap gap-2">
                                    {service.capabilities.map((capability) => (
                                        <li
                                            key={capability}
                                            className="border-text border px-3 py-1 font-mono text-[11px] tracking-widest uppercase"
                                        >
                                            {capability}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
