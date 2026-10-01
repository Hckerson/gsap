"use client";
import gsap from "gsap";
import type { RefObject } from "react";
import { find, GSAP } from "@/lib/site/gsap";
import { motionQuery, parallaxMotion } from "@/lib/site/motion";
import { useMotionScope } from "@/lib/hooks/use-motion-scope";

export function useParallax(scope: RefObject<HTMLElement | null>) {
    useMotionScope(
        scope,
        (root) => {
            find(root, GSAP.parallax).forEach((layer) => {
                gsap.to(layer, {
                    yPercent: parallaxMotion.drift,
                    ease: parallaxMotion.ease,
                    scrollTrigger: {
                        trigger: root,
                        start: parallaxMotion.start,
                        end: parallaxMotion.end,
                        scrub: true,
                    },
                });
            });
        },
        motionQuery.desktop,
    );
}
