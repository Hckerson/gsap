import SectionLabel from "@/components/sections/site/section-label";
import BrutalButton from "@/components/ui/brutal-button";
import { anim, GSAP } from "@/lib/site/gsap";
import {
    contactCopy,
    contactEmail,
    primaryCta,
    sectionId,
} from "@/lib/site/constants";

export default function Contact() {
    return (
        <section
            id={sectionId.contact}
            className="brutal-invert border-text border-b-2 py-24 lg:py-36"
        >
            <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
                <SectionLabel index="05" label="Contact" />
                <h2
                    {...anim(GSAP.reveal)}
                    className="font-display mt-8 max-w-4xl text-[clamp(2.5rem,9vw,8rem)] leading-[0.95] font-light"
                >
                    {contactCopy.headline}
                </h2>
                <div className="border-text mt-12 flex flex-col gap-10 border-t-2 pt-10 lg:flex-row lg:items-end lg:justify-between">
                    <p className="text-text-secondary max-w-xl text-lg">
                        {contactCopy.body}
                    </p>
                    <div className="flex flex-col items-start gap-6">
                        <a
                            href={`mailto:${contactEmail}`}
                            className="font-display text-h4 decoration-accent font-light underline decoration-2 underline-offset-4"
                        >
                            {contactEmail}
                        </a>
                        <BrutalButton
                            href={`mailto:${contactEmail}`}
                            variant="accent"
                            size="lg"
                            {...anim(GSAP.magnetic)}
                        >
                            {primaryCta.label}
                        </BrutalButton>
                    </div>
                </div>
                <p className="text-accent mt-10 font-mono text-xs tracking-widest uppercase">
                    {contactCopy.availability}
                </p>
            </div>
        </section>
    );
}
