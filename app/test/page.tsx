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
                .timeline({
                    scrollTrigger: {
                        trigger: ".bank",
                        // pin: true,
                        start: "top center",
                        end: "+=500",
                        scrub: 1,
                        markers: true,
                        snap: 0.01,
                    },
                })
                .to(".box", {
                    rotate: 360,
                });
        },
        { scope: container },
    );

    return (
        <div ref={container} className="w-full bg-black">
            <div className="h-screen" />
            <div className="bank flex h-150 w-full items-center justify-center bg-white">
                <div className="box size-50 bg-linear-to-br from-purple-400 to-pink-600" />
            </div>
            <div className="h-screen" />
        </div>
    );
}
