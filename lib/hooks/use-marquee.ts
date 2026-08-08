"use client";
import gsap from "gsap";
import type { RefObject } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { find, GSAP } from "@/lib/site/gsap";
import { marqueeMotion } from "@/lib/site/motion";
import { useMotionScope } from "@/lib/hooks/use-motion-scope";

export function useMarquee(scope: RefObject<HTMLElement | null>) {
    useMotionScope(scope, (root) => {
        const [track] = find(root, GSAP.marqueeTrack);
        if (!track) return;

        const loop = gsap.to(track, {
            xPercent: marqueeMotion.distance,
            duration: marqueeMotion.duration,
            ease: marqueeMotion.ease,
            repeat: -1,
        });

        ScrollTrigger.create({
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            onUpdate: (self) =>
                gsap.to(loop, {
                    timeScale: self.direction,
                    duration: marqueeMotion.turnDuration,
                    overwrite: true,
                }),
        });
    });
}
