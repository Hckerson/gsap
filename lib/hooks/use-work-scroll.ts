"use client";
import gsap from "gsap";
import type { RefObject } from "react";
import type { ScrollTrigger } from "gsap/ScrollTrigger";
import { find, GSAP } from "@/lib/site/gsap";
import { motionQuery, workMotion } from "@/lib/site/motion";
import { useMotionScope } from "@/lib/hooks/use-motion-scope";

const revealFrame = (frame: HTMLElement, scrollTrigger: ScrollTrigger.Vars) =>
    gsap.fromTo(
        frame,
        { clipPath: workMotion.clipFrom },
        {
            clipPath: workMotion.clipTo,
            duration: workMotion.clipDuration,
            ease: workMotion.clipEase,
            scrollTrigger,
        },
    );

export function useWorkScroll(scope: RefObject<HTMLElement | null>) {
    useMotionScope(
        scope,
        (root) => {
            const [track] = find(root, GSAP.hTrack);
            const viewport = track?.parentElement;
            if (!track || !viewport) return;

            const distance = () => track.scrollWidth - viewport.clientWidth;
            if (distance() <= 0) return;

            gsap.set(viewport, { overflow: "hidden" });

            const horizontal = gsap.to(track, {
                x: () => -distance(),
                ease: workMotion.ease,
                scrollTrigger: {
                    trigger: viewport,
                    pin: viewport,
                    start: workMotion.start,
                    end: () => `+=${distance()}`,
                    scrub: workMotion.scrub,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                },
            });

            find(root, GSAP.clip).forEach((frame) =>
                revealFrame(frame, {
                    trigger: frame,
                    containerAnimation: horizontal,
                    start: workMotion.clipStart,
                    once: true,
                }),
            );
        },
        motionQuery.desktop,
    );

    useMotionScope(
        scope,
        (root) => {
            gsap.from(find(root, GSAP.hPanel), {
                autoAlpha: 0,
                y: workMotion.panelOffset,
                duration: workMotion.panelDuration,
                ease: workMotion.panelEase,
                stagger: workMotion.panelStagger,
                scrollTrigger: {
                    trigger: root,
                    start: workMotion.panelStart,
                    once: true,
                },
            });
        },
        motionQuery.mobile,
    );
}
