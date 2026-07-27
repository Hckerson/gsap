import clsx from "clsx";
import { brand } from "@/lib/site/constants";

export default function Wordmark({ className }: { className?: string }) {
    return (
        <span
            className={clsx(
                "font-display inline-flex items-start leading-none font-light tracking-tight",
                className,
            )}
        >
            {brand.wordmark}
            <sup className="text-accent mt-1 ml-1">✳</sup>
        </span>
    );
}
