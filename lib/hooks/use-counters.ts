"use client";
import gsap from "gsap";
import type { RefObject } from "react";
import { find, GSAP } from "@/lib/site/gsap";
import { countMotion } from "@/lib/site/motion";
import { useMotionScope } from "@/lib/hooks/use-motion-scope";

export function useCounters(scope: RefObject<HTMLElement | null>) {
    useMotionScope(scope, (root) => {
        find(root, GSAP.count).forEach((node) => {
            const target = Number(node.dataset.countTo);
            if (!Number.isFinite(target)) return;

            const counter = { value: 0 };
            gsap.to(counter, {
                value: target,
                duration: countMotion.duration,
                ease: countMotion.ease,
                snap: { value: 1 },
                onUpdate: () => {
                    node.textContent = String(counter.value);
                },
                scrollTrigger: {
                    trigger: node,
                    start: countMotion.start,
                    once: true,
                },
            });
        });
    });
}
