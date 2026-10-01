export const query = {
    motion: "(prefers-reduced-motion: no-preference)",
    desktop: "(min-width: 1024px)",
    mobile: "(max-width: 1023.98px)",
    hover: "(hover: hover) and (pointer: fine)",
} as const;

export const motionQuery = {
    base: query.motion,
    desktop: `${query.motion} and ${query.desktop}`,
    mobile: `${query.motion} and ${query.mobile}`,
    hover: `${query.motion} and ${query.hover}`,
} as const;

export const heroMotion = {
    ease: "expo.out",
    copyEase: "power3.out",
    cueEase: "sine.inOut",
    scrubEase: "none",
    copyDuration: 0.85,
    copyStagger: 0.12,
    copyOffset: 24,
    orbDuration: 1.8,
    orbScale: 0.9,
    lineStart: 0.15,
    lineDuration: 1.15,
    lineStagger: 0.09,
    lineOffset: 110,
    metaStart: "-=0.55",
    metaDuration: 0.7,
    metaStagger: 0.08,
    metaOffset: 18,
    cueStart: "-=0.35",
    cueDuration: 0.7,
    cueNudge: 8,
    cueNudgeDuration: 1.5,
    parallaxDrift: 16,
    parallaxStart: "top top",
    parallaxEnd: "bottom top",
} as const;

export const revealMotion = {
    ease: "power3.out",
    duration: 0.9,
    offset: 28,
    stagger: 0.09,
    start: "top 82%",
} as const;

export const cascadeMotion = {
    ease: "power3.out",
    duration: 0.8,
    offset: 22,
    stagger: 0.08,
    start: "top 85%",
} as const;

export const sweepMotion = {
    ease: "power3.inOut",
    duration: 0.55,
    originIn: "left center",
    originOut: "right center",
} as const;

export const parallaxMotion = {
    ease: "none",
    drift: 14,
    start: "top bottom",
    end: "bottom top",
} as const;

export const navMotion = {
    ease: "power3.out",
    duration: 0.8,
    delay: 0.25,
    hidden: -100,
    hideAfter: 240,
    toggleDuration: 0.45,
} as const;

export const marqueeMotion = {
    ease: "none",
    distance: -50,
    duration: 26,
    turnDuration: 0.6,
} as const;

export const workMotion = {
    ease: "none",
    scrub: 1,
    start: "center center",
    clipFrom: "inset(100% 0% 0% 0%)",
    clipTo: "inset(0% 0% 0% 0%)",
    clipDuration: 1,
    clipEase: "power3.out",
    clipStart: "left 80%",
    panelEase: "power3.out",
    panelDuration: 0.8,
    panelOffset: 40,
    panelStagger: 0.1,
    panelStart: "top 85%",
} as const;

export const processMotion = {
    ease: "none",
    indexEase: "expo.out",
    indexDuration: 0.7,
    indexOffset: 100,
    dim: 0.25,
    scrub: true,
    stepStart: "top 80%",
    stepEnd: "top 45%",
    activeStart: "top center",
    activeEnd: "bottom center",
    railStart: "top center",
    railEnd: "bottom center",
    drawFrom: "0%",
    drawStart: "top 75%",
    drawEnd: "bottom 60%",
} as const;

export const countMotion = {
    ease: "power2.out",
    duration: 2,
    start: "top 85%",
} as const;

export const magneticMotion = {
    ease: "power3.out",
    duration: 0.5,
    pull: 0.35,
} as const;
