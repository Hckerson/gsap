"use client";
import gsap from "gsap";
import type { RefObject } from "react";
import { find, findItems, GSAP } from "@/lib/site/gsap";
import { cascadeMotion, revealMotion } from "@/lib/site/motion";
import { useMotionScope } from "@/lib/hooks/use-motion-scope";

export function useScrollReveal(scope: RefObject<HTMLElement | null>) {
    useMotionScope(scope, (root) => {
        find(root, GSAP.reveal).forEach((block) => {
            gsap.from(block, {
                autoAlpha: 0,
                y: revealMotion.offset,
                duration: revealMotion.duration,
                ease: revealMotion.ease,
                scrollTrigger: {
                    trigger: block,
                    start: revealMotion.start,
                    once: true,
                },
            });
        });

        find(root, GSAP.stagger).forEach((group) => {
            gsap.from(findItems(group), {
                autoAlpha: 0,
                y: revealMotion.offset,
                duration: revealMotion.duration,
                ease: revealMotion.ease,
                stagger: revealMotion.stagger,
                scrollTrigger: {
                    trigger: group,
                    start: revealMotion.start,
                    once: true,
                },
            });
        });

        find(root, GSAP.cascade).forEach((group) => {
            gsap.from(findItems(group), {
                autoAlpha: 0,
                y: cascadeMotion.offset,
                duration: cascadeMotion.duration,
                ease: cascadeMotion.ease,
                stagger: cascadeMotion.stagger,
                scrollTrigger: {
                    trigger: group,
                    start: cascadeMotion.start,
                    once: true,
                },
            });
        });
    });
}
