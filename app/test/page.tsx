"use client";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import "@/lib/site/controller";

gsap.registerPlugin(useGSAP);
export default function TestPage() {
    const container = useRef<HTMLDivElement | null>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);
    useGSAP(
        () => {
            tl.current = gsap
                .timeline({ defaults: { duration: 1 } })
                .slide(".box", { duration: 1 })
                .to(".boxy", { duration: 1, x: 100, opacity: 0.5 });
        },
        { scope: container },
    );
    return (
        <div
            ref={container}
            className="flex h-screen w-full flex-col items-center justify-center bg-black"
        >
            <div className="from box size-10 rounded-lg bg-green-300 bg-linear-to-br to-green-500"></div>
            <div className="from boxy size-10 rounded-lg bg-sky-300 bg-linear-to-br to-sky-500"></div>
        </div>
    );
}
