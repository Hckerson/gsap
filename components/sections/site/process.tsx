import SectionLabel from "@/components/sections/site/section-label";
import { anim, GSAP } from "@/lib/site/gsap";
import { sectionId, processSteps } from "@/lib/site/constants";

export default function Process() {
    return (
        <section
            id={sectionId.process}
            {...anim(GSAP.pin)}
            className="border-text border-b-2 py-20 lg:py-28"
        >
            <div className="mx-auto grid max-w-[1600px] gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
                <div className="lg:sticky lg:top-28 lg:self-start">
                    <SectionLabel index="03" label="Process" />
                    <h2 className="font-display text-h2 mt-6 leading-tight font-light">
                        How the work moves from brief to launch.
                    </h2>
                    <svg
                        {...anim(GSAP.draw)}
                        className="mt-10 hidden lg:block"
                        width="120"
                        height="220"
                        viewBox="0 0 120 220"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M10 10 V210 M10 74 H110 M10 142 H86"
                            stroke="var(--colors-text)"
                            strokeWidth="2"
                        />
                    </svg>
                </div>
                <div className="flex flex-col">
                    {processSteps.map((step) => (
                        <article
                            key={step.index}
                            {...anim(GSAP.pinStep)}
                            className="border-text border-t-2 py-8 first:border-t-0 lg:py-10"
                        >
                            <div className="flex items-baseline gap-6">
                                <span className="text-accent font-mono text-sm">
                                    {step.index}
                                </span>
                                <div>
                                    <h3 className="font-display text-h3 font-light">
                                        {step.title}
                                    </h3>
                                    <p className="text-text-secondary mt-3 max-w-xl text-base">
                                        {step.body}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
