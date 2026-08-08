"use client";
import Link from "next/link";
import { useRef } from "react";
import Wordmark from "@/components/sections/site/wordmark";
import BrutalButton from "@/components/ui/brutal-button";
import { anim, GSAP } from "@/lib/site/gsap";
import { useSiteNav } from "@/lib/hooks/use-site-nav";
import { useMagnetic } from "@/lib/hooks/use-magnetic";
import { navLinks, primaryCta, sectionId } from "@/lib/site/constants";

export default function SiteHeader() {
    const root = useRef<HTMLElement | null>(null);
    useSiteNav(root);
    useMagnetic(root);

    return (
        <header
            {...anim(GSAP.nav)}
            ref={root}
            className="border-text bg-background/80 fixed inset-x-0 top-0 z-50 border-b-2 backdrop-blur-md"
        >
            <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 lg:px-10">
                <Link href={`#${sectionId.hero}`} className="text-xl">
                    <Wordmark />
                </Link>
                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-text-secondary hover:text-text flex items-center gap-2 font-mono text-xs tracking-widest uppercase transition-colors"
                        >
                            <span className="text-accent">{link.index}</span>
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <BrutalButton
                    href={primaryCta.href}
                    variant="accent"
                    {...anim(GSAP.magnetic)}
                >
                    {primaryCta.label}
                </BrutalButton>
            </div>
        </header>
    );
}
