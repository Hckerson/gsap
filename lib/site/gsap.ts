export const GSAP = {
    nav: "nav",
    heroTitle: "hero-title",
    reveal: "reveal",
    stagger: "stagger",
    count: "count",
    marquee: "marquee",
    marqueeTrack: "marquee-track",
    pin: "pin",
    pinStep: "pin-step",
    hScroll: "h-scroll",
    hTrack: "h-track",
    hPanel: "h-panel",
    draw: "draw",
    clip: "clip",
    parallax: "parallax",
    magnetic: "magnetic",
    scrollCue: "scroll-cue",
} as const;

export type GsapHook = (typeof GSAP)[keyof typeof GSAP];

export const anim = (name: GsapHook) => ({ "data-gsap": name });

export const animItem = { "data-gsap-item": "" } as const;

export const countTo = (value: number) => ({
    "data-gsap": GSAP.count,
    "data-count-to": value,
});
