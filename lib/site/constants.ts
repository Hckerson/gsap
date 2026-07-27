export const brand = {
    name: "Oblique",
    wordmark: "OBLIQUE",
    tagline: "Independent design & motion studio",
    est: "Est. 2014",
    location: "New York — Berlin — Remote",
} as const;

export const sectionId = {
    hero: "top",
    work: "work",
    services: "services",
    process: "process",
    studio: "studio",
    contact: "contact",
} as const;

export const navLinks = [
    { index: "01", label: "Work", href: `#${sectionId.work}` },
    { index: "02", label: "Services", href: `#${sectionId.services}` },
    { index: "03", label: "Process", href: `#${sectionId.process}` },
    { index: "04", label: "Studio", href: `#${sectionId.studio}` },
] as const;

export const primaryCta = {
    label: "Start a project",
    href: `#${sectionId.contact}`,
} as const;

export const contactEmail = "hello@oblique.studio";

export const heroEyebrow = "Design & motion studio — since 2014";

export const heroLines = ["Design that", "refuses to", "sit still."] as const;

export const heroLede =
    "We build brand identities, interfaces, and motion systems for teams who treat movement as meaning — not decoration.";

export const heroMeta = [
    { label: "Discipline", value: "Brand · Motion · Web" },
    { label: "Based", value: brand.location },
    { label: "Status", value: "Booking Q3 2026" },
] as const;

export const marqueeWords = [
    "Brand Identity",
    "Motion Design",
    "Art Direction",
    "Web Experiences",
    "3D & CGI",
    "Design Systems",
    "Creative Direction",
    "Interaction",
] as const;

export type WorkProject = {
    index: string;
    title: string;
    client: string;
    year: string;
    disciplines: string[];
    image: string;
};

export const workProjects: WorkProject[] = [
    {
        index: "01",
        title: "Kinetic",
        client: "Vanta Labs",
        year: "2025",
        disciplines: ["Brand", "Motion"],
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=80",
    },
    {
        index: "02",
        title: "Afterglow",
        client: "Nova Type Foundry",
        year: "2025",
        disciplines: ["Art Direction", "Web"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80",
    },
    {
        index: "03",
        title: "Overcast",
        client: "Halcyon",
        year: "2024",
        disciplines: ["3D", "Motion"],
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1400&q=80",
    },
    {
        index: "04",
        title: "Signal",
        client: "Meridian",
        year: "2024",
        disciplines: ["Design System", "Web"],
        image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=1400&q=80",
    },
    {
        index: "05",
        title: "Tectonic",
        client: "Strata Studio",
        year: "2023",
        disciplines: ["Brand", "Interaction"],
        image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1400&q=80",
    },
];

export type Service = {
    number: string;
    title: string;
    blurb: string;
    capabilities: string[];
};

export const services: Service[] = [
    {
        number: "01",
        title: "Brand Identity",
        blurb: "Systems that hold up in motion — logos, type, and rules built to move.",
        capabilities: ["Naming", "Logo & marks", "Typography", "Guidelines"],
    },
    {
        number: "02",
        title: "Motion Design",
        blurb: "Story-driven animation for launches, product, and film — from concept to render.",
        capabilities: ["Storyboards", "2D / 3D", "Title design", "Sound"],
    },
    {
        number: "03",
        title: "Web Experiences",
        blurb: "Editorial sites and product UI where scroll, state, and gesture carry the narrative.",
        capabilities: ["Art direction", "Prototyping", "Front-end", "CMS"],
    },
    {
        number: "04",
        title: "Design Systems",
        blurb: "Tokenised libraries that keep brand, product, and motion in perfect sync.",
        capabilities: ["Tokens", "Components", "Docs", "Handoff"],
    },
];

export type Stat = { value: number; suffix: string; label: string };

export const stats: Stat[] = [
    { value: 11, suffix: "yrs", label: "In practice" },
    { value: 140, suffix: "+", label: "Projects shipped" },
    { value: 29, suffix: "", label: "Awards & mentions" },
    { value: 4, suffix: "", label: "Continents served" },
];

export type ProcessStep = { index: string; title: string; body: string };

export const processSteps: ProcessStep[] = [
    {
        index: "01",
        title: "Immerse",
        body: "We embed with your team, audit the landscape, and find the tension worth designing around.",
    },
    {
        index: "02",
        title: "Frame",
        body: "Strategy becomes a creative territory — a written direction, a moodboard, a motion language.",
    },
    {
        index: "03",
        title: "Craft",
        body: "We design in high fidelity and in motion from day one. Nothing is signed off as a still.",
    },
    {
        index: "04",
        title: "Launch",
        body: "We ship with you — tokens, components, and guidelines that keep the work alive after handoff.",
    },
];

export const manifestoLines = [
    "We believe",
    "motion is not",
    "an effect —",
    "it is how",
    "a brand",
    "behaves.",
] as const;

export const manifestoImage =
    "https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=1200&q=80";

export const contactCopy = {
    eyebrow: "05 — Contact",
    headline: "Let's make it move.",
    body: "Tell us what you're building. We take on a handful of partners each quarter and we'd love to hear about yours.",
    availability: "Currently booking Q3 2026",
} as const;

export const footerColumns = [
    { title: "Studio", links: ["Work", "Services", "Process", "Journal"] },
    { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
    {
        title: "Elsewhere",
        links: ["Instagram", "Are.na", "LinkedIn", "Read.cv"],
    },
] as const;

export const socials = ["Instagram", "Are.na", "LinkedIn", "Read.cv"] as const;
