import clsx from "clsx";
import type { ReactNode } from "react";

type Variant = "solid" | "accent" | "outline";
type Size = "md" | "lg";

const base =
    "inline-flex select-none items-center justify-center gap-2 border-2 border-text font-mono text-sm font-medium uppercase tracking-[0.12em] transition-transform duration-200 ease-smooth shadow-[4px_4px_0_var(--colors-text)] hover:-translate-x-px hover:-translate-y-px hover:shadow-[6px_6px_0_var(--colors-text)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

const variants: Record<Variant, string> = {
    solid: "bg-text text-background",
    accent: "bg-accent text-text",
    outline: "bg-transparent text-text",
};

const sizes: Record<Size, string> = {
    md: "h-11 px-5",
    lg: "h-14 px-7 text-base",
};

type Props = {
    variant?: Variant;
    size?: Size;
    href?: string;
    type?: "button" | "submit";
    className?: string;
    "aria-label"?: string;
    children: ReactNode;
} & { [key: `data-${string}`]: string | number | undefined };

export default function BrutalButton({
    variant = "solid",
    size = "md",
    href,
    type = "button",
    className,
    "aria-label": ariaLabel,
    children,
    ...data
}: Props) {
    const cls = clsx(base, variants[variant], sizes[size], className);
    if (href) {
        return (
            <a href={href} aria-label={ariaLabel} className={cls} {...data}>
                {children}
            </a>
        );
    }
    return (
        <button type={type} aria-label={ariaLabel} className={cls} {...data}>
            {children}
        </button>
    );
}
