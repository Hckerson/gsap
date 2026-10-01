"use client";
import gsap from "gsap";
import type { RefObject } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { find, findItems, GSAP } from "@/lib/site/gsap";
import { motionQuery, processMotion } from "@/lib/site/motion";
import { useMotionScope } from "@/lib/hooks/use-motion-scope";

export function useProcessScroll(scope: RefObject<HTMLElement | null>) {
    useMotionScope(scope, (root) => {
        const steps = find(root, GSAP.pinStep);
        const [board] = find(root, GSAP.stepIndex);
        const numerals = board ? findItems(board) : [];

        gsap.set(numerals, { yPercent: processMotion.indexOffset });
        gsap.set(numerals.slice(0, 1), { yPercent: 0 });

        let current = 0;
        const activate = (next: number) => {
            const outgoing = numerals[current];
            const incoming = numerals[next];
            if (next === current || !outgoing || !incoming) return;

            const forward = next > current;
            const options = {
                duration: processMotion.indexDuration,
                ease: processMotion.indexEase,
                overwrite: true,
            };

            gsap.to(outgoing, {
                yPercent: forward
                    ? -processMotion.indexOffset
                    : processMotion.indexOffset,
                ...options,
            });
            gsap.fromTo(
                incoming,
                {
                    yPercent: forward
                        ? processMotion.indexOffset
                        : -processMotion.indexOffset,
                },
                { yPercent: 0, ...options },
            );
            current = next;
        };

        steps.forEach((step, index) => {
            gsap.fromTo(
                step,
                { opacity: processMotion.dim },
                {
                    opacity: 1,
                    ease: processMotion.ease,
                    scrollTrigger: {
                        trigger: step,
                        start: processMotion.stepStart,
                        end: processMotion.stepEnd,
                        scrub: processMotion.scrub,
                    },
                },
            );

            ScrollTrigger.create({
                trigger: step,
                start: processMotion.activeStart,
                end: processMotion.activeEnd,
                onEnter: () => activate(index),
                onEnterBack: () => activate(index),
            });
        });

        const [rail] = find(root, GSAP.progress);
        const column = rail?.parentElement;
        if (!rail || !column) return;

        gsap.fromTo(
            rail,
            { scaleY: 0, autoAlpha: 1, transformOrigin: "top center" },
            {
                scaleY: 1,
                ease: processMotion.ease,
                scrollTrigger: {
                    trigger: column,
                    start: processMotion.railStart,
                    end: processMotion.railEnd,
                    scrub: processMotion.scrub,
                },
            },
        );
    });

    useMotionScope(
        scope,
        (root) => {
            const [drawing] = find<SVGSVGElement>(root, GSAP.draw);
            if (!drawing) return;

            gsap.from(drawing.querySelectorAll("path"), {
                drawSVG: processMotion.drawFrom,
                ease: processMotion.ease,
                scrollTrigger: {
                    trigger: root,
                    start: processMotion.drawStart,
                    end: processMotion.drawEnd,
                    scrub: processMotion.scrub,
                },
            });
        },
        motionQuery.desktop,
    );
}
