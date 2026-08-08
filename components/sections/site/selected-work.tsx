"use client";
import Image from "next/image";
import { useRef } from "react";
import SectionLabel from "@/components/sections/site/section-label";
import { anim, GSAP } from "@/lib/site/gsap";
import { useWorkScroll } from "@/lib/hooks/use-work-scroll";
import { sectionId, workProjects } from "@/lib/site/constants";

export default function SelectedWork() {
    const root = useRef<HTMLElement | null>(null);
    useWorkScroll(root);

    return (
        <section
            id={sectionId.work}
            {...anim(GSAP.hScroll)}
            ref={root}
            className="border-text border-b-2 py-20 lg:py-28"
        >
            <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
                <div className="flex items-end justify-between">
                    <SectionLabel index="01" label="Selected Work" />
                    <p className="text-text-muted hidden font-mono text-xs tracking-widest uppercase md:block">
                        {workProjects.length} projects
                    </p>
                </div>
                <h2 className="font-display text-h2 mt-6 max-w-3xl leading-tight font-light">
                    Recent work in brand & motion.
                </h2>
            </div>
            <div className="mt-12 overflow-x-auto pb-4">
                <div
                    {...anim(GSAP.hTrack)}
                    className="flex w-max gap-6 px-6 lg:px-10"
                >
                    {workProjects.map((project) => (
                        <article
                            key={project.index}
                            {...anim(GSAP.hPanel)}
                            className="border-text bg-background w-[78vw] max-w-[520px] shrink-0 border-2"
                        >
                            <div
                                {...anim(GSAP.clip)}
                                className="border-text relative aspect-[4/5] overflow-hidden border-b-2"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 78vw, 520px"
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex items-start justify-between p-5">
                                <div>
                                    <p className="text-accent font-mono text-[11px] tracking-widest uppercase">
                                        {project.index} — {project.client}
                                    </p>
                                    <h3 className="font-display text-h4 mt-2 font-light">
                                        {project.title}
                                    </h3>
                                </div>
                                <div className="text-right">
                                    <p className="text-text-muted font-mono text-[11px] tracking-widest uppercase">
                                        {project.year}
                                    </p>
                                    <p className="text-text-secondary mt-2 text-xs">
                                        {project.disciplines.join(" · ")}
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
