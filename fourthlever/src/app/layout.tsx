import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fourth Lever | AI Infrastructure Agency",
  description:
    "We build, deploy, and manage AI systems for businesses that want results — not another tool to learn.",
  keywords: [
    "AI agency",
    "AI infrastructure",
    "managed AI services",
    "business automation",
  ],
  openGraph: {
    title: "Fourth Lever | AI Infrastructure Agency",
    description:
      "We build, deploy, and manage AI systems for businesses that want results.",
    url: "https://fourthlever.com",
    siteName: "Fourth Lever",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
