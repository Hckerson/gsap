import Wordmark from "@/components/sections/site/wordmark";
import { brand, contactEmail, footerColumns } from "@/lib/site/constants";

export default function SiteFooter() {
    return (
        <footer className="bg-background py-16 lg:py-20">
            <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
                <div className="border-text grid gap-12 border-b-2 pb-14 md:grid-cols-[1.5fr_repeat(3,1fr)]">
                    <div>
                        <Wordmark className="text-3xl" />
                        <p className="text-text-secondary mt-4 max-w-xs text-sm">
                            {brand.tagline}
                        </p>
                        <p className="text-text-muted mt-6 font-mono text-[11px] tracking-widest uppercase">
                            {brand.est} — {brand.location}
                        </p>
                    </div>
                    {footerColumns.map((column) => (
                        <div key={column.title}>
                            <p className="text-text-muted font-mono text-[11px] tracking-widest uppercase">
                                {column.title}
                            </p>
                            <ul className="mt-5 flex flex-col gap-3">
                                {column.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-text-secondary hover:text-text text-sm transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-text-muted font-mono text-[11px] tracking-widest uppercase">
                        © 2026 {brand.name}. All rights reserved.
                    </p>
                    <p className="text-text-muted font-mono text-[11px] tracking-widest uppercase">
                        {contactEmail}
                    </p>
                </div>
            </div>
        </footer>
    );
}
