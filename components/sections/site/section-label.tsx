import clsx from "clsx";

type Props = {
    index: string;
    label: string;
    className?: string;
};

export default function SectionLabel({ index, label, className }: Props) {
    return (
        <div
            className={clsx(
                "text-text-secondary flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] uppercase",
                className,
            )}
        >
            <span className="text-accent">{index}</span>
            <span className="bg-border h-px w-8" />
            <span>{label}</span>
        </div>
    );
}
