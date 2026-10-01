"use client";
import gsap from "gsap";
import type { RefObject } from "react";
import { GSAP, sel, selItem } from "@/lib/site/gsap";
import { heroMotion, motionQuery } from "@/lib/site/motion";
import { useMotionScope } from "@/lib/hooks/use-motion-scope";

const orb = sel(GSAP.parallax);
const copy = sel(GSAP.reveal);
const lines = `${sel(GSAP.heroTitle)} ${selItem}`;
const meta = `${sel(GSAP.stagger)} ${selItem}`;
const cue = sel(GSAP.scrollCue);
const cueLine = `${cue} ${selItem}`;

export function useHeroIntro(scope: RefObject<HTMLElement | null>) {
    useMotionScope(scope, () => {
        gsap.timeline({ defaults: { ease: heroMotion.ease } })
            .from(orb, {
                autoAlpha: 0,
                scale: heroMotion.orbScale,
                duration: heroMotion.orbDuration,
            })
            .from(
                copy,
                {
                    autoAlpha: 0,
                    y: heroMotion.copyOffset,
                    duration: heroMotion.copyDuration,
                    stagger: heroMotion.copyStagger,
                    ease: heroMotion.copyEase,
                },
                0,
            )
            .from(
                lines,
                {
                    yPercent: heroMotion.lineOffset,
                    duration: heroMotion.lineDuration,
                    stagger: heroMotion.lineStagger,
                },
                heroMotion.lineStart,
            )
            .from(
                meta,
                {
                    autoAlpha: 0,
                    y: heroMotion.metaOffset,
                    duration: heroMotion.metaDuration,
                    stagger: heroMotion.metaStagger,
                    ease: heroMotion.copyEase,
                },
                heroMotion.metaStart,
            )
            .from(
                cue,
                { autoAlpha: 0, duration: heroMotion.cueDuration },
                heroMotion.cueStart,
            )
            .from(
                cueLine,
                {
                    scaleY: 0,
                    transformOrigin: "top center",
                    duration: heroMotion.cueDuration,
                },
                "<",
            )
            .to(cue, {
                y: heroMotion.cueNudge,
                duration: heroMotion.cueNudgeDuration,
                ease: heroMotion.cueEase,
                repeat: -1,
                yoyo: true,
            });
    });

    useMotionScope(
        scope,
        (root) => {
            gsap.to(orb, {
                yPercent: heroMotion.parallaxDrift,
                ease: heroMotion.scrubEase,
                scrollTrigger: {
                    trigger: root,
                    start: heroMotion.parallaxStart,
                    end: heroMotion.parallaxEnd,
                    scrub: true,
                },
            });
        },
        motionQuery.desktop,
    );
}
