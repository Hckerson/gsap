export const GSAP = {
    nav: "nav",
    heroTitle: "hero-title",
    reveal: "reveal",
    stagger: "stagger",
    cascade: "cascade",
    sweep: "sweep",
    stepIndex: "step-index",
    progress: "progress",
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

export const sel = (name: GsapHook) => `[data-gsap="${name}"]`;

export const selItem = "[data-gsap-item]";

export const find = <T extends Element = HTMLElement>(
    root: ParentNode,
    name: GsapHook,
) => Array.from(root.querySelectorAll<T>(sel(name)));

const selGroups = [GSAP.stagger, GSAP.cascade, GSAP.stepIndex]
    .map((name) => sel(name))
    .join(", ");

export const findItems = (group: Element) =>
    Array.from(group.querySelectorAll<HTMLElement>(selItem)).filter(
        (item) => item.parentElement?.closest(selGroups) === group,
    );

export const countTo = (value: number) => ({
    "data-gsap": GSAP.count,
    "data-count-to": value,
});
