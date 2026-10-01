"use client";
import gsap from "gsap";
import type { RefObject } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navMotion } from "@/lib/site/motion";
import { useMotionScope } from "@/lib/hooks/use-motion-scope";

export function useSiteNav(scope: RefObject<HTMLElement | null>) {
    useMotionScope(scope, (root) => {
        gsap.from(root, {
            yPercent: navMotion.hidden,
            duration: navMotion.duration,
            delay: navMotion.delay,
            ease: navMotion.ease,
        });

        const slide = gsap.quickTo(root, "yPercent", {
            duration: navMotion.toggleDuration,
            ease: navMotion.ease,
        });

        ScrollTrigger.create({
            start: navMotion.hideAfter,
            end: "max",
            onUpdate: (self) =>
                slide(self.direction === 1 ? navMotion.hidden : 0),
            onLeaveBack: () => slide(0),
        });
    });
}
