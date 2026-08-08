import gsap from "gsap";
import effects from "./effects";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.config({
    autoSleep: 60,
    force3D: true,
});

gsap.defaults({});

gsap.registerPlugin(useGSAP, ScrollTrigger, DrawSVGPlugin);

effects.forEach((effect) => {
    gsap.registerEffect({
        ...effect,
        extendTimeline: true,
    });
});
