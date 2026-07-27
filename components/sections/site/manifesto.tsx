import clsx from "clsx";
import Image from "next/image";
import SectionLabel from "@/components/sections/site/section-label";
import { anim, animItem, GSAP } from "@/lib/site/gsap";
import {
    manifestoImage,
    manifestoLines,
    sectionId,
} from "@/lib/site/constants";

export default function Manifesto() {
    return (
        <section
            id={sectionId.studio}
            className="border-text relative overflow-hidden border-b-2 py-24 lg:py-36"
        >
            <div
                {...anim(GSAP.parallax)}
                className="border-text pointer-events-none absolute top-1/2 right-6 hidden aspect-[3/4] w-64 -translate-y-1/2 border-2 lg:block"
            >
                <Image
                    src={manifestoImage}
                    alt="Inside the studio"
                    fill
                    sizes="256px"
                    className="object-cover"
                />
            </div>
            <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
                <SectionLabel index="04" label="Studio" />
                <p
                    {...anim(GSAP.stagger)}
                    className="font-display mt-10 max-w-5xl text-[clamp(2.25rem,7vw,6rem)] leading-[1.02] font-light"
                >
                    {manifestoLines.map((line, i) => (
                        <span
                            key={line}
                            {...animItem}
                            className={clsx(
                                "inline",
                                i % 2 === 1 && "text-text-muted",
                            )}
                        >
                            {line}{" "}
                        </span>
                    ))}
                </p>
            </div>
        </section>
    );
}
