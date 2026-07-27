import "../styles/globals.css";
import type { Metadata, Viewport } from "next";
import Provider from "@/components/providers/provider";
import { display, sans, mono } from "@/public/fonts/font";

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    colorScheme: "light",
    themeColor: "#f0ede6",
};

export const metadata: Metadata = {
    title: "Oblique — Independent design & motion studio",
    description:
        "Oblique builds brand identities, interfaces, and motion systems for teams who treat movement as meaning.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${display.variable} ${sans.variable} ${mono.variable}`}
        >
            <body className="bg-background text-text font-body antialiased">
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
