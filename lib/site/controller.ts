import gsap from "gsap";
import effects from "./effects";

gsap.config({
    autoSleep: 60,
});

effects.forEach((effect) => {
    gsap.registerEffect({
        ...effect,
        extendTimeline: true,
    });
});
