"use client";
import gsap from "gsap";
import type { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { motionQuery } from "@/lib/site/motion";
import "@/lib/site/controller";

type MotionSetup = (root: HTMLElement) => void | (() => void);

export function useMotionScope(
    scope: RefObject<HTMLElement | null>,
    setup: MotionSetup,
    condition: string = motionQuery.base,
) {
    useGSAP(
        () => {
            const root = scope.current;
            if (!root) return;

            const mm = gsap.matchMedia(root);
            mm.add(condition, () => setup(root));

            return () => mm.revert();
        },
        { scope },
    );
}
