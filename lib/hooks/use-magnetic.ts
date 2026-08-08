"use client";
import gsap from "gsap";
import type { RefObject } from "react";
import { find, GSAP } from "@/lib/site/gsap";
import { magneticMotion, motionQuery } from "@/lib/site/motion";
import { useMotionScope } from "@/lib/hooks/use-motion-scope";

export function useMagnetic(scope: RefObject<HTMLElement | null>) {
    useMotionScope(
        scope,
        (root) => {
            const teardown = find(root, GSAP.magnetic).map((target) => {
                const options = {
                    duration: magneticMotion.duration,
                    ease: magneticMotion.ease,
                };
                const moveX = gsap.quickTo(target, "x", options);
                const moveY = gsap.quickTo(target, "y", options);

                const follow = (event: PointerEvent) => {
                    const bounds = target.getBoundingClientRect();
                    const offsetX =
                        event.clientX - bounds.left - bounds.width / 2;
                    const offsetY =
                        event.clientY - bounds.top - bounds.height / 2;
                    moveX(offsetX * magneticMotion.pull);
                    moveY(offsetY * magneticMotion.pull);
                };
                const release = () => {
                    moveX(0);
                    moveY(0);
                };

                target.addEventListener("pointermove", follow);
                target.addEventListener("pointerleave", release);

                return () => {
                    target.removeEventListener("pointermove", follow);
                    target.removeEventListener("pointerleave", release);
                };
            });

            return () => teardown.forEach((remove) => remove());
        },
        motionQuery.hover,
    );
}
