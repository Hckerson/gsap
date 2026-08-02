import gsap from "gsap";

export interface Effects {
    name: string;
    extendTimeline?: boolean;
    defaults: Record<string, unknown>;
    effect: (
        targets: gsap.TweenTarget,
        config: Record<string, unknown>,
    ) => gsap.core.Animation;
}

const effects: Effects[] = [
    {
        name: "fade",
        defaults: { duration: 2, opacity: 0 },
        effect: (targets, config) =>
            gsap.to(targets, {
                ...config,
            }),
    },
    {
        name: "slide",
        defaults: { duration: 1, x: 100 },
        effect: (targets, config) =>
            gsap.to(targets, {
                ...config,
            }),
    },
];

export default effects;
