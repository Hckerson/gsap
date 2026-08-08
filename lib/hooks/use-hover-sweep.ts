"use client";
import gsap from "gsap";
import type { RefObject } from "react";
import { find, GSAP } from "@/lib/site/gsap";
import { motionQuery, sweepMotion } from "@/lib/site/motion";
import { useMotionScope } from "@/lib/hooks/use-motion-scope";

export function useHoverSweep(scope: RefObject<HTMLElement | null>) {
    useMotionScope(
        scope,
        (root) => {
            const teardown = find(root, GSAP.sweep).flatMap((line) => {
                const row = line.parentElement;
                if (!row) return [];

                gsap.set(line, {
                    scaleX: 0,
                    autoAlpha: 1,
                    transformOrigin: sweepMotion.originIn,
                });

                const draw = (scaleX: number, transformOrigin: string) =>
                    gsap.to(line, {
                        scaleX,
                        transformOrigin,
                        duration: sweepMotion.duration,
                        ease: sweepMotion.ease,
                        overwrite: true,
                    });

                const enter = () => draw(1, sweepMotion.originIn);
                const leave = () => draw(0, sweepMotion.originOut);

                row.addEventListener("pointerenter", enter);
                row.addEventListener("pointerleave", leave);

                return () => {
                    row.removeEventListener("pointerenter", enter);
                    row.removeEventListener("pointerleave", leave);
                };
            });

            return () => teardown.forEach((remove) => remove());
        },
        motionQuery.hover,
    );
}
