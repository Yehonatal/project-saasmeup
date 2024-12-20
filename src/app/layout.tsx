import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import cursorYouImage from "@/assets/images/cursor-you.svg";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

export const metadata: Metadata = {
    title: "Modern Design Tool Landing Page",
    description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" />
            </head>
            <body
                className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white `}
                style={{ cursor: `url(${cursorYouImage.src}), auto` }}
            >
                {children}
            </body>
        </html>
    );
}
